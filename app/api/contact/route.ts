import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function buildEmailHtml(data: Record<string, unknown>): string {
  const needs = Array.isArray(data.needs) && data.needs.length > 0
    ? (data.needs as string[]).join(', ')
    : '—'

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'DM Sans', Arial, sans-serif; color: #2C2C2C; background: #F8F5EF; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border: 1px solid rgba(201,169,110,0.3); border-radius: 6px; overflow: hidden; }
    .header { background: #1A3A6B; padding: 28px 32px; }
    .header h1 { color: #C9A96E; font-size: 22px; margin: 0; font-weight: 400; }
    .header p { color: rgba(248,245,239,0.6); font-size: 13px; margin: 4px 0 0; }
    .body { padding: 28px 32px; }
    .row { display: flex; padding: 10px 0; border-bottom: 1px solid rgba(26,58,107,0.07); }
    .row:last-child { border-bottom: none; }
    .label { width: 180px; flex-shrink: 0; font-size: 12px; font-weight: 500; color: #888; text-transform: uppercase; letter-spacing: 0.05em; padding-top: 1px; }
    .value { font-size: 14px; color: #2C2C2C; }
    .section-title { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A96E; margin: 20px 0 8px; }
    .message-box { background: #F8F5EF; border-left: 3px solid #C9A96E; padding: 12px 16px; font-size: 13px; color: #2C2C2C; line-height: 1.6; border-radius: 0 4px 4px 0; }
    .footer { background: #F8F5EF; padding: 16px 32px; font-size: 11px; color: #aaa; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Nouveau formulaire de contact</h1>
      <p>Reçu via dsihotel.fr · Langue : ${String(data.lang ?? 'fr').toUpperCase()}</p>
    </div>
    <div class="body">
      <p class="section-title">Contact</p>
      <div class="row"><span class="label">Prénom</span><span class="value">${data.firstName ?? '—'}</span></div>
      <div class="row"><span class="label">Nom</span><span class="value">${data.lastName ?? '—'}</span></div>
      <div class="row"><span class="label">Fonction</span><span class="value">${data.role ?? '—'}</span></div>
      <div class="row"><span class="label">Email</span><span class="value">${data.email ?? '—'}</span></div>
      <div class="row"><span class="label">Téléphone</span><span class="value">${data.phone ?? '—'}</span></div>

      <p class="section-title">Établissement</p>
      <div class="row"><span class="label">Nom</span><span class="value">${data.establishment ?? '—'}</span></div>
      <div class="row"><span class="label">Chambres</span><span class="value">${data.rooms ?? '—'}</span></div>
      <div class="row"><span class="label">Besoins</span><span class="value">${needs}</span></div>

      ${data.message ? `
      <p class="section-title">Message</p>
      <div class="message-box">${String(data.message).replace(/\n/g, '<br/>')}</div>
      ` : ''}
    </div>
    <div class="footer">DSI Hotel · support@dsihotel.com · +33 1 84 18 02 23</div>
  </div>
</body>
</html>
`
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    if (!process.env.RESEND_API_KEY) {
      console.warn('[Contact] RESEND_API_KEY not set — email not sent')
      return NextResponse.json({ ok: true, simulated: true })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'DSI Hotel <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL ?? 'support@dsihotel.com'],
      replyTo: String(data.email ?? ''),
      subject: `[DSI Hotel] Nouvelle demande — ${data.establishment ?? 'Inconnu'}`,
      html: buildEmailHtml(data),
    })

    if (error) {
      console.error('[Contact] Resend error:', error)
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Contact] Unexpected error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

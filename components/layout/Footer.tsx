'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

function WhiteToTransparentFilter({ id }: { id: string }) {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', overflow: 'hidden' }}>
      <defs>
        <filter id={id} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -1 -1 -1 3 0"
          />
        </filter>
      </defs>
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="bg-navy-dark border-t"
      style={{ borderTopColor: 'rgba(201,169,110,0.2)' }}
      aria-label="Pied de page"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <WhiteToTransparentFilter id="footer-logo-filter" />
            <Link href="/" aria-label="DSI Hotel — Accueil" className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dsi-logo-gold.png"
                alt="DSI Hotel"
                style={{
                  height: 48,
                  width: 'auto',
                  display: 'block',
                  filter: 'url(#footer-logo-filter)',
                  marginLeft: '-10px',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                }}
              />
            </Link>
            <p className="font-dm text-[13px] text-cream/50 leading-[1.7] mt-5 max-w-[200px]">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/company/dsihotel1234/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors duration-200" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-dm text-[11px] font-medium uppercase tracking-[0.15em] text-gold mb-5">{t.footer.solutionsLabel}</h3>
            <ul className="space-y-3">
              {t.footer.solutions.map((item) => (
                <li key={item}>
                  <Link href="/#services" className="font-dm text-[13px] text-cream/50 hover:text-cream/80 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="font-dm text-[11px] font-medium uppercase tracking-[0.15em] text-gold mb-5">{t.footer.aproposLabel}</h3>
            <ul className="space-y-3">
              {t.footer.apropos.map((item) => (
                <li key={item}>
                  <Link href="/#why-us" className="font-dm text-[13px] text-cream/50 hover:text-cream/80 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-dm text-[11px] font-medium uppercase tracking-[0.15em] text-gold mb-5">{t.footer.contactLabel}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} strokeWidth={1.5} className="text-gold-dim mt-0.5 shrink-0" />
                <span className="font-dm text-[13px] text-cream/50 leading-[1.6]">60 Rue François 1er<br />75008 Paris</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} strokeWidth={1.5} className="text-gold-dim shrink-0" />
                <a href="tel:+33184180223" className="font-dm text-[13px] text-cream/50 hover:text-cream/80 transition-colors duration-200">
                  +33 1 84 18 02 23
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} strokeWidth={1.5} className="text-gold-dim shrink-0" />
                <a href="mailto:support@dsihotel.com" className="font-dm text-[13px] text-cream/50 hover:text-cream/80 transition-colors duration-200">
                  support@dsihotel.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={13} strokeWidth={1.5} className="text-gold-dim mt-0.5 shrink-0" />
                <span className="font-dm text-[13px] text-cream/50 leading-[1.6] whitespace-pre-line">
                  {t.footer.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* SLA note */}
        <div className="mt-10 pt-6 border-t" style={{ borderTopColor: 'rgba(201,169,110,0.1)' }}>
          <p className="font-dm text-[11px] text-cream/25 leading-[1.6]">
            {t.footer.slaNote}
          </p>
        </div>

        {/* Bottom */}
        <div
          className="mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t"
          style={{ borderTopColor: 'rgba(201,169,110,0.1)' }}
        >
          <p className="font-dm text-[12px] text-cream/30">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="font-dm text-[12px] text-cream/30 hover:text-cream/60 transition-colors duration-200">
              {t.footer.legal}
            </Link>
            <Link href="/politique-de-confidentialite" className="font-dm text-[12px] text-cream/30 hover:text-cream/60 transition-colors duration-200">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

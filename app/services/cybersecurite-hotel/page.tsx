import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cybersécurité pour hôtels de luxe | DSI Hotel',
  description:
    'Cybersécurité hôtelière : pfSense, EDR Sophos, Entra ID + MFA, SIEM Azure Sentinel. Protection de vos systèmes, données clients et PMS.',
  alternates: {
    canonical: 'https://www.dsihotel.com/services/cybersecurite-hotel',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cybersécurité hôtelière',
  serviceType: 'Cybersécurité',
  provider: { '@id': 'https://www.dsihotel.com/#organization' },
  areaServed: { '@type': 'Place', name: 'Europe' },
  description:
    'pfSense, EDR Sophos, Entra ID + MFA, SIEM Azure Sentinel — sécurisation des systèmes IT hôteliers.',
  url: 'https://www.dsihotel.com/services/cybersecurite-hotel',
}

const faits = [
  { label: 'Pare-feu', value: 'pfSense, segmentation réseau, VLAN guest/staff/IoT' },
  { label: 'Endpoint', value: 'EDR Sophos sur l’ensemble du parc informatique' },
  { label: 'Identité', value: 'Microsoft Entra ID avec authentification multifacteur (MFA)' },
  { label: 'Supervision', value: 'SIEM Azure Sentinel, détection et réponse aux incidents' },
  { label: 'Conformité', value: 'RGPD, PCI-DSS, DORA' },
]

export default function CybersecuriteHotel() {
  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="bg-navy" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold/50" />
            <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-gold/70">
              Nos services
            </span>
          </div>
          <h1
            className="font-cormorant font-normal text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Cybersécurité pour <em className="text-gold not-italic">hôtels de luxe</em>
          </h1>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-20">
        <section aria-label="Faits clés" className="mb-16">
          <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
            Ce que couvre notre offre
          </h2>
          <div className="h-px bg-gold/20 mb-5" />
          <ul className="space-y-3 font-dm text-[14px] text-charcoal/70">
            {faits.map((f) => (
              <li key={f.label} className="flex gap-3">
                <strong className="text-charcoal/90 flex-shrink-0">{f.label} :</strong>
                <span>{f.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-12">
          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Pourquoi la cybersécurité hôtelière est spécifique
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Un hôtel expose simultanément un réseau invité ouvert, des postes de réception, des systèmes de
              paiement et un PMS hébergeant des données clients. DSI Hotel conçoit une architecture segmentée qui
              isole ces usages tout en garantissant la fluidité de l&apos;expérience client.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Notre approche
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Pare-feu pfSense et segmentation VLAN, protection des postes par EDR Sophos, gestion des identités via
              Microsoft Entra ID avec MFA obligatoire, et supervision continue via SIEM Azure Sentinel avec astreinte
              24/7 en cas d&apos;incident.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-dm text-[13px] text-navy/60 hover:text-navy transition-colors duration-200"
          >
            <span aria-hidden="true">←</span>
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-dm text-[13px] text-navy hover:text-gold transition-colors duration-200"
          >
            Demander un audit gratuit de votre infrastructure IT hôtelière
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

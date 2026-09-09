import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conformité PCI-DSS pour hôtels | DSI Hotel',
  description:
    'Mise en conformité PCI-DSS pour hôtels : audit, remédiation et sécurisation des flux de paiement. Accompagnement de bout en bout.',
  alternates: {
    canonical: 'https://www.dsihotel.com/services/pci-dss-hotel',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conformité PCI-DSS',
  serviceType: 'Conformité PCI-DSS',
  provider: { '@id': 'https://www.dsihotel.com/#organization' },
  areaServed: { '@type': 'Place', name: 'Europe' },
  description: 'Mise en conformité, audit, remédiation PCI-DSS pour hôtels.',
  url: 'https://www.dsihotel.com/services/pci-dss-hotel',
}

const faits = [
  { label: 'Audit', value: 'État des lieux de l’infrastructure de paiement existante' },
  { label: 'Remédiation', value: 'Plan d’actions et mise en œuvre des correctifs' },
  { label: 'Segmentation', value: 'Isolation réseau des flux de paiement (VLAN dédié)' },
  { label: 'Documentation', value: 'Constitution du dossier de conformité PCI-DSS' },
  { label: 'Suivi', value: 'Renouvellement annuel et veille réglementaire' },
]

export default function PciDssHotel() {
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
            Conformité <em className="text-gold not-italic">PCI-DSS</em> pour hôtels
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
              Pourquoi la conformité PCI-DSS est critique en hôtellerie
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Un établissement hôtelier traite quotidiennement des paiements par carte, à la réception comme au
              restaurant ou au spa. La norme PCI-DSS impose des exigences précises de sécurisation de ces flux,
              dont le non-respect expose l&apos;établissement à des sanctions et à un risque réputationnel.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Notre approche
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              DSI Hotel réalise l&apos;audit initial, isole les systèmes de paiement sur un réseau dédié, met en
              œuvre les correctifs nécessaires et accompagne l&apos;établissement jusqu&apos;à l&apos;obtention et
              au maintien de sa conformité PCI-DSS.
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

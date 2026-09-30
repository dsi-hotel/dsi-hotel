import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ouverture IT Clubtrotteur Paris, a Tribute Portfolio Hotel | DSI Hotel',
  description:
    "DSI Hotel a piloté l'ouverture informatique du Clubtrotteur Paris, a Tribute Portfolio Hotel (Marriott) à Gare du Nord : réseau, Wi-Fi, systèmes Marriott, sécurité et support J0.",
  alternates: {
    canonical: 'https://www.dsihotel.com/references/clubtrotteur-paris',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Ouverture IT du Clubtrotteur Paris, a Tribute Portfolio Hotel, par DSI Hotel",
  author: { '@type': 'Organization', name: 'DSI Hotel' },
  publisher: { '@id': 'https://www.dsihotel.com/#organization' },
  about: [
    { '@type': 'Thing', name: 'Ouverture informatique hôtel' },
    { '@type': 'Thing', name: 'Marriott Tribute Portfolio' },
    { '@type': 'Thing', name: 'Wi-Fi hôtelier' },
  ],
  datePublished: '2026-09-30',
  mainEntityOfPage: 'https://www.dsihotel.com/references/clubtrotteur-paris',
}

const faits = [
  { label: 'Client', value: 'Clubtrotteur Paris, a Tribute Portfolio Hotel — Marriott International' },
  { label: 'Lieu', value: 'Quartier Gare du Nord, Paris 10e' },
  { label: 'Capacité', value: '48 chambres, coffee shop & bar, salle de fitness' },
  { label: 'Mission', value: "Ouverture IT — ensemble du projet informatique" },
  { label: 'Livraison', value: 'Équipes opérationnelles dès le jour d\u2019ouverture' },
  { label: 'Standard', value: 'Standards technologiques Marriott' },
]

export default function ClubtrotteurParis() {
  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <div className="bg-navy" style={{ paddingTop: 120, paddingBottom: 72 }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold/50" />
            <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-gold/70">
              Étude de cas — Paris
            </span>
          </div>
          <h1
            className="font-cormorant font-normal text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Ouverture IT du <em className="text-gold not-italic">Clubtrotteur Paris</em>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-20">
        <section aria-label="Faits clés" className="mb-16">
          <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
            Faits clés
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
              Le contexte
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Clubtrotteur Paris, a Tribute Portfolio Hotel, est un nouvel hôtel lifestyle de 48 chambres de la
              collection Marriott, pensé comme un « camp de base » pour voyageurs au cœur du quartier Gare du Nord,
              entre Montmartre et le canal Saint-Martin. Pour son ouverture, l&apos;établissement a confié à DSI Hotel
              la conduite de l&apos;ensemble de son projet informatique.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              La mission réalisée par DSI Hotel
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              DSI Hotel a pris en charge l&apos;intégralité du volet IT : conception et configuration du
              réseau et des VLAN, déploiement du Wi-Fi clients et collaborateurs, intégration des systèmes et
              applications Marriott, sécurité (pare-feu, conformité PCI-DSS), installation du parc utilisateurs, puis
              accompagnement des équipes et support au jour de l&apos;ouverture.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Le résultat
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              L&apos;hôtel a ouvert ses portes avec une infrastructure conforme aux standards Marriott et des équipes
              pleinement opérationnelles dès le premier jour d&apos;exploitation.
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

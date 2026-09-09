import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ouverture IT Hôtel Métropole Genève | DSI Hotel',
  description:
    "Comment DSI Hotel a réalisé l'ouverture IT complète de l'Hôtel Métropole Genève (Palace 5★ Superior) : Wi-Fi 7, VLAN, Oracle OPERA, PCI-DSS, sans interruption.",
  alternates: {
    canonical: 'https://www.dsihotel.com/references/metropole-geneve',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Ouverture IT complète de l'Hôtel Métropole Genève par DSI Hotel",
  author: { '@type': 'Organization', name: 'DSI Hotel' },
  publisher: { '@id': 'https://www.dsihotel.com/#organization' },
  about: [
    { '@type': 'Thing', name: 'Wi-Fi 7' },
    { '@type': 'Thing', name: 'Oracle OPERA PMS' },
    { '@type': 'Thing', name: 'Conformité PCI-DSS' },
  ],
  datePublished: '2026-09-09',
  mainEntityOfPage: 'https://www.dsihotel.com/references/metropole-geneve',
}

const faits = [
  { label: 'Client', value: 'Hôtel Métropole Genève — Palace 5 étoiles Superior, fondé en 1854' },
  { label: 'Lieu', value: 'Rive gauche du lac Léman, Genève, Suisse' },
  { label: 'Capacité', value: '111 chambres et 16 suites' },
  { label: 'Mission', value: 'Ouverture IT complète' },
  { label: 'Livraison', value: 'Ouverture J0 sans interruption de service' },
  { label: 'Conformité', value: 'RGPD Suisse, PCI-DSS' },
]

export default function MetropoleGeneve() {
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
              Étude de cas — Suisse
            </span>
          </div>
          <h1
            className="font-cormorant font-normal text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Ouverture IT de l&apos;<em className="text-gold not-italic">Hôtel Métropole Genève</em>
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
              L&apos;Hôtel Métropole Genève, palace fondé en 1854 et seul établissement 5 étoiles Superior sur la rive
              gauche du lac Léman, a lancé un projet de rénovation informatique complet. DSI Hotel a été retenu pour
              concevoir et déployer l&apos;intégralité de son infrastructure IT.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              La mission réalisée par DSI Hotel
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              DSI Hotel a pris en charge le câblage structuré, la mise en place de VLAN sécurisés, le déploiement du
              Wi-Fi 7 chambre par chambre, l&apos;intégration du système de gestion hôtelière (PMS) Oracle OPERA, la
              vidéosurveillance IP et la mise en conformité PCI-DSS de l&apos;établissement.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Le résultat
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Le projet a permis une ouverture sans aucune interruption de service, avec des équipes hôtelières
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

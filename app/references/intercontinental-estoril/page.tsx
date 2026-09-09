import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Transition IT InterContinental Estoril | DSI Hotel',
  description:
    "Comment DSI Hotel accompagne la transition en franchise IHG de l'InterContinental Estoril : PMS, réseau, connectivité, IHG Tech Standards.",
  alternates: {
    canonical: 'https://www.dsihotel.com/references/intercontinental-estoril',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Transition IT en franchise IHG de l'InterContinental Estoril par DSI Hotel",
  author: { '@type': 'Organization', name: 'DSI Hotel' },
  publisher: { '@id': 'https://www.dsihotel.com/#organization' },
  about: [
    { '@type': 'Thing', name: 'Transition IHG' },
    { '@type': 'Thing', name: 'PMS' },
    { '@type': 'Thing', name: 'Réseau hôtelier' },
  ],
  datePublished: '2026-09-09',
  mainEntityOfPage: 'https://www.dsihotel.com/references/intercontinental-estoril',
}

const faits = [
  { label: 'Client', value: 'InterContinental Estoril — IHG, 5 étoiles, Côte d’Estoril' },
  { label: 'Lieu', value: 'Cascais, Portugal' },
  { label: 'Mission', value: 'Transition franchise IHG' },
  { label: 'Échéance', value: '1er juillet 2026' },
  { label: 'Périmètre', value: 'Support IT, PMS, réseau, connectivité' },
  { label: 'Standard', value: 'IHG Tech Standards' },
]

export default function IntercontinentalEstoril() {
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
              Étude de cas — Portugal
            </span>
          </div>
          <h1
            className="font-cormorant font-normal text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Transition IT de l&apos;<em className="text-gold not-italic">InterContinental Estoril</em>
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
              L&apos;InterContinental Estoril entame une nouvelle ère : son passage en franchise IHG le 1er juillet
              2026. Un jalon stratégique qui mobilise l&apos;ensemble des équipes techniques de cette adresse
              iconique de la Riviera portugaise.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              La mission réalisée par DSI Hotel
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              DSI Hotel intervient en renfort de la structure informatique en place : alignement des systèmes sur les
              exigences IHG, support à la migration du PMS, sécurisation des réseaux et déploiement des solutions de
              connectivité. Les équipes sont déjà sur le terrain.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Le résultat
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Déploiement en cours, avec un basculement franchisé prévu le 1er juillet 2026, en appui des équipes IT
              de l&apos;hôtel.
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

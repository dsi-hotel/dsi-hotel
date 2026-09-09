import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Maintenance informatique hôtel | DSI Hotel',
  description:
    "Maintenance informatique pour hôtels en France et en Suisse : parc IT, dépannage, réseau et Wi-Fi, cybersécurité, astreinte 24/7. Interlocuteur unique.",
  alternates: {
    canonical: 'https://www.dsihotel.com/services/maintenance-informatique-hotel',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Maintenance informatique hôtel',
  serviceType: 'Maintenance informatique hôtelière',
  provider: { '@id': 'https://www.dsihotel.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
  ],
  description:
    "Externalisation complète de la DSI d'un hôtel : parc informatique, dépannage, réseau, Wi-Fi, cybersécurité et astreinte 24/7.",
  url: 'https://www.dsihotel.com/services/maintenance-informatique-hotel',
}

const faits = [
  { label: 'Périmètre', value: 'Parc informatique, serveurs, réseau, Wi-Fi, PMS, sauvegardes' },
  { label: 'Intervention', value: "Moins d'une heure sur Paris pour les incidents critiques" },
  { label: 'Astreinte', value: '24h/24, 7j/7, 365 jours par an' },
  { label: 'Interlocuteur', value: 'Un référent unique dédié à votre établissement' },
  { label: 'Zone', value: 'France et Suisse' },
]

export default function MaintenanceInformatiqueHotel() {
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
            Maintenance <em className="text-gold not-italic">informatique</em> pour hôtels
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
              Pourquoi externaliser la maintenance informatique de votre hôtel
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Un hôtel dépend en permanence de son informatique : PMS pour la réception, Wi-Fi pour les clients,
              terminaux de paiement, badges, vidéosurveillance. DSI Hotel prend en charge cette maintenance de bout
              en bout, comme une direction des systèmes d&apos;information externalisée, pour que vos équipes
              n&apos;aient jamais à s&apos;en soucier.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Notre approche
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Gestion du parc informatique (inventaire, déploiement, supervision), dépannage sur ticket, téléphone ou
              intervention sur site, réseau Wi-Fi et LAN sécurisé, cybersécurité et sauvegardes, avec un rapport
              mensuel et un interlocuteur unique dédié à votre établissement.
            </p>
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85] mt-4">
              Le détail de nos offres spécifiques : {' '}
              <Link href="/services/cybersecurite-hotel" className="text-navy hover:text-gold underline underline-offset-2">
                cybersécurité
              </Link>
              , {' '}
              <Link href="/services/wifi-hotel" className="text-navy hover:text-gold underline underline-offset-2">
                réseau Wi-Fi
              </Link>
              {' '}et{' '}
              <Link href="/services/pci-dss-hotel" className="text-navy hover:text-gold underline underline-offset-2">
                conformité PCI-DSS
              </Link>
              .
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

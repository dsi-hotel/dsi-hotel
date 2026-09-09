import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wi-Fi 7 pour hôtels de luxe | DSI Hotel',
  description:
    'Déploiement Wi-Fi hôtelier Ubiquiti UniFi Wi-Fi 7 : SSID ségrégués guest/staff/IoT, VLAN, couverture chambre par chambre.',
  alternates: {
    canonical: 'https://www.dsihotel.com/services/wifi-hotel',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Réseau Wi-Fi & LAN hôtelier',
  serviceType: 'Réseau Wi-Fi & LAN',
  provider: { '@id': 'https://www.dsihotel.com/#organization' },
  areaServed: { '@type': 'Place', name: 'Europe' },
  description: 'Ubiquiti UniFi Wi-Fi 7, SSID ségrégués guest/staff/IoT, VLAN.',
  url: 'https://www.dsihotel.com/services/wifi-hotel',
}

const faits = [
  { label: 'Matériel', value: 'Points d’accès Ubiquiti UniFi Wi-Fi 7' },
  { label: 'Segmentation', value: 'SSID dédiés guest / staff / IoT, VLAN par usage' },
  { label: 'Couverture', value: 'Étude de couverture chambre par chambre et espaces communs' },
  { label: 'Câblage', value: 'Câblage structuré et supervision centralisée' },
  { label: 'Conformité', value: 'RGPD pour les données de connexion des clients' },
]

export default function WifiHotel() {
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
            Réseau <em className="text-gold not-italic">Wi-Fi 7</em> pour hôtels
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
              Un réseau pensé pour l&apos;hôtellerie
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              La connectivité est devenue un critère de satisfaction client au même titre que le confort de la
              chambre. DSI Hotel déploie des infrastructures Wi-Fi 7 dimensionnées pour l&apos;hôtellerie haut de
              gamme : haute densité d&apos;appareils, faible latence et couverture homogène du lobby aux étages.
            </p>
          </div>

          <div>
            <h2 className="font-cormorant font-normal text-navy mb-4" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
              Notre approche
            </h2>
            <div className="h-px bg-gold/20 mb-5" />
            <p className="font-dm text-[14px] text-charcoal/70 leading-[1.85]">
              Points d&apos;accès Ubiquiti UniFi Wi-Fi 7, réseaux séparés pour les clients, le personnel et les
              objets connectés (IoT), VLAN dédiés et câblage structuré pour garantir performance et sécurité sur
              l&apos;ensemble de l&apos;établissement.
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

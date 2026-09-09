import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'
import { faqItems } from '@/lib/data/faq'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DSI Hotel — MSP IT Boutique-hôtels, Chaînes Internationales, Etablissements de luxe et concepts indépendants sur la France & Suisse',
  description:
    'Infogérance IT spécialisée hôtellerie en Europe. Infrastructure, cybersécurité, Wi-Fi, PCI-DSS. Astreinte 24/7, SLA garanti.',
  keywords: [
    'infogérance hôtel',
    'maintenance informatique hôtel',
    'maintenance informatique hôtellerie',
    'prestataire informatique hôtel',
    'MSP IT Paris',
    'cybersécurité hôtellerie',
    'support informatique hôtel luxe',
    'DSI Hotel',
    'PCI-DSS hôtellerie',
  ],
  metadataBase: new URL('https://www.dsihotel.com'),
  alternates: {
    canonical: 'https://www.dsihotel.com',
  },
  authors: [{ name: 'DSI Hotel' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/dsi-icon.png',
    apple: '/dsi-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.dsihotel.com',
    siteName: 'DSI Hotel',
    title: 'DSI Hotel — MSP IT Hôtellerie Europe',
    description:
      'Infogérance IT spécialisée hôtellerie en Europe. Infrastructure, cybersécurité, Wi-Fi, PCI-DSS. Astreinte 24/7, SLA garanti.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'DSI Hotel — MSP IT Hôtellerie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSI Hotel — MSP IT Hôtellerie Europe',
    description: 'Infogérance IT spécialisée hôtellerie en Europe.',
  },
}

// 1) Identité de l'entreprise (ProfessionalService = LocalBusiness + services pro)
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.dsihotel.com/#organization',
  name: 'DSI Hotel',
  alternateName: 'DSI Hôtel',
  description:
    "Prestataire IT (MSP) spécialisé dans l'hôtellerie 4 et 5 étoiles en Europe : infogérance, cybersécurité, réseau Wi-Fi, conformité PCI-DSS, helpdesk 24/7.",
  url: 'https://www.dsihotel.com',
  logo: 'https://www.dsihotel.com/dsi-logo-gold.png',
  image: 'https://www.dsihotel.com/dsi-logo-gold.png',
  telephone: '+33184180223',
  email: 'contact@dsihotel.com',
  priceRange: '€€€',
  vatID: 'FR71519557854',
  taxID: '519557854',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '60 Rue François 1er',
    addressLocality: 'Paris',
    postalCode: '75008',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8745,
    longitude: 2.3021,
  },
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Portugal' },
    { '@type': 'Place', name: 'Europe' },
  ],
  knowsAbout: [
    'Infogérance hôtellerie',
    'Cybersécurité hôtelière',
    'Conformité PCI-DSS',
    'Réseau Wi-Fi hôtelier',
    'Oracle OPERA PMS',
    'RGPD',
    'DORA',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '19:00',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33184180223',
    contactType: 'customer support',
    availableLanguage: ['French', 'English'],
    areaServed: 'EU',
  },
  founder: {
    '@type': 'Person',
    name: 'Pascal Sanglier',
    sameAs: 'https://www.linkedin.com/in/pascal-sanglier-2b8016b2/',
  },
  sameAs: [
    'https://www.linkedin.com/company/dsihotel1234/',
    'https://www.crunchbase.com/organization/dsi-hotel',
  ],
}

// 2) Catalogue de services
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: "Infogérance IT pour l'hôtellerie de luxe",
  provider: { '@id': 'https://www.dsihotel.com/#organization' },
  areaServed: { '@type': 'Place', name: 'Europe' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services IT hôtellerie',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestion de parc informatique', description: 'Inventaire, déploiement, supervision via Intune, NinjaOne, MDM.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réseau Wi-Fi & LAN', description: 'Ubiquiti UniFi Wi-Fi 7, SSID ségrégués guest/staff/IoT, VLAN.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersécurité', description: 'pfSense, EDR Sophos, Entra ID + MFA, SIEM Azure Sentinel.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Helpdesk IT 24/7', description: 'Support ticket/téléphone/on-site, SLA 4h, astreinte 7j/7.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sauvegarde & continuité', description: 'Backup Veeam, réplication hors-site chiffrée, PRA, RTO garanti.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vidéosurveillance IP', description: 'Caméras IP HD, NVR redondant, rétention chiffrée, conformité RGPD.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conformité PCI-DSS', description: 'Mise en conformité, audit, remédiation pour hôtels.' } },
    ],
  },
}

// 3) FAQ — questions/réponses tenues à jour dans lib/data/faq.ts et rendues
// visiblement par <FaqSection> sur la home (le JSON-LD doit refléter du contenu visible)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream">
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

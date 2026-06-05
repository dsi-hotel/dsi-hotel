import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'

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
    'MSP IT Paris',
    'cybersécurité hôtellerie',
    'support informatique hôtel luxe',
    'DSI Hotel',
    'PCI-DSS hôtellerie',
  ],
  authors: [{ name: 'DSI Hotel' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/dsi-icon.png',
    apple: '/dsi-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dsihotel.fr',
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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espace Client — Portail IT DSI Hotel | Tickets, Projets & Documentation',
  description:
    'Accédez à votre espace client DSI Hotel : suivi des tickets d\'incidents, documentation technique, gestion de projets IT et galerie infrastructure. Réservé aux hôtels partenaires.',
  keywords: [
    'portail client DSI Hotel',
    'suivi tickets informatique hôtel',
    'espace client infogérance',
    'documentation IT hôtellerie',
    'gestion projets IT hôtel',
    'helpdesk hôtel portail',
  ],
  alternates: {
    canonical: 'https://www.dsihotel.com/portail',
  },
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.dsihotel.com/portail',
    siteName: 'DSI Hotel',
    title: 'Espace Client — Portail IT DSI Hotel',
    description: 'Suivi de tickets, documentation, projets IT et infrastructure. Réservé aux hôtels partenaires DSI Hotel.',
  },
}

export default function PortailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

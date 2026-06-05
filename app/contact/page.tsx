import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Demander un audit IT gratuit — DSI Hotel',
  description:
    'Audit de votre infrastructure IT hôtelière offert. Rapport personnalisé sous 48h. Sans engagement.',
}

export default function ContactPage() {
  return <ContactClient />
}

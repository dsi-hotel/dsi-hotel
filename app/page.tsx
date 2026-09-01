import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import SLAStrip from '@/components/sections/SLAStrip'
import Services from '@/components/sections/Services'
import TechLogos from '@/components/sections/TechLogos'
import WhyUs from '@/components/sections/WhyUs'
import Expertise from '@/components/sections/Expertise'
import ClientsSection from '@/components/sections/ClientsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import Testimonial from '@/components/sections/Testimonial'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'DSI Hotel — MSP IT Hôtellerie Luxe Paris | Infogérance & Cybersécurité',
  description:
    'Prestataire IT spécialisé hôtellerie 4 et 5 étoiles à Paris. Infrastructure, cybersécurité, Wi-Fi, helpdesk 24/7, conformité PCI-DSS. Intervention en moins d\'1h sur Paris.',
  keywords: [
    'prestataire informatique hôtel Paris',
    'infogérance hôtel luxe',
    'MSP IT hôtellerie Paris',
    'cybersécurité hôtel 5 étoiles',
    'support IT Palace Paris',
    'infogérance hôtellerie France',
    'PCI-DSS hôtel',
    'Wi-Fi hôtel Paris',
    'DSI Hotel',
    'helpdesk IT hôtel',
    'MSP hôtellerie luxe',
    'infrastructure IT hôtel Paris 8',
  ],
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services IT hôtellerie DSI Hotel',
  itemListElement: [
    { '@type': 'Service', position: 1, name: 'Gestion de Parc Informatique', provider: { '@type': 'LocalBusiness', name: 'DSI Hotel' } },
    { '@type': 'Service', position: 2, name: 'Réseau Wi-Fi & LAN', provider: { '@type': 'LocalBusiness', name: 'DSI Hotel' } },
    { '@type': 'Service', position: 3, name: 'Cybersécurité', provider: { '@type': 'LocalBusiness', name: 'DSI Hotel' } },
    { '@type': 'Service', position: 4, name: 'Helpdesk IT', provider: { '@type': 'LocalBusiness', name: 'DSI Hotel' } },
    { '@type': 'Service', position: 5, name: 'Sauvegarde & Continuité', provider: { '@type': 'LocalBusiness', name: 'DSI Hotel' } },
    { '@type': 'Service', position: 6, name: 'Vidéosurveillance IP', provider: { '@type': 'LocalBusiness', name: 'DSI Hotel' } },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Hero />
      <Ticker />
      <SLAStrip />
      <Services />
      <TechLogos />
      <WhyUs />
      <Expertise />
      <ClientsSection />
      <ProjectsSection />
      <Testimonial />
      <CTASection />
    </>
  )
}

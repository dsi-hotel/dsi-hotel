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

export default function HomePage() {
  return (
    <>
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

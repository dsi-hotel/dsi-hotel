import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { faqItems } from '@/lib/data/faq'

export default function FaqSection() {
  return (
    <section id="faq" className="bg-cream" style={{ padding: '100px 0' }} aria-label="Questions fréquentes">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <SectionLabel>Questions fréquentes</SectionLabel>
        <h2
          className="font-cormorant font-normal text-navy mt-4 mb-12 leading-[1.1]"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
        >
          Vos questions sur la <em className="text-gold not-italic">maintenance IT hôtelière</em>
        </h2>

        <div className="flex flex-col divide-y divide-gold/15">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-dm text-[15px] font-medium text-navy">
                {item.question}
                <span className="flex-shrink-0 text-gold text-[20px] leading-none group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="font-dm text-[14px] font-light text-charcoal/70 leading-[1.8] mt-4">
                {item.answer}
              </p>
              {item.question === "Qui contacter pour la maintenance informatique d'un hôtel ?" && (
                <Link
                  href="/services/maintenance-informatique-hotel"
                  className="inline-block font-dm text-[13px] text-navy hover:text-gold underline underline-offset-2 mt-2"
                >
                  En savoir plus sur notre offre de maintenance informatique hôtel →
                </Link>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

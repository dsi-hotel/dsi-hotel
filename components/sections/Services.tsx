'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { staggerFast, fadeUp, slideLeft, slideRight } from '@/lib/animations'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/data/services'
import { useLanguage } from '@/lib/i18n'

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  const translatedServices = services.map((s) => {
    const override = t.services.items.find((item) => item.id === s.id)
    return override ? { ...s, title: override.title, description: override.description, tags: [...override.tags] } : s
  })

  return (
    <section
      ref={ref}
      id="services"
      className="bg-navy"
      style={{ padding: '120px 0' }}
      aria-label="Nos services"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-4 max-w-[520px]"
          >
            <SectionLabel>{t.services.label}</SectionLabel>
            <h2 className="font-cormorant text-[52px] leading-[1.1] text-cream font-normal">
              {t.services.h2a}<br />
              <em className="text-gold not-italic">{t.services.h2b}</em>
            </h2>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-4 max-w-[340px]"
          >
            <p className="font-dm text-[15px] font-light text-cream/65 leading-[1.7]">
              {t.services.desc}
            </p>
            <Link
              href="/#services"
              className="font-dm text-[13px] text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1.5"
            >
              {t.services.all}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-gold/15"
        >
          {translatedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="border-r border-b border-gold/15"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

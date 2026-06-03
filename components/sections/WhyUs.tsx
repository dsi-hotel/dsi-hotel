'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BuildingIcon, MapPin, FileText } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, slideLeft, slideRight, stagger } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'

const icons = [BuildingIcon, MapPin, FileText]

function ProgressBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-dm text-[12px] font-normal text-cream/70">{label}</span>
        <span className="font-dm text-[12px] font-medium text-gold">{value}%</span>
      </div>
      <div className="h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          className="h-full rounded-full bg-gold"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="why-us"
      className="bg-charcoal"
      style={{ padding: '120px 0' }}
      aria-label="Pourquoi DSI Hotel"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 lg:items-center">
          {/* Left — Dashboard */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative flex-1 max-w-[520px]"
          >
            {/* Main card */}
            <div
              className="relative rounded-lg p-8"
              style={{
                background: '#1A3A6B',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="inline-block w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ backgroundColor: '#4CAF50' }}
                />
                <span className="font-dm text-[11px] uppercase tracking-[0.15em] text-gold">
                  {t.whyUs.reporting}
                </span>
              </div>
              <p className="font-dm text-[12px] text-cream/50 mb-8">
                {t.whyUs.location}
              </p>

              <div className="flex flex-col gap-5">
                <ProgressBar label={t.whyUs.progressUptime} value={99.7} delay={0.2} />
                <ProgressBar label={t.whyUs.progressTickets} value={100} delay={0.4} />
                <ProgressBar label={t.whyUs.progressWifi} value={98} delay={0.6} />
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -right-5 rounded-md p-5 animate-float"
              style={{ background: '#C9A96E' }}
            >
              <p className="font-cormorant text-[40px] text-navy leading-none">4h</p>
              <p className="font-dm text-[11px] uppercase tracking-[0.1em] text-navy mt-1">
                {t.whyUs.cardLabel}
              </p>
            </div>

            {/* Badge */}
            <div
              className="absolute top-[140px] -right-8 rounded-md px-4 py-3 flex items-center gap-2"
              style={{
                background: '#2C2C2C',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#4CAF50' }}
              />
              <span className="font-dm text-[12px] text-cream/70 whitespace-nowrap">
                {t.whyUs.badge}
              </span>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex-1 flex flex-col gap-6"
          >
            <SectionLabel>{t.whyUs.label}</SectionLabel>
            <h2
              className="font-cormorant font-normal leading-[1.1] text-cream"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
            >
              {t.whyUs.h2a}<br />
              <em className="text-gold not-italic">{t.whyUs.h2b}</em>
            </h2>
            <p className="font-dm text-[15px] font-light text-cream/65 leading-[1.7]">
              {t.whyUs.desc}
            </p>

            {/* Differentiators */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col gap-6 pt-2"
            >
              {t.whyUs.diffs.map((item, idx) => {
                const Icon = icons[idx]
                return (
                  <motion.div key={item.title} variants={fadeUp} className="flex gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ border: '1px solid rgba(201,169,110,0.4)' }}
                    >
                      <Icon size={15} strokeWidth={1.25} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-dm text-[15px] font-medium text-cream mb-1">
                        {item.title}
                      </p>
                      <p className="font-dm text-[13px] font-light text-cream/60 leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

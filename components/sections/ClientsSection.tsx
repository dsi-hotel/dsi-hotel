'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLanguage } from '@/lib/i18n'

const clients = [
  { name: 'Hilton', file: '/logos/hilton.png' },
  { name: 'Hyatt', file: '/logos/hyatt.png' },
  { name: 'IHG Hotels & Resorts', file: '/logos/ihg.png' },
  { name: 'Marriott International', file: '/logos/marriott.png' },
  { name: 'Radisson Hotel Group', file: '/logos/radisson.png' },
]

function LogoItem({ name, file }: typeof clients[number]) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center mx-14 group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={file}
        alt={`Logo ${name}`}
        style={{
          height: 72,
          width: 'auto',
          opacity: 0.55,
          transition: 'opacity 0.4s ease',
        }}
        onMouseOver={e => { e.currentTarget.style.opacity = '1' }}
        onMouseOut={e => { e.currentTarget.style.opacity = '0.55' }}
      />
    </div>
  )
}

export default function ClientsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="clients"
      style={{ backgroundColor: '#0F1114', padding: '100px 0', overflow: 'hidden' }}
      aria-label="Nos clients partenaires"
    >
      {/* Filtre SVG blanc → transparent */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <filter id="clients-logo-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 3 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <SectionLabel>{t.clients.label}</SectionLabel>
            <h2
              className="font-cormorant font-normal text-cream mt-4 leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
            >
              {t.clients.h2a}{' '}
              <em className="text-gold not-italic">{t.clients.h2b}</em>
            </h2>
          </div>
          <p className="font-dm text-[14px] font-light text-cream/45 max-w-[340px] leading-[1.7]">
            {t.clients.desc}
          </p>
        </motion.div>
      </div>

      {/* Gold separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16"
      >
        <div className="h-px bg-gold/20" />
      </motion.div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0F1114, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0F1114, transparent)' }}
        />

        {/* Scrolling track */}
        <div
          className="flex items-center py-4"
          style={{ animation: 'ticker 28s linear infinite' }}
        >
          {clients.map((client) => (
            <LogoItem key={client.name} {...client} />
          ))}
          {clients.map((client) => (
            <LogoItem key={`${client.name}-dup`} {...client} />
          ))}
        </div>
      </motion.div>

      {/* Gold separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 mt-16"
      >
        <div className="h-px bg-gold/20" />
      </motion.div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-dm text-[12px] text-cream/30">
          {t.clients.confidential}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          <p className="font-dm text-[12px] text-cream/30">
            {t.clients.zone}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

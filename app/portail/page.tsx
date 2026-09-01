'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { TicketCheck, BookOpen, FolderKanban, Camera, ArrowRight, ShieldCheck } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLanguage } from '@/lib/i18n'

const features = [
  {
    icon: TicketCheck,
    key: 'tickets' as const,
  },
  {
    icon: BookOpen,
    key: 'procedures' as const,
  },
  {
    icon: FolderKanban,
    key: 'projects' as const,
  },
  {
    icon: Camera,
    key: 'photos' as const,
  },
]

function FeatureCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof TicketCheck
  title: string
  desc: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-5 p-8 rounded-sm"
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(201,169,110,0.15)',
      }}
    >
      <div
        className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'rgba(201,169,110,0.1)' }}
      >
        <Icon size={20} strokeWidth={1.5} className="text-gold" />
      </div>
      <div>
        <h3 className="font-cormorant text-cream text-[20px] font-normal leading-snug mb-2">
          {title}
        </h3>
        <p className="font-dm text-[14px] font-light text-cream/55 leading-[1.75]">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function PortailPage() {
  const heroRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-10%' })
  const { t } = useLanguage()
  const p = t.portail

  return (
    <main style={{ backgroundColor: '#0A0C0F', minHeight: '100vh' }}>

      {/* Hero */}
      <section
        ref={heroRef}
        style={{ padding: '140px 0 80px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-dm text-[12px] text-cream/40 hover:text-cream/70 transition-colors mb-10 tracking-[0.1em] uppercase"
            >
              ← {p.breadcrumb}
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <SectionLabel>{p.label}</SectionLabel>
              <h1
                className="font-cormorant font-normal text-cream mt-5 leading-[1.05]"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
              >
                {p.titleA}{' '}
                <em className="text-gold not-italic">{p.titleB}</em>
              </h1>
              <p className="font-dm text-[15px] font-light text-cream/55 leading-[1.8] mt-6 max-w-[460px]">
                {p.subtitle}
              </p>
            </motion.div>

            {/* Transparency badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col gap-4"
            >
              {[p.badge1, p.badge2, p.badge3].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-sm"
                  style={{
                    backgroundColor: 'rgba(201,169,110,0.06)',
                    border: '1px solid rgba(201,169,110,0.15)',
                  }}
                >
                  <ShieldCheck size={18} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                  <p className="font-dm text-[13px] text-cream/75">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h2
              className="font-cormorant font-normal text-cream leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              {p.featuresTitle}
            </h2>
            <p className="font-dm text-[14px] font-light text-cream/45 mt-3 max-w-[500px] leading-[1.7]">
              {p.featuresDesc}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <FeatureCard
                key={f.key}
                icon={f.icon}
                title={p.features[f.key].title}
                desc={p.features[f.key].desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div ref={ctaRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-10 md:p-14 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-8"
              style={{
                backgroundColor: 'rgba(201,169,110,0.06)',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              <div>
                <p className="font-dm text-[11px] font-medium tracking-[0.18em] uppercase text-gold/70 mb-3">
                  {p.ctaEyebrow}
                </p>
                <h2
                  className="font-cormorant font-normal text-cream leading-[1.1]"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
                >
                  {p.ctaTitle}
                </h2>
                <p className="font-dm text-[14px] font-light text-cream/50 mt-3 max-w-[440px] leading-[1.7]">
                  {p.ctaDesc}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy rounded-sm text-[12px] font-medium uppercase tracking-[0.1em] hover:bg-gold-light transition-colors whitespace-nowrap flex-shrink-0"
              >
                {p.ctaBtn}
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}

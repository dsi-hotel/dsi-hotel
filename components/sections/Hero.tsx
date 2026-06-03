'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const { t } = useLanguage()

  const stats = [
    { value: '99,9%', label: t.hero.statUptime, delay: 0.3, lgOffset: 'lg:ml-0' },
    { value: '< 1h', label: t.hero.statResponse, delay: 0.45, lgOffset: 'lg:ml-6' },
    { value: '24/7', label: t.hero.statSupport, delay: 0.6, lgOffset: 'lg:ml-12' },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
          alt="Hôtel de luxe Paris la nuit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,22,50,0.88) 0%, rgba(10,22,50,0.55) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full pt-24 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 max-w-[600px]">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-gold flex-shrink-0" />
                <span className="font-dm text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  {t.hero.eyebrow}
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={fadeUp}
                className="font-cormorant leading-[1.05]"
                style={{ fontSize: 'clamp(42px, 5.5vw, 72px)' }}
              >
                <span className="text-cream">{t.hero.title1}</span>
                <span className="text-gold italic">{t.hero.title2}</span>
                <br />
                <span className="text-cream">{t.hero.title3}</span>
                <span className="text-gold italic">{t.hero.title4}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="font-dm text-[15px] font-light text-cream/65 max-w-[480px] leading-[1.7]"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy rounded-sm text-[13px] font-medium uppercase tracking-[0.08em] hover:bg-gold-light transition-colors duration-200"
                >
                  {t.hero.ctaAudit}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 font-dm text-[13px] font-normal text-cream/80 hover:text-cream transition-colors duration-200 group"
                >
                  {t.hero.ctaServices}
                  <ChevronRight
                    size={14}
                    strokeWidth={1.5}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col gap-4 lg:items-end">
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                className={`bg-white/5 border border-gold/30 backdrop-blur-[10px] rounded-sm p-6 min-w-[200px] ${stat.lgOffset}`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: stat.delay, duration: 0.6 }}
              >
                <p className="font-cormorant text-[44px] text-gold leading-none mb-1">{stat.value}</p>
                <p className="font-dm text-[12px] text-cream/60 leading-[1.5]">{stat.label}<span className="ml-0.5">*</span></p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-dm text-[11px] uppercase tracking-[0.15em] text-cream/40">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} strokeWidth={1.5} className="text-cream/40" />
        </motion.div>
      </div>
    </section>
  )
}

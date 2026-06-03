'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { slideLeft, slideRight } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'

export default function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      className="bg-gold relative overflow-hidden"
      style={{ padding: '96px 0' }}
      aria-label="Demande d'audit"
    >
      {/* Subtle texture lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(26,58,107,0.04) 0px, rgba(26,58,107,0.04) 1px, transparent 1px, transparent 80px)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-[520px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-navy/40" />
              <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-navy/60">
                {t.cta.eyebrow}
              </span>
            </div>

            <h2
              className="font-cormorant font-normal text-navy leading-[1.05]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}
            >
              {t.cta.h2a}
              <br />
              <em className="not-italic">{t.cta.h2b}</em>
            </h2>

            <p className="font-dm text-[14px] text-navy/60 leading-[1.75] mt-5 max-w-[400px]">
              {t.cta.desc}
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-cream rounded-sm text-[13px] font-medium uppercase tracking-[0.1em] hover:bg-navy-mid transition-colors duration-200"
            >
              {t.cta.btn}
              <span aria-hidden="true" style={{ fontSize: 16 }}>→</span>
            </Link>

            <div className="flex flex-col items-start lg:items-end gap-1.5">
              <p className="font-dm text-[13px] text-navy/55">
                +33 1 84 18 02 23
              </p>
              <p className="font-dm text-[13px] text-navy/55">
                support@dsihotel.com
              </p>
            </div>

            {/* Trust signal */}
            <div
              className="flex items-center gap-2 pt-2 border-t border-navy/15"
              style={{ minWidth: 240 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-navy/40 flex-shrink-0" />
              <span className="font-dm text-[11px] text-navy/45 uppercase tracking-[0.12em]">
                {t.cta.trust}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, fadeIn } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'

export default function Testimonial() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="testimonial"
      className="bg-navy-dark"
      style={{ padding: '120px 0' }}
      aria-label="Témoignages clients"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-8"
        >
          <SectionLabel centered>{t.testimonial.label}</SectionLabel>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-[800px] mx-auto"
        >
          <blockquote
            className="relative"
            style={{
              borderLeft: '3px solid #C9A96E',
              paddingLeft: '40px',
            }}
          >
            <p
              className="font-cormorant italic leading-[1.4] text-cream"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
            >
              &ldquo;{t.testimonial.quote}&rdquo;
            </p>

            <footer className="mt-8">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-navy font-dm font-medium text-[14px] flex-shrink-0"
                  style={{ background: '#C9A96E' }}
                  aria-hidden="true"
                >
                  DO
                </div>
                <div>
                  <p className="font-dm text-[12px] font-medium text-gold tracking-[0.1em] uppercase">
                    {t.testimonial.role}
                  </p>
                  <p className="font-dm text-[12px] text-cream/50">
                    {t.testimonial.location}
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>

          {/* Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-1 mt-8 pl-[43px]"
            aria-label="5 étoiles sur 5"
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="#C9A96E"
                aria-hidden="true"
              >
                <path d="M7 0l1.763 5.427H14L9.618 8.782l1.763 5.427L7 10.854l-4.381 3.355 1.763-5.427L0 5.427h5.237z" />
              </svg>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

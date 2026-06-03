'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, Cloud, Activity, Grid } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'

const iconMap: Record<string, React.ElementType> = {
  database: Database,
  cloud: Cloud,
  activity: Activity,
  grid: Grid,
}

const iconKeys = ['database', 'shield', 'lock', 'grid']

export default function Expertise() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="expertise"
      className="bg-navy hex-bg"
      style={{ padding: '100px 0' }}
      aria-label="Notre expertise technologique"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-[48px] font-normal text-cream leading-[1.1]">
            {t.expertise.h2a}{' '}
            <em className="text-gold not-italic">{t.expertise.h2b}</em>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {t.expertise.items.map((item, idx) => {
            const Icon = iconMap[iconKeys[idx]] ?? Database
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-4 group"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{
                    border: '1px solid rgba(201,169,110,0.25)',
                    backgroundColor: 'rgba(201,169,110,0.05)',
                  }}
                >
                  <Icon
                    size={48}
                    strokeWidth={1}
                    className="text-gold group-hover:text-gold-light transition-colors duration-200"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-cormorant text-[20px] font-normal text-cream mb-1">
                    {item.name}
                  </h3>
                  <p className="font-dm text-[12px] text-cream/50 mb-2">{item.subtitle}</p>
                  <p className="font-dm text-[11px] uppercase tracking-[0.12em] text-gold-dim">
                    {item.tags}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

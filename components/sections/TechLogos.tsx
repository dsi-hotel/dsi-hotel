'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLanguage } from '@/lib/i18n'

const logos = [
  { name: 'NinjaOne',    file: '/logos/ninjaone.png'  },
  { name: 'Freshdesk',   file: '/logos/freshdesk.png' },
  { name: 'Sophos',      file: '/logos/sophos.png'    },
  { name: 'Veeam',       file: '/logos/veeam.png'     },
  { name: 'VMware',      file: '/logos/vmware.png'    },
  { name: 'Microsoft',   file: '/logos/microsoft.png' },
]

interface LogoCellProps {
  name: string
  file: string
  index: number
  inView: boolean
}

function LogoCell({ name, file, index, inView }: LogoCellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex items-center justify-center px-8 py-6"
      style={{ flex: '1 1 0%', minWidth: 0 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={file}
        alt={`Logo ${name}`}
        style={{
          height: 96,
          width: 'auto',
          maxWidth: 280,
          objectFit: 'contain',
          filter: 'grayscale(100%) opacity(30%)',
          transition: 'filter 0.35s ease',
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%) opacity(90%)'
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%) opacity(30%)'
        }}
      />
    </motion.div>
  )
}

export default function TechLogos() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="technologies"
      style={{ backgroundColor: '#FFFFFF', padding: '48px 0' }}
      aria-label="Nos partenaires technologiques"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <SectionLabel centered>{t.tech.label}</SectionLabel>
        </motion.div>

        <div
          className="flex items-stretch"
          style={{
            borderTop: '1px solid rgba(26,58,107,0.08)',
            borderBottom: '1px solid rgba(26,58,107,0.08)',
          }}
        >
          {logos.map((logo, i) => (
            <LogoCell key={logo.name} {...logo} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

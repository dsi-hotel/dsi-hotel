'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const missions = [
  {
    name: 'InterContinental Estoril',
    brand: 'IHG · 5 étoiles · Côte d\'Estoril, Cascais',
    quote: 'Une adresse iconique de la Riviera portugaise. Une transition IT sans faille.',
    description:
      "L'InterContinental Estoril entame une nouvelle ère : son passage en franchise IHG le 1er juillet 2026. Un jalon stratégique qui mobilise l'ensemble des équipes techniques de l'établissement.\n\nDSI Hotel intervient en renfort de la structure informatique en place : alignement des systèmes sur les exigences IHG, support à la migration du PMS, sécurisation des réseaux et déploiement des solutions de connectivité. Les équipes sont déjà sur le terrain.",
    status: 'Déploiement en cours · Basculement franchisé prévu le 1er juillet 2026 — en appui des équipes IT de l\'hôtel.',
    details: [
      { label: 'Type de mission', value: 'Transition franchise IHG' },
      { label: 'Échéance', value: '1er juillet 2026' },
      { label: 'Périmètre', value: 'Support IT, PMS, réseau, connectivité' },
      { label: 'Standard', value: 'IHG Tech Standards' },
    ],
  },
]

export default function MissionsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      id="missions"
      style={{ backgroundColor: '#F8F5EF', padding: '100px 0' }}
      aria-label="Missions en cours"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel>Missions en cours</SectionLabel>
          <h2
            className="font-cormorant font-normal text-navy mt-4 leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
          >
            Sur le terrain,{' '}
            <em className="text-gold not-italic">aujourd'hui</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              style={{
                background: '#fff',
                border: '1px solid rgba(201,169,110,0.25)',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              {/* Top bar */}
              <div style={{ background: '#1A3A6B', padding: '28px 36px' }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3
                      className="font-cormorant font-normal text-cream leading-tight"
                      style={{ fontSize: 'clamp(22px, 2.2vw, 30px)' }}
                    >
                      {mission.name}
                    </h3>
                    <p className="font-dm text-[13px] text-cream/50 mt-1">{mission.brand}</p>
                  </div>
                  {/* Status badge */}
                  <div
                    className="flex items-center gap-2 self-start md:self-auto"
                    style={{
                      background: 'rgba(201,169,110,0.15)',
                      border: '1px solid rgba(201,169,110,0.4)',
                      borderRadius: 4,
                      padding: '6px 14px',
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: '#C9A96E',
                        display: 'inline-block',
                        flexShrink: 0,
                        animation: 'pulse 2s ease-in-out infinite',
                      }}
                    />
                    <span className="font-dm text-[11px] font-medium text-gold uppercase tracking-widest">
                      En cours
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p
                  className="font-cormorant italic text-gold mt-5 leading-snug"
                  style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}
                >
                  &laquo;&nbsp;{mission.quote}&nbsp;&raquo;
                </p>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-[1fr_260px] gap-0">
                {/* Left — description */}
                <div style={{ padding: '32px 36px', borderRight: '1px solid rgba(201,169,110,0.15)' }}>
                  {mission.description.split('\n\n').map((para, j) => (
                    <p
                      key={j}
                      className="font-dm text-[14px] text-navy/70 leading-[1.75]"
                      style={{ marginBottom: j < mission.description.split('\n\n').length - 1 ? 16 : 0 }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Status line */}
                  <div
                    className="flex items-start gap-3 mt-6"
                    style={{
                      background: 'rgba(201,169,110,0.06)',
                      borderLeft: '3px solid #C9A96E',
                      borderRadius: '0 4px 4px 0',
                      padding: '10px 14px',
                    }}
                  >
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    <p className="font-dm text-[12px] text-navy/60 leading-[1.6]">{mission.status}</p>
                  </div>
                </div>

                {/* Right — details */}
                <div style={{ padding: '32px 28px' }}>
                  <p className="font-dm text-[10px] font-semibold uppercase tracking-[0.12em] text-gold mb-4">
                    Détails de la mission
                  </p>
                  <div className="flex flex-col gap-4">
                    {mission.details.map((d) => (
                      <div key={d.label} style={{ borderBottom: '1px solid rgba(26,58,107,0.07)', paddingBottom: 12 }}>
                        <p className="font-dm text-[10px] uppercase tracking-wider text-navy/40 mb-1">{d.label}</p>
                        <p className="font-dm text-[13px] text-navy font-medium">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

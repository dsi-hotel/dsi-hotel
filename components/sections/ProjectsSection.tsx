'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useLanguage } from '@/lib/i18n'

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section
      ref={ref}
      id="projets"
      style={{ backgroundColor: '#0A0C0F', padding: '100px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <SectionLabel>{p.label}</SectionLabel>
            <h2
              className="font-cormorant font-normal text-cream mt-4 leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
            >
              {p.h2a}{' '}
              <em className="text-gold not-italic">{p.h2b}</em>
            </h2>
          </div>
          <p className="font-dm text-[14px] font-light text-cream/45 max-w-[340px] leading-[1.7]">
            {p.desc}
          </p>
        </motion.div>

        {/* Gold separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="h-px bg-gold/20" />
        </motion.div>

        {/* Project card — Métropole Genève */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start"
        >
          {/* Left — identity */}
          <div className="flex flex-col gap-6">
            {/* Badge pays */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇭</span>
              <span className="font-dm text-[12px] font-medium tracking-[0.15em] uppercase text-gold/80">
                {p.card.country}
              </span>
            </div>

            <div>
              <p className="font-cormorant text-cream text-[22px] font-normal leading-snug">
                {p.card.hotel}
              </p>
              <p className="font-dm text-[13px] text-cream/40 mt-1">{p.card.stars}</p>
            </div>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-2">
              {p.card.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="font-dm text-[11px] font-medium tracking-[0.1em] uppercase px-3 py-1 border border-gold/20 text-gold/70 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* KPIs */}
            <div className="flex flex-col gap-3 pt-2">
              {p.card.kpis.map((kpi: { label: string; value: string }) => (
                <div key={kpi.label} className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-dm text-[12px] text-cream/40">{kpi.label}</span>
                  <span className="font-dm text-[12px] font-medium text-cream/80">{kpi.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — storytelling */}
          <div className="flex flex-col gap-8">
            {/* Pull quote */}
            <p
              className="font-cormorant font-normal text-cream/90 leading-snug"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              {p.card.pullQuote}
            </p>

            <div className="h-px bg-gold/15" />

            {/* Body */}
            <p className="font-dm text-[15px] font-light text-cream/60 leading-[1.8]">
              {p.card.body}
            </p>

            {/* Outcome strip */}
            <div
              className="flex items-start gap-4 p-5 rounded-sm"
              style={{ backgroundColor: 'rgba(190,155,90,0.06)', border: '1px solid rgba(190,155,90,0.15)' }}
            >
              <span className="text-gold mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-dm text-[13px] font-light text-cream/70 leading-[1.7]">
                {p.card.outcome}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-16"
        >
          <div className="h-px bg-gold/15" />
        </motion.div>

        {/* Project card — InterContinental Estoril */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start"
        >
          {/* Left — identity */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇵🇹</span>
              <span className="font-dm text-[12px] font-medium tracking-[0.15em] uppercase text-gold/80">
                Cascais, Portugal
              </span>
            </div>

            <div>
              <p className="font-cormorant text-cream text-[22px] font-normal leading-snug">
                InterContinental Estoril
              </p>
              <p className="font-dm text-[13px] text-cream/40 mt-1">IHG · 5 étoiles · Côte d&apos;Estoril</p>
            </div>

            {/* Badge en cours */}
            <div
              className="flex items-center gap-2 self-start"
              style={{
                background: 'rgba(201,169,110,0.1)',
                border: '1px solid rgba(201,169,110,0.3)',
                borderRadius: 4,
                padding: '5px 12px',
              }}
            >
              <span
                style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#C9A96E', display: 'inline-block', flexShrink: 0,
                }}
              />
              <span className="font-dm text-[10px] font-medium text-gold uppercase tracking-widest">
                En cours
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Transition IHG', 'PMS', 'Réseau', 'Connectivité'].map((tag) => (
                <span
                  key={tag}
                  className="font-dm text-[11px] font-medium tracking-[0.1em] uppercase px-3 py-1 border border-gold/20 text-gold/70 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* KPIs */}
            <div className="flex flex-col gap-3 pt-2">
              {[
                { label: 'Type de mission', value: 'Transition franchise IHG' },
                { label: 'Échéance', value: '1er juillet 2026' },
                { label: 'Périmètre', value: 'Support IT, PMS, réseau, connectivité' },
                { label: 'Standard', value: 'IHG Tech Standards' },
              ].map((kpi) => (
                <div key={kpi.label} className="flex items-start justify-between border-b border-white/5 pb-3 gap-4">
                  <span className="font-dm text-[12px] text-cream/40 flex-shrink-0">{kpi.label}</span>
                  <span className="font-dm text-[12px] font-medium text-cream/80 text-right">{kpi.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — storytelling */}
          <div className="flex flex-col gap-8">
            <p
              className="font-cormorant font-normal text-cream/90 leading-snug"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              Une adresse iconique de la Riviera portugaise. Une transition IT sans faille.
            </p>

            <div className="h-px bg-gold/15" />

            <div className="flex flex-col gap-4">
              <p className="font-dm text-[15px] font-light text-cream/60 leading-[1.8]">
                L&apos;InterContinental Estoril entame une nouvelle ère : son passage en franchise IHG le 1er juillet 2026. Un jalon stratégique qui mobilise l&apos;ensemble des équipes techniques de l&apos;établissement.
              </p>
              <p className="font-dm text-[15px] font-light text-cream/60 leading-[1.8]">
                DSI Hotel intervient en renfort de la structure informatique en place : alignement des systèmes sur les exigences IHG, support à la migration du PMS, sécurisation des réseaux et déploiement des solutions de connectivité. Les équipes sont déjà sur le terrain.
              </p>
            </div>

            {/* Status strip */}
            <div
              className="flex items-start gap-4 p-5 rounded-sm"
              style={{ backgroundColor: 'rgba(190,155,90,0.06)', border: '1px solid rgba(190,155,90,0.15)' }}
            >
              <span className="text-gold mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-dm text-[13px] font-light text-cream/70 leading-[1.7]">
                Déploiement en cours · Basculement franchisé prévu le 1er juillet 2026 — en appui des équipes IT de l&apos;hôtel.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="h-px bg-gold/20 w-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="font-dm text-[12px] text-cream/30 mt-6"
        >
          {p.confidential}
        </motion.p>

      </div>
    </section>
  )
}

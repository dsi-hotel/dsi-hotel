'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Timer, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

interface MetricProps {
  icon: React.ElementType
  value: string
  label: string
  animate?: boolean
  target?: number
  suffix?: string
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function Metric({ icon: Icon, value, label, animate, target, suffix }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const count = useCountUp(target ?? 0, 1500, inView && (animate ?? false))

  const displayValue = animate && target !== undefined
    ? `${count % 1 === 0 ? count : count.toFixed(1)}${suffix ?? ''}`
    : value

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3 px-8">
      <Icon size={28} strokeWidth={1.25} className="text-gold" aria-hidden="true" />
      <motion.p
        className="font-cormorant text-[52px] text-gold leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        aria-label={value}
      >
        {displayValue}
      </motion.p>
      <p className="font-dm text-[13px] text-cream/60 leading-[1.5]">{label}<span className="ml-0.5">*</span></p>
    </div>
  )
}

export default function SLAStrip() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      id="sla"
      className="bg-navy-dark"
      style={{ padding: '64px 48px' }}
      aria-label="Nos engagements SLA"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
          <Metric
            icon={ShieldCheck}
            value="99,9%"
            label={t.sla.uptime}
            animate
            target={99.9}
            suffix="%"
          />
          <Metric
            icon={Timer}
            value="< 1h"
            label={t.sla.intervention}
          />
          <Metric
            icon={Clock}
            value="24/7/365"
            label={t.sla.supervision}
          />
        </div>
      </div>
    </section>
  )
}

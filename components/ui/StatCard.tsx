'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface StatCardProps {
  value: string
  label: string
  delay?: number
  offset?: number
}

export default function StatCard({ value, label, delay = 0, offset = 0 }: StatCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.6 }}
      style={{ marginLeft: offset }}
      className="bg-white/5 border border-gold/30 backdrop-blur-[10px] rounded-sm p-6 min-w-[200px]"
    >
      <p
        className="font-cormorant text-[44px] text-gold leading-none mb-1"
        aria-label={value}
      >
        {value}
      </p>
      <p className="font-dm text-[12px] text-cream/60 leading-[1.5]">{label}</p>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Server,
  Wifi,
  Shield,
  Camera,
  Monitor,
  HardDrive,
} from 'lucide-react'
import type { Service } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  wifi: Wifi,
  shield: Shield,
  camera: Camera,
  monitor: Monitor,
  harddrive: HardDrive,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Server

  return (
    <motion.div
      className="group relative flex flex-col gap-5 p-8 overflow-hidden cursor-default h-full"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Gold bar top */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gold w-full origin-left"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1, transition: { duration: 0.4, ease: 'easeOut' } },
        }}
      />

      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-navy-mid"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.3 } },
        }}
      />

      <div className="relative z-10">
        {/* Number */}
        <span className="font-cormorant italic text-[22px] text-gold-dim">
          {service.number}
        </span>

        {/* Icon */}
        <motion.div
          className="mt-4 mb-5"
          variants={{
            rest: { rotate: 0, scale: 1 },
            hover: {
              rotate: 5,
              scale: 1.05,
              transition: { type: 'spring', stiffness: 300, damping: 30 },
            },
          }}
        >
          <Icon
            size={40}
            strokeWidth={1.25}
            className="text-gold"
            aria-hidden="true"
          />
        </motion.div>

        {/* Title */}
        <h3 className="font-cormorant text-[23px] font-normal text-cream leading-tight mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-dm text-[13px] text-cream/65 leading-[1.7] mb-5">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-dm font-medium uppercase tracking-[0.12em] text-gold-dim border border-gold/20 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

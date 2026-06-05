'use client'

import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
  centered?: boolean
}

export default function SectionLabel({
  children,
  className,
  light = false,
  centered = false,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'section-label-trait text-[11px] font-medium uppercase tracking-[0.15em]',
        light ? 'text-gold' : 'text-gold',
        centered && 'justify-center',
        className
      )}
    >
      {children}
    </span>
  )
}

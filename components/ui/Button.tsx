'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost' | 'dark' | 'gold'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-navy border border-gold hover:bg-gold-light hover:border-gold-light',
  gold:
    'bg-gold text-navy border border-gold hover:bg-gold-light hover:border-gold-light',
  dark:
    'bg-navy text-cream border border-navy hover:bg-navy-mid hover:border-navy-mid',
  ghost:
    'bg-transparent text-cream border border-cream/40 hover:bg-cream/10',
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled,
  fullWidth,
  external,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2',
    'px-8 py-3.5 rounded-sm',
    'text-[13px] font-medium uppercase tracking-[0.08em]',
    'transition-all duration-200',
    'hover:-translate-y-px',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0',
    variants[variant],
    fullWidth && 'w-full',
    className
  )

  if (href) {
    return external ? (
      <a href={href} className={base} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      whileHover={disabled ? {} : { scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.button>
  )
}

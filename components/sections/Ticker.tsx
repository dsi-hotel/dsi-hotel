'use client'

import { useLanguage } from '@/lib/i18n'

const separator = (
  <span className="mx-6 opacity-50" aria-hidden="true">
    ✦
  </span>
)

export default function Ticker() {
  const { t } = useLanguage()

  const content = t.ticker.map((item, i) => (
    <span key={i} className="whitespace-nowrap">
      {item}
      {separator}
    </span>
  ))

  return (
    <div
      className="overflow-hidden bg-gold"
      style={{ height: '44px' }}
      aria-label="Services DSI Hotel"
      role="marquee"
    >
      <div
        className="flex items-center h-full animate-ticker-slow md:animate-ticker"
        style={{ width: 'max-content' }}
      >
        <div className="flex items-center font-dm text-[11px] font-medium uppercase tracking-[0.15em] text-navy">
          {content}
        </div>
        <div className="flex items-center font-dm text-[11px] font-medium uppercase tracking-[0.15em] text-navy" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  )
}

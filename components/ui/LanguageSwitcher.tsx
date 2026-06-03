'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage, type Lang } from '@/lib/i18n'

const langs: { code: Lang; flagSrc: string; full: string }[] = [
  { code: 'fr', flagSrc: 'https://flagcdn.com/24x18/fr.png', full: 'Français' },
  { code: 'en', flagSrc: 'https://flagcdn.com/24x18/gb.png', full: 'English' },
  { code: 'es', flagSrc: 'https://flagcdn.com/24x18/es.png', full: 'Español' },
]

function Flag({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={20}
      height={15}
      style={{ display: 'inline-block', borderRadius: 2, flexShrink: 0 }}
    />
  )
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = langs.find((l) => l.code === lang)!

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative" aria-label="Changer de langue">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-sm transition-all duration-200"
        style={{
          border: '1px solid rgba(201,169,110,0.3)',
          backgroundColor: open ? 'rgba(201,169,110,0.12)' : 'transparent',
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag src={current.flagSrc} alt={current.full} />
        <ChevronDown
          size={11}
          strokeWidth={2}
          className="text-gold transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 rounded-sm overflow-hidden z-[100]"
          style={{
            backgroundColor: 'rgba(26,58,107,0.98)',
            border: '1px solid rgba(201,169,110,0.2)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            minWidth: 150,
          }}
          role="listbox"
        >
          {langs.map(({ code, flagSrc, full }) => {
            const active = lang === code
            return (
              <button
                key={code}
                role="option"
                aria-selected={active}
                onClick={() => { setLang(code); setOpen(false) }}
                className="w-full flex items-center gap-3 px-4 py-3 font-dm text-[13px] transition-colors duration-150"
                style={{
                  color: active ? '#C9A96E' : 'rgba(248,245,239,0.7)',
                  backgroundColor: active ? 'rgba(201,169,110,0.1)' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={e => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                }}
              >
                <Flag src={flagSrc} alt={full} />
                <span>{full}</span>
                {active && (
                  <span className="ml-auto">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { fr } from './fr'
import { en } from './en'
import { es } from './es'

export type Lang = 'fr' | 'en' | 'es'
export type Translations = typeof fr

const translations: Record<Lang, Translations> = { fr, en, es }

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LangCtx>({
  lang: 'fr',
  setLang: () => {},
  t: fr,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const stored = localStorage.getItem('dsi-lang') as Lang | null
    if (stored && ['fr', 'en', 'es'].includes(stored)) {
      setLangState(stored)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('dsi-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

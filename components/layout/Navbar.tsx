'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, Menu } from 'lucide-react'
import { slideDown } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

function WhiteToTransparentFilter({ id }: { id: string }) {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', overflow: 'hidden' }}>
      <defs>
        <filter id={id} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -1 -1 -1 3 0"
          />
        </filter>
      </defs>
    </svg>
  )
}

function DSILogo() {
  return (
    <Link href="/" aria-label="DSI Hotel — Accueil" className="block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dsi-logo-gold.png"
        alt="DSI Hotel"
        style={{
          height: 60,
          width: 'auto',
          display: 'block',
          filter: 'url(#nav-logo-filter)',
        }}
      />
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.solutions, href: '/#services' },
    { label: t.nav.whyUs, href: '/#why-us' },
    { label: t.nav.sectors, href: '/#expertise' },
    { label: t.nav.clients, href: '/#clients' },
    { label: t.nav.contact, href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <WhiteToTransparentFilter id="nav-logo-filter" />

      <motion.header
        variants={slideDown}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'rgba(26, 58, 107, 0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.15)' : 'none',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-[72px] flex items-center gap-10">
          <DSILogo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-dm text-[12px] font-normal text-cream/80 hover:text-cream transition-colors duration-200 py-1 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-navy rounded-sm text-[12px] font-medium uppercase tracking-[0.08em] hover:bg-gold-light transition-colors duration-200 whitespace-nowrap"
            >
              {t.nav.audit}
            </Link>
          </div>

          <button
            className="lg:hidden text-cream p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-navy-dark/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-navy flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <DSILogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/60 hover:text-cream p-1"
                  aria-label="Fermer le menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mb-6">
                <LanguageSwitcher />
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-cormorant text-[20px] text-cream/80 hover:text-gold py-2.5 border-b border-gold/10 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-gold/15 space-y-4">
                <a href="tel:+33184180223" className="flex items-center gap-2 font-dm text-[13px] text-cream/60">
                  <Phone size={13} strokeWidth={1.5} />
                  +33 1 84 18 02 23
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-gold text-navy rounded-sm text-[12px] font-medium uppercase tracking-[0.08em] hover:bg-gold-light transition-colors duration-200"
                >
                  {t.nav.audit}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

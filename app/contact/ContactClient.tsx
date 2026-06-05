'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ChevronRight, Loader2, CheckCircle } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeUp, stagger } from '@/lib/animations'
import { useLanguage } from '@/lib/i18n'

type FormData = {
  firstName: string
  lastName: string
  role: string
  establishment: string
  email: string
  phone: string
  rooms?: string
  needs?: string[]
  message?: string
  rgpd: boolean
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-[12px] text-red-500 mt-1">{message}</p>
}

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block font-dm text-[13px] font-normal text-charcoal/70 mb-1.5">
      {children}
      {required && <span className="text-gold ml-0.5">*</span>}
    </label>
  )
}

export default function ContactClient() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { t, lang } = useLanguage()
  const c = t.contact

  const schema = useMemo(() => z.object({
    firstName: z.string().min(2, c.errors.firstName),
    lastName: z.string().min(2, c.errors.lastName),
    role: z.string().min(1, c.errors.role),
    establishment: z.string().min(2, c.errors.establishment),
    email: z.string().email(c.errors.email),
    phone: z.string().min(10, c.errors.phone),
    rooms: z.string().optional(),
    needs: z.array(z.string()).optional(),
    message: z.string().optional(),
    rgpd: z.boolean().refine((v) => v === true, c.errors.rgpd),
  }), [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { needs: [], rgpd: false },
  })

  const selectedNeeds = watch('needs') ?? []

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setValue('needs', selectedNeeds.filter((n) => n !== need))
    } else {
      setValue('needs', [...selectedNeeds, need])
    }
  }

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormData) => {
    const hasError = !!errors[field]
    const isValid = touchedFields[field] && !hasError
    return `dsi-input${hasError ? ' error' : isValid ? ' valid' : ''}`
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="bg-navy diamond-bg relative overflow-hidden"
        style={{ minHeight: '380px', paddingTop: '120px', paddingBottom: '80px' }}
        aria-label="Contact DSI Hotel"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.nav variants={fadeUp} aria-label="Fil d'ariane" className="flex items-center gap-2 text-cream/40 font-dm text-[12px]">
              <Link href="/" className="hover:text-cream/70 transition-colors">{c.breadcrumb}</Link>
              <ChevronRight size={12} strokeWidth={1.5} aria-hidden="true" />
              <span className="text-cream/60">Contact</span>
            </motion.nav>

            <motion.div variants={fadeUp}>
              <SectionLabel centered>{c.label}</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-cormorant text-cream leading-[1.05] font-normal"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}
            >
              {c.titleA}{' '}
              <em className="text-gold not-italic">{c.titleB}</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-dm text-[16px] font-light text-cream/65 max-w-[520px] leading-[1.7]"
            >
              {c.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ backgroundColor: '#F8F5EF', padding: '100px 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

            {/* ── Form ── */}
            <div className="flex-[3]">
              <div
                className="bg-white rounded-lg p-8 md:p-12"
                style={{ border: '1px solid rgba(26,58,107,0.1)' }}
              >
                <h2 className="font-cormorant text-[28px] text-navy font-normal mb-1">
                  {c.formTitle}
                </h2>
                <p className="font-dm text-[14px] text-charcoal/60 mb-8">
                  {c.formSubtitle}
                </p>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center gap-4 py-12"
                  >
                    <CheckCircle size={48} strokeWidth={1.25} className="text-gold" />
                    <h3 className="font-cormorant text-[26px] text-navy">{c.successTitle}</h3>
                    <p className="font-dm text-[14px] text-charcoal/60">
                      {c.successMsg}
                    </p>
                    <Link
                      href="/"
                      className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-navy text-cream rounded-sm text-[12px] font-medium uppercase tracking-[0.08em] hover:bg-navy-mid transition-colors duration-200"
                    >
                      {c.successBtn}
                    </Link>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
                    {/* Row 1 — Prénom / Nom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" required>{c.labelFirstName}</Label>
                        <input
                          id="firstName"
                          type="text"
                          placeholder={c.placeholderFirstName}
                          className={inputClass('firstName')}
                          {...register('firstName')}
                        />
                        <FieldError message={errors.firstName?.message} />
                      </div>
                      <div>
                        <Label htmlFor="lastName" required>{c.labelLastName}</Label>
                        <input
                          id="lastName"
                          type="text"
                          placeholder={c.placeholderLastName}
                          className={inputClass('lastName')}
                          {...register('lastName')}
                        />
                        <FieldError message={errors.lastName?.message} />
                      </div>
                    </div>

                    {/* Row 2 — Fonction / Établissement */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="role" required>{c.labelRole}</Label>
                        <select
                          id="role"
                          className={`${inputClass('role')} dsi-select`}
                          {...register('role')}
                        >
                          <option value="">{c.selectOption}</option>
                          {c.roles.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                        <FieldError message={errors.role?.message} />
                      </div>
                      <div>
                        <Label htmlFor="establishment" required>{c.labelEstablishment}</Label>
                        <input
                          id="establishment"
                          type="text"
                          placeholder={c.placeholderEstablishment}
                          className={inputClass('establishment')}
                          {...register('establishment')}
                        />
                        <FieldError message={errors.establishment?.message} />
                      </div>
                    </div>

                    {/* Row 3 — Email / Téléphone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" required>{c.labelEmail}</Label>
                        <input
                          id="email"
                          type="email"
                          placeholder={c.placeholderEmail}
                          className={inputClass('email')}
                          {...register('email')}
                        />
                        <FieldError message={errors.email?.message} />
                      </div>
                      <div>
                        <Label htmlFor="phone" required>{c.labelPhone}</Label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder={c.placeholderPhone}
                          className={inputClass('phone')}
                          {...register('phone')}
                        />
                        <FieldError message={errors.phone?.message} />
                      </div>
                    </div>

                    {/* Row 4 — Nombre de chambres */}
                    <div>
                      <Label htmlFor="rooms">{c.labelRooms}</Label>
                      <select
                        id="rooms"
                        className="dsi-input dsi-select"
                        {...register('rooms')}
                      >
                        <option value="">{c.selectOption}</option>
                        {c.roomsOptions.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>

                    {/* Row 5 — Besoins */}
                    <div>
                      <Label htmlFor="needs">{c.labelNeeds}</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {c.needsOptions.map((need) => {
                          const active = selectedNeeds.includes(need)
                          return (
                            <button
                              key={need}
                              type="button"
                              onClick={() => toggleNeed(need)}
                              className="px-3 py-1.5 rounded-sm text-[12px] font-dm font-normal transition-all duration-200"
                              style={{
                                border: '1px solid rgba(26,58,107,0.2)',
                                backgroundColor: active ? '#1A3A6B' : 'transparent',
                                color: active ? '#F8F5EF' : '#2C2C2C',
                                borderColor: active ? '#1A3A6B' : 'rgba(26,58,107,0.2)',
                              }}
                              aria-pressed={active}
                            >
                              {need}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Row 6 — Message */}
                    <div>
                      <Label htmlFor="message">{c.labelMessage}</Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder={c.placeholderMessage}
                        className="dsi-input resize-none"
                        {...register('message')}
                      />
                    </div>

                    {/* Row 7 — RGPD */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-0.5">
                          <input
                            type="checkbox"
                            className="sr-only"
                            {...register('rgpd')}
                          />
                          <div
                            className="w-4 h-4 rounded-sm border flex items-center justify-center transition-colors duration-200"
                            style={{
                              borderColor: errors.rgpd ? '#e53e3e' : 'rgba(26,58,107,0.3)',
                              backgroundColor: watch('rgpd') ? '#1A3A6B' : 'transparent',
                            }}
                          >
                            {watch('rgpd') && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4l3 3 5-6" stroke="#F8F5EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="font-dm text-[13px] font-light text-charcoal/70 leading-[1.5]">
                          {c.rgpdText}{' '}
                          <Link href="/politique-de-confidentialite" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">
                            {c.rgpdLink}
                          </Link>
                          <span className="text-gold ml-0.5">*</span>
                        </span>
                      </label>
                      <FieldError message={errors.rgpd?.message} />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-navy rounded-sm text-[13px] font-medium uppercase tracking-[0.08em] hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={14} strokeWidth={1.5} className="animate-spin" />
                          {c.submittingBtn}
                        </>
                      ) : (
                        <>{c.submitBtn}</>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-[13px] text-red-500 text-center">
                        {c.errorMsg}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="flex-[2] flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start">

              {/* Coordonnées */}
              <div
                className="bg-white rounded-lg p-8"
                style={{ border: '1px solid rgba(201,169,110,0.2)' }}
              >
                <h3 className="font-cormorant text-[22px] text-navy font-normal mb-6">
                  {c.coordTitle}
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: MapPin, content: '60 Rue François 1er\n75008 Paris' },
                    { icon: Phone, content: '+33 1 84 18 02 23', href: 'tel:+33184180223' },
                    { icon: Mail, content: 'support@dsihotel.com', href: 'mailto:support@dsihotel.com' },
                    { icon: Clock, content: c.hours },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <Icon size={15} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-dm text-[13px] text-charcoal/70 hover:text-charcoal transition-colors leading-[1.5] whitespace-pre-line"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="font-dm text-[13px] text-charcoal/70 leading-[1.5] whitespace-pre-line">
                            {item.content}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Étapes */}
              <div className="bg-navy rounded-lg p-8">
                <h3 className="font-cormorant text-[22px] text-cream font-normal mb-6">
                  {c.nextTitle}
                </h3>
                <div className="flex flex-col gap-0">
                  {c.steps.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-dm text-[11px] font-medium text-navy"
                          style={{ background: '#C9A96E' }}
                        >
                          {i + 1}
                        </div>
                        {i < c.steps.length - 1 && (
                          <div className="w-px flex-1 mt-1 mb-1" style={{ background: 'rgba(201,169,110,0.3)', minHeight: 24 }} />
                        )}
                      </div>
                      <div className={`pb-6 ${i === c.steps.length - 1 ? 'pb-0' : ''}`}>
                        <p className="font-dm text-[14px] font-medium text-cream mb-0.5">{step.title}</p>
                        <p className="font-dm text-[12px] font-light text-cream/55 leading-[1.5]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgence */}
              <div className="bg-gold rounded-lg p-6">
                <h3 className="font-cormorant text-[20px] text-navy font-normal mb-1">
                  {c.urgTitle}
                </h3>
                <p className="font-dm text-[13px] text-navy/70 mb-4">
                  {c.urgDesc}
                </p>
                <a
                  href="tel:+33184180223"
                  className="block w-full text-center py-3 bg-navy text-cream rounded-sm text-[12px] font-medium uppercase tracking-[0.08em] hover:bg-navy-mid transition-colors duration-200 mb-2"
                >
                  {c.urgBtn}
                </a>
                <p className="text-center font-dm text-[13px] font-medium text-navy">
                  +33 1 84 18 02 23
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reassurance strip ── */}
      <section className="bg-navy" style={{ padding: '80px 0' }} aria-label="Nos engagements">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gold/20">
            {c.reassurance.map((item) => (
              <div key={item.title} className="flex-1 flex flex-col items-center text-center gap-2 px-8 py-6">
                <h3 className="font-cormorant text-[22px] text-cream font-normal">{item.title}</h3>
                <p className="font-dm text-[13px] text-cream/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

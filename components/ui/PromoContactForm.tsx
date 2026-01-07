// components/ui/PromoContactForm.tsx - Formulario de contacto con promoción de 25% descuento
'use client'
import React, { useState } from 'react'
import { useTranslation } from '@/lib/useTranslation'
import { trackContactFormSubmit, trackContactFormError, trackEvent } from '@/components/analytics/gtag'

interface PromoContactFormProps {
  isOpen: boolean
  onClose: () => void
  slotNumber: number | null
}

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  message: string
}

export const PromoContactForm: React.FC<PromoContactFormProps> = ({ isOpen, onClose, slotNumber }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'promo',
          discount: '25%',
          slotNumber,
          ...formData
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', company: '', email: '', phone: '', projectType: '', message: '' })
        trackContactFormSubmit('promo_25_discount', 'portfolio_slot')
        trackEvent('promo_form_submitted', {
          event_category: 'conversion',
          discount: '25%',
          slot_number: slotNumber
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error:', error)
      trackContactFormError('promo', error instanceof Error ? error.message : 'Unknown error')
      alert(t('promoForm.errorMessage'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ name: '', company: '', email: '', phone: '', projectType: '', message: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] overflow-y-auto">
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="
          relative max-w-lg w-full bg-bg-card rounded-2xl p-6 sm:p-8
          ring-1 ring-white/10 shadow-2xl
          textured-bg from-bg-card/90 via-bg-surface/70 to-bg-deep/90
          noise-overlay
          animate-fade-in
          my-8
        ">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 w-8 h-8 rounded-full
              bg-white/10 hover:bg-white/20 transition-colors
              flex items-center justify-center text-fg-muted hover:text-white
            "
            aria-label="Cerrar formulario"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <>
              {/* Badge de descuento */}
              <div className="flex justify-center mb-4">
                <span className="
                  px-4 py-2 text-sm font-bold rounded-full
                  bg-gradient-to-r from-green-500/20 to-emerald-500/20
                  text-green-400
                  ring-1 ring-green-500/30
                  animate-pulse
                ">
                  25% {t('promoForm.discountBadge')}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-fg-strong mb-2 text-center">
                {t('promoForm.title')}
              </h2>
              <p className="text-fg-muted mb-6 text-sm sm:text-base text-center">
                {t('promoForm.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="promo-name" className="block text-sm font-medium text-fg-soft mb-2">
                      {t('promoForm.name')} *
                    </label>
                    <input
                      type="text"
                      id="promo-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="
                        w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                        text-fg-strong placeholder-fg-muted
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50
                        transition-colors
                      "
                      placeholder={String(t('promoForm.namePlaceholder'))}
                    />
                  </div>

                  <div>
                    <label htmlFor="promo-company" className="block text-sm font-medium text-fg-soft mb-2">
                      {t('promoForm.company')}
                    </label>
                    <input
                      type="text"
                      id="promo-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="
                        w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                        text-fg-strong placeholder-fg-muted
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50
                        transition-colors
                      "
                      placeholder={String(t('promoForm.companyPlaceholder'))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="promo-email" className="block text-sm font-medium text-fg-soft mb-2">
                      {t('promoForm.email')} *
                    </label>
                    <input
                      type="email"
                      id="promo-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="
                        w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                        text-fg-strong placeholder-fg-muted
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50
                        transition-colors
                      "
                      placeholder="tu@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="promo-phone" className="block text-sm font-medium text-fg-soft mb-2">
                      {t('promoForm.phone')}
                    </label>
                    <input
                      type="tel"
                      id="promo-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="
                        w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                        text-fg-strong placeholder-fg-muted
                        focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50
                        transition-colors
                      "
                      placeholder="+52 999 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="promo-projectType" className="block text-sm font-medium text-fg-soft mb-2">
                    {t('promoForm.projectType')} *
                  </label>
                  <select
                    id="promo-projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="
                      w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                      text-fg-strong
                      focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50
                      transition-colors
                    "
                  >
                    <option value="">{t('promoForm.selectProjectType')}</option>
                    <option value="landing">{t('promoForm.projectTypes.landing')}</option>
                    <option value="webapp">{t('promoForm.projectTypes.webapp')}</option>
                    <option value="ecommerce">{t('promoForm.projectTypes.ecommerce')}</option>
                    <option value="api">{t('promoForm.projectTypes.api')}</option>
                    <option value="mobile">{t('promoForm.projectTypes.mobile')}</option>
                    <option value="other">{t('promoForm.projectTypes.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="promo-message" className="block text-sm font-medium text-fg-soft mb-2">
                    {t('promoForm.message')} *
                  </label>
                  <textarea
                    id="promo-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="
                      w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                      text-fg-strong placeholder-fg-muted resize-none
                      focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50
                      transition-colors
                    "
                    placeholder={String(t('promoForm.messagePlaceholder'))}
                  />
                </div>

                {/* Info del descuento */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-green-300">
                      {t('promoForm.discountInfo')}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full py-3 px-6 rounded-lg font-medium
                    bg-gradient-to-r from-green-500 to-emerald-600 text-white
                    hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-500/25
                    focus:outline-none focus:ring-2 focus:ring-green-500/50
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200
                  "
                >
                  {isSubmitting ? t('promoForm.sending') : t('promoForm.submit')}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-fg-strong mb-3">{t('promoForm.successTitle')}</h3>
              <p className="text-fg-muted mb-2">
                {t('promoForm.successMessage')}
              </p>
              <p className="text-green-400 font-semibold mb-6">
                {t('promoForm.successDiscount')}
              </p>
              <button
                onClick={resetForm}
                className="
                  px-8 py-3 rounded-lg font-medium
                  bg-gradient-to-r from-green-500 to-emerald-600 text-white
                  hover:from-green-600 hover:to-emerald-700
                  transition-all duration-200
                "
              >
                {t('promoForm.close')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

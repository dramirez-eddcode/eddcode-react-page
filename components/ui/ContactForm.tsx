// components/ui/ContactForm.tsx - Formulario de contacto general
'use client'
import React, { useState } from 'react'
import { trackContactFormSubmit, trackContactFormError, trackUserJourney } from '@/components/analytics/gtag'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  company: string
  email: string
  message: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          type: 'contact',
          ...formData
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', company: '', email: '', message: '' })
        trackContactFormSubmit('contact', 'contact_form')
        trackUserJourney('contact_form_submitted', 2, 3)
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error:', error)
      trackContactFormError('contact', error instanceof Error ? error.message : 'Unknown error')
      alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ name: '', company: '', email: '', message: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] overflow-y-auto">
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="
          relative max-w-md w-full bg-bg-card rounded-2xl p-6 sm:p-8
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
            <h2 className="text-xl sm:text-2xl font-bold text-fg-strong mb-2">Contacta con nosotros</h2>
            <p className="text-fg-muted mb-4 text-sm sm:text-base">
              Cuéntanos sobre tu proyecto y te contactaremos pronto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-fg-soft mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="
                    w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted
                    focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50 focus:border-accent-amber-glow/50
                    transition-colors
                  "
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-fg-soft mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="
                    w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted
                    focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50 focus:border-accent-amber-glow/50
                    transition-colors
                  "
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-fg-soft mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="
                    w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted
                    focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50 focus:border-accent-amber-glow/50
                    transition-colors
                  "
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-fg-soft mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="
                    w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted resize-none
                    focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50 focus:border-accent-amber-glow/50
                    transition-colors
                  "
                  placeholder="Describe lo que necesitas: desarrollo, integración, automatización..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 px-6 rounded-lg font-medium
                  bg-gradient-to-r from-accent-amber-start to-accent-amber-mid text-white
                  hover:from-accent-amber-mid hover:to-accent-amber-glow hover:shadow-lg hover:shadow-accent-amber-glow/25
                  focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-amber-start to-accent-amber-glow flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-fg-strong mb-2">¡Mensaje enviado!</h3>
            <p className="text-fg-muted mb-6">
              Gracias por contactarnos. Te responderemos en las próximas 24 horas.
            </p>
            <button
              onClick={resetForm}
              className="
                px-6 py-2 rounded-lg font-medium
                bg-gradient-to-r from-accent-amber-start to-accent-amber-mid text-white
                hover:from-accent-amber-mid hover:to-accent-amber-glow
                transition-all duration-200
              "
            >
              Cerrar
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
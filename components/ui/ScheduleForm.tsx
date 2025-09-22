// components/ui/ScheduleForm.tsx - Formulario para agendar llamadas
'use client'
import React, { useState } from 'react'
import { trackContactFormSubmit, trackContactFormError, trackUserJourney } from '@/components/analytics/gtag'

interface ScheduleFormProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  projectDescription: string
  preferredDate: string
  preferredTime: string
  timezone: string
}

export const ScheduleForm: React.FC<ScheduleFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDescription: '',
    preferredDate: '',
    preferredTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Generar opciones de horario (9 AM - 6 PM) con formato 12 horas
  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:30', label: '12:30 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' }
  ]

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0]

  // Obtener fecha máxima (30 días desde hoy)
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)
  const maxDateString = maxDate.toISOString().split('T')[0]

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
          type: 'schedule',
          ...formData
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectDescription: '',
          preferredDate: '',
          preferredTime: '',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        })
        trackContactFormSubmit('schedule', 'schedule_form')
        trackUserJourney('schedule_form_submitted', 2, 3)
      } else {
        throw new Error('Error al agendar la llamada')
      }
    } catch (error) {
      console.error('Error:', error)
      trackContactFormError('schedule', error instanceof Error ? error.message : 'Unknown error')
      alert('Hubo un error al agendar la llamada. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectDescription: '',
      preferredDate: '',
      preferredTime: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    })
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
            <h2 className="text-xl sm:text-2xl font-bold text-fg-strong mb-2">Agenda una llamada</h2>
            <p className="text-fg-muted mb-4 text-sm sm:text-base">
              Reserva 30 minutos para conversar sobre tu proyecto y cómo podemos ayudarte.
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
                    w-full px-4 py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted
                    focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
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
                    w-full px-4 py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted
                    focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
                    transition-colors
                  "
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
                      transition-colors
                    "
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-fg-soft mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="
                      w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                      text-fg-strong placeholder-fg-muted
                      focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
                      transition-colors
                    "
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-fg-soft mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  rows={3}
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="
                    w-full px-4 py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                    text-fg-strong placeholder-fg-muted resize-none
                    focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
                    transition-colors
                  "
                  placeholder="Describe brevemente lo que necesitas..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-fg-soft mb-2">
                    Fecha preferida *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    min={today}
                    max={maxDateString}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="
                      w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                      text-fg-strong
                      focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
                      transition-colors
                      [&::-webkit-calendar-picker-indicator]:bg-accent-blue-glow/20
                      [&::-webkit-calendar-picker-indicator]:rounded
                      [&::-webkit-calendar-picker-indicator]:p-1
                      [&::-webkit-calendar-picker-indicator]:cursor-pointer
                      [&::-webkit-calendar-picker-indicator]:hover:bg-accent-blue-glow/30
                      [&::-webkit-datetime-edit-text]:text-fg-muted
                      [&::-webkit-datetime-edit-month-field]:text-fg-strong
                      [&::-webkit-datetime-edit-day-field]:text-fg-strong
                      [&::-webkit-datetime-edit-year-field]:text-fg-strong
                    "
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-fg-soft mb-2">
                    Hora preferida *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="
                      w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-bg-surface/50 border border-ring-soft
                      text-fg-strong
                      focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50 focus:border-accent-blue-glow/50
                      transition-colors
                    "
                  >
                    <option value="">Selecciona una hora</option>
                    {timeSlots.map(slot => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-xs text-fg-muted bg-bg-surface/30 rounded-lg p-3 border border-ring-soft">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-accent-blue-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Zona horaria detectada: {formData.timezone}</span>
                </div>
                <p>• Horarios disponibles: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                <p>• Te enviaremos una confirmación por email con el link de la llamada</p>
                <p>• Duración estimada: 30 minutos</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 px-6 rounded-lg font-medium
                  bg-gradient-to-r from-accent-blue-start to-accent-blue-mid text-white
                  hover:from-accent-blue-mid hover:to-accent-blue-glow hover:shadow-lg hover:shadow-accent-blue-glow/25
                  focus:outline-none focus:ring-2 focus:ring-accent-blue-glow/50
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                {isSubmitting ? 'Agendando...' : 'Agendar llamada'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-blue-start to-accent-blue-glow flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-fg-strong mb-2">¡Llamada agendada!</h3>
            <p className="text-fg-muted mb-6">
              Hemos recibido tu solicitud. Te enviaremos un email de confirmación y los detalles de la llamada pronto.
            </p>
            <button
              onClick={resetForm}
              className="
                px-6 py-2 rounded-lg font-medium
                bg-gradient-to-r from-accent-blue-start to-accent-blue-mid text-white
                hover:from-accent-blue-mid hover:to-accent-blue-glow
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
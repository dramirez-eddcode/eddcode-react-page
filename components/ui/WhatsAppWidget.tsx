// components/ui/WhatsAppWidget.tsx - Widget flotante de WhatsApp
'use client'
import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/useTranslation'
import { trackWhatsAppClick } from '@/components/analytics/gtag'

export const WhatsAppWidget: React.FC = () => {
  const { locale } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Número de WhatsApp (México)
  const phoneNumber = '524775813450'

  const message = locale === 'es'
    ? 'Hola, me interesa conocer más sobre los servicios de EDDCODE.'
    : 'Hi, I\'m interested in learning more about EDDCODE services.'

  const tooltipText = locale === 'es'
    ? '¿Necesitas ayuda? ¡Escríbenos!'
    : 'Need help? Message us!'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Mostrar el widget después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Mostrar tooltip después de que el widget sea visible
  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
        // Ocultar tooltip después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000)
      }, 2000)

      return () => clearTimeout(tooltipTimer)
    }
  }, [isVisible])

  const handleClick = () => {
    trackWhatsAppClick('floating_widget')
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`
          absolute bottom-full right-0 mb-3
          bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg
          text-sm font-medium whitespace-nowrap
          transition-all duration-300
          ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
      >
        {tooltipText}
        <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="
          group
          w-14 h-14 rounded-full
          bg-[#25D366] hover:bg-[#20BA5C]
          shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-[#25D366]/30
          animate-fade-up
        "
        aria-label={locale === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
        </svg>

        {/* Pulse animation */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
      </button>
    </div>
  )
}

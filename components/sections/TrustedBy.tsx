// components/sections/TrustedBy.tsx - Logos de clientes y tecnologías
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/lib/useTranslation'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackTechnologyInterest, trackTrustIndicator, trackEvent } from '@/components/analytics/gtag'
import { PromoContactForm } from '../ui/PromoContactForm'

interface Client {
  name: string
  industry: string
  logo: string
  url: string
}

interface TrustedByProps {
  onOpenPromoForm?: () => void
}

export const TrustedBy: React.FC<TrustedByProps> = () => {
  const { t } = useTranslation()
  const sectionRef = useSectionTracking('trusted_by', 0.3)
  const [isPromoFormOpen, setIsPromoFormOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)

  const handlePromoSlotClick = (slotNumber: number) => {
    setSelectedSlot(slotNumber)
    setIsPromoFormOpen(true)
    trackEvent('promo_slot_click', {
      event_category: 'trusted_by',
      slot_number: slotNumber,
      discount: '25%'
    })
  }

  const clients: Client[] = [
    { name: 'Vuelatour', industry: 'Turismo', logo: '/portfolio/logos/logo-vuelatour-dark.webp', url: 'https://www.vuelatour.com' },
    { name: 'Jetset', industry: 'Transporte', logo: '/portfolio/logos/logo-jetset-dark.webp', url: 'https://www.jetsetcancun.com' },
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 border-y border-white/5"
      id="trusted-by"
    >
      <div className="max-w-6xl mx-auto">
        {/* Clients */}
        <div className="text-center mb-12">
          <p className="text-fg-muted text-sm uppercase tracking-wider mb-8">
            {t('trustedBy.title')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {/* Clientes reales */}
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center cursor-pointer"
                onClick={() => trackTrustIndicator(`client_${client.name}`, 'click')}
                onMouseEnter={() => trackTrustIndicator(`client_${client.name}`, 'view')}
              >
                <div className="
                  h-12 px-4 rounded-lg
                  bg-white/5 ring-1 ring-white/10
                  flex items-center justify-center
                  group-hover:bg-white/10 group-hover:ring-white/20
                  transition-all duration-300
                ">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="mt-2 text-xs text-fg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </span>
              </a>
            ))}

            {/* Slots promocionales */}
            {[1, 2, 3, 4].map((slotId) => (
              <button
                key={`promo-slot-${slotId}`}
                onClick={() => handlePromoSlotClick(slotId)}
                className="group flex flex-col items-center"
              >
                <div className="
                  h-12 w-28 rounded-lg
                  bg-gradient-to-r from-green-500/10 to-emerald-500/10
                  ring-1 ring-green-500/20
                  flex items-center justify-center gap-2
                  hover:from-green-500/20 hover:to-emerald-500/20 hover:ring-green-500/40
                  transition-all duration-300
                  cursor-pointer
                ">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-xs font-semibold text-green-400">25% OFF</span>
                </div>
                <span className="mt-2 text-xs text-green-400/70 group-hover:text-green-400 transition-colors">
                  {t('trustedBy.beFirst')}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Technologies */}
        <div className="text-center">
          <p className="text-fg-muted text-sm uppercase tracking-wider mb-8">
            {t('trustedBy.technologies')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
                  px-4 py-2 rounded-full
                  bg-white/5 ring-1 ring-white/10
                  flex items-center gap-2
                  hover:bg-white/10 hover:ring-brand-primary/30
                  transition-all duration-300
                  group cursor-pointer
                "
                onClick={() => trackTechnologyInterest(tech.name)}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm text-fg-soft group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario de contacto promocional */}
      <PromoContactForm
        isOpen={isPromoFormOpen}
        onClose={() => {
          setIsPromoFormOpen(false)
          setSelectedSlot(null)
        }}
        slotNumber={selectedSlot}
      />
    </section>
  )
}

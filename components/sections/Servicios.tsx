// components/sections/Servicios.tsx - Grid de servicios con acentos vibrantes Coder
'use client'
import React from 'react'
import { TexturedAccentCard, PurpleAccentCard, BlueAccentCard, AmberAccentCard, PinkAccentCard } from '../ui/TexturedAccentCard'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackServiceInterest } from '@/components/analytics/gtag'
import { useTranslation } from '@/lib/useTranslation'

export const Servicios: React.FC = () => {
  const sectionRef = useSectionTracking('servicios', 0.3)
  const { t } = useTranslation()

  const servicios = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.webApps.title'),
      description: t('services.webApps.description'),
      accent: 'purple' as const
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: t('services.apis.title'),
      description: t('services.apis.description'),
      accent: 'blue' as const
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('services.data.title'),
      description: t('services.data.description'),
      accent: 'amber' as const
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: t('services.devops.title'),
      description: t('services.devops.description'),
      accent: 'pink' as const
    }
  ]

  const handleServiceInteraction = (serviceName: string, interactionType: 'hover' | 'click') => {
    trackServiceInterest(serviceName, interactionType)
  }

  return (
    <section ref={sectionRef} className="py-24 px-6" id="servicios" aria-labelledby="servicios-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="servicios-title"
            className="
            text-3xl md:text-4xl lg:text-5xl font-bold mb-6
            bg-gradient-to-r from-white via-white to-white/70 
            bg-clip-text text-transparent
          ">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {servicios.map((servicio, index) => (
            <TexturedAccentCard 
              key={index}
              accent={servicio.accent}
              className="group animate-fade-up h-full flex flex-col cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleServiceInteraction(servicio.title, 'click')}
              onMouseEnter={() => handleServiceInteraction(servicio.title, 'hover')}
            >
              <div className="flex items-start gap-4 flex-1">
                <div className={`
                  flex-shrink-0 p-3 rounded-xl
                  ${servicio.accent === 'purple' ? 'bg-brand-primary/25 text-accent-purple-glow ring-1 ring-brand-primary/40' :
                    servicio.accent === 'blue' ? 'bg-brand-primary/20 text-accent-purple-glow ring-1 ring-brand-primary/30' :
                    servicio.accent === 'amber' ? 'bg-amber-400/20 text-amber-300 ring-1 ring-amber-500/30' :
                    'bg-pink-400/20 text-pink-300 ring-1 ring-pink-500/30'}
                  group-hover:scale-110 transition-all duration-300 accent-glow
                `}>
                  {servicio.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-fg-strong">
                    {servicio.title}
                  </h3>
                  <p className="text-fg-soft leading-relaxed">
                    {servicio.description}
                  </p>
                </div>
              </div>
            </TexturedAccentCard>
          ))}
        </div>
      </div>
    </section>
  )
}
// components/sections/Capabilities.tsx - Grid 2x3 de capacidades clave con tarjetas texturizadas y analytics
'use client'
import React from 'react'
import { TexturedCard, TexturedCardBlue, TexturedCardPurple, TexturedCardCyan } from '../ui/TexturedCard'
import { useTranslation } from '@/lib/useTranslation'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackCapabilityInterest, trackCallToAction } from '@/components/analytics/gtag'

export const Capabilities: React.FC = () => {
  const { t } = useTranslation()
  const sectionRef = useSectionTracking('capacidades', 0.3)

  const capabilities = [
    {
      variant: 'blue' as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('capabilities.webApps.title'),
      description: t('capabilities.webApps.description'),
      features: t('capabilities.webApps.features').split(',')
    },
  {
    variant: 'purple' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: t('capabilities.integrations.title'),
    description: t('capabilities.integrations.description'),
    features: t('capabilities.integrations.features').split(',')
  },
  {
    variant: 'cyan' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: t('capabilities.dataAi.title'),
    description: t('capabilities.dataAi.description'),
    features: t('capabilities.dataAi.features').split(',')
  },
  {
    variant: 'default' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: t('capabilities.devOps.title'),
    description: t('capabilities.devOps.description'),
    features: t('capabilities.devOps.features').split(',')
  },
  {
    variant: 'blue' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: t('capabilities.mobile.title'),
    description: t('capabilities.mobile.description'),
    features: t('capabilities.mobile.features').split(',')
  },
  {
    variant: 'purple' as const,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: t('capabilities.consulting.title'),
    description: t('capabilities.consulting.description'),
    features: t('capabilities.consulting.features').split(',')
  }
  ]
  return (
    <section ref={sectionRef} className="py-24 px-6" id="capacidades">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl font-bold mb-6
            text-fg-strong
          ">
            {t('capabilities.title')}
          </h2>
          <p className="text-xl text-fg-soft max-w-3xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </div>

        {/* Grid 2x3 de capacidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const CardComponent = capability.variant === 'blue' ? TexturedCardBlue :
                                 capability.variant === 'purple' ? TexturedCardPurple :
                                 capability.variant === 'cyan' ? TexturedCardCyan :
                                 TexturedCard;
            
            return (
              <CardComponent
                key={index}
                className="group animate-fade-up h-full cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => trackCapabilityInterest(capability.title, 'click')}
                onMouseEnter={() => trackCapabilityInterest(capability.title, 'hover')}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`
                    inline-flex p-4 rounded-2xl mb-6 w-fit
                    ${capability.variant === 'blue' ? 'bg-brand-primary/15 text-accent-purple-glow ring-1 ring-brand-primary/20' :
                      capability.variant === 'purple' ? 'bg-brand-primary/15 text-accent-purple-glow ring-1 ring-brand-primary/20' :
                      capability.variant === 'cyan' ? 'bg-accent-pink-mid/15 text-accent-pink-glow ring-1 ring-accent-pink-mid/20' :
                      'bg-brand-primary/15 text-accent-purple-glow ring-1 ring-brand-primary/20'}
                    group-hover:scale-110 transition-all duration-300
                  `}>
                    {capability.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-fg-strong">
                    {capability.title}
                  </h3>
                  
                  <p className="text-fg-soft leading-relaxed mb-6 flex-grow">
                    {capability.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {capability.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="
                          px-3 py-1 text-xs font-medium rounded-full
                          bg-white/5 text-fg-muted
                          ring-1 ring-white/10
                        "
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardComponent>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              trackCallToAction(t('capabilities.cta'), 'capabilities', 'primary')
              const ctaSection = document.getElementById('cta')
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="
              px-8 py-4 bg-gradient-to-r from-brand-dark to-brand-primary text-fg-light font-semibold rounded-xl
              ring-1 ring-brand-primary/30
              shadow-xl shadow-brand-primary/20
              hover:from-brand-primary hover:to-accent-purple-glow hover:shadow-2xl hover:shadow-brand-primary/30
              hover:ring-brand-primary/50 hover:scale-105
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-brand-primary/30
            "
            aria-label={t('capabilities.cta')}
          >
            {t('capabilities.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
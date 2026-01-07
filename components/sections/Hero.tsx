// components/sections/Hero.tsx - Hero actualizado con tema oscuro y nuevo contenido
'use client'
import React from 'react'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackCallToAction } from '@/components/analytics/gtag'
import { useTranslation } from '@/lib/useTranslation'

interface HeroProps {
  onScheduleClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  const sectionRef = useSectionTracking('hero', 0.3)
  const { t } = useTranslation()

  const scrollToCapabilities = () => {
    trackCallToAction(t('hero.viewCapabilities'), 'hero', 'secondary')
    const capabilitiesSection = document.getElementById('capacidades')
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScheduleClick = () => {
    trackCallToAction(t('hero.scheduleCall'), 'hero', 'primary')
    onScheduleClick()
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* Fondo texturizado profundo */}
      <div className="
        absolute inset-0 
        textured-bg from-bg-card/80 via-bg-surface/60 to-bg-deep
        noise-overlay
      "></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 
            id="hero-title"
            className="
            text-4xl md:text-6xl lg:text-7xl font-bold 
            text-balance leading-tight mb-8
            text-fg-strong
          ">
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-brand-light via-brand-primary to-accent-purple-glow bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          <p className="
            text-xl md:text-2xl 
            text-fg-soft max-w-4xl mx-auto mb-12
            text-balance leading-relaxed
          ">
            {t('hero.description')}
          </p>
          
          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleScheduleClick}
              className="
                px-10 py-4 text-fg-light font-semibold rounded-xl text-lg
                bg-gradient-to-r from-brand-dark to-brand-primary
                ring-1 ring-white/10 backdrop-accent
                shadow-[0_0_30px_-8px_var(--brand-primary)]
                hover:shadow-[0_0_40px_-8px_var(--brand-primary)] hover:scale-105
                hover:ring-white/20 hover:from-brand-primary hover:to-accent-purple-glow
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-brand-primary/30
              "
              aria-label={t('hero.scheduleCall')}
            >
              {t('hero.scheduleCall')}
            </button>
            
            <button 
              onClick={scrollToCapabilities}
              className="
                px-10 py-4 text-fg-strong font-medium rounded-xl text-lg
                ring-1 ring-white/10 bg-white/5 backdrop-accent
                hover:bg-white/10 hover:ring-white/20 hover:text-white
                hover:shadow-[0_0_20px_-8px_rgba(255,255,255,0.3)]
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-white/20
              "
              aria-label={t('hero.viewCapabilities')}
            >
              {t('hero.viewCapabilities')}
            </button>
          </div>

          {/* Indicador de scroll sutil */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                const trustedBySection = document.getElementById('trusted-by')
                if (trustedBySection) {
                  trustedBySection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="animate-bounce cursor-pointer hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50 rounded-full p-2"
              aria-label="Scroll hacia abajo"
            >
              <svg
                className="w-6 h-6 text-fg-muted hover:text-brand-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Gradiente de transición inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
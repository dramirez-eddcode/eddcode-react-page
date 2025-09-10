// components/sections/Hero.tsx - Hero actualizado con tema oscuro y nuevo contenido
'use client'
import React from 'react'

interface HeroProps {
  onScheduleClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {

  const scrollToCapabilities = () => {
    const capabilitiesSection = document.getElementById('capacidades')
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo texturizado profundo */}
      <div className="
        absolute inset-0 
        textured-bg from-bg-card/80 via-bg-surface/60 to-bg-deep
        noise-overlay
      "></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="
            text-4xl md:text-6xl lg:text-7xl font-bold 
            text-balance leading-tight mb-8
            text-fg-strong
          ">
            Entornos seguros y veloces para tus desarrollos{' '}
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              — y tus agentes de IA
            </span>
          </h1>
          
          <p className="
            text-xl md:text-2xl 
            text-fg-soft max-w-4xl mx-auto mb-12
            text-balance leading-relaxed
          ">
            Equipos senior especializados en desarrollo de software moderno, 
            integraciones seguras y automatización inteligente para empresas que buscan escalar.
          </p>
          
          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={onScheduleClick}
              className="
                px-10 py-4 text-white font-semibold rounded-xl text-lg
                bg-gradient-to-r from-accent-blue-start to-accent-blue-mid
                ring-1 ring-white/10 backdrop-accent
                shadow-[0_0_30px_-8px_var(--accent-blue-mid)]
                hover:shadow-[0_0_40px_-8px_var(--accent-blue-mid)] hover:scale-105
                hover:ring-white/20 hover:from-accent-blue-mid hover:to-accent-blue-glow
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-accent-blue-mid/30
              "
              aria-label="Agenda una llamada estratégica con nuestro equipo"
            >
              Agenda una llamada
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
              aria-label="Explorar nuestras capacidades técnicas"
            >
              Ver capacidades
            </button>
          </div>

          {/* Indicador de scroll sutil */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 text-fg-muted" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradiente de transición inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
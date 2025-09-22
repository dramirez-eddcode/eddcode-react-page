// components/ui/TexturedAccentCard.tsx - Tarjeta con acentos vibrantes estilo Coder
'use client'
import React from 'react'

interface TexturedAccentCardProps {
  children: React.ReactNode
  className?: string
  accent: 'purple' | 'pink' | 'rose' | 'amber' | 'blue'
  hoverable?: boolean
  style?: React.CSSProperties
  intensity?: 'light' | 'normal' | 'strong'
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const TexturedAccentCard: React.FC<TexturedAccentCardProps> = ({ 
  children, 
  className = '',
  accent,
  hoverable = true,
  style,
  intensity = 'strong',
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const waveId = React.useId()
  
  // Define gradient stops para cada acento
  const getAccentConfig = () => {
    const configs = {
      purple: {
        start: '#6D28D9',
        mid: '#7C3AED', 
        glow: '#8B5CF6',
        textColor: 'text-accent-purple-glow',
        ringColor: 'ring-accent-purple-mid/30'
      },
      pink: {
        start: '#EC4899',
        mid: '#F472B6',
        glow: '#FBCFE8', 
        textColor: 'text-accent-pink-glow',
        ringColor: 'ring-accent-pink-mid/30'
      },
      rose: {
        start: '#F43F5E',
        mid: '#FB7185',
        glow: '#FDA4AF',
        textColor: 'text-accent-rose-glow', 
        ringColor: 'ring-accent-rose-mid/30'
      },
      amber: {
        start: '#F59E0B',
        mid: '#FBBF24',
        glow: '#FDE047',
        textColor: 'text-accent-amber-glow',
        ringColor: 'ring-accent-amber-mid/30'
      },
      blue: {
        start: '#3B82F6',
        mid: '#60A5FA',
        glow: '#93C5FD',
        textColor: 'text-accent-blue-glow',
        ringColor: 'ring-accent-blue-mid/30'
      }
    }
    return configs[accent]
  }

  const config = getAccentConfig()
  
  // Ajustar intensidad según prop
  const getIntensityModifier = () => {
    switch (intensity) {
      case 'light':
        return '0.08'
      case 'strong':
        return '0.18'
      default:
        return '0.12'
    }
  }

  const intensityValue = getIntensityModifier()

  const baseClasses = `
    relative overflow-hidden rounded-2xl p-8 h-full
    ring-1 ring-soft backdrop-accent
    shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_80px_-12px_rgba(0,0,0,0.9)]
    noise-overlay
    ${hoverable ? 'transition-all duration-500 hover:ring-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_40px_100px_-12px_rgba(0,0,0,0.95)] hover:scale-[1.02] hover:accent-glow' : ''}
  `

  // Crear gradiente inline con los 3 stops del acento
  const gradientStyle = {
    background: `
      linear-gradient(135deg, ${config.start}${intensityValue === '0.08' ? '30' : intensityValue === '0.18' ? '50' : '40'}, ${config.mid}${intensityValue === '0.08' ? '20' : intensityValue === '0.18' ? '35' : '25'}, ${config.glow}${intensityValue === '0.08' ? '10' : intensityValue === '0.18' ? '20' : '15'}),
      radial-gradient(1000px 360px at 80% 120%, rgba(255,255,255,0.15), transparent 50%),
      radial-gradient(800px 260px at 5% 0%, rgba(255,255,255,0.18), transparent 55%),
      linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.20))
    `,
    backgroundBlendMode: 'overlay, normal, normal, normal'
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl ${className}`} 
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className={baseClasses}
        style={gradientStyle}
        role="article"
      >
        {/* Overlay sutil para mejorar contraste del texto si es necesario */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        
        {/* Contenido */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* Onda inferior con gradiente del acento */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-20 z-0" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`wave-gradient-${waveId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#000000', stopOpacity: 0.25 }} />
            <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path 
          d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
          fill={`url(#wave-gradient-${waveId})`}
        />
      </svg>
    </div>
  )
}

// Componentes especializados para facilidad de uso
export const PurpleAccentCard: React.FC<Omit<TexturedAccentCardProps, 'accent'>> = (props) => (
  <TexturedAccentCard {...props} accent="purple" />
)

export const PinkAccentCard: React.FC<Omit<TexturedAccentCardProps, 'accent'>> = (props) => (
  <TexturedAccentCard {...props} accent="pink" />
)

export const RoseAccentCard: React.FC<Omit<TexturedAccentCardProps, 'accent'>> = (props) => (
  <TexturedAccentCard {...props} accent="rose" />
)

export const AmberAccentCard: React.FC<Omit<TexturedAccentCardProps, 'accent'>> = (props) => (
  <TexturedAccentCard {...props} accent="amber" />
)

export const BlueAccentCard: React.FC<Omit<TexturedAccentCardProps, 'accent'>> = (props) => (
  <TexturedAccentCard {...props} accent="blue" />
)
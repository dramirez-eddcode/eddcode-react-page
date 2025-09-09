// components/ui/TexturedCard.tsx - Tarjetas con gradientes, ruido y variantes de colores
import React from 'react'

interface TexturedCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'blue' | 'purple' | 'cyan' | 'warm'
  hoverable?: boolean
  style?: React.CSSProperties
}

export const TexturedCard: React.FC<TexturedCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = true,
  style
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-2xl p-8 
    ring-1 ring-soft 
    shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_60px_-12px_rgba(0,0,0,0.9)]
    noise-overlay
    ${hoverable ? 'transition-all duration-300 hover:ring-white/16 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_40px_80px_-12px_rgba(0,0,0,0.95)] hover:scale-[1.02]' : ''}
  `

  const getVariantClasses = () => {
    switch (variant) {
      case 'blue':
        return 'textured-bg from-accent-blue-start/35 via-accent-blue-mid/20 to-bg-deep/90'
      case 'purple':
        return 'textured-bg from-accent-purple-start/35 via-accent-purple-mid/20 to-bg-deep/90'
      case 'cyan':
        return 'textured-bg from-accent-pink-start/35 via-accent-pink-mid/20 to-bg-deep/90'
      case 'warm':
        return 'textured-bg from-accent-amber-start/35 via-accent-amber-mid/20 to-bg-deep/90'
      default:
        return 'textured-bg from-bg-card/70 via-bg-surface/50 to-bg-deep/90'
    }
  }

  return (
    <div 
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={style}
      role="article"
    >
      {children}
    </div>
  )
}

// Componentes especializados para mayor facilidad de uso
export const TexturedCardBlue: React.FC<Omit<TexturedCardProps, 'variant'>> = (props) => (
  <TexturedCard {...props} variant="blue" />
)

export const TexturedCardPurple: React.FC<Omit<TexturedCardProps, 'variant'>> = (props) => (
  <TexturedCard {...props} variant="purple" />
)

export const TexturedCardCyan: React.FC<Omit<TexturedCardProps, 'variant'>> = (props) => (
  <TexturedCard {...props} variant="cyan" />
)

export const TexturedCardWarm: React.FC<Omit<TexturedCardProps, 'variant'>> = (props) => (
  <TexturedCard {...props} variant="warm" />
)
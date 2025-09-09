// components/ui/TexturedWaveCard.tsx - Variante con ondas SVG en el fondo inferior
'use client'
import React from 'react'

interface TexturedWaveCardProps {
  children: React.ReactNode
  className?: string
  waveColor?: string
  style?: React.CSSProperties
}

export const TexturedWaveCard: React.FC<TexturedWaveCardProps> = ({ 
  children, 
  className = '',
  waveColor = 'rgba(255,255,255,0.1)',
  style
}) => {
  const waveId = React.useId()
  
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`} style={style}>
      <div className="
        relative z-10 p-8
        textured-bg from-bg-gradient/60 via-bg-card/40 to-bg-deep/80
        ring-1 ring-white/10 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.8)]
        noise-overlay
        transition-all duration-300 hover:ring-white/20
      ">
        {children}
      </div>
      
      <svg 
        className="absolute bottom-0 left-0 w-full h-24 z-0" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`wave-gradient-${waveId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: waveColor, stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: waveColor, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: waveColor, stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path 
          d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
          fill={`url(#wave-gradient-${waveId})`}
        />
        <path 
          d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 L1200,120 L0,120 Z" 
          fill={waveColor}
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}
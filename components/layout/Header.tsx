// components/layout/Header.tsx - Header accesible con navegación
'use client'
import React from 'react'
import { TerminalLogo } from '@/components/ui/TerminalLogo'

interface HeaderProps {
  onContactClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#portafolio', label: 'Portafolio' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-400/50 rounded-lg px-2 py-1"
              aria-label="EddCode - Inicio"
            >
              <TerminalLogo className="text-2xl" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-fg-soft hover:text-white transition-colors
                  focus:outline-none focus:ring-2 focus:ring-brand-primary/50 
                  rounded-lg px-3 py-2
                "
                aria-label={`Ir a sección ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={onContactClick}
              className="
                px-6 py-2 bg-gradient-to-r from-accent-amber-start to-accent-amber-mid text-white font-medium rounded-lg
                hover:from-accent-amber-mid hover:to-accent-amber-glow hover:shadow-lg hover:shadow-accent-amber-glow/25 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50
              "
              aria-label="Contactar con el equipo"
            >
              Contacto
            </button>
          </div>

          <button
            className="md:hidden p-2 text-white hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menú de navegación"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 py-4 border-t border-white/10"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  block px-3 py-3 text-fg-soft hover:text-white transition-colors
                  focus:outline-none focus:ring-2 focus:ring-brand-primary/50 
                  rounded-lg
                "
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Ir a sección ${item.label}`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                onContactClick()
                setIsMenuOpen(false)
              }}
              className="
                w-full mt-4 px-6 py-3 bg-gradient-to-r from-accent-amber-start to-accent-amber-mid text-white font-medium rounded-lg
                hover:from-accent-amber-mid hover:to-accent-amber-glow hover:shadow-lg hover:shadow-accent-amber-glow/25 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-accent-amber-glow/50
              "
              aria-label="Contactar con el equipo"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
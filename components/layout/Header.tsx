// components/layout/Header.tsx - Header accesible con navegación y analytics
'use client'
import React from 'react'
import { TerminalLogo } from '@/components/ui/TerminalLogo'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useTranslation } from '@/lib/useTranslation'
import { trackEvent } from '@/components/analytics/gtag'

interface HeaderProps {
  onContactClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { t } = useTranslation()

  const handleNavClick = (section: string) => {
    trackEvent('nav_click', {
      event_category: 'navigation',
      nav_section: section,
      nav_location: 'header'
    })
  }

  const navItems = [
    { href: '#servicios', label: t('nav.services') },
    { href: '#beneficios', label: t('nav.benefits') },
    { href: '#portafolio', label: t('nav.portfolio') },
    { href: '#testimonios', label: t('nav.testimonials') },
    { href: '#faq', label: t('nav.faq') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-400/50 rounded-lg px-2 py-1"
              aria-label="EDDCODE - Inicio"
            >
              <TerminalLogo className="text-2xl" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href.replace('#', ''))}
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
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <button
                onClick={() => {
                  trackEvent('cta_click', {
                    event_category: 'conversion',
                    cta_name: 'contact_button',
                    cta_location: 'header_desktop'
                  })
                  onContactClick()
                }}
                className="
                  px-6 py-2 bg-gradient-to-r from-brand-dark to-brand-primary text-fg-light font-medium rounded-lg
                  hover:from-brand-primary hover:to-accent-purple-glow hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-brand-primary/50
                "
                aria-label={t('nav.contact')}
              >
                {t('nav.contact')}
              </button>
            </div>
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
            className="md:hidden mt-4 py-4 border-t border-white/10 space-y-2"
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
                onClick={() => {
                  handleNavClick(item.href.replace('#', ''))
                  setIsMenuOpen(false)
                }}
                aria-label={`Ir a sección ${item.label}`}
              >
                {item.label}
              </a>
            ))}

            {/* Language selector en móvil */}
            <div className="px-3 py-3 flex items-center justify-between">
              <span className="text-fg-muted text-sm">{t('nav.language') || 'Idioma'}</span>
              <LanguageSelector />
            </div>

            <button
              onClick={() => {
                trackEvent('cta_click', {
                  event_category: 'conversion',
                  cta_name: 'contact_button',
                  cta_location: 'header_mobile'
                })
                onContactClick()
                setIsMenuOpen(false)
              }}
              className="
                w-full mt-2 px-6 py-3 bg-gradient-to-r from-brand-dark to-brand-primary text-fg-light font-medium rounded-lg
                hover:from-brand-primary hover:to-accent-purple-glow hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-primary/50
              "
              aria-label="Contactar con el equipo"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
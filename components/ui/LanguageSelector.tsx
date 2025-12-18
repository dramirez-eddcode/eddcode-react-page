// components/ui/LanguageSelector.tsx - Selector de idioma con tracking
'use client'
import React, { useState } from 'react'
import { useTranslation } from '@/lib/useTranslation'
import { trackLanguageSwitch } from '@/components/analytics/gtag'

export const LanguageSelector: React.FC = () => {
  const { locale, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-3 py-2
          text-fg-soft hover:text-fg-strong
          border border-ring-soft hover:border-ring-medium
          rounded-lg transition-all duration-200
          bg-bg-surface/50 hover:bg-bg-surface
        "
        aria-label="Cambiar idioma"
      >
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="
            absolute top-full right-0 mt-2 z-50
            bg-bg-surface border border-ring-soft rounded-lg
            shadow-xl min-w-[120px]
          ">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  const fromLocale = locale as 'es' | 'en'
                  const toLocale = language.code as 'es' | 'en'
                  if (fromLocale !== toLocale) {
                    trackLanguageSwitch(fromLocale, toLocale)
                  }
                  changeLanguage(toLocale)
                  setIsOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3
                  text-left hover:bg-bg-card transition-colors
                  ${locale === language.code ? 'bg-bg-card text-fg-strong' : 'text-fg-soft'}
                  first:rounded-t-lg last:rounded-b-lg
                `}
              >
                <span>{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {locale === language.code && (
                  <svg className="w-4 h-4 ml-auto text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
// lib/useTranslation.ts - Hook para manejar traducciones con persistencia
'use client'
import { usePathname, useRouter } from 'next/navigation'
import { translations, type Locale } from './translations'
import { useState, useEffect, useCallback } from 'react'

// Helper para manejar cookies en el cliente
const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document === 'undefined') return
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

export const useTranslation = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>('es')

  useEffect(() => {
    // Detectar idioma desde la URL: /es o /en
    const segments = pathname.split('/')
    const pathLocale = segments[1] === 'en' ? 'en' : 'es'
    setLocale(pathLocale)
  }, [pathname])

  const t = useCallback((key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[locale]

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k]
    }

    return (typeof value === 'string' ? value : key)
  }, [locale])

  const changeLanguage = useCallback((newLocale: Locale) => {
    // Guardar preferencia en cookie para el middleware
    setCookie('NEXT_LOCALE', newLocale, 365)

    // Navegar a la nueva URL con el locale
    if (newLocale === 'en') {
      router.push('/en')
    } else {
      router.push('/es')
    }
  }, [router])

  return {
    t,
    locale,
    changeLanguage,
    isSpanish: locale === 'es',
    isEnglish: locale === 'en',
  }
}

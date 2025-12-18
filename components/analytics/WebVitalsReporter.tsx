// components/analytics/WebVitalsReporter.tsx
// Componente para reportar Web Vitals a múltiples destinos
'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { trackEvent } from './gtag'

// Tipos de métricas Web Vitals
type WebVitalMetric = {
  id: string
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  entries: PerformanceEntry[]
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'back-forward-cache' | 'prerender'
}

// Umbrales de rendimiento según Google
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 }
}

// Obtener calificación de la métrica
const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS]
  if (!threshold) return 'needs-improvement'

  if (value <= threshold.good) return 'good'
  if (value >= threshold.poor) return 'poor'
  return 'needs-improvement'
}

// Formatear valor según la métrica
const formatValue = (name: string, value: number): number => {
  // CLS no tiene unidades, las demás son en ms
  if (name === 'CLS') return Math.round(value * 1000) / 1000
  return Math.round(value)
}

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    const { id, name, value, delta, entries, navigationType } = metric as WebVitalMetric

    const rating = getRating(name, value)
    const formattedValue = formatValue(name, value)

    // Enviar a Google Analytics
    trackEvent('web_vitals', {
      event_category: 'Web Vitals',
      event_label: name,
      // Google Analytics espera enteros para el valor
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      // Parámetros personalizados
      metric_id: id,
      metric_name: name,
      metric_value: formattedValue,
      metric_rating: rating,
      metric_delta: Math.round(delta),
      navigation_type: navigationType,
      // Non-interaction para no afectar bounce rate
      non_interaction: true
    })

    // Log en desarrollo para debugging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${name}:`, {
        value: formattedValue,
        rating,
        delta: Math.round(delta),
        navigationType
      })
    }
  })

  return null
}

// Hook para usar en componentes que necesiten acceso a métricas
export function useWebVitalsCallback(
  callback: (metric: WebVitalMetric) => void
) {
  useReportWebVitals((metric) => {
    callback(metric as WebVitalMetric)
  })
}

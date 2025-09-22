'use client'

import { useEffect, useRef, useCallback } from 'react'
import { 
  trackSectionView, 
  trackScrollDepth, 
  trackTimeOnPage, 
  initializeUserSession,
  trackPageLoad,
  trackError
} from './gtag'

// Hook para tracking automático de secciones visibles
export const useSectionTracking = (sectionName: string, threshold = 0.5) => {
  const sectionRef = useRef<HTMLElement>(null)
  const startTimeRef = useRef<number>(0)
  const hasBeenTracked = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenTracked.current) {
            startTimeRef.current = Date.now()
            hasBeenTracked.current = true
            trackSectionView(sectionName)
          } else if (!entry.isIntersecting && startTimeRef.current > 0) {
            const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
            if (timeSpent > 2) { // Solo trackear si estuvo más de 2 segundos
              trackSectionView(sectionName, timeSpent)
            }
            startTimeRef.current = 0
          }
        })
      },
      { threshold }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [sectionName, threshold])

  return sectionRef
}

// Hook para tracking de scroll depth
export const useScrollTracking = () => {
  const scrollDepthsTracked = useRef(new Set<number>())

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
      
      // Trackear en intervalos de 25%
      const milestones = [25, 50, 75, 90, 100]
      milestones.forEach(milestone => {
        if (scrolled >= milestone && !scrollDepthsTracked.current.has(milestone)) {
          scrollDepthsTracked.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

// Hook para tracking de tiempo en página
export const useTimeTracking = () => {
  const sessionStartRef = useRef<number>(0)
  const intervalsTracked = useRef(new Set<number>())

  useEffect(() => {
    sessionStartRef.current = Date.now()

    const interval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - sessionStartRef.current) / 1000)
      
      // Trackear en intervalos específicos
      const milestones = [30, 60, 120, 300, 600] // 30s, 1m, 2m, 5m, 10m
      milestones.forEach(milestone => {
        if (timeSpent >= milestone && !intervalsTracked.current.has(milestone)) {
          intervalsTracked.current.add(milestone)
          trackTimeOnPage(milestone)
        }
      })
    }, 10000) // Revisar cada 10 segundos

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Trackear al salir de la página
    const handleBeforeUnload = () => {
      const finalTime = Math.round((Date.now() - sessionStartRef.current) / 1000)
      if (finalTime > 5) { // Solo si estuvo más de 5 segundos
        trackTimeOnPage(finalTime)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])
}

// Hook para tracking de performance
export const usePerformanceTracking = () => {
  useEffect(() => {
    // Trackear tiempo de carga
    const handleLoad = () => {
      setTimeout(() => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        if (loadTime > 0) {
          trackPageLoad(loadTime)
        }
      }, 0)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])
}

// Hook para tracking de errores
export const useErrorTracking = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackError('javascript_error', event.message, event.filename?.split('/').pop())
    }

    const handleRejection = (event: PromiseRejectionEvent) => {
      trackError('promise_rejection', String(event.reason))
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleRejection)
    }
  }, [])
}

// Hook principal que inicializa todo el tracking
export const useAnalyticsInitialization = () => {
  useScrollTracking()
  useTimeTracking()
  usePerformanceTracking()
  useErrorTracking()

  useEffect(() => {
    initializeUserSession()
    
    // Tracking adicional para optimización de conversión
    const handlePageFocus = () => {
      trackSectionView('page_focus_regained')
    }
    
    const handlePageBlur = () => {
      trackSectionView('page_focus_lost')
    }
    
    window.addEventListener('focus', handlePageFocus)
    window.addEventListener('blur', handlePageBlur)
    
    return () => {
      window.removeEventListener('focus', handlePageFocus)
      window.removeEventListener('blur', handlePageBlur)
    }
  }, [])
}

// Hook para tracking de elementos específicos con click y hover
export const useElementTracking = (
  elementName: string, 
  trackingFunction: (name: string, action: string) => void
) => {
  const elementRef = useRef<HTMLElement>(null)

  const handleClick = useCallback(() => {
    trackingFunction(elementName, 'click')
  }, [elementName, trackingFunction])

  const handleMouseEnter = useCallback(() => {
    trackingFunction(elementName, 'hover')
  }, [elementName, trackingFunction])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.addEventListener('click', handleClick)
    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('click', handleClick)
      element.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [handleClick, handleMouseEnter])

  return elementRef
}

// Hook para tracking de formularios con validación
export const useFormTracking = (
  formType: 'contact' | 'schedule',
  formSource: string
) => {
  const trackFormStart = useCallback(() => {
    // Implementar si necesitas trackear cuando empieza a llenar el form
  }, [])

  const trackFormFieldFocus = useCallback((fieldName: string) => {
    trackSectionView(`${formType}_form_field_${fieldName}`)
  }, [formType])

  const trackFormValidationError = useCallback((fieldName: string, error: string) => {
    trackError('form_validation', `${fieldName}: ${error}`, `${formType}_form`)
  }, [formType])

  return {
    trackFormStart,
    trackFormFieldFocus,
    trackFormValidationError
  }
}
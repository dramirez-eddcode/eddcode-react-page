'use client'

import { useEffect, useRef, useCallback } from 'react'
import { trackEvent } from './gtag'

// Hook para tracking avanzado de rendimiento web
export const useWebVitals = () => {
  useEffect(() => {
    // Track Core Web Vitals cuando están disponibles
    const trackWebVital = (name: string, value: number, id: string) => {
      trackEvent('web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_id: id,
        event_category: 'performance'
      })
    }

    // Intentar usar web-vitals si está disponible, sino usar métricas básicas
    try {
      // @ts-ignore - web-vitals might not be installed
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(trackWebVital)
        getFID(trackWebVital)
        getFCP(trackWebVital)
        getLCP(trackWebVital)
        getTTFB(trackWebVital)
      }).catch(() => {
        // Fallback para métricas básicas si web-vitals no está disponible
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (navigation) {
            trackEvent('page_load_timing', {
              dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
              load_complete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
              event_category: 'performance'
            })
          }
        }
      })
    } catch (error) {
      // Fallback adicional
      console.log('Analytics: Using basic performance tracking')
    }
  }, [])
}

// Hook para tracking de interacciones avanzadas
export const useInteractionTracking = () => {
  const interactionCountRef = useRef(0)
  const sessionStartRef = useRef(Date.now())

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout

    const trackInteraction = (type: string) => {
      interactionCountRef.current++
      
      trackEvent('user_interaction', {
        interaction_type: type,
        interaction_count: interactionCountRef.current,
        session_duration: Math.round((Date.now() - sessionStartRef.current) / 1000),
        event_category: 'engagement'
      })

      // Reset inactivity timer
      clearTimeout(inactivityTimer)
      inactivityTimer = setTimeout(() => {
        trackEvent('user_inactive', {
          last_interaction: type,
          inactive_after_seconds: 30,
          event_category: 'engagement'
        })
      }, 30000)
    }

    const handleClick = () => trackInteraction('click')
    const handleKeyDown = () => trackInteraction('keyboard')
    const handleMouseMove = () => trackInteraction('mouse_move')
    const handleTouchStart = () => trackInteraction('touch')

    // Throttle mouse move events
    let mouseMoveThrottle: NodeJS.Timeout
    const throttledMouseMove = () => {
      if (!mouseMoveThrottle) {
        mouseMoveThrottle = setTimeout(() => {
          handleMouseMove()
          mouseMoveThrottle = null as any
        }, 5000)
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousemove', throttledMouseMove)
    document.addEventListener('touchstart', handleTouchStart)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousemove', throttledMouseMove)
      document.removeEventListener('touchstart', handleTouchStart)
      clearTimeout(inactivityTimer)
      clearTimeout(mouseMoveThrottle)
    }
  }, [])
}

// Hook para tracking de viewport y visibilidad
export const useVisibilityTracking = () => {
  const visibilityStartRef = useRef<number | null>(null)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (visibilityStartRef.current) {
          const visibleTime = Date.now() - visibilityStartRef.current
          trackEvent('page_visibility_hidden', {
            visible_time_ms: visibleTime,
            event_category: 'user_experience'
          })
          visibilityStartRef.current = null
        }
      } else {
        visibilityStartRef.current = Date.now()
        trackEvent('page_visibility_visible', {
          event_category: 'user_experience'
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    // Initial state
    if (!document.hidden) {
      visibilityStartRef.current = Date.now()
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
}

// Hook para tracking de rage clicks (frustración del usuario)
export const useRageClickTracking = () => {
  const clicksRef = useRef<Array<{ timestamp: number; element: string }>>([])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element
      const elementInfo = `${target.tagName.toLowerCase()}${target.className ? '.' + target.className.split(' ')[0] : ''}`
      
      const now = Date.now()
      clicksRef.current.push({ timestamp: now, element: elementInfo })
      
      // Keep only clicks from last 2 seconds
      clicksRef.current = clicksRef.current.filter(click => now - click.timestamp < 2000)
      
      // Detect rage clicking (4+ clicks on same element in 2 seconds)
      const sameElementClicks = clicksRef.current.filter(click => click.element === elementInfo)
      if (sameElementClicks.length >= 4) {
        trackEvent('rage_click_detected', {
          element_selector: elementInfo,
          click_count: sameElementClicks.length,
          event_category: 'user_frustration'
        })
        clicksRef.current = [] // Reset to avoid duplicate tracking
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

// Hook para tracking de network quality
export const useNetworkTracking = () => {
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      
      const trackNetworkInfo = () => {
        trackEvent('network_information', {
          connection_type: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          save_data: connection.saveData || false,
          event_category: 'technical'
        })
      }

      trackNetworkInfo()
      connection.addEventListener('change', trackNetworkInfo)
      
      return () => connection.removeEventListener('change', trackNetworkInfo)
    }
  }, [])
}

// Hook principal que combina todos los trackings avanzados
export const useAdvancedAnalytics = () => {
  useWebVitals()
  useInteractionTracking()
  useVisibilityTracking()
  useRageClickTracking()
  useNetworkTracking()
}

// Hook para tracking de business metrics específicos
export const useBusinessMetrics = () => {
  const sessionValueRef = useRef(0)

  const addSessionValue = useCallback((value: number, reason: string) => {
    sessionValueRef.current += value
    trackEvent('session_value_update', {
      added_value: value,
      total_session_value: sessionValueRef.current,
      value_reason: reason,
      event_category: 'business_metrics'
    })
  }, [])

  const trackConversionFunnel = useCallback((step: string, completed: boolean) => {
    trackEvent('conversion_funnel', {
      funnel_step: step,
      step_completed: completed,
      event_category: 'conversion'
    })
  }, [])

  const trackUserEngagementScore = useCallback(() => {
    // Calculate engagement score based on various factors
    const score = Math.min(100, sessionValueRef.current * 2) // Simple scoring
    
    trackEvent('engagement_score', {
      score: Math.round(score),
      session_value: sessionValueRef.current,
      event_category: 'engagement'
    })
  }, [])

  return {
    addSessionValue,
    trackConversionFunnel,
    trackUserEngagementScore
  }
}
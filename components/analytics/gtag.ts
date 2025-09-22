declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      ...parameters
    })
  }
}

// === CONVERSION EVENTS ===
export const trackContactFormOpen = (formType: 'contact' | 'schedule', source?: string) => {
  trackEvent('form_open', {
    form_type: formType,
    form_source: source || 'unknown',
    event_category: 'lead_generation',
    value: formType === 'schedule' ? 50 : 25
  })
}

export const trackContactFormSubmit = (formType: 'contact' | 'schedule', source?: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    form_source: source || 'unknown',
    event_category: 'conversion',
    value: formType === 'schedule' ? 100 : 75
  })
}

export const trackContactFormError = (formType: 'contact' | 'schedule', error: string) => {
  trackEvent('form_error', {
    form_type: formType,
    error_message: error,
    event_category: 'error'
  })
}

// === ENGAGEMENT EVENTS ===
export const trackServiceInterest = (serviceName: string, interactionType: 'hover' | 'click' | 'view') => {
  trackEvent('service_interest', {
    service_name: serviceName,
    interaction_type: interactionType,
    event_category: 'engagement',
    value: interactionType === 'click' ? 10 : 5
  })
}

export const trackCallToAction = (ctaName: string, location: string, ctaType: 'primary' | 'secondary' = 'primary') => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    cta_type: ctaType,
    event_category: 'engagement',
    value: ctaType === 'primary' ? 20 : 10
  })
}

export const trackSectionView = (sectionName: string, timeSpent?: number) => {
  trackEvent('section_view', {
    section_name: sectionName,
    time_spent: timeSpent,
    event_category: 'engagement'
  })
}

export const trackPortfolioView = (projectName: string, projectType: string) => {
  trackEvent('portfolio_view', {
    project_name: projectName,
    project_type: projectType,
    event_category: 'engagement',
    value: 5
  })
}

// === USER EXPERIENCE EVENTS ===
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
    event_category: 'user_experience'
  })
}

export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    time_seconds: seconds,
    time_category: seconds > 120 ? 'engaged' : seconds > 30 ? 'interested' : 'quick_visit',
    event_category: 'user_experience'
  })
}

export const trackDeviceType = () => {
  const isMobile = window.innerWidth <= 768
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024
  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  
  trackEvent('device_type', {
    device_category: deviceType,
    screen_width: window.innerWidth,
    screen_height: window.innerHeight,
    event_category: 'technical'
  })
}

// === BUSINESS SPECIFIC EVENTS ===
export const trackCapabilityInterest = (capability: string, level: 'view' | 'hover' | 'click') => {
  trackEvent('capability_interest', {
    capability_name: capability,
    interaction_level: level,
    event_category: 'business_interest',
    value: level === 'click' ? 15 : level === 'hover' ? 8 : 3
  })
}

export const trackConsoleInteraction = (command: string, success: boolean) => {
  trackEvent('console_interaction', {
    command_type: command,
    interaction_success: success,
    event_category: 'engagement',
    value: 20
  })
}

export const trackTechnologyInterest = (technology: string) => {
  trackEvent('technology_interest', {
    technology_name: technology,
    event_category: 'technical_interest',
    value: 5
  })
}

// === PERFORMANCE TRACKING ===
export const trackPageLoad = (loadTime: number) => {
  trackEvent('page_load_time', {
    load_time_ms: loadTime,
    load_category: loadTime < 1000 ? 'fast' : loadTime < 3000 ? 'medium' : 'slow',
    event_category: 'performance'
  })
}

export const trackError = (errorType: string, errorMessage: string, component?: string) => {
  trackEvent('application_error', {
    error_type: errorType,
    error_message: errorMessage.substring(0, 100),
    component_name: component,
    event_category: 'error'
  })
}

// === SOCIAL PROOF EVENTS ===
export const trackTrustIndicator = (indicator: string, action: 'view' | 'click') => {
  trackEvent('trust_indicator', {
    indicator_name: indicator,
    indicator_action: action,
    event_category: 'social_proof',
    value: action === 'click' ? 10 : 3
  })
}

// === UTILITY FUNCTIONS ===
export const initializeUserSession = () => {
  const sessionStart = Date.now()
  const isReturningUser = localStorage.getItem('eddcode_visitor') === 'true'
  
  if (!isReturningUser) {
    localStorage.setItem('eddcode_visitor', 'true')
    trackEvent('new_visitor', {
      event_category: 'user_acquisition',
      is_first_visit: true
    })
  } else {
    trackEvent('returning_visitor', {
      event_category: 'user_retention',
      is_returning: true
    })
  }
  
  trackDeviceType()
  
  return sessionStart
}

export const trackUserJourney = (step: string, stepNumber: number, totalSteps: number) => {
  trackEvent('user_journey', {
    journey_step: step,
    step_number: stepNumber,
    total_steps: totalSteps,
    completion_percentage: Math.round((stepNumber / totalSteps) * 100),
    event_category: 'user_flow'
  })
}
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}

// === UTILIDADES DE LOCALE ===
export const getLocale = (): 'es' | 'en' => {
  if (typeof window === 'undefined') return 'es'
  return window.location.pathname.startsWith('/en') ? 'en' : 'es'
}

export const getLocalizedEventName = (baseName: string): string => {
  const locale = getLocale()
  return `${baseName}_${locale}`
}

// === TRACK EVENT BASE ===
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocale()
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      language: locale,
      page_language: locale === 'es' ? 'Spanish' : 'English',
      ...parameters
    })
  }
}

// === TRACK EVENT CON LOCALE EXPLÍCITO ===
export const trackLocalizedEvent = (eventName: string, locale: 'es' | 'en', parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      language: locale,
      page_language: locale === 'es' ? 'Spanish' : 'English',
      content_language: locale,
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

export const trackTestimonialView = (testimonialId: string, company: string, index: number) => {
  trackEvent('testimonial_view', {
    testimonial_id: testimonialId,
    testimonial_company: company,
    testimonial_index: index,
    event_category: 'social_proof',
    value: 5
  })
  addLeadScore('service_interest')
}

// === WHATSAPP CONVERSION EVENT ===
export const trackWhatsAppClick = (source: string = 'floating_widget') => {
  const locale = getLocale()

  // Track como evento de engagement
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    click_location: source,
    language: locale,
    value: 75
  })

  // Track como lead generation
  trackLeadGeneration({
    type: 'contact',
    source: `whatsapp_${source}`,
    value: 75
  })

  addLeadScore('cta_click')
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

// === LEAD SCORING SYSTEM ===
interface LeadScore {
  score: number
  tier: 'cold' | 'warm' | 'hot' | 'qualified'
  actions: string[]
}

const LEAD_SCORING_WEIGHTS = {
  page_view: 1,
  section_view: 2,
  service_interest: 5,
  capability_interest: 5,
  portfolio_view: 3,
  cta_click: 10,
  form_open: 15,
  form_submit: 50,
  schedule_form_submit: 75,
  returning_visit: 10,
  deep_scroll: 5,
  high_engagement_time: 10
}

export const calculateLeadScore = (): LeadScore => {
  if (typeof window === 'undefined') return { score: 0, tier: 'cold', actions: [] }

  const storedScore = localStorage.getItem('eddcode_lead_score')
  const storedActions = localStorage.getItem('eddcode_lead_actions')

  const score = storedScore ? parseInt(storedScore, 10) : 0
  const actions = storedActions ? JSON.parse(storedActions) : []

  let tier: LeadScore['tier'] = 'cold'
  if (score >= 100) tier = 'qualified'
  else if (score >= 50) tier = 'hot'
  else if (score >= 20) tier = 'warm'

  return { score, tier, actions }
}

export const addLeadScore = (action: keyof typeof LEAD_SCORING_WEIGHTS, customScore?: number) => {
  if (typeof window === 'undefined') return

  const points = customScore ?? LEAD_SCORING_WEIGHTS[action] ?? 1
  const currentScore = parseInt(localStorage.getItem('eddcode_lead_score') || '0', 10)
  const currentActions = JSON.parse(localStorage.getItem('eddcode_lead_actions') || '[]')

  const newScore = currentScore + points
  const newActions = [...currentActions, { action, points, timestamp: Date.now() }]

  localStorage.setItem('eddcode_lead_score', String(newScore))
  localStorage.setItem('eddcode_lead_actions', JSON.stringify(newActions.slice(-50))) // Keep last 50

  const { tier } = calculateLeadScore()

  // Track lead score update
  trackEvent('lead_score_update', {
    event_category: 'lead_scoring',
    action_type: action,
    points_added: points,
    total_score: newScore,
    lead_tier: tier
  })

  // Track tier change
  const previousTier = getTierFromScore(currentScore)
  if (tier !== previousTier) {
    trackEvent('lead_tier_change', {
      event_category: 'lead_scoring',
      previous_tier: previousTier,
      new_tier: tier,
      total_score: newScore
    })
  }
}

const getTierFromScore = (score: number): LeadScore['tier'] => {
  if (score >= 100) return 'qualified'
  if (score >= 50) return 'hot'
  if (score >= 20) return 'warm'
  return 'cold'
}

// === E-COMMERCE / SERVICE EVENTS (GA4 Recommended Events) ===
export const trackServiceView = (service: {
  id: string
  name: string
  category: string
  price?: number
}) => {
  const locale = getLocale()
  trackEvent('view_item', {
    event_category: 'ecommerce',
    currency: 'USD',
    value: service.price || 0,
    items: [{
      item_id: service.id,
      item_name: service.name,
      item_category: service.category,
      item_variant: locale,
      price: service.price || 0
    }]
  })
  addLeadScore('service_interest')
}

export const trackServiceListView = (services: Array<{
  id: string
  name: string
  category: string
}>) => {
  const locale = getLocale()
  trackEvent('view_item_list', {
    event_category: 'ecommerce',
    item_list_id: 'services',
    item_list_name: locale === 'es' ? 'Servicios' : 'Services',
    items: services.map((service, index) => ({
      item_id: service.id,
      item_name: service.name,
      item_category: service.category,
      item_variant: locale,
      index: index
    }))
  })
}

export const trackServiceSelect = (service: {
  id: string
  name: string
  category: string
}) => {
  const locale = getLocale()
  trackEvent('select_item', {
    event_category: 'ecommerce',
    item_list_id: 'services',
    items: [{
      item_id: service.id,
      item_name: service.name,
      item_category: service.category,
      item_variant: locale
    }]
  })
  addLeadScore('service_interest')
}

// === ENHANCED CONVERSION TRACKING ===
export const trackLeadGeneration = (leadData: {
  type: 'contact' | 'schedule' | 'quote'
  source: string
  service_interest?: string
  value?: number
}) => {
  const locale = getLocale()
  const { tier, score } = calculateLeadScore()

  trackEvent('generate_lead', {
    event_category: 'conversion',
    lead_type: leadData.type,
    lead_source: leadData.source,
    service_interest: leadData.service_interest,
    currency: 'USD',
    value: leadData.value || (leadData.type === 'schedule' ? 100 : 50),
    language: locale,
    lead_tier: tier,
    lead_score: score
  })

  // También enviar como conversión de Google Ads si está configurado
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
      event_category: 'lead_generation',
      value: leadData.value || (leadData.type === 'schedule' ? 100 : 50),
      currency: 'USD'
    })
  }
}

// === LANGUAGE SWITCH TRACKING ===
export const trackLanguageSwitch = (fromLocale: 'es' | 'en', toLocale: 'es' | 'en') => {
  trackEvent('language_switch', {
    event_category: 'user_preference',
    from_language: fromLocale,
    to_language: toLocale,
    from_language_name: fromLocale === 'es' ? 'Spanish' : 'English',
    to_language_name: toLocale === 'es' ? 'Spanish' : 'English'
  })

  // Update user property
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', {
      preferred_language: toLocale
    })
  }
}

// === ENGAGEMENT QUALITY SCORING ===
export const trackEngagementQuality = () => {
  if (typeof window === 'undefined') return

  const sessionStart = parseInt(localStorage.getItem('eddcode_session_start') || String(Date.now()), 10)
  const timeOnSite = Math.round((Date.now() - sessionStart) / 1000)
  const scrollDepth = parseInt(localStorage.getItem('eddcode_max_scroll') || '0', 10)
  const interactionCount = parseInt(localStorage.getItem('eddcode_interactions') || '0', 10)
  const { score: leadScore, tier } = calculateLeadScore()

  // Calculate engagement quality score (0-100)
  const timeScore = Math.min(30, timeOnSite / 6) // Max 30 points for 3+ minutes
  const scrollScore = Math.min(30, scrollDepth / 3.33) // Max 30 points for 100% scroll
  const interactionScore = Math.min(20, interactionCount * 2) // Max 20 points for 10+ interactions
  const leadBonus = Math.min(20, leadScore / 5) // Max 20 points based on lead score

  const qualityScore = Math.round(timeScore + scrollScore + interactionScore + leadBonus)

  let qualityTier: 'low' | 'medium' | 'high' | 'excellent' = 'low'
  if (qualityScore >= 80) qualityTier = 'excellent'
  else if (qualityScore >= 60) qualityTier = 'high'
  else if (qualityScore >= 30) qualityTier = 'medium'

  trackEvent('engagement_quality', {
    event_category: 'engagement',
    quality_score: qualityScore,
    quality_tier: qualityTier,
    time_on_site: timeOnSite,
    scroll_depth: scrollDepth,
    interaction_count: interactionCount,
    lead_score: leadScore,
    lead_tier: tier
  })

  return { qualityScore, qualityTier }
}

// === SESSION TRACKING HELPERS ===
export const initializeSession = () => {
  if (typeof window === 'undefined') return

  if (!localStorage.getItem('eddcode_session_start')) {
    localStorage.setItem('eddcode_session_start', String(Date.now()))
  }
  localStorage.setItem('eddcode_interactions', '0')
  localStorage.setItem('eddcode_max_scroll', '0')
}

export const incrementInteraction = () => {
  if (typeof window === 'undefined') return
  const current = parseInt(localStorage.getItem('eddcode_interactions') || '0', 10)
  localStorage.setItem('eddcode_interactions', String(current + 1))
}

export const updateMaxScroll = (percentage: number) => {
  if (typeof window === 'undefined') return
  const current = parseInt(localStorage.getItem('eddcode_max_scroll') || '0', 10)
  if (percentage > current) {
    localStorage.setItem('eddcode_max_scroll', String(Math.round(percentage)))
    if (percentage >= 75) {
      addLeadScore('deep_scroll')
    }
  }
}
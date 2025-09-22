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
    window.gtag('event', eventName, parameters)
  }
}

export const trackContactFormOpen = (formType: 'contact' | 'schedule') => {
  trackEvent('contact_form_open', {
    form_type: formType,
    event_category: 'engagement'
  })
}

export const trackContactFormSubmit = (formType: 'contact' | 'schedule') => {
  trackEvent('contact_form_submit', {
    form_type: formType,
    event_category: 'conversion'
  })
}

export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', {
    service_name: serviceName,
    event_category: 'engagement'
  })
}

export const trackCallToAction = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    event_category: 'engagement'
  })
}
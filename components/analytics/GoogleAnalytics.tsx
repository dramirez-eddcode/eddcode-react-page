'use client'

import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

// Detectar locale desde URL
const getLocale = () => {
  if (typeof window === 'undefined') return 'es'
  const path = window.location.pathname
  return path.startsWith('/en') ? 'en' : 'es'
}

// Detectar fuente de tráfico
const getTrafficSource = () => {
  if (typeof window === 'undefined') return 'direct'
  const referrer = document.referrer
  if (!referrer) return 'direct'
  if (referrer.includes('google')) return 'google'
  if (referrer.includes('facebook') || referrer.includes('fb.')) return 'facebook'
  if (referrer.includes('linkedin')) return 'linkedin'
  if (referrer.includes('twitter') || referrer.includes('t.co')) return 'twitter'
  return 'referral'
}

export function GoogleAnalytics() {
  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      {/* Google Consent Mode v2 - Default to granted for non-EU */}
      <Script id="google-consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Consent Mode v2 - Default configuration
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });

          // Definir función para actualizar consentimiento si es necesario
          window.updateGoogleConsent = function(consent) {
            gtag('consent', 'update', consent);
          };
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Detectar información del usuario
          var locale = window.location.pathname.startsWith('/en') ? 'en' : 'es';
          var userCountry = Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown';
          var referrer = document.referrer;
          var trafficSource = !referrer ? 'direct' :
            referrer.includes('google') ? 'google' :
            referrer.includes('facebook') || referrer.includes('fb.') ? 'facebook' :
            referrer.includes('linkedin') ? 'linkedin' :
            referrer.includes('twitter') || referrer.includes('t.co') ? 'twitter' : 'referral';

          // Detectar si es primera visita
          var isFirstVisit = !localStorage.getItem('eddcode_visitor');
          var visitorId = localStorage.getItem('eddcode_visitor_id') ||
            'v_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
          if (!localStorage.getItem('eddcode_visitor_id')) {
            localStorage.setItem('eddcode_visitor_id', visitorId);
          }

          // Configurar GA4 con propiedades mejoradas
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            send_page_view: true,

            // Enhanced measurement
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true,
              form_interactions: true
            },

            // Custom dimensions (índices de GA4)
            custom_map: {
              'dimension1': 'user_locale',
              'dimension2': 'traffic_source',
              'dimension3': 'user_type',
              'dimension4': 'engagement_level',
              'dimension5': 'service_interest'
            },

            // Configuración de conversión
            conversion_linker: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true,

            // User properties
            user_properties: {
              preferred_language: locale,
              user_timezone: userCountry,
              first_visit_date: isFirstVisit ? new Date().toISOString().split('T')[0] : undefined,
              traffic_source: trafficSource,
              visitor_type: isFirstVisit ? 'new' : 'returning'
            },

            // Session data
            session_engaged: true,
            engagement_time_msec: 0
          });

          // Configurar User ID si está disponible (para usuarios registrados)
          if (visitorId) {
            gtag('config', '${GA_TRACKING_ID}', {
              'user_id': visitorId
            });
          }

          // Set user properties permanentemente
          gtag('set', 'user_properties', {
            preferred_language: locale,
            visitor_type: isFirstVisit ? 'new' : 'returning',
            traffic_source: trafficSource,
            device_category: window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop',
            screen_resolution: window.screen.width + 'x' + window.screen.height
          });

          // Evento de página vista mejorado
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            language: locale,
            traffic_source: trafficSource,
            is_first_visit: isFirstVisit
          });

          // Track si es primera visita
          if (isFirstVisit) {
            localStorage.setItem('eddcode_visitor', 'true');
            gtag('event', 'first_visit', {
              event_category: 'user_acquisition',
              language: locale,
              landing_page: window.location.pathname,
              traffic_source: trafficSource
            });
          }

          // Evento de sesión iniciada
          gtag('event', 'session_start_custom', {
            event_category: 'engagement',
            language: locale,
            user_type: isFirstVisit ? 'new' : 'returning',
            traffic_source: trafficSource
          });
        `}
      </Script>
    </>
  )
}

// Exportar función para actualizar consentimiento
export const updateConsent = (consent: {
  ad_storage?: 'granted' | 'denied'
  analytics_storage?: 'granted' | 'denied'
  ad_user_data?: 'granted' | 'denied'
  ad_personalization?: 'granted' | 'denied'
}) => {
  if (typeof window !== 'undefined' && (window as any).updateGoogleConsent) {
    (window as any).updateGoogleConsent(consent)
  }
}
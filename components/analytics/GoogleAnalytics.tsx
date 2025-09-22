'use client'

import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export function GoogleAnalytics() {
  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true
            },
            custom_map: {
              'custom_parameter_1': 'form_type',
              'custom_parameter_2': 'service_name',
              'custom_parameter_3': 'interaction_type'
            },
            conversion_linker: true,
            allow_google_signals: true,
            anonymize_ip: false
          });
          
          // Configurar eventos de conversión
          gtag('event', 'conversion', {
            'send_to': '${GA_TRACKING_ID}',
            'event_category': 'lead_generation',
            'event_label': 'site_loaded'
          });
        `}
      </Script>
    </>
  )
}
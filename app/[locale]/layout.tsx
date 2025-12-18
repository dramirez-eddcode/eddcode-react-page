// app/[locale]/layout.tsx - Layout bilingüe optimizado para SEO
import type { Metadata } from 'next'
import { getMetadata } from '@/lib/metadata-i18n'
import {
  organizationSchema,
  professionalServiceSchema,
  localBusinessSchema,
  getWebsiteSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getSoftwareApplicationSchema
} from '../schema'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { WebVitalsReporter } from '@/components/analytics/WebVitalsReporter'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../globals.css'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return getMetadata(locale)
}

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }]
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params

  // Generar schemas dinámicos según el idioma
  const websiteSchema = getWebsiteSchema(locale)
  const breadcrumbSchema = getBreadcrumbSchema(locale)
  const faqSchema = getFAQSchema(locale)
  const softwareSchema = getSoftwareApplicationSchema(locale)

  return (
    <html lang={locale === 'es' ? 'es-MX' : 'en-US'} className="scroll-smooth">
      <head>
        {/* Preconnect para optimizar carga - orden de prioridad */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch adicional */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Meta tags esenciales */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#5D41BE" />
        <meta name="msapplication-TileColor" content="#5D41BE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Structured Data - Organization (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                organizationSchema,
                professionalServiceSchema,
                localBusinessSchema,
                websiteSchema,
                breadcrumbSchema,
                softwareSchema
              ]
            })
          }}
        />

        {/* Structured Data - FAQ (específico por idioma) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </head>
      <body className="antialiased selection:bg-brand-primary/30 selection:text-white">
        <GoogleAnalytics />
        <WebVitalsReporter />
        <Analytics
          mode="production"
          debug={false}
        />
        <SpeedInsights
          sampleRate={100}
          debug={process.env.NODE_ENV === 'development'}
        />
        {children}
      </body>
    </html>
  )
}
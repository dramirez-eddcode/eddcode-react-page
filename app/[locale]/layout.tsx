// app/[locale]/layout.tsx - Layout bilingüe optimizado para SEO
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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

// Cargar Inter con next/font para optimización automática
// Las fuentes se descargan en build time y se sirven localmente
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

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
    <html lang={locale === 'es' ? 'es-MX' : 'en-US'} className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Critical CSS - Estilos mínimos para renderizar above-the-fold sin bloqueo */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--bg-deep:#0F1117;--bg-surface:#12141C;--bg-card:#1A1D29;--fg-strong:rgba(255,255,255,0.95);--fg-soft:rgba(255,255,255,0.72);--fg-muted:rgba(255,255,255,0.60);--fg-light:#FCFAFA;--brand-primary:#5D41BE;--brand-light:#5B40B9;--brand-dark:#352B6B;--accent-purple-glow:#7B5FD9;--ring-soft:rgba(255,255,255,0.08)}
          *{box-sizing:border-box;padding:0;margin:0}
          html{scroll-behavior:smooth}
          body{color:var(--fg-soft);background:var(--bg-deep);font-family:var(--font-inter),'Inter',ui-sans-serif,system-ui;line-height:1.6;-webkit-font-smoothing:antialiased}
          .scroll-smooth{scroll-behavior:smooth}
          .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          .min-h-screen{min-height:100vh}
          .flex{display:flex}
          .items-center{align-items:center}
          .justify-center{justify-content:center}
          .relative{position:relative}
          .absolute{position:absolute}
          .inset-0{inset:0}
          .overflow-hidden{overflow:hidden}
          .z-10{z-index:10}
          .text-center{text-align:center}
          .mx-auto{margin-left:auto;margin-right:auto}
          .max-w-6xl{max-width:72rem}
          .px-6{padding-left:1.5rem;padding-right:1.5rem}
          .mb-8{margin-bottom:2rem}
          .text-4xl{font-size:2.25rem;line-height:2.5rem}
          .font-bold{font-weight:700}
          .leading-tight{line-height:1.25}
          .text-fg-strong{color:var(--fg-strong)}
          .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
          .from-brand-light{--tw-gradient-from:#5B40B9;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,transparent)}
          .via-brand-primary{--tw-gradient-stops:var(--tw-gradient-from),#5D41BE,var(--tw-gradient-to,transparent)}
          .to-accent-purple-glow{--tw-gradient-to:#7B5FD9}
          .bg-clip-text{-webkit-background-clip:text;background-clip:text}
          .text-transparent{color:transparent}
          @media(min-width:768px){.md\\:text-6xl{font-size:3.75rem;line-height:1}}
          @media(min-width:1024px){.lg\\:text-7xl{font-size:4.5rem;line-height:1}}
          @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
          .animate-fade-up{animation:fadeUp .6s ease-out forwards}
        `}} />

        {/* Preconnect para analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
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
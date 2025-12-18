// lib/metadata-i18n.ts - Metadata bilingüe optimizado para SEO
import type { Metadata } from 'next'

export const getMetadata = (locale: string): Metadata => {
  const isSpanish = locale === 'es'

  const baseUrl = 'https://eddcode.com'

  const metadata: Metadata = {
    title: {
      default: isSpanish
        ? 'EDDCODE | Desarrollo de Software a Medida en México | Apps Web, APIs, AI'
        : 'EDDCODE | Custom Software Development in Mexico | Web Apps, APIs, AI',
      template: isSpanish
        ? '%s | EDDCODE - Desarrollo de Software'
        : '%s | EDDCODE - Software Development'
    },

    description: isSpanish
      ? 'Desarrollamos software de alta calidad que impulsa el crecimiento de tu empresa. Equipos senior con +5 años de experiencia en React, Next.js, Node.js, APIs REST, integraciones empresariales, Data Science, Inteligencia Artificial y DevOps. Entregas predecibles, código escalable y arquitectura robusta. León, Guanajuato, México.'
      : 'We develop high-quality software that drives your company growth. Senior teams with 5+ years experience in React, Next.js, Node.js, REST APIs, enterprise integrations, Data Science, Artificial Intelligence and DevOps. Predictable deliveries, scalable code and robust architecture. León, Guanajuato, Mexico.',

    keywords: isSpanish ? [
      'desarrollo software México',
      'desarrollo software León Guanajuato',
      'desarrollo web profesional México',
      'aplicaciones web react nextjs',
      'desarrollo apis rest GraphQL',
      'software empresarial a medida',
      'integraciones de sistemas',
      'desarrollo nodejs typescript',
      'data science machine learning',
      'inteligencia artificial IA',
      'devops cloud aws azure',
      'desarrollo personalizado',
      'consultoría tecnológica',
      'transformación digital empresas',
      'arquitectura de software',
      'agencia desarrollo web México'
    ] : [
      'software development Mexico',
      'custom software development',
      'professional web development Mexico',
      'react nextjs web applications',
      'rest api GraphQL development',
      'enterprise software solutions',
      'system integrations',
      'nodejs typescript development',
      'data science machine learning',
      'artificial intelligence AI',
      'devops cloud aws azure',
      'bespoke software development',
      'technology consulting',
      'digital transformation',
      'software architecture',
      'web development agency Mexico'
    ],

    authors: [{ name: 'EDDCODE', url: baseUrl }],
    creator: 'EDDCODE',
    publisher: 'EDDCODE',

    category: isSpanish ? 'Tecnología' : 'Technology',

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: locale === 'es' ? '/' : '/en',
      languages: {
        'es-MX': '/',
        'es-ES': '/',
        'en-US': '/en',
        'en-GB': '/en',
        'x-default': '/',
      },
    },

    openGraph: {
      title: isSpanish
        ? 'EDDCODE | Desarrollo de Software que Acelera tu Negocio'
        : 'EDDCODE | Software Development that Accelerates your Business',

      description: isSpanish
        ? 'Equipos senior con +5 años de experiencia. Desarrollamos software escalable con React, Next.js, APIs REST, Inteligencia Artificial y Cloud. Entregas predecibles y arquitectura robusta. México.'
        : 'Senior teams with 5+ years experience. We develop scalable software with React, Next.js, REST APIs, Artificial Intelligence and Cloud. Predictable deliveries and robust architecture. Mexico.',

      url: locale === 'es' ? baseUrl : `${baseUrl}/en`,
      siteName: 'EDDCODE',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_MX'],
      type: 'website',
      countryName: isSpanish ? 'México' : 'Mexico',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: isSpanish
            ? 'EDDCODE - Desarrollo de Software Profesional en México - React, APIs, AI'
            : 'EDDCODE - Professional Software Development in Mexico - React, APIs, AI',
          type: 'image/jpeg',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: isSpanish
        ? 'EDDCODE | Desarrollo de Software Profesional | React, APIs, AI'
        : 'EDDCODE | Professional Software Development | React, APIs, AI',

      description: isSpanish
        ? 'Desarrollamos software de calidad que impulsa tu negocio. Equipos senior, React, Next.js, APIs REST, AI. Entregas predecibles. México.'
        : 'We develop quality software that drives your business. Senior teams, React, Next.js, REST APIs, AI. Predictable deliveries. Mexico.',

      images: ['/twitter-image.jpg'],
      creator: '@eddcode',
      site: '@eddcode',
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    verification: {
      google: 'google6b6364b95029dc46',
    },

    other: {
      'geo.region': 'MX-GUA',
      'geo.placename': 'León, Guanajuato',
      'geo.position': '21.1250;-101.6860',
      'ICBM': '21.1250, -101.6860',
    },

    manifest: '/manifest.json',

    icons: {
      icon: [
        { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  }

  return metadata
}
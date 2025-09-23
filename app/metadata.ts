// app/metadata.ts - Configuración de SEO y metadatos
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EDDCODE - Desarrollo de Software Profesional | Apps Web, APIs, AI | Buenos Aires',
  description: 'Desarrollamos software de calidad que impulsa el crecimiento de tu empresa. Equipos senior con +5 años experiencia en React, Next.js, Node.js, APIs REST, integraciones, Data Science, AI y DevOps. Entregas predecibles, código escalable y arquitectura robusta.',
  keywords: [
    'desarrollo software Buenos Aires',
    'desarrollo web profesional',
    'apps web react nextjs',
    'desarrollo apis rest',
    'software empresarial',
    'integraciones sistemas',
    'desarrollo nodejs',
    'programación typescript',
    'data science python',
    'artificial intelligence AI',
    'devops cloud aws',
    'desarrollo a medida',
    'software personalizado',
    'consultoría tecnológica',
    'transformación digital',
    'arquitectura software'
  ],
  authors: [{ name: 'EDDCODE' }],
  creator: 'EDDCODE',
  publisher: 'EDDCODE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eddcode.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
    },
  },
  openGraph: {
    title: 'EDDCODE - Desarrollo de Software que Acelera tu Negocio',
    description: 'Equipos senior con +5 años experiencia. Desarrollamos software escalable con React, Next.js, APIs REST, AI y Cloud. Entregas predecibles y arquitectura robusta.',
    url: 'https://eddcode.com',
    siteName: 'EDDCODE',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EDDCODE - Desarrollo de Software Profesional en Buenos Aires - React, APIs, AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDDCODE - Desarrollo de Software Profesional | React, APIs, AI',
    description: 'Desarrollamos software de calidad que impulsa tu negocio. Equipos senior, React, Next.js, APIs REST, AI. Entregas predecibles.',
    images: ['/twitter-image.jpg'],
    creator: '@eddcode',
    site: '@eddcode',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
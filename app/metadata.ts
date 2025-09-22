// app/metadata.ts - Configuración de SEO y metadatos
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EDDCODE - Desarrollo de Software Profesional | Apps Web, APIs, AI',
  description: 'Transformamos ideas en software que impulsa el crecimiento empresarial. Equipos senior especializados en React, Next.js, APIs, Data & AI, DevOps. Entregas predecibles y código escalable.',
  keywords: [
    'desarrollo software',
    'apps web',
    'react',
    'nextjs',
    'apis',
    'integraciones',
    'data science',
    'artificial intelligence',
    'devops',
    'cloud',
    'desarrollo a medida',
    'software personalizado'
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
    description: 'Equipos senior, calidad de producto y entregas predecibles. Construimos software escalable con tecnologías modernas: React, APIs, AI, Cloud.',
    url: 'https://eddcode.com',
    siteName: 'EDDCODE',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EDDCODE - Desarrollo de Software Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDDCODE - Desarrollo de Software Profesional',
    description: 'Transformamos ideas en software que impulsa el crecimiento empresarial. Equipos senior, entregas predecibles.',
    images: ['/twitter-image.jpg'],
    creator: '@eddcode',
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
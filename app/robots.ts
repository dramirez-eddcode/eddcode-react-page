// app/robots.ts - Robots.txt configuration optimizado para SEO
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://eddcode.com'

  return {
    rules: [
      // Regla general para todos los crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          '/*.json$',
        ],
      },
      // Googlebot - Acceso completo
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Googlebot para imágenes - Permitir todas las imágenes
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Bingbot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Crawlers de redes sociales - Acceso completo para OG tags
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
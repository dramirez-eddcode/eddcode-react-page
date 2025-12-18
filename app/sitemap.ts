// app/sitemap.ts - Dynamic sitemap generation for bilingual site
// URLs reales del sitio con soporte i18n
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eddcode.com'
  const lastModified = new Date()

  return [
    // Página principal en español (canonical)
    {
      url: `${baseUrl}/es`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es': `${baseUrl}/es`,
          'es-MX': `${baseUrl}/es`,
          'es-ES': `${baseUrl}/es`,
          'en': `${baseUrl}/en`,
          'en-US': `${baseUrl}/en`,
          'en-GB': `${baseUrl}/en`,
          'x-default': `${baseUrl}/es`,
        },
      },
    },
    // Página en inglés
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es': `${baseUrl}/es`,
          'es-MX': `${baseUrl}/es`,
          'es-ES': `${baseUrl}/es`,
          'en': `${baseUrl}/en`,
          'en-US': `${baseUrl}/en`,
          'en-GB': `${baseUrl}/en`,
          'x-default': `${baseUrl}/es`,
        },
      },
    },
    // Política de Privacidad - Español
    {
      url: `${baseUrl}/es/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'es': `${baseUrl}/es/privacy`,
          'en': `${baseUrl}/en/privacy`,
          'x-default': `${baseUrl}/es/privacy`,
        },
      },
    },
    // Política de Privacidad - Inglés
    {
      url: `${baseUrl}/en/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'es': `${baseUrl}/es/privacy`,
          'en': `${baseUrl}/en/privacy`,
          'x-default': `${baseUrl}/es/privacy`,
        },
      },
    },
    // Términos de Servicio - Español
    {
      url: `${baseUrl}/es/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'es': `${baseUrl}/es/terms`,
          'en': `${baseUrl}/en/terms`,
          'x-default': `${baseUrl}/es/terms`,
        },
      },
    },
    // Términos de Servicio - Inglés
    {
      url: `${baseUrl}/en/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'es': `${baseUrl}/es/terms`,
          'en': `${baseUrl}/en/terms`,
          'x-default': `${baseUrl}/es/terms`,
        },
      },
    },
  ]
}

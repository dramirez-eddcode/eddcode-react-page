// middleware.ts - Detección automática de idioma basada en la región del visitante
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Idiomas soportados
const locales = ['es', 'en']
const defaultLocale = 'es'

// Países de habla hispana (códigos ISO 3166-1 alpha-2)
const spanishSpeakingCountries = [
  'ES', // España
  'MX', // México
  'AR', // Argentina
  'CO', // Colombia
  'PE', // Perú
  'VE', // Venezuela
  'CL', // Chile
  'EC', // Ecuador
  'GT', // Guatemala
  'CU', // Cuba
  'BO', // Bolivia
  'DO', // República Dominicana
  'HN', // Honduras
  'PY', // Paraguay
  'SV', // El Salvador
  'NI', // Nicaragua
  'CR', // Costa Rica
  'PA', // Panamá
  'UY', // Uruguay
  'PR', // Puerto Rico
  'GQ', // Guinea Ecuatorial
]

function getLocaleFromHeaders(request: NextRequest): string {
  // 1. Primero verificar si hay una preferencia guardada en cookie
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (savedLocale && locales.includes(savedLocale)) {
    return savedLocale
  }

  // 2. Intentar detectar por país usando headers de CDN (Vercel/Cloudflare)
  const country = request.headers.get('x-vercel-ip-country') ||
                  request.headers.get('cf-ipcountry')

  if (country) {
    if (spanishSpeakingCountries.includes(country.toUpperCase())) {
      return 'es'
    }
    // Si no es país hispanohablante, usar inglés
    return 'en'
  }

  // 3. Fallback: detectar por el header Accept-Language del navegador
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    // Parsear el header Accept-Language (ej: "es-MX,es;q=0.9,en;q=0.8")
    const languages = acceptLanguage.split(',').map(lang => {
      const [code, priority] = lang.trim().split(';q=')
      return {
        code: code.split('-')[0].toLowerCase(), // Tomar solo el código de idioma principal
        priority: priority ? parseFloat(priority) : 1
      }
    }).sort((a, b) => b.priority - a.priority)

    // Buscar el primer idioma soportado
    for (const lang of languages) {
      if (locales.includes(lang.code)) {
        return lang.code
      }
    }
  }

  // 4. Fallback final: español por defecto
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Ignorar archivos estáticos, API routes y archivos de SEO
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.includes('.') // archivos con extensión
  ) {
    return NextResponse.next()
  }

  // Permitir a los crawlers acceder sin redirección
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const isBot = userAgent.includes('googlebot') ||
                userAgent.includes('bingbot') ||
                userAgent.includes('yandex') ||
                userAgent.includes('duckduckbot') ||
                userAgent.includes('slurp') ||
                userAgent.includes('facebookexternalhit') ||
                userAgent.includes('twitterbot') ||
                userAgent.includes('linkedinbot') ||
                userAgent.includes('crawler') ||
                userAgent.includes('spider')

  // Si es un bot y está en la raíz, redirigir a /es para contenido indexable
  if (isBot && pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/es'
    return NextResponse.redirect(url, 301) // Redirect permanente para SEO
  }

  // Verificar si ya hay un locale en la URL
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Detectar el locale apropiado
  const detectedLocale = getLocaleFromHeaders(request)

  // Redirigir a la URL con el locale detectado
  const url = request.nextUrl.clone()
  url.pathname = `/${detectedLocale}${pathname === '/' ? '' : pathname}`

  // Guardar la preferencia en una cookie para futuras visitas
  const response = NextResponse.redirect(url)
  response.cookies.set('NEXT_LOCALE', detectedLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 año
    path: '/',
    sameSite: 'lax'
  })

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
}

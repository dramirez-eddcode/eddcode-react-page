// middleware.ts - Detección automática de idioma basada en la región del visitante
// Next.js middleware se ejecuta automáticamente en Edge Runtime
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Idiomas soportados
const locales = ['es', 'en'] as const
const defaultLocale = 'es'

// Set de países hispanohablantes para búsqueda O(1)
const spanishSpeakingCountries = new Set([
  'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU',
  'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ'
])

function getLocaleFromHeaders(request: NextRequest): string {
  // 1. Cookie check - más rápido primero
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (savedLocale === 'es' || savedLocale === 'en') {
    return savedLocale
  }

  // 2. Detección por país (headers de Vercel Edge)
  const country = request.headers.get('x-vercel-ip-country')
  if (country) {
    return spanishSpeakingCountries.has(country.toUpperCase()) ? 'es' : 'en'
  }

  // 3. Accept-Language simplificado (sin sort para mayor velocidad)
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    // Buscar 'es' o 'en' directamente en el string
    const lowerLang = acceptLanguage.toLowerCase()
    if (lowerLang.startsWith('es') || lowerLang.includes(',es')) return 'es'
    if (lowerLang.startsWith('en') || lowerLang.includes(',en')) return 'en'
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Fast path: ya tiene locale - no hacer nada
  if (pathname.startsWith('/es') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // Fast path: archivos estáticos y rutas especiales
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Detección de bots simplificada
  const userAgent = request.headers.get('user-agent') || ''
  const isBot = /bot|crawl|spider|slurp|facebook|twitter|linkedin/i.test(userAgent)

  // Bots van a /es directamente
  if (isBot && pathname === '/') {
    return NextResponse.redirect(new URL('/es', request.url), 301)
  }

  // Detectar locale y redirigir
  const locale = getLocaleFromHeaders(request)
  const newPath = `/${locale}${pathname === '/' ? '' : pathname}`

  const response = NextResponse.redirect(new URL(newPath, request.url))
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 31536000, // 1 año en segundos
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

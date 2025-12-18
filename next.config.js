/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  trailingSlash: false,
  // Especificar la raíz del workspace para evitar conflictos con lockfiles externos
  outputFileTracingRoot: __dirname,

  // Optimizaciones de rendimiento
  experimental: {
    // Optimizar imports de paquetes grandes
    optimizePackageImports: ['@vercel/analytics', '@vercel/speed-insights'],
    // Optimizar CSS - inline critical CSS automáticamente
    optimizeCss: true,
  },

  // Configuración del compilador para optimización
  compiler: {
    // Eliminar console.log en producción
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Headers de seguridad y rendimiento
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
      {
        // Cache largo para assets estáticos
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
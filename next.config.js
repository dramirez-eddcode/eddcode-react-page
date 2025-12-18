/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  trailingSlash: false,
  // Especificar la raíz del workspace para evitar conflictos con lockfiles externos
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
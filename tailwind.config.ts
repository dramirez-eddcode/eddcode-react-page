// tailwind.config.ts - Configuración estilo "Coder" con acentos vibrantes
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fondos EDDCODE (negro profundo)
        bg: {
          deep: '#0F1117',      // Fondo global
          surface: '#12141C',    // Superficies elevadas
          card: '#1A1D29',      // Base para tarjetas
        },
        // Texto optimizado para máximo contraste
        fg: {
          strong: 'rgba(255,255,255,0.95)',  // Títulos principales
          soft: 'rgba(255,255,255,0.72)',    // Texto normal
          muted: 'rgba(255,255,255,0.60)',   // Texto secundario
          light: '#FCFAFA',                   // Para fondos oscuros con gradiente
        },
        // Color principal de marca EDDCODE
        brand: {
          primary: '#5D41BE',     // Color principal
          light: '#5B40B9',       // Inicio de degradado
          dark: '#352B6B',        // Fin de degradado
          accent: '#5D41BE',      // Alias para compatibilidad
        },
        // Acentos basados en el color de marca
        accent: {
          purple: {
            start: '#352B6B',   // Oscuro del degradado
            mid: '#5D41BE',     // Color principal
            glow: '#7B5FD9',    // Versión clara
          },
          pink: {
            start: '#DB2777',
            mid: '#EC4899',
            glow: '#F472B6',
          },
          rose: {
            start: '#E11D48',
            mid: '#F43F5E',
            glow: '#FDA4AF',
          },
          amber: {
            start: '#B45309',
            mid: '#D97706',
            glow: '#F59E0B',
          },
          blue: {
            start: '#352B6B',   // Usando colores de marca
            mid: '#5D41BE',
            glow: '#7B5FD9',
          }
        },
        // Bordes y sombras sutiles
        ring: {
          soft: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        // Texturas base para acentos Coder
        'texture-purple': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        'texture-pink': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        'texture-rose': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        'texture-amber': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        'texture-blue': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        
        // Luces radiales actualizadas (más intensas)
        'radial-light-1': 'radial-gradient(1000px 360px at 80% 120%, rgba(255,255,255,0.10), transparent 60%)',
        'radial-light-2': 'radial-gradient(800px 260px at 5% 0%, rgba(255,255,255,0.12), transparent 65%)',
        'vignette': 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.14))',
        
        // Noise mejorado
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
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
        // Fondos estilo Coder (negro profundo)
        bg: {
          deep: '#0F1117',      // Fondo global (igual referencia)
          surface: '#12141C',    // Superficies elevadas
          card: '#1A1D29',      // Base para tarjetas
        },
        // Texto optimizado para máximo contraste
        fg: {
          strong: 'rgba(255,255,255,0.95)',  // Títulos principales
          soft: 'rgba(255,255,255,0.72)',    // Texto normal  
          muted: 'rgba(255,255,255,0.60)',   // Texto secundario
        },
        // Acentos Coder-like (gradientes de 3 stops cada uno)
        accent: {
          purple: {
            start: '#6D28D9',   // Purple-800
            mid: '#9333EA',     // Purple-600  
            glow: '#C084FC',    // Purple-400
          },
          pink: {
            start: '#DB2777',   // Pink-700
            mid: '#EC4899',     // Pink-500
            glow: '#F472B6',    // Pink-300
          },
          rose: {
            start: '#E11D48',   // Rose-600
            mid: '#F43F5E',     // Rose-500
            glow: '#FDA4AF',    // Rose-300
          },
          amber: {
            start: '#B45309',   // Amber-700
            mid: '#D97706',     // Amber-600
            glow: '#F59E0B',    // Amber-500
          },
          blue: {
            start: '#2563EB',   // Blue-600
            mid: '#3B82F6',     // Blue-500
            glow: '#93C5FD',    // Blue-300
          }
        },
        // Bordes y sombras sutiles
        ring: {
          soft: 'rgba(255,255,255,0.08)',
        },
        // Compatibilidad con componentes existentes
        brand: {
          primary: '#3B82F6',    // Mapeo a accent.blue.mid
          accent: '#9333EA',     // Mapeo a accent.purple.mid
        }
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
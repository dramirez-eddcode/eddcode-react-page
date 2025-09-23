// components/sections/Beneficios.tsx - Lista de beneficios con íconos SVG inline
import React from 'react'

const beneficios = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Entrega continua',
    description: 'Releases frecuentes y predecibles que agregan valor desde el día uno.',
    accent: 'pink' as const
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Código escalable',
    description: 'Arquitecturas sólidas que crecen junto a tu negocio sin comprometer la velocidad.',
    accent: 'rose' as const
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Soporte cercano',
    description: 'Acompañamiento técnico personalizado en cada fase del proyecto.',
    accent: 'purple' as const
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Seguridad por diseño',
    description: 'Protocolos de seguridad integrados desde la arquitectura hasta el despliegue.',
    accent: 'blue' as const
  }
]

export const Beneficios: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-bg-deep/50" id="beneficios" aria-labelledby="beneficios-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="beneficios-title"
            className="
            text-3xl md:text-4xl lg:text-5xl font-bold mb-6
            bg-gradient-to-r from-white via-white to-white/70 
            bg-clip-text
          ">
            Por qué elegirnos
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            Nuestra metodología garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="
                text-center group animate-fade-up
                p-6 rounded-2xl transition-all duration-300
                hover:bg-white/5 hover:ring-1 hover:ring-white/10
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`
                inline-flex p-4 rounded-2xl mb-4
                ${beneficio.accent === 'pink' ? 'bg-gradient-to-br from-accent-pink-mid/20 to-accent-pink-glow/20 text-accent-pink-glow ring-1 ring-accent-pink-mid/30 group-hover:from-accent-pink-mid/30 group-hover:to-accent-pink-glow/30' :
                  beneficio.accent === 'rose' ? 'bg-gradient-to-br from-accent-rose-mid/20 to-accent-rose-glow/20 text-accent-rose-glow ring-1 ring-accent-rose-mid/30 group-hover:from-accent-rose-mid/30 group-hover:to-accent-rose-glow/30' :
                  beneficio.accent === 'purple' ? 'bg-gradient-to-br from-accent-purple-mid/20 to-accent-purple-glow/20 text-accent-purple-glow ring-1 ring-accent-purple-mid/30 group-hover:from-accent-purple-mid/30 group-hover:to-accent-purple-glow/30' :
                  'bg-gradient-to-br from-accent-blue-mid/20 to-accent-blue-glow/20 text-accent-blue-glow ring-1 ring-accent-blue-mid/30 group-hover:from-accent-blue-mid/30 group-hover:to-accent-blue-glow/30'}
                group-hover:scale-110 transition-all duration-300 accent-glow
              `}>
                {beneficio.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-fg-strong">
                {beneficio.title}
              </h3>
              
              <p className="text-fg-soft leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
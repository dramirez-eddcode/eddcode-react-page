// components/sections/Portafolio.tsx - Grid responsivo de proyectos/casos de éxito
import React from 'react'
import { TexturedWaveCard } from '../ui/TexturedWaveCard'

const proyectos = [
  {
    title: 'E-commerce Avanzado',
    description: 'Plataforma de comercio electrónico con IA para recomendaciones personalizadas y analítica en tiempo real.',
    tags: ['React', 'Node.js', 'AI/ML', 'AWS'],
    image: '🛒'
  },
  {
    title: 'Sistema de Gestión Hospitalaria',
    description: 'Aplicación integral para administración hospitalaria con módulos de pacientes, citas y facturación.',
    tags: ['Next.js', 'PostgreSQL', 'HIPAA', 'Docker'],
    image: '🏥'
  },
  {
    title: 'Plataforma FinTech',
    description: 'Solución bancaria digital con pagos en tiempo real, gestión de carteras y cumplimiento regulatorio.',
    tags: ['TypeScript', 'Microservicios', 'Kubernetes', 'Blockchain'],
    image: '💳'
  },
  {
    title: 'Automatización Industrial',
    description: 'Sistema IoT para monitoreo y control de procesos industriales con dashboard en tiempo real.',
    tags: ['React', 'IoT', 'Python', 'MongoDB'],
    image: '🏭'
  }
]

export const Portafolio: React.FC = () => {
  return (
    <section className="py-24 px-6" id="portafolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl font-bold mb-6
            bg-gradient-to-r from-white via-white to-white/70 
            bg-clip-text text-transparent
          ">
            Casos de éxito
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            Proyectos que transformaron negocios y generaron resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <TexturedWaveCard 
              key={index}
              className="group animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              waveColor="rgba(36, 145, 255, 0.2)"
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4 opacity-80">
                  {proyecto.image}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-primary transition-colors">
                  {proyecto.title}
                </h3>
                
                <p className="text-fg-muted leading-relaxed mb-6 flex-grow">
                  {proyecto.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {proyecto.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="
                        px-3 py-1 text-xs font-medium rounded-full
                        bg-brand-primary/10 text-brand-primary
                        ring-1 ring-brand-primary/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TexturedWaveCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="
              px-8 py-3 text-white font-medium rounded-xl
              ring-1 ring-white/20 bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:ring-white/30
              transition-all duration-300 hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-white/20
            "
            aria-label="Ver todos nuestros proyectos"
          >
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </section>
  )
}
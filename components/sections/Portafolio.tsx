// components/sections/Portafolio.tsx - Grid de proyectos reales con casos de éxito
'use client'
import React from 'react'
import Image from 'next/image'
import { TexturedWaveCard } from '../ui/TexturedWaveCard'
import { useTranslation } from '@/lib/useTranslation'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackPortfolioView, trackEvent } from '@/components/analytics/gtag'

// Componente de preview con imagen real del sitio
interface ProjectPreviewProps {
  src: string
  alt: string
  fallbackGradient?: string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ src, alt, fallbackGradient = 'from-sky-900 via-blue-800 to-cyan-700' }) => {
  const [imageError, setImageError] = React.useState(false)

  if (imageError) {
    // Fallback visual si la imagen no carga
    return (
      <div className={`w-full h-48 md:h-56 rounded-xl overflow-hidden bg-gradient-to-br ${fallbackGradient} flex items-center justify-center relative`}>
        <div className="text-center z-10">
          <svg className="w-12 h-12 mx-auto mb-2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-white/70">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden relative bg-gray-900">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, 600px"
      />
      {/* Overlay sutil para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
    </div>
  )
}

export const Portafolio: React.FC = () => {
  const { t } = useTranslation()
  const sectionRef = useSectionTracking('portafolio', 0.3)

  const handleProjectClick = (projectName: string, projectUrl: string) => {
    trackPortfolioView(projectName, 'web_application')
    trackEvent('outbound_link', {
      event_category: 'portfolio',
      project_name: projectName,
      link_url: projectUrl
    })
  }

  const projects = [
    {
      id: 'vuelatour',
      url: 'https://www.vuelatour.com',
      image: '/portfolio/vuelatour.jpg',
      deliveryTime: 1,
      featured: true,
      waveColor: 'rgba(14, 165, 233, 0.3)',
      fallbackGradient: 'from-sky-900 via-blue-800 to-cyan-700'
    },
    {
      id: 'financehub',
      url: '#',
      image: '/portfolio/financehub.jpg',
      deliveryTime: 3,
      featured: false,
      waveColor: 'rgba(34, 197, 94, 0.3)',
      fallbackGradient: 'from-emerald-900 via-green-800 to-teal-700'
    },
    {
      id: 'deliverya',
      url: '#',
      image: '/portfolio/deliverya.jpg',
      deliveryTime: 4,
      featured: false,
      waveColor: 'rgba(249, 115, 22, 0.3)',
      fallbackGradient: 'from-orange-900 via-amber-800 to-yellow-700'
    },
    {
      id: 'logitrack',
      url: '#',
      image: '/portfolio/logitrack.jpg',
      deliveryTime: 6,
      featured: false,
      waveColor: 'rgba(139, 92, 246, 0.3)',
      fallbackGradient: 'from-violet-900 via-purple-800 to-indigo-700'
    },
    {
      id: 'medicare',
      url: '#',
      image: '/portfolio/medicare.jpg',
      deliveryTime: 8,
      featured: false,
      waveColor: 'rgba(236, 72, 153, 0.3)',
      fallbackGradient: 'from-pink-900 via-rose-800 to-red-700'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6" id="portafolio" aria-labelledby="portafolio-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="portafolio-title"
            className="
              text-3xl md:text-4xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-white to-white/70
              bg-clip-text text-transparent
            "
          >
            {t('portfolio.title')}
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const title = t(`portfolio.projects.${project.id}.title`)
            const description = t(`portfolio.projects.${project.id}.description`)
            const tagsString = t(`portfolio.projects.${project.id}.tags`)
            const tags = typeof tagsString === 'string' ? tagsString.split(',') : []
            const metric = t(`portfolio.projects.${project.id}.metric`)
            const metricLabel = t(`portfolio.projects.${project.id}.metricLabel`)

            return (
              <TexturedWaveCard
                key={project.id}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
                waveColor={project.waveColor}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleProjectClick(String(title), project.url)}
                  className="block"
                >
                  {/* Project Image */}
                  <div className="mb-6">
                    <ProjectPreview
                      src={project.image}
                      alt={String(title)}
                      fallbackGradient={project.fallbackGradient}
                    />
                  </div>

                  {/* Delivery Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="
                      px-3 py-1 text-xs font-semibold rounded-full
                      bg-green-500/20 text-green-400
                      ring-1 ring-green-500/30
                    ">
                      {t('portfolio.deliveredIn')} {project.deliveryTime} {project.deliveryTime === 1 ? t('portfolio.week') : t('portfolio.weeks')}
                    </span>
                    {project.featured && (
                      <span className="
                        px-3 py-1 text-xs font-semibold rounded-full
                        bg-amber-500/20 text-amber-400
                        ring-1 ring-amber-500/30
                      ">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-primary transition-colors">
                    {title}
                  </h3>

                  <p className="text-fg-muted leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Metric */}
                  {metric && (
                    <div className="flex items-center gap-2 mb-6 text-fg-soft">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-white">{metric}</span>
                      <span className="text-fg-muted">{metricLabel}</span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, tagIndex) => (
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

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-brand-primary group-hover:gap-3 transition-all">
                    <span className="font-medium">{t('portfolio.viewProject')}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </TexturedWaveCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

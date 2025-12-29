// components/sections/TrustedBy.tsx - Logos de clientes y tecnologías
'use client'
import React from 'react'
import { useTranslation } from '@/lib/useTranslation'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackTechnologyInterest, trackTrustIndicator } from '@/components/analytics/gtag'

interface Client {
  name: string
  industry: string
}

export const TrustedBy: React.FC = () => {
  const { t } = useTranslation()
  const sectionRef = useSectionTracking('trusted_by', 0.3)

  const clients: Client[] = [
    { name: 'Vuelatour', industry: 'Turismo' },
    { name: 'Jetset', industry: 'Transporte' },
    { name: 'FinanceHub MX', industry: 'Fintech' },
    { name: 'DeliverYa', industry: 'Logística' },
    { name: 'LogiTrack', industry: 'Supply Chain' },
    { name: 'MediCare Plus', industry: 'Healthcare' },
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 border-y border-white/5"
      id="trusted-by"
    >
      <div className="max-w-6xl mx-auto">
        {/* Clients */}
        <div className="text-center mb-12">
          <p className="text-fg-muted text-sm uppercase tracking-wider mb-8">
            {t('trustedBy.title')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col items-center cursor-pointer"
                onClick={() => trackTrustIndicator(`client_${client.name}`, 'click')}
                onMouseEnter={() => trackTrustIndicator(`client_${client.name}`, 'view')}
              >
                {/* Logo placeholder - En producción usarías Image de Next.js */}
                <div className="
                  w-24 h-12 rounded-lg
                  bg-white/5 ring-1 ring-white/10
                  flex items-center justify-center
                  text-fg-muted font-semibold text-sm
                  group-hover:bg-white/10 group-hover:ring-white/20
                  transition-all duration-300
                ">
                  {client.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="mt-2 text-xs text-fg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Technologies */}
        <div className="text-center">
          <p className="text-fg-muted text-sm uppercase tracking-wider mb-8">
            {t('trustedBy.technologies')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="
                  px-4 py-2 rounded-full
                  bg-white/5 ring-1 ring-white/10
                  flex items-center gap-2
                  hover:bg-white/10 hover:ring-brand-primary/30
                  transition-all duration-300
                  group cursor-pointer
                "
                onClick={() => trackTechnologyInterest(tech.name)}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm text-fg-soft group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

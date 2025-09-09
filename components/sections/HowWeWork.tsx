// components/sections/HowWeWork.tsx - Proceso interactivo y dinámico
'use client'
import React, { useState, useEffect } from 'react'

const workflow = [
  {
    phase: '01',
    title: 'Discovery',
    subtitle: 'Entendemos tu visión',
    description: 'Analizamos tu contexto técnico, objetivos de negocio y restricciones para diseñar la solución óptima.',
    activities: ['Auditoría técnica', 'Entrevistas stakeholders', 'Análisis de requisitos', 'Evaluación de riesgos'],
    duration: '1-2 semanas',
    icon: '🔍',
    color: '#3B82F6',
    bgGradient: 'from-blue-500/20 to-blue-600/30'
  },
  {
    phase: '02', 
    title: 'Design',
    subtitle: 'Arquitectura sólida',
    description: 'Creamos la arquitectura, especificaciones detalladas y plan de implementación con milestones claros.',
    activities: ['Arquitectura del sistema', 'Diseño de APIs', 'Modelado de datos', 'Planificación de seguridad'],
    duration: '1-3 semanas',
    icon: '🎨',
    color: '#8B5CF6',
    bgGradient: 'from-purple-500/20 to-purple-600/30'
  },
  {
    phase: '03',
    title: 'Build',
    subtitle: 'Desarrollo ágil',
    description: 'Desarrollo iterativo con entregables frecuentes, testing continuo y feedback loops para ajustes rápidos.',
    activities: ['Sprint planning', 'Desarrollo de código', 'Testing & QA', 'Demos regulares'],
    duration: '4-16 semanas',
    icon: '⚡',
    color: '#06B6D4',
    bgGradient: 'from-cyan-500/20 to-cyan-600/30'
  },
  {
    phase: '04',
    title: 'Launch',
    subtitle: 'Acompañamiento total',
    description: 'Despliegue supervisado, documentación completa, transfer de conocimiento y soporte post-launch.',
    activities: ['Deploy a producción', 'Entrenamiento del team', 'Documentación', 'Soporte continuo'],
    duration: 'Continuo',
    icon: '🚀',
    color: '#F59E0B',
    bgGradient: 'from-amber-500/20 to-amber-600/30'
  }
]

export const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('proceso')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflow.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="proceso">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Nuestro Proceso
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Metodología probada que combina agilidad con rigor técnico para entregar resultados excepcionales
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {workflow.map((step, index) => (
              <div
                key={index}
                className={`
                  p-6 rounded-xl cursor-pointer transition-all duration-500 transform
                  ${activeStep === index 
                    ? `bg-gradient-to-r ${step.bgGradient} ring-2 scale-105 shadow-2xl` 
                    : 'bg-gray-800/40 hover:bg-gray-700/50 hover:scale-102'
                  }
                  ring-1 ring-gray-600/30 hover:ring-gray-500/50
                `}
                onClick={() => setActiveStep(index)}
                style={{
                  boxShadow: activeStep === index ? `0 25px 50px -12px ${step.color}40` : ''
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`
                      w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300
                      ${activeStep === index ? 'scale-110' : 'scale-100'}
                    `}
                    style={{
                      backgroundColor: activeStep === index ? `${step.color}30` : 'rgba(75, 85, 99, 0.3)',
                      color: activeStep === index ? step.color : '#9CA3AF'
                    }}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span 
                        className="text-sm font-mono font-bold"
                        style={{ color: activeStep === index ? step.color : '#9CA3AF' }}
                      >
                        {step.phase}
                      </span>
                      <h3 
                        className={`text-xl font-bold transition-colors duration-300 ${
                          activeStep === index ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeStep === index ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {step.subtitle}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="lg:sticky lg:top-24">
            <div 
              className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-gray-600/30 shadow-2xl"
              style={{
                boxShadow: `0 25px 50px -12px ${workflow[activeStep].color}20`
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                  style={{ 
                    backgroundColor: `${workflow[activeStep].color}20`,
                    color: workflow[activeStep].color 
                  }}
                >
                  {workflow[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {workflow[activeStep].title}
                  </h3>
                  <p 
                    className="font-medium"
                    style={{ color: workflow[activeStep].color }}
                  >
                    {workflow[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {workflow[activeStep].description}
              </p>

              {/* Activities */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: workflow[activeStep].color }}
                  ></div>
                  Actividades clave
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {workflow[activeStep].activities.map((activity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: workflow[activeStep].color }}
                      ></div>
                      <span className="text-gray-200">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400">Progreso del proceso</span>
            <span className="text-sm text-gray-400">{activeStep + 1} / {workflow.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${((activeStep + 1) / workflow.length) * 100}%`,
                backgroundColor: workflow[activeStep].color,
                boxShadow: `0 0 20px ${workflow[activeStep].color}40`
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
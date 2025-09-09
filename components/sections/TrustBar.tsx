// components/sections/TrustBar.tsx - Barra de confianza con logos de tecnologías
'use client'
import React from 'react'

const technologies = [
  {
    name: 'AWS',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 80 48" fill="currentColor">
        <path d="M15.7 25.5c0 .8.1 1.4.2 1.9.1.5.3 1 .5 1.4.1.2.1.4.1.5s-.1.3-.3.3c-.1 0-.3 0-.4-.1l-1.3-.8c-.1-.1-.2-.2-.2-.4s0-.3.1-.5c.2-.3.3-.7.4-1.1.1-.4.1-.9.1-1.4v-4.8c0-1.6-.3-2.8-.8-3.6-.5-.8-1.4-1.2-2.6-1.2-.7 0-1.4.2-2 .5-.6.3-1.1.8-1.4 1.4-.1.2-.2.3-.3.4-.1 0-.2 0-.2-.2v-1.7c0-.2.1-.3.2-.4l2.2-1.3c.7-.4 1.5-.6 2.4-.6 1.8 0 3.1.5 4 1.4.9.9 1.3 2.3 1.3 4.1v4.8z"/>
        <path d="M25.2 27.7c-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-1.9-1.2-3.2s.4-2.4 1.2-3.2c.8-.8 1.9-1.2 3.3-1.2s2.5.4 3.3 1.2c.8.8 1.2 1.9 1.2 3.2s-.4 2.4-1.2 3.2c-.8.8-1.9 1.2-3.3 1.2zm0-1.4c.8 0 1.4-.3 1.9-.8.5-.5.7-1.2.7-2.1s-.2-1.6-.7-2.1c-.5-.5-1.1-.8-1.9-.8s-1.4.3-1.9.8c-.5.5-.7 1.2-.7 2.1s.2 1.6.7 2.1c.5.5 1.1.8 1.9.8z"/>
        <path d="M37.8 20.7c0-.2.1-.3.2-.4.1-.1.2-.1.4-.1h1.5c.2 0 .3 0 .4.1.1.1.2.2.2.4l3.2 5.4 3.2-5.4c0-.2.1-.3.2-.4.1-.1.2-.1.4-.1h1.5c.2 0 .3 0 .4.1.1.1.2.2.2.4l3.8 6.6c.1.2.1.3 0 .4-.1.1-.2.2-.4.2h-1.4c-.2 0-.4-.1-.5-.3l-2.8-4.8-2.8 4.8c-.1.2-.3.3-.5.3h-1.4c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3 0-.4l3.8-6.6z"/>
        <path d="M58.7 27.7c-1 0-1.9-.2-2.6-.5-.7-.3-1.3-.8-1.7-1.4-.4-.6-.6-1.3-.6-2.1 0-.6.1-1.1.4-1.5.3-.4.6-.8 1.1-1 .5-.3 1-.5 1.6-.6.6-.1 1.2-.2 1.8-.2h1.3v-.4c0-.7-.2-1.2-.5-1.5-.3-.3-.8-.5-1.4-.5-.4 0-.8.1-1.1.2-.3.1-.6.3-.8.5-.1.1-.2.2-.3.2-.1 0-.2-.1-.2-.2v-1.2c0-.2.1-.3.2-.4.3-.2.7-.4 1.2-.5.5-.1 1-.2 1.5-.2 1.2 0 2.1.3 2.7.9.6.6.9 1.5.9 2.6v4.9c0 .2-.1.3-.2.4-.1.1-.2.1-.4.1h-1.2c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.4v-.4c-.3.3-.7.6-1.1.7-.4.2-.9.3-1.4.3zm.4-1.3c.5 0 .9-.1 1.3-.4.4-.3.6-.6.6-1v-.8h-1c-.8 0-1.4.1-1.8.4-.4.3-.6.7-.6 1.1 0 .3.1.5.3.7.2.1.4.1.7.1l1.5-.1z"/>
        <path d="M71.2 27.7c-.5 0-.9-.1-1.3-.2-.4-.1-.7-.3-1-.5-.1-.1-.2-.2-.2-.4v-1.2c0-.1.1-.2.2-.2.1 0 .2.1.3.2.3.2.6.3 1 .4.4.1.8.1 1.2.1.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.8 0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.5-.4l-1.8-.7c-.6-.2-1.1-.6-1.4-1-.3-.4-.5-.9-.5-1.4 0-.8.3-1.4.9-1.9.6-.5 1.4-.7 2.3-.7.4 0 .8 0 1.1.1.4.1.7.2.9.3.1.1.2.2.2.4v1.1c0 .1-.1.2-.2.2-.1 0-.2 0-.3-.1-.2-.1-.5-.2-.8-.3-.3-.1-.6-.1-.9-.1-.5 0-.8.1-1.1.3-.3.2-.4.4-.4.7 0 .2.1.4.2.5.1.1.3.3.6.4l1.7.7c.6.2 1 .5 1.3.9.3.4.4.9.4 1.4 0 .8-.3 1.5-.9 1.9-.6.5-1.4.7-2.4.7z"/>
      </svg>
    )
  },
  {
    name: 'Google Cloud',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 80 48" fill="currentColor">
        <path d="M20 24c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12-12-5.4-12-12zm8 0c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4z"/>
        <path d="M48 16v16h8V16h-8zm12 0v16h8V16h-8z"/>
      </svg>
    )
  },
  {
    name: 'Azure',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 80 48" fill="currentColor">
        <path d="M12 8l20 24h-8L12 8zm16 32L16 24h16l-4 16z"/>
        <path d="M40 12h8v24h-8V12zm12 0h8v24h-8V12z"/>
      </svg>
    )
  },
  {
    name: 'Kubernetes',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 80 48" fill="currentColor">
        <path d="M24 8l8 8-8 8-8-8 8-8zm0 32l8-8-8-8-8 8 8 8zm16-16l8 8-8 8-8-8 8-8zm16 0l8 8-8 8-8-8 8-8z"/>
      </svg>
    )
  },
  {
    name: 'Docker',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 80 48" fill="currentColor">
        <path d="M8 24h8v8H8v-8zm12 0h8v8h-8v-8zm12 0h8v8h-8v-8zm12-8h8v8h-8v-8zm0 8h8v8h-8v-8zm0 8h8v8h-8v-8z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 80 48" fill="currentColor">
        <path d="M24 8c-8.8 0-16 7.2-16 16 0 7.1 4.6 13.1 11 15.2.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.4-2.2-5.4-2.2-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.2-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8 0-1.8.6-3.2 1.7-4.4-.2-.4-.7-2.1.2-4.3 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5s2.8.2 4.1.5c3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.2 1.7 2.6 1.7 4.4 0 6.2-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8 6.4-2.1 11-8.1 11-15.2 0-8.8-7.2-16-16-16z"/>
      </svg>
    )
  }
]

export const TrustBar: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-bg-surface/30 border-y border-ring-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-fg-muted text-lg font-medium">
            Trabajamos donde vive tu infraestructura
          </p>
        </div>
        
        {/* Grid de logos con hover sutil */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="
                flex items-center justify-center p-4
                text-fg-muted opacity-60
                hover:opacity-100 hover:text-accent-blue
                transition-all duration-300 hover:scale-110
                group
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="transform group-hover:scale-105 transition-transform duration-200">
                {tech.logo}
              </div>
            </div>
          ))}
        </div>
        
        {/* Texto adicional */}
        <div className="text-center mt-12">
          <p className="text-sm text-fg-muted max-w-2xl mx-auto">
            Y muchas más tecnologías modernas para crear soluciones robustas, 
            escalables y preparadas para el futuro de tu negocio.
          </p>
        </div>
      </div>
    </section>
  )
}
// app/page.tsx - Página principal con tema Coder y nuevas secciones
'use client'
import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Servicios } from '@/components/sections/Servicios'
import { Beneficios } from '@/components/sections/Beneficios'
import { Capabilities } from '@/components/sections/Capabilities'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { ConsoleDemo } from '@/components/sections/ConsoleDemo'
import { Portafolio } from '@/components/sections/Portafolio'
import { CTA } from '@/components/sections/CTA'
import { ContactForm } from '@/components/ui/ContactForm'
import { ScheduleForm } from '@/components/ui/ScheduleForm'

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false)
  const [isScheduleFormOpen, setIsScheduleFormOpen] = React.useState(false)

  return (
    <>
      <Header onContactClick={() => setIsContactFormOpen(true)} />
      
      <main>
        <Hero onScheduleClick={() => setIsScheduleFormOpen(true)} />
        <Servicios />
        <Beneficios />
        <Capabilities />
        <HowWeWork />
        <ConsoleDemo />
        <Portafolio />
        <CTA onScheduleClick={() => setIsScheduleFormOpen(true)} />
      </main>
      
      <Footer />
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
      
      <ScheduleForm 
        isOpen={isScheduleFormOpen} 
        onClose={() => setIsScheduleFormOpen(false)} 
      />
    </>
  )
}
// app/[locale]/page.tsx - Página principal bilingüe
'use client'
import React, { use } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { Servicios } from '@/components/sections/Servicios'
import { Beneficios } from '@/components/sections/Beneficios'
import { Capabilities } from '@/components/sections/Capabilities'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { ConsoleDemo } from '@/components/sections/ConsoleDemo'
import { Portafolio } from '@/components/sections/Portafolio'
import { Testimonios } from '@/components/sections/Testimonios'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { ContactForm } from '@/components/ui/ContactForm'
import { ScheduleForm } from '@/components/ui/ScheduleForm'
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget'
import { useAnalyticsInitialization } from '@/components/analytics/useAnalytics'
import { useAdvancedAnalytics, useBusinessMetrics } from '@/components/analytics/useAdvancedAnalytics'
import { trackContactFormOpen, trackUserJourney } from '@/components/analytics/gtag'

type Props = {
  params: Promise<{ locale: string }>
}

export default function LocalePage({ params }: Props) {
  const { locale } = use(params)
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false)
  const [isScheduleFormOpen, setIsScheduleFormOpen] = React.useState(false)

  // Inicializar analytics
  useAnalyticsInitialization()
  useAdvancedAnalytics()
  const { addSessionValue, trackConversionFunnel } = useBusinessMetrics()

  const handleContactFormOpen = (source: string) => {
    trackContactFormOpen('contact', source)
    trackUserJourney('contact_form_opened', 1, 3)
    trackConversionFunnel('contact_form_opened', true)
    addSessionValue(25, 'contact_form_opened')
    setIsContactFormOpen(true)
  }

  const handleScheduleFormOpen = (source: string) => {
    trackContactFormOpen('schedule', source)
    trackUserJourney('schedule_form_opened', 1, 3)
    trackConversionFunnel('schedule_form_opened', true)
    addSessionValue(50, 'schedule_form_opened')
    setIsScheduleFormOpen(true)
  }

  return (
    <>
      <Header onContactClick={() => handleContactFormOpen('header')} />
      
      <main>
        <Hero onScheduleClick={() => handleScheduleFormOpen('hero')} />
        <TrustedBy />
        <Servicios />
        <Beneficios />
        <Capabilities />
        <HowWeWork />
        <ConsoleDemo />
        <Portafolio />
        <Testimonios />
        <FAQ onContactClick={() => handleContactFormOpen('faq')} />
        <CTA onScheduleClick={() => handleScheduleFormOpen('cta')} />
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

      <WhatsAppWidget />
    </>
  )
}
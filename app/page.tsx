// app/page.tsx - Página principal con tema Coder y nuevas secciones
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Servicios } from '@/components/sections/Servicios'
import { Beneficios } from '@/components/sections/Beneficios'
import { Capabilities } from '@/components/sections/Capabilities'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { ConsoleDemo } from '@/components/sections/ConsoleDemo'
import { Portafolio } from '@/components/sections/Portafolio'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <Servicios />
        <Beneficios />
        <Capabilities />
        <HowWeWork />
        <ConsoleDemo />
        <Portafolio />
        <CTA />
      </main>
      
      <Footer />
    </>
  )
}
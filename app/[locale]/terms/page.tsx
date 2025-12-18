// app/[locale]/terms/page.tsx - Página de Términos de Servicio
'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'

export default function TermsPage() {
  const { t, locale } = useTranslation()

  const content = locale === 'es' ? {
    title: 'Términos de Servicio',
    lastUpdated: 'Última actualización: Diciembre 2024',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        content: `Al acceder y utilizar el sitio web de EDDCODE (eddcode.com) y contratar nuestros servicios, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.`
      },
      {
        title: '2. Descripción de Servicios',
        content: `EDDCODE proporciona servicios de desarrollo de software que incluyen:

• Desarrollo de aplicaciones web y móviles
• Diseño y desarrollo de APIs
• Integraciones de sistemas
• Consultoría técnica
• DevOps y servicios cloud
• Soluciones de inteligencia artificial

Los servicios específicos, alcance, entregables y precios se detallarán en propuestas y contratos individuales para cada proyecto.`
      },
      {
        title: '3. Proceso de Contratación',
        content: `El proceso típico de contratación incluye:

1. Consulta inicial gratuita
2. Propuesta detallada con alcance, timeline y presupuesto
3. Aceptación por escrito de la propuesta
4. Firma de contrato de servicios
5. Pago del anticipo acordado
6. Inicio del desarrollo

No se iniciará ningún trabajo sin un acuerdo formal por escrito.`
      },
      {
        title: '4. Pagos y Facturación',
        content: `• Los precios se establecen en la propuesta y son válidos por 30 días
• Requerimos un anticipo del 50% para iniciar proyectos
• El saldo restante se factura según los hitos acordados o al finalizar
• Los pagos se aceptan por transferencia bancaria o tarjeta de crédito
• Las facturas vencen a 15 días naturales de su emisión
• Pagos atrasados pueden incurrir en cargos por mora del 2% mensual`
      },
      {
        title: '5. Propiedad Intelectual',
        content: `• El código fuente desarrollado específicamente para tu proyecto es de tu propiedad una vez completado el pago total
• EDDCODE retiene derechos sobre frameworks, librerías y componentes reutilizables propios
• Cualquier material proporcionado por el cliente sigue siendo propiedad del cliente
• EDDCODE puede mencionar el proyecto en su portafolio, salvo acuerdo de confidencialidad`
      },
      {
        title: '6. Confidencialidad',
        content: `Nos comprometemos a mantener la confidencialidad de toda la información sensible del cliente, incluyendo:

• Datos de negocio y estrategias
• Información técnica propietaria
• Datos de usuarios y clientes
• Cualquier información marcada como confidencial

Esta obligación continúa vigente después de finalizada la relación comercial.`
      },
      {
        title: '7. Garantías y Soporte',
        content: `• Ofrecemos 90 días de garantía por bugs en el código desarrollado
• Cambios de alcance o nuevas funcionalidades no están cubiertos por la garantía
• Soporte técnico post-lanzamiento disponible mediante contrato separado
• Los tiempos de respuesta de soporte dependen del nivel de servicio contratado`
      },
      {
        title: '8. Limitación de Responsabilidad',
        content: `• Nuestra responsabilidad máxima se limita al monto total pagado por el proyecto
• No somos responsables por daños indirectos, incidentales o consecuentes
• No garantizamos resultados comerciales específicos del software desarrollado
• El cliente es responsable de hacer backups de sus datos y sistemas`
      },
      {
        title: '9. Cancelación y Terminación',
        content: `• El cliente puede cancelar el proyecto con aviso por escrito de 15 días
• En caso de cancelación, se facturarán los trabajos completados hasta la fecha
• Los anticipos no son reembolsables una vez iniciado el trabajo
• EDDCODE puede terminar el contrato si el cliente incumple los pagos por más de 30 días`
      },
      {
        title: '10. Modificaciones',
        content: `EDDCODE se reserva el derecho de modificar estos términos. Los cambios significativos se comunicarán a clientes activos con 30 días de anticipación. El uso continuado de nuestros servicios después de los cambios constituye aceptación de los nuevos términos.`
      },
      {
        title: '11. Ley Aplicable',
        content: `Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa se resolverá en los tribunales de León, Guanajuato, México.`
      },
      {
        title: '12. Contacto',
        content: `Para preguntas sobre estos Términos de Servicio:

EDDCODE
Email: dramirez@eddcode.com
Teléfono: +52 477 581 3450
Ubicación: León, Guanajuato, México`
      }
    ]
  } : {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: December 2024',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: `By accessing and using the EDDCODE website (eddcode.com) and contracting our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services.`
      },
      {
        title: '2. Description of Services',
        content: `EDDCODE provides software development services including:

• Web and mobile application development
• API design and development
• System integrations
• Technical consulting
• DevOps and cloud services
• Artificial intelligence solutions

Specific services, scope, deliverables, and pricing will be detailed in individual proposals and contracts for each project.`
      },
      {
        title: '3. Contracting Process',
        content: `The typical contracting process includes:

1. Free initial consultation
2. Detailed proposal with scope, timeline, and budget
3. Written acceptance of the proposal
4. Signing of service contract
5. Payment of agreed deposit
6. Start of development

No work will begin without a formal written agreement.`
      },
      {
        title: '4. Payments and Billing',
        content: `• Prices are established in the proposal and valid for 30 days
• We require a 50% deposit to start projects
• The remaining balance is invoiced according to agreed milestones or upon completion
• Payments are accepted via bank transfer or credit card
• Invoices are due within 15 calendar days of issuance
• Late payments may incur late fees of 2% monthly`
      },
      {
        title: '5. Intellectual Property',
        content: `• Source code developed specifically for your project becomes your property once full payment is completed
• EDDCODE retains rights to proprietary frameworks, libraries, and reusable components
• Any material provided by the client remains the client's property
• EDDCODE may mention the project in its portfolio, unless under confidentiality agreement`
      },
      {
        title: '6. Confidentiality',
        content: `We commit to maintaining confidentiality of all sensitive client information, including:

• Business data and strategies
• Proprietary technical information
• User and customer data
• Any information marked as confidential

This obligation continues after the business relationship ends.`
      },
      {
        title: '7. Warranties and Support',
        content: `• We offer 90 days warranty for bugs in developed code
• Scope changes or new features are not covered by warranty
• Post-launch technical support available through separate contract
• Support response times depend on the service level contracted`
      },
      {
        title: '8. Limitation of Liability',
        content: `• Our maximum liability is limited to the total amount paid for the project
• We are not responsible for indirect, incidental, or consequential damages
• We do not guarantee specific commercial results from developed software
• The client is responsible for backing up their data and systems`
      },
      {
        title: '9. Cancellation and Termination',
        content: `• Client may cancel the project with 15 days written notice
• In case of cancellation, completed work will be invoiced up to date
• Deposits are non-refundable once work has started
• EDDCODE may terminate the contract if client defaults on payments for more than 30 days`
      },
      {
        title: '10. Modifications',
        content: `EDDCODE reserves the right to modify these terms. Significant changes will be communicated to active clients with 30 days advance notice. Continued use of our services after changes constitutes acceptance of new terms.`
      },
      {
        title: '11. Governing Law',
        content: `These terms are governed by the laws of the United Mexican States. Any dispute will be resolved in the courts of León, Guanajuato, Mexico.`
      },
      {
        title: '12. Contact',
        content: `For questions about these Terms of Service:

EDDCODE
Email: dramirez@eddcode.com
Phone: +52 477 581 3450
Location: León, Guanajuato, Mexico`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-bg-deep">
      {/* Header */}
      <header className="bg-bg-deep/80 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={`/${locale}`}
            className="text-brand-primary hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {content.title}
          </h1>
          <p className="text-fg-muted mb-12">{content.lastUpdated}</p>

          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <section key={index} className="bg-bg-card/50 rounded-2xl p-8 ring-1 ring-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                <div className="text-fg-muted whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

// app/[locale]/privacy/page.tsx - Página de Política de Privacidad
'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'

export default function PrivacyPage() {
  const { t, locale } = useTranslation()

  const content = locale === 'es' ? {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: Diciembre 2024',
    sections: [
      {
        title: '1. Información que Recopilamos',
        content: `Recopilamos información que nos proporcionas directamente cuando:

• Completas nuestros formularios de contacto (nombre, email, empresa, mensaje)
• Agendas una llamada con nosotros (información del proyecto, presupuesto estimado)
• Te suscribes a nuestro newsletter
• Interactúas con nuestro sitio web

También recopilamos automáticamente cierta información técnica como:
• Dirección IP y ubicación geográfica aproximada
• Tipo de navegador y dispositivo
• Páginas visitadas y tiempo de permanencia
• Fuente de tráfico (cómo llegaste a nuestro sitio)`
      },
      {
        title: '2. Cómo Usamos tu Información',
        content: `Utilizamos la información recopilada para:

• Responder a tus consultas y solicitudes
• Proporcionarte información sobre nuestros servicios
• Mejorar nuestro sitio web y experiencia de usuario
• Enviar comunicaciones de marketing (solo con tu consentimiento)
• Analizar el rendimiento de nuestro sitio
• Cumplir con obligaciones legales`
      },
      {
        title: '3. Cookies y Tecnologías de Seguimiento',
        content: `Utilizamos cookies y tecnologías similares para:

• Google Analytics 4: Para analizar el tráfico y comportamiento de usuarios
• Cookies de preferencias: Para recordar tu idioma preferido
• Cookies funcionales: Para mejorar la funcionalidad del sitio

Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.`
      },
      {
        title: '4. Compartir Información',
        content: `No vendemos ni alquilamos tu información personal. Podemos compartir información con:

• Proveedores de servicios que nos ayudan a operar nuestro negocio (hosting, email, analytics)
• Autoridades legales cuando sea requerido por ley
• En caso de fusión o adquisición empresarial

Todos nuestros proveedores están sujetos a acuerdos de confidencialidad.`
      },
      {
        title: '5. Seguridad de Datos',
        content: `Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:

• Cifrado SSL/TLS en todas las transmisiones
• Acceso restringido a datos personales
• Monitoreo regular de seguridad
• Backups seguros y encriptados`
      },
      {
        title: '6. Tus Derechos',
        content: `Tienes derecho a:

• Acceder a tus datos personales
• Rectificar información incorrecta
• Solicitar la eliminación de tus datos
• Oponerte al procesamiento de tus datos
• Solicitar la portabilidad de tus datos
• Retirar tu consentimiento en cualquier momento

Para ejercer estos derechos, contáctanos a: dramirez@eddcode.com`
      },
      {
        title: '7. Retención de Datos',
        content: `Conservamos tu información personal solo mientras sea necesario para los fines descritos en esta política o según lo requiera la ley. Los datos de contacto se conservan durante 3 años después de la última interacción.`
      },
      {
        title: '8. Cambios a esta Política',
        content: `Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página con una fecha de actualización revisada.`
      },
      {
        title: '9. Contacto',
        content: `Si tienes preguntas sobre esta Política de Privacidad, contáctanos:

EDDCODE
Email: dramirez@eddcode.com
Teléfono: +52 477 581 3450
Ubicación: León, Guanajuato, México`
      }
    ]
  } : {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: December 2024',
    sections: [
      {
        title: '1. Information We Collect',
        content: `We collect information you provide directly when:

• You complete our contact forms (name, email, company, message)
• You schedule a call with us (project information, estimated budget)
• You subscribe to our newsletter
• You interact with our website

We also automatically collect certain technical information such as:
• IP address and approximate geographic location
• Browser and device type
• Pages visited and time spent
• Traffic source (how you reached our site)`
      },
      {
        title: '2. How We Use Your Information',
        content: `We use the collected information to:

• Respond to your inquiries and requests
• Provide you with information about our services
• Improve our website and user experience
• Send marketing communications (only with your consent)
• Analyze our site's performance
• Comply with legal obligations`
      },
      {
        title: '3. Cookies and Tracking Technologies',
        content: `We use cookies and similar technologies for:

• Google Analytics 4: To analyze traffic and user behavior
• Preference cookies: To remember your preferred language
• Functional cookies: To improve site functionality

You can manage your cookie preferences through your browser settings.`
      },
      {
        title: '4. Information Sharing',
        content: `We do not sell or rent your personal information. We may share information with:

• Service providers who help us operate our business (hosting, email, analytics)
• Legal authorities when required by law
• In case of business merger or acquisition

All our providers are subject to confidentiality agreements.`
      },
      {
        title: '5. Data Security',
        content: `We implement technical and organizational security measures to protect your information:

• SSL/TLS encryption on all transmissions
• Restricted access to personal data
• Regular security monitoring
• Secure and encrypted backups`
      },
      {
        title: '6. Your Rights',
        content: `You have the right to:

• Access your personal data
• Rectify incorrect information
• Request deletion of your data
• Object to processing of your data
• Request data portability
• Withdraw your consent at any time

To exercise these rights, contact us at: dramirez@eddcode.com`
      },
      {
        title: '7. Data Retention',
        content: `We retain your personal information only as long as necessary for the purposes described in this policy or as required by law. Contact data is retained for 3 years after the last interaction.`
      },
      {
        title: '8. Changes to This Policy',
        content: `We may update this policy periodically. We will notify you of significant changes by posting the new policy on this page with a revised update date.`
      },
      {
        title: '9. Contact',
        content: `If you have questions about this Privacy Policy, contact us:

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

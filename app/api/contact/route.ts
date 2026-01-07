// app/api/contact/route.ts - API endpoint para el envío de emails con Resend
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log('📧 Contact API called')

    const body = await request.json()
    const { type, name, company, email, phone, message, projectDescription, preferredDate, preferredTime, timezone, discount, slotNumber, projectType } = body

    console.log('📝 Form data received:', { type, name, email, discount })

    let subject = ''
    let htmlContent = ''

    if (type === 'contact') {
      subject = `Nueva consulta de contacto - ${name}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; border-left: 5px solid #D97706;">
            <h2 style="color: #1f2937; margin-top: 0;">Nueva consulta de contacto</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #D97706; margin-top: 0;">Información del contacto:</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #D97706; margin-top: 0;">Mensaje del proyecto:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #1f2937; font-size: 14px;">
                <strong>Acción requerida:</strong> Responder a este cliente dentro de las próximas 24 horas.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>Este email fue generado automáticamente desde eddcode.com</p>
          </div>
        </div>
      `
    } else if (type === 'schedule') {
      subject = `Nueva solicitud de llamada - ${name}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; border-left: 5px solid #3B82F6;">
            <h2 style="color: #1f2937; margin-top: 0;">Nueva solicitud de llamada</h2>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #3B82F6; margin-top: 0;">Información del contacto:</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
            </div>

            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #3B82F6; margin-top: 0;">Detalles de la llamada solicitada:</h3>
              <p><strong>Fecha preferida:</strong> ${preferredDate}</p>
              <p><strong>Hora preferida:</strong> ${preferredTime}</p>
              <p><strong>Zona horaria:</strong> ${timezone}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #3B82F6; margin-top: 0;">Descripción del proyecto:</h3>
              <p style="white-space: pre-wrap;">${projectDescription}</p>
            </div>

            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #1f2937; font-size: 14px;">
                <strong>Acción requerida:</strong> Confirmar disponibilidad y enviar invitación de calendario al cliente.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>Este email fue generado automáticamente desde eddcode.com</p>
          </div>
        </div>
      `
    } else if (type === 'promo') {
      subject = `🎉 PROMO 25% - Nueva solicitud de proyecto - ${name}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; border-left: 5px solid #22C55E;">

            <!-- Banner de promoción -->
            <div style="background: linear-gradient(135deg, #22C55E 0%, #10B981 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <h1 style="margin: 0; font-size: 28px;">🎉 PROMOCIÓN 25% DESCUENTO</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Cliente del slot #${slotNumber || 'N/A'} del portafolio</p>
            </div>

            <h2 style="color: #1f2937; margin-top: 0;">Nueva solicitud de proyecto con descuento</h2>

            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #22C55E;">
              <h3 style="color: #22C55E; margin-top: 0;">⚡ Descuento aplicable:</h3>
              <p style="font-size: 24px; font-weight: bold; color: #22C55E; margin: 0;">${discount || '25%'} de descuento</p>
              <p style="color: #166534; margin: 10px 0 0 0; font-size: 14px;">Este cliente aplica para el descuento promocional por ser uno de los primeros proyectos.</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #22C55E; margin-top: 0;">Información del contacto:</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #22C55E; margin-top: 0;">Detalles del proyecto:</h3>
              <p><strong>Tipo de proyecto:</strong> ${projectType || 'No especificado'}</p>
              <p style="white-space: pre-wrap;"><strong>Descripción:</strong><br/>${message}</p>
            </div>

            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #F59E0B;">
              <p style="margin: 0; color: #92400E; font-size: 14px;">
                <strong>⚠️ Acción requerida:</strong> Contactar a este cliente dentro de las próximas 24 horas. Recuerda aplicar el 25% de descuento en la cotización.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>Este email fue generado automáticamente desde eddcode.com - Promoción Portafolio</p>
          </div>
        </div>
      `
    }

    const emailData = {
      from: process.env.FROM_EMAIL || 'eddy@notifications.eddcode.com',
      to: process.env.CONTACT_EMAIL || 'dramirez@eddcode.com',
      subject: subject,
      html: htmlContent,
      reply_to: email
    }

    console.log('📬 Sending email to:', emailData.to)
    console.log('📤 From:', emailData.from)
    
    const result = await resend.emails.send(emailData)
    console.log('✅ Email sent successfully:', result)

    return NextResponse.json({ 
      success: true, 
      message: type === 'contact' ? 'Mensaje enviado exitosamente' : 'Llamada agendada exitosamente'
    })

  } catch (error) {
    console.error('❌ Error sending email:', error)
    
    // Log más detalles del error
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { success: false, message: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
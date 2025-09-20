# Configuración de Email para Formularios de Contacto

## Configuración con Resend

1. **Configuración de variables de entorno:**
   El archivo `.env.local` ya está configurado con:
   ```env
   RESEND_API_KEY=re_SRhgsoMy_6dLY3zeKGNFTm9yCVC5S89QC
   FROM_EMAIL=eddy@notifications.eddcode.com
   ```

2. **Reinicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Funcionalidades implementadas

✅ **Formulario de Contacto General**
- Se abre desde el botón "Contacto" en el header
- Campos: Nombre, Empresa, Email, Mensaje
- Envío a: dramirez@eddcode.com

✅ **Formulario de Agenda de Llamada**  
- Se abre desde el botón "Agenda una llamada" en el hero
- Campos: Nombre, Empresa, Email, Teléfono, Descripción del proyecto
- Selector de fecha y hora (horario laboral 9 AM - 6 PM)
- Detección automática de zona horaria
- Envío a: dramirez@eddcode.com

✅ **Botones funcionales**
- Botón "Contacto" (header) → Formulario de contacto
- Botón "Agenda una llamada" (hero) → Formulario de agenda
- Botón "Ver capacidades" (hero) → Scroll suave a la sección de capacidades

## Personalización

Para cambiar el email de destino, edita el archivo:
`app/api/contact/route.ts` línea con `to: 'dramirez@eddcode.com'`

## Troubleshooting

- **Error de API Key**: Verifica que la RESEND_API_KEY sea correcta
- **Formularios no se envían**: Revisa la consola del navegador y los logs del servidor
- **Variables de entorno**: Asegúrate de que el archivo .env.local está en la raíz del proyecto
- **Dominio verificado**: Asegúrate de que el dominio `notifications.eddcode.com` esté verificado en Resend
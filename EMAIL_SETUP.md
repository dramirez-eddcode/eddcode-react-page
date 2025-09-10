# Configuración de Email para Formularios de Contacto

## Configuración rápida con Gmail

1. **Copia el archivo de ejemplo:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configura tu cuenta Gmail:**
   - Ve a tu [Cuenta de Google](https://myaccount.google.com/)
   - Navega a **Seguridad** > **Verificación en 2 pasos**
   - Activa la verificación en 2 pasos si no está activa
   - Ve a **Contraseñas de aplicaciones**
   - Genera una nueva contraseña de aplicación para "Correo"
   - Copia la contraseña de 16 dígitos

3. **Actualiza el archivo .env.local:**
   ```env
   GMAIL_USER=tu-email@gmail.com
   GMAIL_APP_PASSWORD=tu-contraseña-de-app-de-16-digitos
   ```

4. **Reinicia el servidor de desarrollo:**
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

- **Error de autenticación Gmail**: Verifica que hayas generado una App Password y no uses tu contraseña normal
- **Formularios no se envían**: Revisa la consola del navegador y los logs del servidor
- **Variables de entorno**: Asegúrate de que el archivo .env.local está en la raíz del proyecto
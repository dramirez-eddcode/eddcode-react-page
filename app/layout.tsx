// app/layout.tsx - Root layout
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
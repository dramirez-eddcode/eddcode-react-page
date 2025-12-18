// app/page.tsx - Root page (middleware handles locale redirection)
// El middleware detecta automáticamente el idioma del usuario y redirige a /es o /en

export default function RootPage() {
  // Esta página no debería renderizarse normalmente
  // porque el middleware redirige a /{locale} antes
  // Pero por si acaso, mostramos un loading state
  return (
    <div className="min-h-screen bg-bg-deep flex items-center justify-center">
      <div className="animate-pulse text-fg-muted">Loading...</div>
    </div>
  )
}
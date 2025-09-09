# EddCode Landing Page

Landing page profesional para empresa de desarrollo de software, construida con React, Next.js y TailwindCSS, siguiendo el diseño especificado en `landing-brief.md`.

## 🚀 Características

- **Diseño moderno**: Texturas sutiles con gradientes, ruido SVG y efectos visuales
- **Responsive**: Mobile-first design con breakpoints optimizados
- **Accesible**: Cumple estándares WCAG AA
- **SEO optimizado**: Metadatos completos y estructura semántica
- **TypeScript**: Tipado estático para mejor desarrollo
- **Componentes reutilizables**: Arquitectura modular y escalable

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Componentes**: React funcionales con hooks

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Verificar tipos
npm run type-check

# Linting
npm run lint
```

El servidor de desarrollo estará disponible en `http://localhost:3000`.

## 🎨 Guía de Diseño

### Colores
- **Fondo base**: `#1a1633`
- **Gradientes**: `#3b2a68`, `#2a1f49`, `#2491ff`
- **Brand primary**: `#2491ff`
- **Brand accent**: `#8b5cf6`

### Texturas
Las tarjetas utilizan un sistema de capas:
1. **Base**: Linear gradient de fondo
2. **Luces radiales**: Dos gradientes radiales para iluminación
3. **Vignette**: Gradiente lineal para profundidad
4. **Noise**: SVG con mix-blend-mode para textura
5. **Bordes**: Ring y shadow para relieve

### Tipografía
- **Font family**: Inter (Google Fonts)
- **Tamaños**: Sistema responsive con clamp()

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y utilities
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── metadata.ts          # Configuración SEO
├── components/
│   ├── ui/
│   │   ├── TexturedCard.tsx     # Tarjeta con texturas
│   │   └── TexturedWaveCard.tsx # Variante con ondas
│   ├── sections/
│   │   ├── Hero.tsx             # Sección hero
│   │   ├── Servicios.tsx        # Grid de servicios
│   │   ├── Beneficios.tsx       # Lista de beneficios
│   │   ├── Portafolio.tsx       # Casos de éxito
│   │   └── CTA.tsx              # Call to action final
│   └── layout/
│       ├── Header.tsx           # Navegación principal
│       └── Footer.tsx           # Footer con links
└── tailwind.config.ts       # Configuración Tailwind
```

## ✅ Checklist de Calidad

### ✅ Visual
- [x] Texturas claramente visibles (gradientes + noise)
- [x] Efectos de hover y transiciones suaves
- [x] Consistencia en spacing y tipografía
- [x] Diseño responsive en todos los breakpoints

### ✅ Accesibilidad
- [x] Contraste de texto ≥ 4.5:1
- [x] Navegación completa por teclado
- [x] Foco visible en todos los elementos interactivos
- [x] Labels y aria-* apropiados
- [x] Estructura semántica HTML5

### ✅ SEO
- [x] Meta tags completos (title, description, keywords)
- [x] Open Graph y Twitter Cards
- [x] Estructura semántica (header, main, section, footer)
- [x] URLs canónicas y alternates
- [x] Robots.txt friendly

### ✅ Performance
- [x] Imágenes optimizadas con loading lazy
- [x] Fonts con preconnect
- [x] Animaciones con transform y opacity
- [x] Sin dependencias pesadas

### ✅ Responsive
- [x] Mobile-first approach
- [x] Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- [x] Navegación móvil funcional
- [x] Tipografía escalable

## 🎯 Secciones Implementadas

1. **Hero**: Título principal, subtítulo y CTAs
2. **Servicios**: Grid de 4 servicios con tarjetas texturizadas
3. **Beneficios**: Lista de 4 beneficios con iconos SVG
4. **Portafolio**: Grid de proyectos con TexturedWaveCard
5. **CTA**: Bloque final de conversión con texturas

## 🔧 Personalización

### Colores
Modifica los tokens en `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    primary: '#2491ff',
    accent: '#8b5cf6',
  }
}
```

### Contenido
Actualiza el copy en cada componente de sección o crea un sistema de CMS.

### Animaciones
Las animaciones están definidas en `globals.css` y se pueden extender en la configuración de Tailwind.

## 📞 Soporte

Para consultas sobre implementación o customización:
- Email: hola@eddcode.com
- LinkedIn: [EddCode](https://linkedin.com/company/eddcode)
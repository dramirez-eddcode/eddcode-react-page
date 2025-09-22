# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking (important to run before commits)
npm run type-check

# Linting
npm run lint
```

### Email Configuration
Before the contact forms work, you need to configure Gmail SMTP:
1. Copy `.env.example` to `.env.local` (if it exists)
2. Set up Gmail App Password following `EMAIL_SETUP.md`
3. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` to `.env.local`

## Architecture Overview

This is a Next.js 14 (App Router) landing page for EDDCODE, a software development company. The application features a modern "coder-style" design with textured gradients and sophisticated visual effects.

### Key Technologies
- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** with custom design system
- **Nodemailer** for contact form email functionality
- **React functional components** with hooks

### Design System
The application uses a sophisticated "coder" aesthetic built on:
- **Dark theme**: Deep backgrounds (`#0F1117`, `#12141C`, `#1A1D29`)
- **Gradient accents**: Purple, pink, rose, amber, and blue variants
- **Textured cards**: Multi-layer effects with gradients, radial lights, vignette, and SVG noise
- **Custom animations**: Fade-in and fade-up effects

### Architecture Patterns

#### Component Structure
```
components/
├── layout/          # Header and Footer
├── sections/        # Page sections (Hero, Servicios, etc.)
└── ui/             # Reusable UI components
```

#### Section Components
All sections follow a consistent pattern:
- Export as named function
- Use semantic HTML (section, header, etc.)
- Apply responsive design mobile-first
- Implement fade-up animations

#### Textured Card System
The `TexturedCard` component provides the signature visual style:
- **5-layer texture system**: Base gradient + radial lights + vignette + noise + borders
- **Color variants**: blue, purple, cyan, warm, default
- **Hover effects**: Scale, shadow, and ring transformations
- **Accessibility**: Proper contrast ratios maintained

#### State Management
- Uses React useState for simple modal states
- Contact and schedule forms are controlled via props from main page
- No external state management needed for current scope

### Contact Forms Integration
Two functional contact forms with different purposes:
- **General Contact**: Opens from header "Contacto" button
- **Schedule Call**: Opens from hero "Agenda una llamada" button

Both forms send emails via `/api/contact/route.ts` to `dramirez@eddcode.com` with formatted HTML templates.

### Styling Conventions
- **Responsive**: Mobile-first with sm/md/lg/xl breakpoints
- **Typography**: Inter font family with responsive clamp() sizing
- **Colors**: Semantic naming (bg-deep, fg-strong, accent-purple-mid)
- **Animations**: CSS-based with transform/opacity for performance

### Import Patterns
- Use `@/` alias for project root imports
- Components export as named exports (not default)
- Client components marked with `'use client'` directive
- Metadata configured in separate `metadata.ts` file

### Development Workflow
1. Always run `npm run type-check` before commits
2. Test both contact forms locally with proper email setup
3. Verify responsive design on multiple breakpoints
4. Check accessibility with keyboard navigation
5. Validate gradient/texture rendering across browsers

### Email Destination
Contact forms currently send to `dramirez@eddcode.com`. To change recipient, modify line 100 in `app/api/contact/route.ts`.
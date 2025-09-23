// app/schema.ts - Structured data schema for SEO
import { Organization, WebSite, BreadcrumbList } from 'schema-dts'

export const organizationSchema: Organization = {
  "@type": "Organization",
  "@id": "https://eddcode.com/#organization",
  name: "EDDCODE",
  alternateName: "EDD CODE",
  url: "https://eddcode.com",
  logo: "https://eddcode.com/favicon.png",
  description: "Empresa de desarrollo de software profesional especializada en aplicaciones web, APIs, integraciones y soluciones de AI",
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    email: "dramirez@eddcode.com",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"]
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressRegion: "Buenos Aires"
  },
  sameAs: [
    "https://github.com/eddcode",
    "https://linkedin.com/company/eddcode"
  ],
  areaServed: {
    "@type": "Country",
    name: "Argentina"
  }
}

export const websiteSchema: WebSite = {
  "@type": "WebSite",
  "@id": "https://eddcode.com/#website",
  url: "https://eddcode.com",
  name: "EDDCODE - Desarrollo de Software Profesional",
  description: "Transformamos ideas en software que impulsa el crecimiento empresarial",
  publisher: {
    "@id": "https://eddcode.com/#organization"
  },
  inLanguage: "es-ES",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://eddcode.com/?q={search_term_string}"
  }
}

export const breadcrumbSchema: BreadcrumbList = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://eddcode.com"
    }
  ]
}
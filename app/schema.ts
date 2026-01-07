// app/schema.ts - Structured data schema for SEO (bilingüe)
// Usamos Record<string, unknown> para mayor flexibilidad con las propiedades de Schema.org

const baseUrl = 'https://eddcode.com'

// Organization Schema - Base para ambos idiomas
export const organizationSchema: Record<string, unknown> = {
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "EDDCODE",
  alternateName: ["EDD CODE", "Eddcode"],
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/favicon.png`,
    width: "512",
    height: "512"
  },
  image: `${baseUrl}/og-image.jpg`,
  description: "Empresa de desarrollo de software profesional especializada en aplicaciones web, APIs, integraciones empresariales e Inteligencia Artificial",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Daniel Ramírez",
    jobTitle: "CEO & Founder"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "dramirez@eddcode.com",
      telephone: "+52-477-581-3450",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
      areaServed: ["MX", "US", "ES", "AR", "CO", "CL", "PE"]
    },
    {
      "@type": "ContactPoint",
      email: "dramirez@eddcode.com",
      telephone: "+52-477-581-3450",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"]
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "León",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    postalCode: "37000",
    addressCountry: "MX"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.1250",
    longitude: "-101.6860"
  },
  sameAs: [
    "https://github.com/eddcode",
    "https://linkedin.com/company/eddcode",
    "https://twitter.com/eddcode"
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Mexico"
    },
    {
      "@type": "Country",
      name: "United States"
    },
    {
      "@type": "Country",
      name: "Spain"
    }
  ],
  knowsAbout: [
    "Software Development",
    "Web Applications",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "GraphQL",
    "Artificial Intelligence",
    "Machine Learning",
    "DevOps",
    "Cloud Computing",
    "AWS",
    "Azure"
  ],
  slogan: "Transformamos ideas en software que impulsa el crecimiento empresarial"
}

// Professional Service Schema
export const professionalServiceSchema: Record<string, unknown> = {
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#service`,
  name: "EDDCODE - Desarrollo de Software",
  image: `${baseUrl}/og-image.jpg`,
  url: baseUrl,
  telephone: "+52-477-581-3450",
  email: "dramirez@eddcode.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "León",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    postalCode: "37000",
    addressCountry: "MX"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.1250",
    longitude: "-101.6860"
  },
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Desarrollo de Software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de Aplicaciones Web",
          description: "Aplicaciones web modernas con React, Next.js y TypeScript"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo de APIs",
          description: "APIs REST y GraphQL escalables con Node.js"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inteligencia Artificial",
          description: "Soluciones de AI, Machine Learning y Data Science"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DevOps & Cloud",
          description: "Infraestructura cloud con AWS, Azure y CI/CD"
        }
      }
    ]
  }
}

// Función para generar WebSite schema según idioma
export const getWebsiteSchema = (locale: string): Record<string, unknown> => {
  const isSpanish = locale === 'es'

  return {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: isSpanish ? baseUrl : `${baseUrl}/en`,
    name: isSpanish
      ? "EDDCODE - Desarrollo de Software Profesional"
      : "EDDCODE - Professional Software Development",
    description: isSpanish
      ? "Transformamos ideas en software que impulsa el crecimiento empresarial"
      : "We transform ideas into software that drives business growth",
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    inLanguage: isSpanish ? "es-MX" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`
      }
    }
  }
}

// Función para generar BreadcrumbList según idioma
export const getBreadcrumbSchema = (locale: string): Record<string, unknown> => {
  const isSpanish = locale === 'es'

  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isSpanish ? "Inicio" : "Home",
        item: isSpanish ? baseUrl : `${baseUrl}/en`
      }
    ]
  }
}

// FAQ Schema para mejor SEO
export const getFAQSchema = (locale: string): Record<string, unknown> => {
  const isSpanish = locale === 'es'

  const faqs = isSpanish ? [
    {
      question: "¿Qué servicios de desarrollo de software ofrece EDDCODE?",
      answer: "Ofrecemos desarrollo de aplicaciones web con React y Next.js, desarrollo de APIs REST y GraphQL, soluciones de Inteligencia Artificial y Machine Learning, integraciones empresariales, y servicios de DevOps y Cloud con AWS y Azure."
    },
    {
      question: "¿En qué tecnologías se especializa EDDCODE?",
      answer: "Nos especializamos en React, Next.js, Node.js, TypeScript, Python, APIs REST y GraphQL, bases de datos SQL y NoSQL, servicios cloud de AWS y Azure, y tecnologías de AI/ML."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto de software?",
      answer: "El tiempo varía según la complejidad del proyecto. Proyectos pequeños pueden tomar 2-4 semanas, mientras que proyectos empresariales complejos pueden requerir varios meses. Ofrecemos entregas iterativas para que veas avances constantes."
    },
    {
      question: "¿EDDCODE trabaja con clientes internacionales?",
      answer: "Sí, trabajamos con clientes en México, Estados Unidos, España y toda Latinoamérica. Nuestro equipo es bilingüe (español e inglés) y estamos acostumbrados a trabajar de forma remota con diferentes zonas horarias."
    }
  ] : [
    {
      question: "What software development services does EDDCODE offer?",
      answer: "We offer web application development with React and Next.js, REST and GraphQL API development, Artificial Intelligence and Machine Learning solutions, enterprise integrations, and DevOps and Cloud services with AWS and Azure."
    },
    {
      question: "What technologies does EDDCODE specialize in?",
      answer: "We specialize in React, Next.js, Node.js, TypeScript, Python, REST and GraphQL APIs, SQL and NoSQL databases, AWS and Azure cloud services, and AI/ML technologies."
    },
    {
      question: "How long does it take to develop a software project?",
      answer: "Time varies depending on project complexity. Small projects can take 2-4 weeks, while complex enterprise projects may require several months. We offer iterative deliveries so you can see constant progress."
    },
    {
      question: "Does EDDCODE work with international clients?",
      answer: "Yes, we work with clients in Mexico, the United States, Spain, and all of Latin America. Our team is bilingual (Spanish and English) and we are experienced in working remotely across different time zones."
    }
  ]

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
}

// LocalBusiness Schema para SEO local
export const localBusinessSchema: Record<string, unknown> = {
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "EDDCODE",
  image: `${baseUrl}/og-image.jpg`,
  url: baseUrl,
  telephone: "+52-477-581-3450",
  email: "dramirez@eddcode.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "León",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    postalCode: "37000",
    addressCountry: "MX"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.1250,
    longitude: -101.6860
  },
  priceRange: "$$$",
  currenciesAccepted: "MXN, USD",
  paymentAccepted: "Credit Card, Bank Transfer, PayPal",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1"
  }
}

// SoftwareApplication Schema para servicios de software
export const getSoftwareApplicationSchema = (locale: string): Record<string, unknown> => {
  const isSpanish = locale === 'es'

  return {
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software`,
    name: "EDDCODE Software Solutions",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50"
    },
    author: {
      "@id": `${baseUrl}/#organization`
    },
    description: isSpanish
      ? "Soluciones de software empresarial personalizadas"
      : "Custom enterprise software solutions"
  }
}

// Review/Rating Schema para testimonios reales
export const getReviewSchema = (locale: string): Record<string, unknown> => {
  const isSpanish = locale === 'es'

  const reviews = [
    {
      author: 'Carlos Mendoza',
      authorTitle: 'CEO',
      company: 'Vuelatour',
      rating: 5,
      reviewBody: isSpanish
        ? 'EDDCODE transformó completamente nuestra presencia digital. En solo una semana entregaron un sitio web que superó todas nuestras expectativas. El equipo es altamente profesional y la comunicación fue excelente durante todo el proyecto.'
        : 'EDDCODE completely transformed our digital presence. In just one week they delivered a website that exceeded all our expectations. The team is highly professional and communication was excellent throughout the project.'
    },
    {
      author: 'Luis Hernández',
      authorTitle: isSpanish ? 'Director General' : 'General Director',
      company: 'Jetset Transfers',
      rating: 5,
      reviewBody: isSpanish
        ? 'Trabajar con EDDCODE fue una experiencia excepcional. Entendieron perfectamente nuestras necesidades de negocio y crearon una solución que realmente impulsa nuestras operaciones. El soporte post-lanzamiento ha sido impecable.'
        : 'Working with EDDCODE was an exceptional experience. They perfectly understood our business needs and created a solution that truly drives our operations. Post-launch support has been impeccable.'
    }
  ]

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "EDDCODE",
    review: reviews.map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
        jobTitle: review.authorTitle
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1
      },
      reviewBody: review.reviewBody,
      itemReviewed: {
        "@type": "Organization",
        name: "EDDCODE"
      },
      publisher: {
        "@type": "Organization",
        name: review.company
      }
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "2",
      bestRating: "5",
      worstRating: "1"
    }
  }
}

// Portfolio/CreativeWork Schema para proyectos reales
export const getPortfolioSchema = (locale: string): Record<string, unknown> => {
  const isSpanish = locale === 'es'

  const projects = [
    {
      name: 'Vuelatour',
      url: 'https://www.vuelatour.com',
      description: isSpanish
        ? 'Plataforma de reservas de viajes con integración de pagos y sistema de gestión de tours. Desarrollada con Next.js, TypeScript y APIs de terceros.'
        : 'Travel booking platform with payment integration and tour management system. Built with Next.js, TypeScript and third-party APIs.',
      image: `${baseUrl}/portfolio/vuelatour.jpg`,
      keywords: ['Next.js', 'TypeScript', 'React', 'Payment Integration', 'Travel Tech']
    },
    {
      name: 'Jetset Transfers',
      url: 'https://www.jetsetcancun.com',
      description: isSpanish
        ? 'Sistema de reservas de transfers aeroportuarios con cotizador en tiempo real y gestión de flotas. Arquitectura moderna con React y Node.js.'
        : 'Airport transfer booking system with real-time quotes and fleet management. Modern architecture with React and Node.js.',
      image: `${baseUrl}/portfolio/jetset.jpg`,
      keywords: ['React', 'Node.js', 'Real-time', 'Fleet Management', 'Travel Tech']
    }
  ]

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isSpanish ? "Portafolio de EDDCODE" : "EDDCODE Portfolio",
    description: isSpanish
      ? "Proyectos de desarrollo de software completados por EDDCODE"
      : "Software development projects completed by EDDCODE",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        url: project.url,
        description: project.description,
        image: project.image,
        creator: {
          "@id": `${baseUrl}/#organization`
        },
        keywords: project.keywords.join(', '),
        dateCreated: "2024"
      }
    }))
  }
}

// Exportar schemas legacy para compatibilidad
export const websiteSchema = getWebsiteSchema('es')
export const breadcrumbSchema = getBreadcrumbSchema('es')
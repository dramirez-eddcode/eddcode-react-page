// lib/translations.ts - Traducciones para español e inglés

export const translations = {
  es: {
    // Navigation
    nav: {
      services: 'Servicios',
      benefits: 'Beneficios',
      portfolio: 'Portafolio',
      testimonials: 'Clientes',
      faq: 'FAQ',
      contact: 'Contacto',
      language: 'Idioma',
    },
    
    // Hero Section
    hero: {
      title: 'Entornos seguros y veloces para tus desarrollos',
      titleHighlight: '— y tus agentes de IA',
      description: 'Construimos software que escala. Equipos senior, entregas predecibles y arquitecturas robustas que impulsan el crecimiento de tu negocio.',
      scheduleCall: 'Agenda una llamada',
      viewCapabilities: 'Ver Capacidades',
    },
    
    // Services Section
    services: {
      title: 'Qué ofrecemos',
      subtitle: 'Soluciones tecnológicas completas que impulsan el crecimiento de tu empresa',
      webApps: {
        title: 'Apps Web',
        description: 'Aplicaciones web modernas con React, Next.js y tecnologías de vanguardia. Interfaces rápidas y experiencias excepcionales.',
      },
      apis: {
        title: 'Integraciones & APIs',
        description: 'Conectamos sistemas, automatizamos procesos y creamos APIs robustas. Arquitecturas escalables que crecen contigo.',
      },
      data: {
        title: 'Data & AI',
        description: 'Transformamos datos en insights accionables. Machine Learning, automatización inteligente y soluciones de IA personalizadas.',
      },
      devops: {
        title: 'DevOps & Cloud',
        description: 'Infraestructura moderna, CI/CD, monitoring y despliegues automáticos. Tu software siempre disponible y seguro.',
      },
    },
    
    // Benefits Section
    benefits: {
      title: 'Por qué elegirnos',
      subtitle: 'Nuestra metodología garantiza resultados excepcionales en cada proyecto',
      continuousDelivery: {
        title: 'Entrega continua',
        description: 'Releases frecuentes y predecibles que agregan valor desde el día uno.',
      },
      scalableCode: {
        title: 'Código escalable',
        description: 'Arquitecturas sólidas que crecen junto a tu negocio sin comprometer la velocidad.',
      },
      directCommunication: {
        title: 'Comunicación directa',
        description: 'Acceso directo al equipo técnico. Sin intermediarios, feedback inmediato.',
      },
      seniorTeam: {
        title: 'Equipo senior',
        description: 'Desarrolladores con +5 años de experiencia en tecnologías modernas.',
      },
    },
    
    // Capabilities Section
    capabilities: {
      title: 'Nuestras capacidades',
      subtitle: 'Tecnologías y metodologías que dominamos',
      cta: 'Exploremos tu proyecto',
      webApps: {
        title: 'Aplicaciones Web y APIs escalables',
        description: 'Desarrollo full-stack con React, Next.js, Node.js y arquitecturas serverless que crecen con tu demanda.',
        features: 'SPA/SSR optimizadas,APIs REST/GraphQL,Microservicios'
      },
      integrations: {
        title: 'Integraciones seguras con tu stack',
        description: 'Conectamos sistemas legacy y modernos con APIs robustas, webhooks y pipelines de datos confiables.',
        features: 'ERP/CRM integration,Legacy modernization,Data pipelines'
      },
      devOps: {
        title: 'DevOps y Cloud Infrastructure',
        description: 'Automatización completa desde desarrollo hasta producción con CI/CD, monitoring y escalado automático.',
        features: 'AWS/Azure/GCP,Docker/Kubernetes,Monitoring 24/7'
      },
      mobile: {
        title: 'Apps móviles nativas y PWA',
        description: 'Experiencias móviles fluidas con React Native, Swift/Kotlin o PWAs que funcionan offline.',
        features: 'React Native,PWA offline-first,App Store deployment'
      },
      dataAi: {
        title: 'Data Science e IA aplicada',
        description: 'Modelos predictivos, automatización inteligente y dashboards que convierten datos en decisiones.',
        features: 'ML/AI models,Business Intelligence,Predictive analytics'
      },
      consulting: {
        title: 'Consultoría técnica estratégica',
        description: 'Auditorías de código, arquitectura de sistemas y roadmaps tecnológicos para escalar tu negocio.',
        features: 'Code audits,Tech roadmaps,Team mentoring'
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'La satisfacción de nuestros clientes es nuestra mejor carta de presentación',
      stats: {
        projects: 'Proyectos entregados',
        rating: 'Calificación promedio',
        satisfaction: 'Clientes satisfechos',
        years: 'Años de experiencia'
      },
      promo: {
        discount: 'de descuento',
        title: 'Tu testimonio podría estar aquí',
        description: 'Sé de los primeros clientes en confiar en nosotros y obtén un 25% de descuento exclusivo en tu proyecto. Tu historia de éxito merece ser contada.',
        cta: 'Obtener 25% de descuento'
      },
      items: {
        vuelatour: {
          name: 'Carlos Mendoza',
          role: 'CEO',
          company: 'Vuelatour',
          quote: 'EDDCODE transformó nuestra visión en realidad. En solo una semana teníamos una plataforma de reservas funcionando perfectamente. Su equipo entendió exactamente lo que necesitábamos y la comunicación fue excepcional durante todo el proceso.'
        },
        jetset: {
          name: 'Luis Hernández',
          role: 'Director General',
          company: 'Jetset Transfers',
          quote: 'Necesitábamos un sistema de reservas robusto y profesional. EDDCODE entregó una solución que superó nuestras expectativas en solo una semana. El cotizador automático y el seguimiento en tiempo real han transformado nuestras operaciones.'
        }
      }
    },

    // Portfolio Section
    portfolio: {
      title: 'Nuestro trabajo',
      subtitle: 'Proyectos que demuestran nuestra experiencia y calidad',
      viewProject: 'Ver proyecto',
      deliveredIn: 'Entregado en',
      week: 'semana',
      weeks: 'semanas',
      promo: {
        yourProject: 'Tu proyecto aquí',
        discount: 'descuento',
        available: 'Disponible',
        title: 'Sé de los primeros',
        description: 'Reserva este espacio para tu proyecto y obtén un 25% de descuento exclusivo. Cuéntanos tu idea y la hacemos realidad.',
        cta: 'Reservar con descuento'
      },
      projects: {
        vuelatour: {
          title: 'Vuelatour',
          description: 'Plataforma de vuelos privados y tours aéreos panorámicos en Cancún y Riviera Maya. Sistema de reservas con disponibilidad en tiempo real, soporte multilingüe y optimización SEO.',
          tags: 'Next.js,TypeScript,SEO,i18n',
          metric: '+5,000 vuelos',
          metricLabel: 'completados'
        },
        jetset: {
          title: 'Jetset Transfers Cancún',
          description: 'Servicio premium de transfers y transportación privada en Cancún y Riviera Maya. Sistema de reservas online, cotizador automático y gestión de flotas con seguimiento en tiempo real.',
          tags: 'Next.js,TypeScript,SEO,Booking',
          metric: '+8,000 transfers',
          metricLabel: 'realizados'
        }
      }
    },

    // Promo Form
    promoForm: {
      discountBadge: 'de descuento exclusivo',
      title: 'Reserva tu espacio con 25% de descuento',
      subtitle: 'Cuéntanos sobre tu proyecto y te contactaremos con una cotización especial.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      company: 'Empresa',
      companyPlaceholder: 'Nombre de tu empresa',
      email: 'Email',
      phone: 'Teléfono',
      projectType: 'Tipo de proyecto',
      selectProjectType: 'Selecciona el tipo de proyecto',
      projectTypes: {
        landing: 'Landing Page / Sitio Web',
        webapp: 'Aplicación Web',
        ecommerce: 'E-commerce / Tienda Online',
        api: 'API / Integración de Sistemas',
        mobile: 'Aplicación Móvil',
        other: 'Otro'
      },
      message: 'Describe tu proyecto',
      messagePlaceholder: 'Cuéntanos qué necesitas: funcionalidades, objetivos, referencias de diseño...',
      discountInfo: 'Al enviar este formulario, tu proyecto aplica automáticamente para el 25% de descuento sobre la cotización final.',
      sending: 'Enviando...',
      submit: 'Solicitar cotización con descuento',
      successTitle: '¡Solicitud enviada!',
      successMessage: 'Hemos recibido tu solicitud. Te contactaremos en las próximas 24 horas.',
      successDiscount: 'Tu descuento del 25% está reservado.',
      close: 'Cerrar',
      errorMessage: 'Hubo un error al enviar el formulario. Por favor intenta nuevamente.'
    },
    
    // CTA Section
    cta: {
      title: '¿Listo para acelerar tu proyecto?',
      subtitle: 'Conversemos sobre cómo podemos ayudarte a construir el software que tu negocio necesita.',
      scheduleCall: 'Agenda una llamada',
      noCommitment: 'Sin compromiso',
      response24h: 'Respuesta en 24h',
    },
    
    // Contact Form
    contact: {
      title: 'Contactanos',
      subtitle: 'Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas',
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente',
      error: 'Error al enviar el mensaje',
    },
    
    // Schedule Form
    schedule: {
      title: 'Agenda una llamada',
      subtitle: 'Hablemos sobre tu proyecto en una llamada de 30 minutos',
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      projectType: 'Tipo de proyecto',
      budget: 'Presupuesto estimado',
      timeline: 'Timeline esperado',
      message: 'Cuéntanos sobre tu proyecto',
      schedule: 'Agendar llamada',
      scheduling: 'Agendando...',
      success: 'Llamada agendada correctamente',
      error: 'Error al agendar la llamada',
    },

    // TrustedBy Section
    trustedBy: {
      title: 'Empresas que confían en nosotros',
      technologies: 'Tecnologías que dominamos',
      beFirst: 'Sé el primero',
    },

    // FAQ Section
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las dudas más comunes sobre nuestros servicios',
      moreQuestions: '¿Tienes más preguntas?',
      contactUs: 'Contáctanos directamente',
      items: {
        services: {
          question: '¿Qué servicios de desarrollo de software ofrece EDDCODE?',
          answer: 'Ofrecemos desarrollo de aplicaciones web con React y Next.js, desarrollo de APIs REST y GraphQL, soluciones de Inteligencia Artificial y Machine Learning, integraciones empresariales, y servicios de DevOps y Cloud con AWS y Azure.'
        },
        technologies: {
          question: '¿En qué tecnologías se especializa EDDCODE?',
          answer: 'Nos especializamos en React, Next.js, Node.js, TypeScript, Python, APIs REST y GraphQL, bases de datos SQL y NoSQL, servicios cloud de AWS y Azure, y tecnologías de AI/ML.'
        },
        timeline: {
          question: '¿Cuánto tiempo toma desarrollar un proyecto de software?',
          answer: 'El tiempo varía según la complejidad del proyecto. Proyectos pequeños pueden tomar 2-4 semanas, mientras que proyectos empresariales complejos pueden requerir varios meses. Ofrecemos entregas iterativas para que veas avances constantes.'
        },
        international: {
          question: '¿EDDCODE trabaja con clientes internacionales?',
          answer: 'Sí, trabajamos con clientes en México, Estados Unidos, España y toda Latinoamérica. Nuestro equipo es bilingüe (español e inglés) y estamos acostumbrados a trabajar de forma remota con diferentes zonas horarias.'
        },
        support: {
          question: '¿Qué tipo de soporte ofrecen después del lanzamiento?',
          answer: 'Ofrecemos 90 días de garantía para corrección de bugs en el código desarrollado. Además, tenemos planes de soporte técnico continuo que incluyen mantenimiento, actualizaciones de seguridad y soporte prioritario.'
        },
        payment: {
          question: '¿Cómo funciona el proceso de pago?',
          answer: 'Trabajamos con un modelo de anticipo del 50% para iniciar el proyecto y el resto se paga en hitos acordados o al finalizar. Aceptamos transferencias bancarias y tarjetas de crédito. Cada proyecto incluye una propuesta detallada con alcance, timeline y costos claros.'
        }
      }
    },

    // Footer
    footer: {
      rights: 'Todos los derechos reservados.',
      description: 'Construimos software que escala.',
    },
  },

  en: {
    // Navigation
    nav: {
      services: 'Services',
      benefits: 'Benefits',
      portfolio: 'Portfolio',
      testimonials: 'Clients',
      faq: 'FAQ',
      contact: 'Contact',
      language: 'Language',
    },
    
    // Hero Section
    hero: {
      title: 'Secure and fast environments for your developments',
      titleHighlight: '— and your AI agents',
      description: 'We build software that scales. Senior teams, predictable deliveries and robust architectures that drive your business growth.',
      scheduleCall: 'Schedule a call',
      viewCapabilities: 'View Capabilities',
    },
    
    // Services Section
    services: {
      title: 'What we offer',
      subtitle: 'Complete technological solutions that drive your company growth',
      webApps: {
        title: 'Web Apps',
        description: 'Modern web applications with React, Next.js and cutting-edge technologies. Fast interfaces and exceptional experiences.',
      },
      apis: {
        title: 'Integrations & APIs',
        description: 'We connect systems, automate processes and create robust APIs. Scalable architectures that grow with you.',
      },
      data: {
        title: 'Data & AI',
        description: 'We transform data into actionable insights. Machine Learning, intelligent automation and personalized AI solutions.',
      },
      devops: {
        title: 'DevOps & Cloud',
        description: 'Modern infrastructure, CI/CD, monitoring and automatic deployments. Your software always available and secure.',
      },
    },
    
    // Benefits Section
    benefits: {
      title: 'Why choose us',
      subtitle: 'Our methodology guarantees exceptional results in every project',
      continuousDelivery: {
        title: 'Continuous delivery',
        description: 'Frequent and predictable releases that add value from day one.',
      },
      scalableCode: {
        title: 'Scalable code',
        description: 'Solid architectures that grow with your business without compromising speed.',
      },
      directCommunication: {
        title: 'Direct communication',
        description: 'Direct access to the technical team. No intermediaries, immediate feedback.',
      },
      seniorTeam: {
        title: 'Senior team',
        description: 'Developers with +5 years of experience in modern technologies.',
      },
    },
    
    // Capabilities Section
    capabilities: {
      title: 'Our capabilities',
      subtitle: 'Technologies and methodologies we master',
      cta: 'Let\'s explore your project',
      webApps: {
        title: 'Scalable Web Applications and APIs',
        description: 'Full-stack development with React, Next.js, Node.js and serverless architectures that scale with your demand.',
        features: ['Optimized SPA/SSR', 'REST/GraphQL APIs', 'Microservices']
      },
      integrations: {
        title: 'Secure integrations with your stack',
        description: 'We connect legacy and modern systems with robust APIs, webhooks and reliable data pipelines.',
        features: 'ERP/CRM integration,Legacy modernization,Data pipelines'
      },
      devOps: {
        title: 'DevOps and Cloud Infrastructure',
        description: 'Complete automation from development to production with CI/CD, monitoring and auto-scaling.',
        features: ['AWS/Azure/GCP', 'Docker/Kubernetes', '24/7 Monitoring']
      },
      mobile: {
        title: 'Native mobile apps and PWA',
        description: 'Smooth mobile experiences with React Native, Swift/Kotlin or PWAs that work offline.',
        features: ['React Native', 'Offline-first PWA', 'App Store deployment']
      },
      dataAi: {
        title: 'Applied Data Science and AI',
        description: 'Predictive models, intelligent automation and dashboards that turn data into decisions.',
        features: 'ML/AI models,Business Intelligence,Predictive analytics'
      },
      consulting: {
        title: 'Strategic technical consulting',
        description: 'Code audits, system architecture and technology roadmaps to scale your business.',
        features: 'Code audits,Tech roadmaps,Team mentoring'
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Our clients\' satisfaction is our best calling card',
      stats: {
        projects: 'Projects delivered',
        rating: 'Average rating',
        satisfaction: 'Satisfied clients',
        years: 'Years of experience'
      },
      promo: {
        discount: 'discount',
        title: 'Your testimonial could be here',
        description: 'Be among the first clients to trust us and get an exclusive 25% discount on your project. Your success story deserves to be told.',
        cta: 'Get 25% discount'
      },
      items: {
        vuelatour: {
          name: 'Carlos Mendoza',
          role: 'CEO',
          company: 'Vuelatour',
          quote: 'EDDCODE turned our vision into reality. In just one week we had a perfectly functioning booking platform. Their team understood exactly what we needed and communication was exceptional throughout the process.'
        },
        jetset: {
          name: 'Luis Hernández',
          role: 'General Director',
          company: 'Jetset Transfers',
          quote: 'We needed a robust and professional booking system. EDDCODE delivered a solution that exceeded our expectations in just one week. The automatic quoter and real-time tracking have transformed our operations.'
        }
      }
    },

    // Portfolio Section
    portfolio: {
      title: 'Our work',
      subtitle: 'Projects that demonstrate our experience and quality',
      viewProject: 'View project',
      deliveredIn: 'Delivered in',
      week: 'week',
      weeks: 'weeks',
      promo: {
        yourProject: 'Your project here',
        discount: 'discount',
        available: 'Available',
        title: 'Be among the first',
        description: 'Reserve this spot for your project and get an exclusive 25% discount. Tell us your idea and we\'ll make it happen.',
        cta: 'Reserve with discount'
      },
      projects: {
        vuelatour: {
          title: 'Vuelatour',
          description: 'Private flights and panoramic air tours platform in Cancún and Riviera Maya. Real-time availability booking system, multilingual support and SEO optimization.',
          tags: 'Next.js,TypeScript,SEO,i18n',
          metric: '+5,000 flights',
          metricLabel: 'completed'
        },
        jetset: {
          title: 'Jetset Transfers Cancún',
          description: 'Premium transfer and private transportation service in Cancún and Riviera Maya. Online booking system, automatic quote calculator and fleet management with real-time tracking.',
          tags: 'Next.js,TypeScript,SEO,Booking',
          metric: '+8,000 transfers',
          metricLabel: 'completed'
        }
      }
    },

    // Promo Form
    promoForm: {
      discountBadge: 'exclusive discount',
      title: 'Reserve your spot with 25% discount',
      subtitle: 'Tell us about your project and we\'ll contact you with a special quote.',
      name: 'Name',
      namePlaceholder: 'Your full name',
      company: 'Company',
      companyPlaceholder: 'Your company name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project type',
      selectProjectType: 'Select project type',
      projectTypes: {
        landing: 'Landing Page / Website',
        webapp: 'Web Application',
        ecommerce: 'E-commerce / Online Store',
        api: 'API / System Integration',
        mobile: 'Mobile Application',
        other: 'Other'
      },
      message: 'Describe your project',
      messagePlaceholder: 'Tell us what you need: features, goals, design references...',
      discountInfo: 'By submitting this form, your project automatically qualifies for the 25% discount on the final quote.',
      sending: 'Sending...',
      submit: 'Request quote with discount',
      successTitle: 'Request sent!',
      successMessage: 'We have received your request. We\'ll contact you within 24 hours.',
      successDiscount: 'Your 25% discount is reserved.',
      close: 'Close',
      errorMessage: 'There was an error sending the form. Please try again.'
    },
    
    // CTA Section
    cta: {
      title: 'Ready to accelerate your project?',
      subtitle: 'Let\'s talk about how we can help you build the software your business needs.',
      scheduleCall: 'Schedule a call',
      noCommitment: 'No commitment',
      response24h: 'Response in 24h',
    },
    
    // Contact Form
    contact: {
      title: 'Contact us',
      subtitle: 'Tell us about your project and we\'ll respond within 24 hours',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully',
      error: 'Error sending message',
    },
    
    // Schedule Form
    schedule: {
      title: 'Schedule a call',
      subtitle: 'Let\'s talk about your project in a 30-minute call',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      projectType: 'Project type',
      budget: 'Estimated budget',
      timeline: 'Expected timeline',
      message: 'Tell us about your project',
      schedule: 'Schedule call',
      scheduling: 'Scheduling...',
      success: 'Call scheduled successfully',
      error: 'Error scheduling call',
    },

    // TrustedBy Section
    trustedBy: {
      title: 'Companies that trust us',
      technologies: 'Technologies we master',
      beFirst: 'Be the first',
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about our services',
      moreQuestions: 'Have more questions?',
      contactUs: 'Contact us directly',
      items: {
        services: {
          question: 'What software development services does EDDCODE offer?',
          answer: 'We offer web application development with React and Next.js, REST and GraphQL API development, Artificial Intelligence and Machine Learning solutions, enterprise integrations, and DevOps and Cloud services with AWS and Azure.'
        },
        technologies: {
          question: 'What technologies does EDDCODE specialize in?',
          answer: 'We specialize in React, Next.js, Node.js, TypeScript, Python, REST and GraphQL APIs, SQL and NoSQL databases, AWS and Azure cloud services, and AI/ML technologies.'
        },
        timeline: {
          question: 'How long does it take to develop a software project?',
          answer: 'The time varies depending on project complexity. Small projects can take 2-4 weeks, while complex enterprise projects may require several months. We offer iterative deliveries so you can see constant progress.'
        },
        international: {
          question: 'Does EDDCODE work with international clients?',
          answer: 'Yes, we work with clients in Mexico, the United States, Spain, and all of Latin America. Our team is bilingual (Spanish and English) and we are experienced in working remotely across different time zones.'
        },
        support: {
          question: 'What kind of support do you offer after launch?',
          answer: 'We offer 90 days warranty for bug fixes in the developed code. Additionally, we have ongoing technical support plans that include maintenance, security updates, and priority support.'
        },
        payment: {
          question: 'How does the payment process work?',
          answer: 'We work with a 50% deposit model to start the project and the rest is paid at agreed milestones or upon completion. We accept bank transfers and credit cards. Each project includes a detailed proposal with scope, timeline, and clear costs.'
        }
      }
    },

    // Footer
    footer: {
      rights: 'All rights reserved.',
      description: 'We build software that scales.',
    },
  },
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations.es
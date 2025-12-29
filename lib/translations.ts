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
      items: {
        carlos: {
          name: 'Carlos Mendoza',
          role: 'CEO',
          company: 'Vuelatour',
          quote: 'EDDCODE transformó nuestra visión en realidad. En solo una semana teníamos una plataforma de reservas funcionando perfectamente. Su equipo entendió exactamente lo que necesitábamos y la comunicación fue excepcional durante todo el proceso.'
        },
        maria: {
          name: 'María González',
          role: 'Directora de Tecnología',
          company: 'FinanceHub MX',
          quote: 'Necesitábamos integrar múltiples sistemas legacy con una nueva plataforma. EDDCODE no solo lo logró, sino que mejoró el rendimiento en un 300%. Su expertise en APIs y arquitectura es impresionante.'
        },
        roberto: {
          name: 'Roberto Sánchez',
          role: 'Fundador',
          company: 'DeliverYa',
          quote: 'Como startup, cada peso cuenta. EDDCODE nos entregó una app de delivery que compite con las grandes del mercado, a una fracción del costo. El soporte post-lanzamiento ha sido invaluable.'
        },
        ana: {
          name: 'Ana Martínez',
          role: 'VP de Operaciones',
          company: 'LogiTrack',
          quote: 'Implementaron un sistema de tracking en tiempo real que redujo nuestros tiempos de entrega en 40%. El equipo es profesional, puntual y siempre disponible para resolver cualquier duda.'
        },
        fernando: {
          name: 'Fernando López',
          role: 'Director General',
          company: 'MediCare Plus',
          quote: 'La plataforma de telemedicina que desarrollaron cumple con todas las regulaciones de salud y es increíblemente fácil de usar. Nuestros doctores y pacientes la adoptaron inmediatamente.'
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
        },
        financehub: {
          title: 'FinanceHub MX',
          description: 'Dashboard financiero empresarial con integración a bancos mexicanos, reportes automáticos y análisis predictivo de flujo de caja.',
          tags: 'React,Node.js,PostgreSQL,APIs Bancarias',
          metric: '$2M USD',
          metricLabel: 'procesados mensualmente'
        },
        deliverya: {
          title: 'DeliverYa',
          description: 'App de delivery con tracking en tiempo real, sistema de pagos integrado y algoritmo de optimización de rutas.',
          tags: 'React Native,Firebase,Google Maps,Stripe',
          metric: '+10,000',
          metricLabel: 'entregas mensuales'
        },
        logitrack: {
          title: 'LogiTrack',
          description: 'Sistema de gestión logística con tracking GPS, optimización de rutas y reportes de rendimiento en tiempo real.',
          tags: 'Next.js,Python,TensorFlow,AWS',
          metric: '-40%',
          metricLabel: 'tiempo de entrega'
        },
        medicare: {
          title: 'MediCare Plus',
          description: 'Plataforma de telemedicina con videoconsultas, expediente electrónico y sistema de citas que cumple regulaciones de salud.',
          tags: 'React,WebRTC,Node.js,HIPAA',
          metric: '+15,000',
          metricLabel: 'consultas realizadas'
        }
      }
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
      items: {
        carlos: {
          name: 'Carlos Mendoza',
          role: 'CEO',
          company: 'Vuelatour',
          quote: 'EDDCODE turned our vision into reality. In just one week we had a perfectly functioning booking platform. Their team understood exactly what we needed and communication was exceptional throughout the process.'
        },
        maria: {
          name: 'María González',
          role: 'CTO',
          company: 'FinanceHub MX',
          quote: 'We needed to integrate multiple legacy systems with a new platform. EDDCODE not only achieved it but improved performance by 300%. Their expertise in APIs and architecture is impressive.'
        },
        roberto: {
          name: 'Roberto Sánchez',
          role: 'Founder',
          company: 'DeliverYa',
          quote: 'As a startup, every dollar counts. EDDCODE delivered a delivery app that competes with the big players at a fraction of the cost. Post-launch support has been invaluable.'
        },
        ana: {
          name: 'Ana Martínez',
          role: 'VP of Operations',
          company: 'LogiTrack',
          quote: 'They implemented a real-time tracking system that reduced our delivery times by 40%. The team is professional, punctual, and always available to answer any questions.'
        },
        fernando: {
          name: 'Fernando López',
          role: 'General Director',
          company: 'MediCare Plus',
          quote: 'The telemedicine platform they developed meets all health regulations and is incredibly easy to use. Our doctors and patients adopted it immediately.'
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
        },
        financehub: {
          title: 'FinanceHub MX',
          description: 'Enterprise financial dashboard with Mexican bank integration, automatic reports and predictive cash flow analysis.',
          tags: 'React,Node.js,PostgreSQL,Banking APIs',
          metric: '$2M USD',
          metricLabel: 'processed monthly'
        },
        deliverya: {
          title: 'DeliverYa',
          description: 'Delivery app with real-time tracking, integrated payment system and route optimization algorithm.',
          tags: 'React Native,Firebase,Google Maps,Stripe',
          metric: '+10,000',
          metricLabel: 'monthly deliveries'
        },
        logitrack: {
          title: 'LogiTrack',
          description: 'Logistics management system with GPS tracking, route optimization and real-time performance reports.',
          tags: 'Next.js,Python,TensorFlow,AWS',
          metric: '-40%',
          metricLabel: 'delivery time'
        },
        medicare: {
          title: 'MediCare Plus',
          description: 'Telemedicine platform with video consultations, electronic health records and appointment system compliant with health regulations.',
          tags: 'React,WebRTC,Node.js,HIPAA',
          metric: '+15,000',
          metricLabel: 'consultations completed'
        }
      }
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
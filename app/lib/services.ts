export type ServiceData = {
  id: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  features: string[];
};

const servicesContent: Record<string, Record<string, ServiceData>> = {
  "desarrollo-web": {
    es: {
      id: "desarrollo-web",
      name: "Desarrollo Web",
      description: "Creamos sitios web a medida optimizados para rendimiento y conversión.",
      seoTitle: "Desarrollo Web – Soluciones Personalizadas",
      seoDescription: "Potenciá tu presencia online con sitios web rápidos, seguros y diseñados para crecer.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Web responsiva", "Optimización SEO", "Integraciones"],
    },
    en: {
      id: "desarrollo-web",
      name: "Web Development",
      description: "We build custom websites optimized for performance and conversions.",
      seoTitle: "Web Development – Tailored Solutions by Solbyt",
      seoDescription: "Boost your online presence with fast, secure, and scalable websites.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Responsive web", "SEO optimization", "Integrations"],
    },
    fr: {
      id: "desarrollo-web",
      name: "Développement Web",
      description: "Nous créons des sites web sur mesure optimisés pour performance et conversion.",
      seoTitle: "Développement Web – Solutions sur mesure par Solbyt",
      seoDescription: "Renforcez votre présence en ligne avec des sites web rapides, sécurisés et évolutifs.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Web responsive", "Optimisation SEO", "Intégrations"],
    },
  },
  "aplicaciones-a-medida": {
    es: {
      id: "aplicaciones-a-medida",
      name: "Aplicaciones a Medida",
      description:
        "Desarrollamos soluciones digitales personalizadas para adaptarse a flujos de trabajo y procesos únicos de tu negocio.",
      seoTitle: "Aplicaciones a Medida – Solbyt",
      seoDescription:
        "Transformá tus procesos con aplicaciones hechas a la medida que escalan y optimizan tareas críticas.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Alto rendimiento", "UX personalizada", "Integraciones API"],
    },
    en: {
      id: "aplicaciones-a-medida",
      name: "Custom Applications",
      description:
        "We build tailored digital solutions to match your unique workflows and business processes.",
      seoTitle: "Custom Applications – Solbyt",
      seoDescription:
        "Transform your operations with scalable, custom-built apps designed for your specific needs.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["High performance", "Custom UX", "API integrations"],
    },
    fr: {
      id: "aplicaciones-a-medida",
      name: "Applications Sur Mesure",
      description:
        "Nous créons des solutions digitales personnalisées pour vos processus métiers uniques.",
      seoTitle: "Applications Sur Mesure – Solbyt",
      seoDescription:
        "Optimisez vos opérations avec des applications évolutives, conçues pour vos besoins spécifiques.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Haute performance", "UX sur mesure", "Intégrations API"],
    },
  },
  "automatizacion": {
    es: {
      id: "automatizacion",
      name: "Automatización de Procesos",
      description:
        "Digitalizamos y automatizamos tareas repetitivas para ahorrar tiempo y reducir errores manuales.",
      seoTitle: "Automatización de Procesos – Solbyt",
      seoDescription:
        "Agilizá tu negocio y minimizá errores con sistemas automáticos que trabajan 24/7.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Flujos de trabajo automatizados", "Notificaciones automáticas", "Integraciones"],
    },
    en: {
      id: "automatizacion",
      name: "Process Automation",
      description:
        "We digitize and automate repetitive tasks to save time and eliminate manual errors.",
      seoTitle: "Process Automation – Solbyt",
      seoDescription:
        "Streamline your operations and minimize errors with automated systems that run 24/7.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Automated workflows", "Auto notifications", "Integrations"],
    },
    fr: {
      id: "automatizacion",
      name: "Automatisation des Processus",
      description:
        "Nous automatisons les tâches répétitives pour gagner du temps et réduire les erreurs manuelles.",
      seoTitle: "Automatisation des Processus – Solbyt",
      seoDescription:
        "Optimisez vos opérations avec des systèmes automatisés fonctionnant 24/7.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Flux automatisés", "Notifications auto", "Intégrations"],
    },
  },
  "analisis-de-sistemas": {
    es: {
      id: "analisis-de-sistemas",
      name: "Análisis de Sistemas",
      description:
        "Estudiamos tus procesos actuales y diseñamos arquitectura tecnológica eficiente y escalable.",
      seoTitle: "Análisis de Sistemas – Solbyt",
      seoDescription:
        "Comprendé tus flujos de trabajo y optimizalos con diseño arquitectónico robusto y estratégico.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Evaluación de sistemas", "Mejoras arquitectónicas", "Recomendaciones"],
    },
    en: {
      id: "analisis-de-sistemas",
      name: "Systems Analysis",
      description:
        "We study your current processes and design efficient, scalable technical architectures.",
      seoTitle: "Systems Analysis – Solbyt",
      seoDescription:
        "Understand your workflows and optimize them with strategic, robust architecture.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["System assessment", "Architecture improvements", "Strategic recommendations"],
    },
    fr: {
      id: "analisis-de-sistemas",
      name: "Analyse de Systèmes",
      description:
        "Nous analysons vos processus actuels et concevons des architectures techniques performantes et évolutives.",
      seoTitle: "Analyse de Systèmes – Solbyt",
      seoDescription:
        "Comprenez vos flux et optimisez-les avec une architecture stratégique et robuste.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Évaluation systèmes", "Amélioration architecture", "Recommandations"],
    },
  },
  "asesoria-digital": {
    es: {
      id: "asesoria-digital",
      name: "Asesoría Digital",
      description:
        "Brindamos asesoramiento estratégico para definir tu roadmap digital, tecnologías y modelo comercial.",
      seoTitle: "Asesoría Digital – Solbyt",
      seoDescription:
        "Tomá decisiones estratégicas con nuestra consultoría digital: UX, tecnología y datos.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Auditoría digital", "UX/UI coaching", "Roadmap estratégico"],
    },
    en: {
      id: "asesoria-digital",
      name: "Digital Consulting",
      description:
        "We provide strategic advice to define your digital roadmap, technology stack, and business models.",
      seoTitle: "Digital Consulting – Solbyt",
      seoDescription:
        "Make strategic decisions with our digital consulting: UX, technology, and data insights.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Digital audit", "UX/UI coaching", "Strategic roadmap"],
    },
    fr: {
      id: "asesoria-digital",
      name: "Conseil Digital",
      description:
        "Nous fournissons des conseils stratégiques pour définir votre roadmap, stack technologique et business model.",
      seoTitle: "Conseil Digital – Solbyt",
      seoDescription:
        "Prenez de meilleures décisions avec notre expertise digitale : UX, technologie et données.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Audit digital", "Coaching UX/UI", "Roadmap stratégique"],
    },
  },
  "desarrollo-software": {
    es: {
      id: "desarrollo-software",
      name: "Desarrollo de Software",
      description:
        "Creamos aplicaciones robustas y a escala, usando metodologías ágiles y mejores prácticas de QA.",
      seoTitle: "Desarrollo de Software – Solbyt",
      seoDescription:
        "Desarrollá software confiable y escalable con nuestro enfoque ágil y control de calidad.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Apps a escala", "QA automatizado", "Agilidad"],
    },
    en: {
      id: "desarrollo-software",
      name: "Software Development",
      description:
        "We build robust, scalable applications using agile methodologies and QA best practices.",
      seoTitle: "Software Development – Solbyt",
      seoDescription:
        "Build reliable and scalable software with our agile approach and automated QA.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Scalable apps", "Automated QA", "Agile workflows"],
    },
    fr: {
      id: "desarrollo-software",
      name: "Développement de Logiciel",
      description:
        "Nous créons des applications performantes et évolutives en méthodologie agile avec QA automatisé.",
      seoTitle: "Développement de Logiciel – Solbyt",
      seoDescription:
        "Développez un logiciel fiable et évolutif avec notre approche agile et contrôle qualité automatisé.",
      ogImage: "https://solbyt.tech/icon.png",
      features: ["Apps évolutives", "QA automatisé", "Workflow agile"],
    },
  },
};

export async function getServiceData(id: string, locale: string): Promise<ServiceData | null> {
  const service = (servicesContent[id] || {})[locale];
  return service ?? null;
}

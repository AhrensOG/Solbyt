"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Hero from "../../shared/Hero";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Cloud,
  Compass,
  CreditCard,
  Lightbulb,
  MapPin,
  Settings,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import DigitalizationChallenges from "./auxiliarComponents/DigitalizationChallenges";
import Features from "../../shared/Features";

const DigitalizationConsulting = () => {
  const useCasesContent = [
    {
      key: "Migración Cloud",
      title: "Migración a la nube eficiente",
      description:
        "Trasladamos tus sistemas a la nube de forma segura y escalable, reduciendo costos y asegurando continuidad operativa.",
      features: [
        "Análisis de tu infraestructura actual y nivel de preparación",
        "Selección de proveedor cloud ideal (AWS, Azure, GCP)",
        "Diseño de arquitectura adaptada a tus necesidades",
        "Plan de migración por etapas con mínimo downtime",
        "Optimización del uso de recursos y costos cloud",
        "Capacitación en gestión y mantenimiento de la nube",
      ],
      titleCaseStudy: "Beneficios comunes",
      caseStudy:
        "Hasta 50% de ahorro en infraestructura, alta disponibilidad (99.9%) y mayor agilidad operativa",
      color: "blue",
      icon: Cloud,
      img: "/img_placeholder.webp",
    },
    {
      key: "Digitalización Total",
      title: "Transformación digital integral",
      description:
        "Digitalizamos todos tus procesos críticos para optimizar tu operación y mejorar la colaboración interna.",
      features: [
        "Mapa completo de procesos actuales y oportunidades",
        "Digitalización documental y gestión eficiente de archivos",
        "Implementación de herramientas colaborativas (ej. Notion, Slack)",
        "Automatización de tareas repetitivas y flujos claves",
        "Integración de plataformas y eliminación de silos",
        "Gestión del cambio y cultura digital interna",
      ],
      titleCaseStudy: "Resultados habituales",
      caseStudy:
        "Hasta 60% de mejora en eficiencia, reducción de errores y mayor cohesión del equipo",
      color: "purple",
      icon: Zap,
      img: "/img_placeholder.webp",
    },
    {
      key: "Selección ERPs",
      title: "Selección e implementación de ERP",
      description:
        "Te ayudamos a elegir e implementar el ERP ideal, alineado a tus procesos, presupuesto y metas de crecimiento.",
      features: [
        "Levantamiento de requisitos técnicos y funcionales",
        "Comparativa objetiva entre opciones del mercado",
        "Proyección de retorno sobre la inversión (ROI)",
        "Diseño de implementación progresiva por módulos",
        "Negociación con proveedores y gestión de contratos",
        "Supervisión del proceso hasta el go-live",
      ],
      titleCaseStudy: "Impacto frecuente",
      caseStudy:
        "Mejora en control operativo, visibilidad en tiempo real y reducción de costos administrativos",
      color: "pink",
      icon: Settings,
      img: "/img_placeholder.webp",
    },
    {
      key: "Optimización Operativa",
      title: "Optimización digital de operaciones",
      description:
        "Mejoramos procesos actuales con tecnología, eliminando ineficiencias y maximizando el uso de tus herramientas actuales.",
      features: [
        "Auditoría de procesos y herramientas vigentes",
        "Detección de puntos de mejora y automatización",
        "Optimización de flujos de trabajo sin reemplazos drásticos",
        "Integración fluida entre sistemas existentes",
        "Implementación de automatizaciones puntuales",
        "Seguimiento con indicadores de eficiencia",
      ],
      titleCaseStudy: "Resultados concretos",
      caseStudy:
        "Productividad aumentada en 25-40% y mejor aprovechamiento del ecosistema digital ya instalado",
      color: "blue",
      icon: TrendingUp,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Diagnóstico digital inicial",
      description:
        "Evaluamos tu estado actual: procesos, herramientas, nivel de adopción tecnológica y puntos de mejora.",
      icon: Compass,
      color: "blue",
      duration: "3-5 días",
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Diseño de hoja de ruta",
      description:
        "Creamos una estrategia digital personalizada, con objetivos claros, prioridades y plan de acción detallado.",
      icon: MapPin,
      color: "pink",
      duration: "1-2 semanas",
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Implementación acompañada",
      description:
        "Te guiamos en la adopción de nuevas herramientas, optimización de procesos y gestión del cambio con tu equipo.",
      icon: Settings,
      color: "purple",
      duration: "2-12 semanas",
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Monitoreo y mejora continua",
      description:
        "Medimos resultados, ajustamos estrategias y te ayudamos a evolucionar de forma sostenida y basada en datos.",
      icon: TrendingUp,
      color: "blue",
      duration: "Continuo",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo evalúan el nivel de madurez digital de mi empresa?",
      answer:
        "Utilizamos un framework estructurado que analiza tus procesos, herramientas, equipo y cultura digital. A través de entrevistas, auditorías técnicas y análisis funcional, obtenemos una visión clara de tu punto de partida y diseñamos recomendaciones para avanzar con confianza.",
    },
    {
      question: "¿Qué pasa si mi equipo se resiste al cambio tecnológico?",
      answer:
        "La resistencia es normal. Por eso, incluimos estrategias de gestión del cambio desde el inicio: comunicación clara, capacitación gradual, participación del equipo y adopción progresiva. Nuestra experiencia demuestra que con el enfoque adecuado, los equipos se adaptan exitosamente.",
    },
    {
      question: "¿Cuánto tarda una transformación digital completa?",
      answer:
        "Depende del alcance, pero trabajamos por fases. Algunos procesos se optimizan en semanas; otros, más complejos, en meses. Lo importante es que obtendrás valor desde el inicio y un plan realista para evolucionar paso a paso.",
    },
    {
      question:
        "¿Cómo garantizan que las herramientas recomendadas sean las adecuadas?",
      answer:
        "No vendemos software. Evaluamos tus procesos, necesidades y recursos. Luego analizamos diferentes opciones del mercado y te ayudamos a elegir la mejor solución en función de funcionalidad, costo, escalabilidad y soporte.",
    },
    {
      question: "¿Ofrecen soporte después de la implementación?",
      answer:
        "Sí. Brindamos acompañamiento según tus necesidades: sesiones de seguimiento, resolución de dudas, monitoreo de métricas clave y ajustes según los resultados. Nuestro objetivo es que la transformación funcione a largo plazo.",
    },
    {
      question: "¿Qué retorno puedo esperar de la digitalización?",
      answer:
        "Los resultados varían, pero nuestros clientes suelen ver mejoras del 20-40% en eficiencia y reducciones del 15-30% en costos operativos. Establecemos métricas desde el inicio para que puedas medir el impacto real y ajustar lo necesario.",
    },
  ];

  const features = [
    {
      icon: <Compass className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Diagnóstico digital inicial",
      description:
        "Analizamos tus procesos y herramientas actuales para establecer una línea base clara de tu nivel de digitalización.",
      colorKey: "blue",
    },
    {
      icon: <MapPin className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Hoja de ruta personalizada",
      description:
        "Definimos un plan estratégico con objetivos claros, tiempos realistas y KPIs medibles para cada fase del proceso.",
      colorKey: "pink",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Elección tecnológica estratégica",
      description:
        "Te ayudamos a seleccionar herramientas que se integren a tu flujo de trabajo y escalen con tu negocio, sin sobredimensionar costos.",
      colorKey: "blue",
    },
    {
      icon: <Settings className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Optimización de procesos",
      description:
        "Rediseñamos los procesos clave para maximizar el valor de las herramientas digitales y eliminar cuellos de botella.",
      colorKey: "pink",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Soporte y cambio organizacional",
      description:
        "Acompañamos a tu equipo durante la implementación con capacitación, soporte técnico y estrategias de adopción.",
      colorKey: "purple",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Medición de impacto y ajustes",
      description:
        "Medimos resultados, evaluamos KPIs y realizamos mejoras continuas para asegurar el éxito sostenido de la transformación.",
      colorKey: "pink",
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero
          generalColor="blue"
          badge={{
            text: "Servicios • Estrategia Digital para Empresas",
            color: "blue",
          }}
          title="Transformá tu negocio con asesoría digital estratégica"
          subtitle="Estrategia, herramientas y acompañamiento para una digitalización efectiva"
          description="Te acompañamos paso a paso para elegir las herramientas adecuadas, rediseñar procesos clave y lograr una transformación digital adaptada a tu negocio, sin perder el foco en rentabilidad y sostenibilidad."
          buttons={[
            {
              label: "Evaluar mi madurez digital",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Ver casos de transformación",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: "2-6 semanas",
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
              text: "Desde €850",
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: "Asesoría en digitalización por Solbyt",
            overlayTitle: "Transformación digital estratégica y sostenible",
            overlaySubtitle: "Hoja de ruta clara + Herramientas adecuadas",
          }}
        />
        <DigitalizationChallenges />
        <Features
          items={features}
          titleGradient="pink"
          title="Nuestro enfoque estratégico y sostenible"
          description="No vendemos tecnología, diseñamos transformaciones. Nuestro proceso garantiza que cada decisión digital esté alineada con tus objetivos de negocio y capacidades reales."
        />
        <UseCases
          colorKey="blue"
          title="Soluciones adaptadas a tu realidad"
          subtitle="Cada empresa tiene necesidades únicas de digitalización. Ofrecemos asesoría especializada según tu situación actual y objetivos específicos."
          cases={useCasesContent}
        />
        <WorkProcess
          colorKey="blue"
          title="Metodología probada y efectiva"
          subtitle="Nuestro proceso estructurado garantiza una transformación digital exitosa, minimizando riesgos y maximizando el retorno de inversión."
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre asesoría en digitalización empresarial"
          items={faqs}
          colorKey="blue"
        />
        <CTA
          colorKey="blue"
          title="¿Listo para transformar tu negocio con una estrategia digital clara?"
          description="Te ayudamos a dar el salto digital con una hoja de ruta personalizada, herramientas adecuadas y acompañamiento experto en cada fase del proceso."
          features={[
            "Diagnóstico digital gratuito",
            "Plan de acción estratégico",
            "Implementación acompañada",
            "Resultados medibles en semanas",
          ]}
          buttons={[
            {
              label: "Solicitar diagnóstico gratuito",
              href: "/contacto",
              targetBlank: true,
            },
            {
              label: "Conocer casos reales de éxito",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          note="Sin compromiso • Primera propuesta en 48h • Retorno garantizado"
        />
      </main>
      <Footer />
    </>
  );
};

export default DigitalizationConsulting;

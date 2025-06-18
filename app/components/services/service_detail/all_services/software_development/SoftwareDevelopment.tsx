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
  Activity,
  ArrowRight,
  BarChart3,
  Clock,
  Cloud,
  Code,
  CreditCard,
  Layers,
  Puzzle,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import Features from "../../shared/Features";
import TraditionalSoftwareDevelopmentProblems from "./auxiliarComponents/TraditionalSoftwareDevelopmentProblems";

const SoftwareDevelopment = () => {
  const useCasesContent = [
    {
      key: "ERP para Pymes",
      title: "ERP para Pymes",
      description:
        "Software integral para gestionar tu empresa de forma centralizada. Ventas, inventario, finanzas y RRHH en un solo lugar, creciendo por módulos según tu ritmo.",
      features: [
        "CRM y gestión de ventas integrados",
        "Control de inventario con alertas inteligentes",
        "Contabilidad automatizada y reportes financieros",
        "Gestión de personal y nómina digital",
        "Panel ejecutivo con indicadores clave (KPIs)",
        "Conexión con bancos y servicios externos",
      ],
      titleCaseStudy: "Implementación típica",
      caseStudy:
        "Fase 1: Ventas e inventario · Fase 2: Finanzas · Fase 3: Recursos Humanos",
      color: "purple",
      icon: Cloud,
      img: "/img_placeholder.webp",
    },
    {
      key: "Gestión Interna",
      title: "Gestión Interna",
      description:
        "Automatizá procesos internos como proyectos, tiempos y aprobaciones para ganar control, eficiencia y visibilidad en tu operación diaria.",
      features: [
        "Gestión de proyectos y tareas por equipos",
        "Control de tiempos y carga laboral",
        "Flujos de aprobación automatizados",
        "Gestión documental segura",
        "Notificaciones internas y comunicación centralizada",
        "Reportes de productividad y eficiencia",
      ],
      titleCaseStudy: "Implementación típica",
      caseStudy:
        "Fase 1: Proyectos y tareas · Fase 2: Control de tiempo · Fase 3: Aprobaciones y reportes",
      color: "blue",
      icon: Zap,
      img: "/img_placeholder.webp",
    },
    {
      key: "Plataformas Multiusuario",
      title: "Plataformas Multiusuario",
      description:
        "Conectá a tus clientes, proveedores y colaboradores con una plataforma segura, intuitiva y personalizada según cada tipo de usuario.",
      features: [
        "Portal de clientes con accesos personalizados",
        "Plataforma para proveedores y equipos externos",
        "Sistema de roles y permisos por área",
        "Colaboración y mensajería en tiempo real",
        "Marketplace interno para productos o servicios",
        "Métricas de uso y comportamiento de usuarios",
      ],
      titleCaseStudy: "Implementación típica",
      caseStudy:
        "Fase 1: Portal básico · Fase 2: Roles y permisos · Fase 3: Funcionalidades colaborativas",
      color: "pink",
      icon: Settings,
      img: "/img_placeholder.webp",
    },
    {
      key: "APIs de Integración",
      title: "APIs de Integración",
      description:
        "Conectamos tus sistemas entre sí y con servicios externos, reduciendo el trabajo manual y mejorando la sincronización de datos.",
      features: [
        "APIs RESTful para terceros",
        "Conectores con ERP, CRM y otros sistemas",
        "Sincronización automática de información",
        "Webhooks para acciones en tiempo real",
        "Documentación técnica para tu equipo",
        "Logs y monitoreo de integraciones",
      ],
      titleCaseStudy: "Implementación típica",
      caseStudy:
        "Fase 1: API básica · Fase 2: Integraciones clave · Fase 3: Automatizaciones complejas",
      color: "purple",
      icon: TrendingUp,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Análisis y planificación",
      description:
        "Relevamos tus procesos, definimos objetivos claros y diseñamos la arquitectura técnica. Creamos un roadmap de desarrollo modular alineado a tus prioridades.",
      icon: Target,
      color: "purple",
      duration: "3-5 días",
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Desarrollo del MVP",
      description:
        "Construimos el primer módulo funcional para validar el valor real del software. Esta fase entrega una solución ya operativa que puede ser utilizada desde el primer día.",
      icon: Code,
      color: "blue",
      duration: "1-3 semanas",
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Testing y optimización",
      description:
        "Realizamos pruebas funcionales, de rendimiento y seguridad. Optimizamos la experiencia de usuario y preparamos todo para el despliegue en producción.",
      icon: Activity,
      color: "pink",
      duration: "3-5 días",
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Evolución continua",
      description:
        "A partir del uso real, priorizamos nuevas funcionalidades, mejoras técnicas y optimización continua. Mantenemos tu software siempre alineado al crecimiento del negocio.",
      icon: TrendingUp,
      color: "purple",
      duration: "Continuo",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo funciona el desarrollo por fases y por qué es mejor?",
      answer:
        "Desarrollar por fases permite lanzar el primer módulo rápidamente y obtener valor desde el inicio. Cada fase entrega una funcionalidad lista para usar. Esto reduce el riesgo, mejora el control del presupuesto y permite adaptar el software a medida que tu empresa evoluciona.",
    },
    {
      question: "¿Qué tecnologías usan y cómo aseguran la escalabilidad?",
      answer:
        "Trabajamos con tecnologías modernas como React, Next.js, Node.js y PostgreSQL. Diseñamos el software con arquitectura modular y APIs bien definidas, lo que permite escalar usuarios, funcionalidades o integrar con nuevos sistemas sin rehacer lo anterior.",
    },
    {
      question: "¿Qué incluye cada fase además del desarrollo?",
      answer:
        "Cada fase incluye: planificación detallada, desarrollo, testing automatizado, documentación técnica y funcional, y acompañamiento en el despliegue. También podés contar con soporte posterior o continuar con la siguiente fase cuando quieras.",
    },
    {
      question: "¿Puedo agregar funcionalidades después del desarrollo?",
      answer:
        "Sí, nuestro enfoque modular está pensado justamente para eso. Podés agregar nuevos módulos o integrar servicios externos sin afectar lo ya construido. El software evoluciona con tu negocio.",
    },
    {
      question: "¿Tienen soporte y mantenimiento después del lanzamiento?",
      answer:
        "Sí. Ofrecemos soporte básico (resolución de bugs, actualizaciones de seguridad) y soporte evolutivo con mejoras continuas, optimización y desarrollo de nuevas funcionalidades. Nos adaptamos a tus necesidades.",
    },
    {
      question: "¿En cuánto tiempo se recupera la inversión?",
      answer:
        "Muchas pymes ven retorno desde la primera fase. Por ejemplo, automatizando tareas repetitivas, mejorando control de datos o reduciendo errores humanos. Te ayudamos a medir el impacto desde el inicio con métricas claras como tiempo ahorrado o errores evitados.",
    },
  ];

  const features = [
    {
      icon: <Puzzle className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Desarrollo por módulos escalables",
      description:
        "Construimos funcionalidades como bloques independientes que se integran perfectamente, permitiendo crecer a medida que tu negocio lo necesita.",
      colorKey: "purple",
    },
    {
      icon: <Layers className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Arquitectura lista para crecer",
      description:
        "Diseñamos sistemas preparados para soportar más usuarios, funcionalidades y datos sin necesidad de reescribir tu software.",
      colorKey: "blue",
    },
    {
      icon: <Workflow className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Integración con tus sistemas actuales",
      description:
        "Conectamos tu software con APIs, herramientas y plataformas existentes, para que todo funcione en conjunto desde el primer día.",
      colorKey: "purple",
    },
    {
      icon: <Shield className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Calidad asegurada y documentación clara",
      description:
        "Incluimos pruebas automatizadas, revisión por pares y documentación técnica detallada para que tu equipo pueda mantener y escalar con confianza.",
      colorKey: "pink",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Panel de métricas integradas",
      description:
        "Visualizá en tiempo real cómo se está utilizando tu software, con dashboards personalizables para tomar decisiones informadas.",
      colorKey: "purple",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Evolución continua asegurada",
      description:
        "Ofrecemos mejoras constantes y desarrollo de nuevas funcionalidades basado en feedback real y necesidades cambiantes.",
      colorKey: "blue",
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero
          generalColor="purple"
          badge={{
            text: "Servicios • Desarrollo de Software",
            color: "purple",
          }}
          title="Desarrollo de Software"
          subtitle="Tecnología hecha a tu medida, lista para escalar"
          description="Diseñamos software modular y a medida, ideal para pymes que buscan digitalizar procesos, crecer por etapas y maximizar su retorno de inversión sin comprometer estabilidad ni escalabilidad."
          buttons={[
            {
              label: "Planificar mi software",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Ver casos de desarrollo",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: "1-3 semanas por fase",
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
              text: "Desde €1.200 por fase",
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: "Desarrollo de software por Solbyt",
            overlayTitle: "Software que evoluciona con tu negocio",
            overlaySubtitle: "Fases modulares, impacto inmediato",
          }}
        />

        <TraditionalSoftwareDevelopmentProblems />
        <Features
          items={features}
          titleGradient="purple"
          title="Desarrollo modular y escalable"
          description="Nuestro enfoque por fases permite validar valor en cada etapa, optimizar la inversión y construir software robusto que crece junto con tu empresa."
        />
        <UseCases
          colorKey="purple"
          title="Soluciones empresariales diseñadas para escalar"
          subtitle="Diseñamos plataformas robustas y flexibles que crecen con vos. Adaptadas a tu ritmo, tu equipo y tus desafíos reales."
          cases={useCasesContent}
        />
        <WorkProcess
          colorKey="purple"
          title="Metodología ágil y escalable"
          subtitle="Nuestro proceso de desarrollo garantiza entregas rápidas, calidad superior y evolución continua del software según las necesidades reales de tu negocio."
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre desarrollo de software empresarial modular"
          items={faqs}
          colorKey="purple"
        />
        <CTA
          colorKey="blue"
          title="¿Listo para construir un software que crezca con tu negocio?"
          description="Creamos software modular y escalable que se adapta a tus procesos reales, genera valor desde la primera fase e impulsa tu crecimiento con cada nuevo módulo."
          features={[
            "Fases con resultados visibles desde el inicio",
            "Arquitectura sólida y escalable",
            "Soporte y evolución continua",
            "Optimización de procesos reales",
          ]}
          buttons={[
            {
              label: "Planificar mi software",
              href: "/contacto",
              targetBlank: true,
            },
            {
              label: "Ver casos de desarrollo",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          note="Análisis de requerimientos sin costo • Entregas rápidas y modulables • Resultados desde el primer día"
        />
      </main>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;

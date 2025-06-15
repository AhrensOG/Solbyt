"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Hero from "../../shared/Hero";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
  Cog,
  CreditCard,
  Layers,
  Zap,
} from "lucide-react";
import ProblemsWeSolve from "./auxiliarComponents/ProblemsWeSolve";
import Features from "./auxiliarComponents/Features";
import {
  Activity,
  FileText,
  Search,
  Settings,
  Target,
  Users,
} from "lucide-react";
import UseCases from "./auxiliarComponents/UseCases";
import WorkProcess from "./auxiliarComponents/WorkProcess";
import FAQ from "./auxiliarComponents/FAQ";
import CTA from "./auxiliarComponents/CTA";

const SystemAnalysis = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Diagnóstico del sistema actual",
      description:
        "Análisis completo de la arquitectura, código, base de datos y infraestructura para identificar problemas existentes y potenciales.",
      colorKey: "purple",
    },
    {
      icon: <Activity className="h-6 w-6 text-solbyt-blue-600" />,
      title: "Evaluación de rendimiento técnico",
      description:
        "Medición detallada de tiempos de respuesta, uso de recursos, carga del servidor y optimización de consultas.",
      colorKey: "blue",
    },
    {
      icon: <Target className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Detección de puntos críticos",
      description:
        "Identificación de componentes que representan riesgos de fallo, cuellos de botella y dependencias problemáticas.",
      colorKey: "pink",
    },
    {
      icon: <Settings className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Revisión de arquitectura y stack",
      description:
        "Evaluación de la estructura técnica, tecnologías utilizadas y su adecuación para los objetivos actuales y futuros.",
      colorKey: "blue",
    },
    {
      icon: <FileText className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Informe de mejoras priorizadas",
      description:
        "Documento detallado con recomendaciones clasificadas por urgencia, impacto y costo de implementación.",
      colorKey: "pink",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-purple-500" />,
      title: "Asesoría para tu equipo actual",
      description:
        "Sesiones de consultoría técnica para transferir conocimiento y capacitar a tu equipo en las mejores prácticas.",
      colorKey: "purple",
    },
  ];

  const useCasesContent = [
    {
      key: "crm",
      title: "CRM enfocado en ventas",
      description:
        "Sistema de gestión comercial que centraliza leads, automatiza seguimientos y optimiza el proceso de ventas con métricas en tiempo real.",
      features: [
        "Pipeline visual de oportunidades comerciales",
        "Automatización de seguimientos por email/WhatsApp",
        "Dashboard con métricas de conversión",
        "Integración con formularios web y redes sociales",
        "Reportes de rendimiento por vendedor",
        "Gestión de cotizaciones y propuestas",
      ],
      caseStudy:
        "Empresa de servicios aumentó 40% su tasa de conversión organizando mejor el seguimiento de leads.",
      color: "blue",
      icon: BarChart3,
      titleCaseStudy: "Caso Real",
      img: "/img_placeholder.webp",
    },
    {
      key: "turnos",
      title: "App de reservas o turnos",
      description:
        "Plataforma de gestión de citas que permite a tus clientes reservar online mientras optimizas la ocupación de tu agenda y reduces cancelaciones.",
      features: [
        "Calendario inteligente con disponibilidad en tiempo real",
        "Reservas online 24/7 desde web o app móvil",
        "Recordatorios automáticos por SMS/email",
        "Gestión de servicios, precios y duraciones",
        "Panel administrativo para el equipo",
        "Reportes de ocupación y ingresos",
      ],
      caseStudy:
        "Clínica dental redujo 60% las cancelaciones y aumentó 25% la ocupación con recordatorios automáticos.",
      color: "purple",
      icon: Calendar,
      titleCaseStudy: "Caso Real",
      img: "/img_placeholder.webp",
    },
    {
      key: "panel",
      title: "Panel de gestión",
      description:
        "Dashboard ejecutivo que centraliza información clave de diferentes áreas, facilitando la toma de decisiones con datos actualizados en tiempo real.",
      features: [
        "Métricas financieras y operativas en tiempo real",
        "Gráficos interactivos y reportes personalizables",
        "Alertas automáticas por objetivos o anomalías",
        "Integración con sistemas contables y de inventario",
        "Acceso por roles y permisos diferenciados",
        "Exportación de datos para análisis externos",
      ],
      caseStudy:
        "Empresa logística redujo 50% el tiempo de análisis de datos con dashboard automatizado.",
      color: "pink",
      icon: Settings,
      titleCaseStudy: "Caso Real",
      img: "/img_placeholder.webp",
    },
    {
      key: "internas",
      title: "Herramientas internas",
      description:
        "Aplicaciones específicas para optimizar procesos internos únicos de tu empresa, desde gestión de recursos humanos hasta control de inventarios especializados.",
      features: [
        "Gestión de empleados y control de asistencia",
        "Sistemas de aprobaciones y flujos de trabajo",
        "Control de inventarios con códigos QR/barras",
        "Herramientas de comunicación interna",
        "Gestión documental y archivo digital",
        "Automatización de tareas repetitivas",
      ],
      caseStudy:
        "Empresa manufacturera automatizó control de inventario ahorrando 15 horas semanales de trabajo manual.",
      color: "blue",
      icon: Users,
      titleCaseStudy: "Caso Real",
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Análisis y planificación",
      description:
        "Mapeo completo de procesos actuales, identificación de puntos críticos y definición de módulos prioritarios.",
      color: "blue",
      duration: "1-2 semanas",
      icon: Target,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Diseño de arquitectura",
      description:
        "Creación de wireframes, definición de base de datos y diseño de interfaces centradas en la usabilidad.",
      color: "purple",
      duration: "1-2 semanas",
      icon: Layers,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Desarrollo del MVP",
      description:
        "Implementación del módulo principal con funcionalidades core para validar la solución en el entorno real.",
      color: "pink",
      duration: "2-4 semanas",
      icon: Cog,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Escalado modular",
      description:
        "Expansión gradual con nuevos módulos basados en feedback real y necesidades emergentes del negocio.",
      color: "blue",
      duration: "Continuo",
      icon: Zap,
    },
  ];

  const faqs = [
    {
      question:
        "¿Cómo se integran las aplicaciones con nuestros sistemas actuales?",
      answer:
        "Realizamos un análisis técnico completo de tus sistemas existentes para diseñar integraciones nativas mediante APIs, conectores o sincronización de bases de datos. Nuestro objetivo es que la nueva aplicación funcione de forma transparente con tus herramientas actuales, manteniendo la continuidad operativa y evitando duplicación de datos. Trabajamos con los principales sistemas ERP, CRM, contables y de gestión del mercado.",
    },
    {
      question:
        "¿Cuánto tiempo tarda en desarrollarse una aplicación completa?",
      answer:
        "El tiempo varía según la complejidad, pero trabajamos por módulos para acelerar el retorno de inversión. Un módulo básico puede estar listo en 3-4 semanas, mientras que aplicaciones completas suelen tomar 2-4 meses. La ventaja de nuestro enfoque modular es que puedes empezar a usar y obtener beneficios de los primeros módulos mientras desarrollamos el resto, validando la solución en el proceso real de trabajo.",
    },
    {
      question: "¿Qué sucede si necesitamos cambios durante el desarrollo?",
      answer:
        "Nuestro proceso está diseñado para ser flexible. Trabajamos con metodología ágil que incluye revisiones semanales donde puedes ver el progreso y solicitar ajustes. Los cambios menores se incorporan sin costo adicional, mientras que modificaciones significativas se evalúan en conjunto para ajustar tiempos y presupuesto. Esta flexibilidad es clave para asegurar que el resultado final se adapte perfectamente a tus necesidades reales.",
    },
    {
      question:
        "¿Cómo garantizan la seguridad de nuestros datos empresariales?",
      answer:
        "Implementamos múltiples capas de seguridad: cifrado de datos en tránsito y reposo, autenticación de usuarios con diferentes niveles de acceso, copias de seguridad automáticas, y cumplimiento de normativas RGPD. Además, realizamos auditorías de seguridad periódicas y mantenemos los sistemas actualizados con los últimos parches de seguridad. Todos nuestros desarrollos incluyen logs de actividad para trazabilidad completa.",
    },
    {
      question: "¿Ofrecen formación para que nuestro equipo use la aplicación?",
      answer:
        "Sí, incluimos formación personalizada como parte del servicio. Realizamos sesiones de capacitación adaptadas a cada rol de usuario, creamos documentación específica para tu aplicación, y ofrecemos soporte directo durante las primeras semanas de uso. También proporcionamos videos tutoriales y una base de conocimiento online para consultas futuras. Nuestro objetivo es que tu equipo se sienta cómodo y productivo desde el primer día.",
    },
    {
      question: "¿Qué incluye el soporte técnico después del lanzamiento?",
      answer:
        "El soporte incluye resolución de incidencias técnicas, actualizaciones de seguridad, pequeñas mejoras de funcionalidad, y monitorización del rendimiento de la aplicación. Ofrecemos diferentes planes de soporte según tus necesidades: desde soporte básico por email hasta soporte premium con respuesta inmediata y acceso directo a nuestro equipo técnico. También incluimos reportes mensuales de uso y recomendaciones de optimización.",
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
            text: "Servicios • Análisis de Sistemas",
            color: "purple",
          }}
          title="Análisis de Sistemas"
          subtitle="Detectamos fallos antes de que cuesten caro"
          description="Auditamos tu sistema para identificar errores, cuellos de
                  botella y oportunidades de mejora, con foco en rendimiento,
                  escalabilidad y estabilidad."
          buttons={[
            {
              label: "Solicitar auditoría técnica",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Ver ejemplo de informe",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: "1-2 semanas",
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
              text: "Desde €800",
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: "Análisis de sistemas por Solbyt",
            overlayTitle: "Prevención inteligente de problemas críticos",
            overlaySubtitle: "Diagnóstico profundo + Soluciones priorizadas",
          }}
        />
        <ProblemsWeSolve />
        <Features items={features} titleGradient="purple" />
        <UseCases
          colorKey="purple"
          title="Casos de uso"
          subtitle="Soluciones personalizadas"
          cases={useCasesContent}
          imageSrc="/img_placeholder.webp"
        />
        <WorkProcess
          colorKey="purple"
          title="El proceso"
          subtitle="Soluciones personalizadas"
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Soluciones personalizadas"
          ctaDescription="Estamos aquí para ayudarte. Contáctanos para una asesoría gratuita y conoce cómo podemos ayudarte a tener presencia online."
          ctaPrimaryLabel="Agendar reunión"
          ctaSecondaryLabel="Escribinos por whatsapp"
          ctaTitle="¿Tienes más preguntas?"
          items={faqs}
          colorKey="purple"
        />
        <CTA
          colorKey="purple"
          title="¿Listo para optimizar tus procesos desde el primer día?"
          description="Desarrollamos la aplicación que tu empresa necesita, pensada por módulos para crecer contigo y adaptarse a tu forma única de trabajar."
          features={[
            "Arquitectura adaptada a tus procesos",
            "Desarrollo modular escalable",
            "Integración con sistemas actuales",
            "Soporte técnico continuo",
          ]}
          buttons={[
            {
              label: "Agendar reunión de análisis",
              href: "/contacto",
              targetBlank: true,
            },
            {
              label: "Solicitar presupuesto personalizado",
              href: "/contacto",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          note="Análisis inicial gratuito • Desarrollo por módulos • Resultados desde la primera fase"
        />
      </main>
      <Footer />
    </>
  );
};

export default SystemAnalysis;

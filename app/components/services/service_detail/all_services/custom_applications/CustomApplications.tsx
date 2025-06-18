"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Benefits from "./auxiliarComponents/Benefits";
import Hero from "../../shared/Hero";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
  Cog,
  CreditCard,
  Layers,
  Settings,
  Target,
  Users,
  Zap,
} from "lucide-react";

const CustomApplications = () => {
  const useCasesContent = [
    {
      key: "CRM",
      title: "CRM enfocado en ventas",
      description:
        "Centralizá tus leads, automatizá seguimientos y gestioná tus oportunidades de venta en un solo lugar, con métricas en tiempo real.",
      features: [
        "Pipeline visual para seguimiento comercial",
        "Recordatorios automáticos por email o WhatsApp",
        "Dashboard de métricas y rendimiento por vendedor",
        "Integración con formularios web y redes sociales",
        "Gestión de cotizaciones y propuestas",
        "Reportes automáticos para toma de decisiones",
      ],
      titleCaseStudy: "Caso real",
      caseStudy:
        "Una empresa de servicios aumentó un 40% su conversión organizando mejor el seguimiento de leads y automatizando tareas repetitivas.",
      color: "blue",
      icon: BarChart3,
      img: "/img_placeholder.webp",
    },
    {
      key: "App",
      title: "App de reservas o turnos",
      description:
        "Permití que tus clientes reserven online 24/7 mientras optimizás tu agenda, reducís cancelaciones y ganás visibilidad sobre tu operación.",
      features: [
        "Calendario con disponibilidad en tiempo real",
        "Reservas desde web y app móvil",
        "Recordatorios automáticos por SMS o email",
        "Panel para gestión de servicios, precios y agenda",
        "Acceso por roles para tu equipo",
        "Reportes de ocupación y facturación",
      ],
      titleCaseStudy: "Caso real",
      caseStudy:
        "Una clínica dental redujo un 60% las cancelaciones y aumentó la ocupación un 25% gracias a recordatorios automáticos y reservas online.",
      color: "purple",
      icon: Calendar,
      img: "/img_placeholder.webp",
    },
    {
      key: "Panel",
      title: "Panel de gestión ejecutiva",
      description:
        "Centralizá información clave de distintas áreas en un panel visual que te ayude a tomar decisiones rápidas y basadas en datos.",
      features: [
        "Indicadores financieros y operativos en tiempo real",
        "Gráficos interactivos y reportes personalizables",
        "Alertas por objetivos, límites o anomalías",
        "Integración con sistemas contables e inventario",
        "Accesos diferenciados por rol o área",
        "Exportación de datos para informes externos",
      ],
      titleCaseStudy: "Caso real",
      caseStudy:
        "Una empresa logística redujo en un 50% el tiempo de análisis con un panel de datos automatizado y accesible para cada área.",
      color: "pink",
      icon: Settings,
      img: "/img_placeholder.webp",
    },
    {
      key: "Herramientas",
      title: "Herramientas internas personalizadas",
      description:
        "Automatizá tareas administrativas, controlá recursos o diseñá flujos de trabajo adaptados a tu operación interna, sin depender de software genérico.",
      features: [
        "Gestión de empleados y asistencia digital",
        "Flujos de aprobación automatizados",
        "Control de stock con código QR o de barras",
        "Gestión documental y archivo digital",
        "Canales internos de comunicación",
        "Automatización de tareas repetitivas",
      ],
      titleCaseStudy: "Caso real",
      caseStudy:
        "Una fábrica redujo 15 horas semanales de trabajo manual al digitalizar el control de inventario y los reportes de producción.",
      color: "blue",
      icon: Users,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Entendimiento del negocio",
      description:
        "Analizamos tus procesos actuales, detectamos cuellos de botella y definimos el primer módulo que generará impacto inmediato.",
      color: "blue",
      duration: "1–2 semanas",
      icon: Target,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Diseño funcional y visual",
      description:
        "Creamos wireframes, definimos estructura de datos y diseñamos interfaces claras, alineadas con la experiencia de tus usuarios.",
      color: "purple",
      duration: "1–2 semanas",
      icon: Layers,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Desarrollo del primer módulo",
      description:
        "Construimos el módulo base (MVP) para que puedas comenzar a usarlo y validarlo con tu equipo en situaciones reales.",
      color: "pink",
      duration: "2–4 semanas",
      icon: Cog,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Evolución por módulos",
      description:
        "Agregamos nuevos módulos o funcionalidades en base a feedback real, objetivos estratégicos y oportunidades de automatización.",
      color: "blue",
      duration: "Continuo",
      icon: Zap,
    },
  ];

  const faqs = [
    {
      question:
        "¿Cómo se integra la aplicación con nuestros sistemas actuales?",
      answer:
        "Antes de empezar, analizamos tus sistemas existentes y diseñamos integraciones que se ajusten a tu realidad: APIs, conectores o sincronización de bases de datos. El objetivo es que todo funcione de forma fluida, sin duplicar tareas ni perder información. Nos integramos con ERPs, CRMs, software contable y muchas otras herramientas del mercado.",
    },
    {
      question:
        "¿Cuánto tiempo tarda en desarrollarse una aplicación completa?",
      answer:
        "Depende de la complejidad del proyecto. Un módulo básico puede estar listo en 3–4 semanas. Aplicaciones completas suelen desarrollarse en fases, y tardan entre 2 y 4 meses. Trabajamos de forma modular para que empieces a usar partes funcionales desde el principio y puedas validar resultados reales mientras seguimos construyendo.",
    },
    {
      question: "¿Qué pasa si necesito hacer cambios durante el desarrollo?",
      answer:
        "Nuestro proceso es ágil y flexible. Tendrás reuniones periódicas para revisar avances y hacer ajustes. Cambios pequeños se aplican sin costo extra; para modificaciones mayores, revisamos juntos tiempos y presupuesto. Queremos que el resultado final sea exactamente lo que necesitás.",
    },
    {
      question: "¿Qué medidas toman para proteger mis datos?",
      answer:
        "Aplicamos estándares altos de seguridad: cifrado de datos, acceso por niveles de usuario, backups automáticos y cumplimiento de normativas como RGPD. Además, monitoreamos el sistema, actualizamos componentes y registramos toda la actividad para asegurar trazabilidad y confianza.",
    },
    {
      question: "¿Capacitan a mi equipo para usar la aplicación?",
      answer:
        "Sí, y lo hacemos de forma personalizada. Preparamos sesiones de formación según el rol de cada usuario, te entregamos documentación clara, grabamos tutoriales si lo necesitás y estamos disponibles durante las primeras semanas para cualquier duda. Queremos que tu equipo se sienta cómodo desde el primer día.",
    },
    {
      question: "¿Qué incluye el soporte técnico después del lanzamiento?",
      answer:
        "El soporte puede incluir desde correcciones y mejoras hasta nuevas funcionalidades, dependiendo del plan que elijas. Siempre tendrás acceso a nuestro equipo técnico, monitoreo del sistema, actualizaciones de seguridad y recomendaciones para seguir mejorando tu aplicación.",
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
          badge={{ text: "Servicios • Aplicaciones a Medida", color: "blue" }}
          title="Aplicaciones hechas a medida para tu negocio"
          subtitle="Digitalizamos tus procesos reales, sin moldes ni limitaciones"
          description="Creamos aplicaciones modulares que se adaptan a tu forma de trabajar, optimizan recursos y evolucionan con tu empresa desde el primer día."
          buttons={[
            {
              label: "Agendar reunión de análisis",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Ver casos de éxito",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: "Desde 3 semanas por módulo",
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
              text: "Desde €1.500 por módulo",
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: "Aplicaciones a medida por Solbyt",
            overlayTitle: "Software que se adapta a tu negocio",
            overlaySubtitle: " Módulos escalables + Procesos optimizados",
          }}
        />
        <Benefits />
        <UseCases
          colorKey="blue"
          title="Soluciones que transforman operaciones"
          subtitle="Desarrollamos aplicaciones específicas para cada tipo de necesidad
            empresarial, desde gestión comercial hasta automatización de procesos internos."
          cases={useCasesContent}
        />
        <WorkProcess
          colorKey="blue"
          title="Metodología por fases escalables"
          subtitle="Desarrollamos tu aplicación por módulos, permitiendo validar resultados e invertir de forma inteligente en cada etapa del crecimiento."
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre el desarrollo de aplicaciones empresariales a medida"
          items={faqs}
          colorKey="blue"
        />
        <CTA
          colorKey="blue"
          title="¿Querés una app que se adapte a tu forma de trabajar?"
          description="Creamos aplicaciones a medida que digitalizan tus procesos reales, te hacen ganar tiempo y evolucionan con tu empresa, módulo a módulo."
          features={[
            "Pensada para tus procesos reales",
            "Escalable según tu crecimiento",
            "Compatible con tus sistemas actuales",
            "Soporte cercano y confiable",
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
          note="Primera reunión sin compromiso • Propuesta en menos de 48h"
        />
      </main>
      <Footer />
    </>
  );
};

export default CustomApplications;

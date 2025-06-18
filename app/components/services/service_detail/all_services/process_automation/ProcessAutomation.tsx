"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Benefits from "./auxiliarComponents/Benefits";
import {
  Clock,
  CreditCard,
  BarChart3,
  Play,
  RefreshCw,
  Target,
  Users,
  Mail,
  Database,
  BarChart2,
  Link2,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import Hero from "../../shared/Hero";
import Features from "../../shared/Features";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";

const ProcessAutomation = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-pink-500" />,
      colorKey: "pink",
      title: "Detección de cuellos de botella",
      description:
        "Analizamos tus procesos actuales para identificar tareas repetitivas y puntos críticos de mejora.",
    },
    {
      icon: <Target className="h-6 w-6 text-solbyt-purple-600" />,
      colorKey: "blue",
      title: "Priorización inteligente",
      description:
        "Enfocamos la automatización en lo que más impacto tiene: tareas costosas, lentas o con errores frecuentes.",
    },
    {
      icon: <Play className="h-6 w-6 text-solbyt-blue-500" />,
      colorKey: "purple",
      title: "Automatización sin interrupciones",
      description:
        "Implementamos los cambios paso a paso, sin frenar tu operación actual ni afectar a tu equipo.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-solbyt-purple-600" />,
      colorKey: "purple",
      title: "Integración con tus herramientas",
      description:
        "Conectamos la automatización con tus sistemas actuales sin necesidad de reemplazar plataformas.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-blue-500" />,
      colorKey: "pink",
      title: "Resultados medibles en tiempo real",
      description:
        "Panel con métricas claras: horas ahorradas, tareas ejecutadas y mejoras de productividad.",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-pink-500" />,
      colorKey: "blue",
      title: "Capacitación y soporte continuo",
      description:
        "Formamos a tu equipo y te acompañamos en cada etapa para asegurar el éxito de la automatización.",
    },
  ];

  const useCasesContent = [
    {
      key: "Emails",
      title: "Automatización de emails clave",
      icon: Mail,
      description:
        "Automatizá el envío de correos repetitivos: seguimientos, recordatorios, notificaciones o reportes, sin mover un dedo.",
      features: [
        "Secuencia de bienvenida automática para nuevos clientes",
        "Seguimiento comercial sin intervención manual",
        "Recordatorios de citas, vencimientos y pagos",
        "Actualizaciones de pedidos o entregas",
        "Emails de carrito abandonado",
        "Reportes programados al equipo directivo",
      ],
      titleCaseStudy: "Ahorro típico",
      caseStudy: "15–20 horas semanales en gestión manual de comunicaciones",
      img: "/img_placeholder.webp",
      color: "pink",
    },
    {
      key: "Datos",
      title: "Procesamiento automático de datos",
      icon: Database,
      description:
        "Reducí errores y tiempo perdido automatizando tareas como carga, validación o migración de datos.",
      features: [
        "Importación automática desde archivos o plataformas",
        "Limpieza y normalización de datos",
        "Detección y fusión de duplicados",
        "Sincronización entre bases de datos",
        "Backups programados y archivado seguro",
        "Migración estructurada entre sistemas",
      ],
      titleCaseStudy: "Ahorro típico",
      caseStudy: "25–30 horas semanales en procesamiento manual de datos",
      img: "/img_placeholder.webp",
      color: "purple",
    },
    {
      key: "Reportes",
      title: "Reportes automáticos en tiempo real",
      icon: BarChart2,
      description:
        "Obtené reportes financieros, comerciales o de rendimiento sin esperar a fin de mes ni recopilar datos a mano.",
      features: [
        "Dashboards ejecutivos en tiempo real",
        "Reportes de ventas, finanzas y marketing programados",
        "Alertas automáticas por KPIs críticos",
        "Distribución por email, Slack u otras herramientas",
        "Comparativas periódicas de rendimiento",
        "Análisis de productividad por equipo",
      ],
      titleCaseStudy: "Ahorro típico",
      caseStudy: "10–15 horas semanales en creación manual de reportes",
      img: "/img_placeholder.webp",
      color: "blue",
    },
    {
      key: "Flujos",
      title: "Flujos automatizados entre sistemas",
      icon: Link2,
      description:
        "Sincronizá tus herramientas para que trabajen en conjunto y eviten tareas repetitivas o errores de carga.",
      features: [
        "Conexión CRM + marketing automation",
        "Sincronización contable con ventas",
        "Flujos desde formularios web a bases de datos",
        "Conexión inventario + ecommerce",
        "Aprobaciones internas automatizadas",
        "Integración mediante APIs o middleware",
      ],
      titleCaseStudy: "Ahorro típico",
      caseStudy: "20–25 horas semanales en tareas de integración manual",
      img: "/img_placeholder.webp",
      color: "pink",
    },
  ];

  const phases = [
    {
      phase: "Paso 1",
      title: "Relevamiento y análisis",
      description:
        "Mapeamos tus procesos actuales, identificamos tareas repetitivas y detectamos oportunidades claras de automatización.",
      color: "pink",
      duration: "3–5 días",
      icon: BarChart3,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Paso 2",
      title: "Diseño del plan automatizable",
      description:
        "Definimos qué automatizar primero según impacto y facilidad, detallando los flujos, sistemas involucrados y resultados esperados.",
      color: "blue",
      duration: "1 semana",
      icon: Settings,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Paso 3",
      title: "Automatización progresiva",
      description:
        "Desarrollamos e implementamos por etapas, validando resultados desde el primer flujo sin afectar la operación diaria.",
      color: "purple",
      duration: "2–4 semanas",
      icon: Play,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Paso 4",
      title: "Medición y expansión",
      description:
        "Monitoreamos resultados, optimizamos lo ya automatizado y extendemos a nuevos procesos según prioridades del negocio.",
      color: "pink",
      duration: "Continuo",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      question: "¿Cómo identifican qué procesos se pueden automatizar?",
      answer:
        "Realizamos una auditoría completa de tus operaciones para detectar tareas repetitivas, lentas o propensas a errores. Luego priorizamos según impacto y facilidad de implementación. Nos enfocamos en procesos con reglas claras, alta frecuencia de ejecución y retorno rápido de inversión.",
    },
    {
      question: "¿La automatización reemplaza a mi equipo?",
      answer:
        "No. Automatizamos tareas, no personas. Liberamos a tu equipo de tareas repetitivas para que puedan enfocarse en actividades más estratégicas y de mayor valor. Además, ofrecemos capacitación para adaptarse fácilmente al nuevo sistema.",
    },
    {
      question: "¿Qué pasa si mis procesos cambian en el futuro?",
      answer:
        "Diseñamos automatizaciones flexibles que pueden ajustarse a cambios futuros. Nuestro enfoque modular permite modificar, ampliar o eliminar pasos fácilmente. También ofrecemos soporte continuo para ayudarte a adaptarte sin complicaciones.",
    },
    {
      question: "¿Cuándo empiezo a ver resultados?",
      answer:
        "En la mayoría de los casos, el retorno se empieza a notar entre 2 y 6 meses. Verás mejoras desde el inicio: menos errores, más velocidad y ahorro de tiempo. Medimos todo con métricas claras como horas ahorradas y procesos optimizados.",
    },
    {
      question: "¿Pueden integrarse con los sistemas que ya uso?",
      answer:
        "Sí. Nos especializamos en integrar automatización con tus herramientas actuales, como CRM, ERP, plataformas de ventas, contabilidad o e-commerce. Usamos APIs, conectores nativos o soluciones a medida sin necesidad de cambiar de sistema.",
    },
    {
      question: "¿Qué soporte técnico ofrecen después?",
      answer:
        "Ofrecemos soporte técnico continuo: monitoreo, resolución de incidencias, actualizaciones y mejoras. Podés elegir entre niveles de soporte, desde asistencia básica por email hasta atención prioritaria. También recibís reportes con análisis y recomendaciones.",
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero
          generalColor="pink"
          badge={{
            text: "Servicios • Automatización de Procesos",
            color: "pink",
          }}
          title="Automatizá tareas, ganá tiempo y productividad"
          subtitle="Digitalizamos procesos repetitivos sin frenar tu operación"
          description="Transformamos horas de trabajo manual en flujos automáticos que optimizan recursos, reducen errores y permiten que tu equipo se enfoque en lo que realmente importa."
          buttons={[
            {
              label: "Análisis gratuito de procesos",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Ver casos de automatización",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-pink-500" />,
              text: "Desde 2 semanas por flujo",
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-pink-500" />,
              text: "Desde €800 por flujo",
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: "Automatización de procesos por Solbyt",
            overlayTitle: "Libera tiempo para lo que realmente importa",
            overlaySubtitle:
              "Automatización inteligente + Procesos optimizados",
          }}
        />

        <Benefits />
        <Features
          items={features}
          title="Nuestro enfoque paso a paso"
          description="Implementamos automatización de forma gradual y estratégica, priorizando procesos con mayor impacto y asegurando una transición sin interrupciones."
          titleGradient="pink"
        />
        <UseCases
          colorKey="pink"
          title="Procesos que transformamos por ti"
          subtitle="Desde comunicaciones automáticas hasta reportes complejos, automatizamos los procesos que más tiempo consumen en tu operación diaria."
          cases={useCasesContent}
        />
        <WorkProcess
          colorKey="pink"
          title="Implementación sin interrupciones"
          subtitle="Nuestro proceso garantiza una transición suave hacia la automatización, manteniendo la continuidad operativa en todo momento."
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre la automatización de procesos"
          items={faqs}
          colorKey="pink"
        />
        <CTA
          colorKey="pink"
          title="¿Listo para automatizar y ahorrar tiempo real?"
          description="Transformá tus procesos más repetitivos en flujos automáticos que te ahorren horas cada semana, sin cambiar tus sistemas actuales ni interrumpir tu operación."
          features={[
            "Auditoría gratuita de procesos",
            "Automatización sin fricciones",
            "Retorno visible en 2 a 6 meses",
            "Soporte técnico garantizado",
          ]}
          buttons={[
            {
              label: "Solicitar análisis gratuito",
              href: "/contacto",
              targetBlank: true,
            },
            {
              label: "Ver casos de automatización",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          note="Sin compromisos • Diagnóstico en menos de 48h • Resultados desde el primer mes"
        />
      </main>
      <Footer />
    </>
  );
};

export default ProcessAutomation;

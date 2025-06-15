"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import {
  ActivityIcon,
  ArrowRight,
  Clock,
  CreditCard,
  Database,
  FileTextIcon,
  SearchIcon,
  SettingsIcon,
  Shield,
  TargetIcon,
} from "lucide-react";
import ProblemsWeSolve from "./auxiliarComponents/ProblemsWeSolve";
import {
  Activity,
  FileText,
  Search,
  Settings,
  Target,
  Users,
} from "lucide-react";
import Hero from "../../shared/Hero";
import Features from "../../shared/Features";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";

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
      key: "auditoria",
      title: "Auditoría técnica completa",
      description:
        "Evaluación integral de todo el ecosistema tecnológico: código, arquitectura, infraestructura, procesos de desarrollo y documentación técnica.",
      features: [
        "Revisión completa del código fuente y arquitectura",
        "Análisis de vulnerabilidades y puntos de fallo",
        "Evaluación de rendimiento y escalabilidad",
        "Revisión de procesos de desarrollo y deployment",
        "Análisis de documentación técnica y procedimientos",
        "Recomendaciones priorizadas con roadmap de implementación",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Sistemas críticos, aplicaciones con problemas recurrentes, o antes de grandes actualizaciones",
      color: "blue",
      icon: SearchIcon,
      img: "/img_placeholder.webp",
    },
    {
      key: "optimizacion",
      title: "Optimización de base de datos",
      description:
        "Análisis especializado en rendimiento de bases de datos, optimización de consultas y estructura de datos para mejorar velocidad y eficiencia.",
      features: [
        "Análisis de consultas lentas y cuellos de botella",
        "Optimización de índices y estructura de tablas",
        "Revisión de procedimientos almacenados y triggers",
        "Evaluación de estrategias de backup y recuperación",
        "Análisis de uso de memoria y almacenamiento",
        "Recomendaciones de escalabilidad horizontal/vertical",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Aplicaciones con problemas de rendimiento, bases de datos grandes, o sistemas con alta concurrencia",
      color: "purple",
      icon: Database,
      img: "/img_placeholder.webp",
    },
    {
      key: "seguridad",
      title: "Mejora de seguridad",
      description:
        "Evaluación exhaustiva de vulnerabilidades de seguridad, implementación de mejores prácticas y fortalecimiento de la protección de datos.",
      features: [
        "Análisis de vulnerabilidades y vectores de ataque",
        "Revisión de autenticación y autorización",
        "Evaluación de cifrado y protección de datos",
        "Análisis de configuraciones de servidor y red",
        "Revisión de cumplimiento RGPD y normativas",
        "Plan de respuesta a incidentes de seguridad",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Sistemas que manejan datos sensibles, aplicaciones públicas, o empresas con requisitos de compliance",
      color: "pink",
      icon: Shield,
      img: "/img_placeholder.webp",
    },
    {
      key: "stack",
      title: "Evaluación de stack tecnológico",
      description:
        "  Análisis de las tecnologías utilizadas, su vigencia, compatibilidad y adecuación para los objetivos actuales y futuros del negocio.",
      features: [
        "Evaluación de tecnologías y frameworks utilizados",
        "Análisis de obsolescencia y riesgos técnicos",
        "Revisión de dependencias y librerías externas",
        "Evaluación de escalabilidad del stack actual",
        "Comparativa con alternativas modernas",
        "Roadmap de migración y actualización tecnológica",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Sistemas legacy, aplicaciones con tecnologías obsoletas, o planificación de modernización tecnológica",
      color: "blue",
      icon: SettingsIcon,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Recopilación de información",
      description:
        "Análisis de documentación técnica, acceso a sistemas y entrevistas con el equipo técnico para entender el contexto.",
      color: "blue",
      duration: "1-2 días",
      icon: FileTextIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Diagnóstico técnico",
      description:
        "Evaluación profunda del código, arquitectura, rendimiento y seguridad utilizando herramientas especializadas.",
      color: "purple",
      duration: "3-5 días",
      icon: SearchIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Análisis de resultados",
      description:
        "Procesamiento de datos recopilados, identificación de patrones y clasificación de problemas por criticidad.",
      color: "pink",
      duration: "2-3 días",
      icon: ActivityIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Informe y recomendaciones",
      description:
        "Entrega de informe detallado con hallazgos, recomendaciones priorizadas y plan de acción específico.",
      color: "blue",
      duration: "2-3 días",
      icon: TargetIcon,
    },
  ];

  const faqs = [
    {
      question: "¿Qué nivel de acceso necesitan a nuestros sistemas?",
      answer:
        "El nivel de acceso depende del tipo de análisis solicitado. Para una auditoría completa, necesitamos acceso de solo lectura al código fuente, bases de datos de desarrollo/staging, y documentación técnica. Para análisis de rendimiento, requerimos acceso a logs y métricas del sistema. Siempre trabajamos bajo acuerdos de confidencialidad estrictos y nunca accedemos a datos de producción sensibles sin supervisión. Podemos trabajar con copias anonimizadas de datos cuando sea necesario.",
    },
    {
      question: "¿El análisis afectará el funcionamiento normal del sistema?",
      answer:
        "No, nuestro análisis está diseñado para ser no intrusivo. Trabajamos principalmente con entornos de desarrollo y staging, documentación, y logs históricos. Cuando necesitamos analizar el entorno de producción, utilizamos herramientas de monitoreo pasivo que no afectan el rendimiento. Cualquier prueba que pueda tener impacto se coordina previamente y se realiza en horarios de baja actividad, siempre con la aprobación y supervisión de tu equipo técnico.",
    },
    {
      question: "¿Qué incluye exactamente el informe de análisis?",
      answer:
        "El informe incluye un resumen ejecutivo con los hallazgos principales, análisis detallado de cada área evaluada (código, arquitectura, rendimiento, seguridad), lista priorizada de problemas encontrados clasificados por criticidad, recomendaciones específicas con estimaciones de tiempo y costo, roadmap de implementación sugerido, y anexos técnicos con evidencias y métricas. También incluimos una sesión de presentación para explicar los hallazgos y responder preguntas de tu equipo.",
    },
    {
      question: "¿Pueden ayudar a implementar las mejoras recomendadas?",
      answer:
        "Absolutamente. Además del análisis, ofrecemos servicios de implementación de las mejoras recomendadas. Podemos trabajar directamente en la implementación, colaborar con tu equipo técnico interno, o proporcionar supervisión y consultoría durante el proceso. También ofrecemos capacitación específica para tu equipo en las nuevas prácticas y tecnologías recomendadas. Nuestro objetivo es asegurar que las recomendaciones se implementen correctamente y generen el impacto esperado.",
    },
    {
      question:
        "¿Con qué frecuencia recomiendan realizar análisis de sistemas?",
      answer:
        "La frecuencia depende de varios factores: sistemas críticos deberían analizarse anualmente, aplicaciones en crecimiento rápido cada 6-12 meses, y sistemas estables cada 2-3 años. También recomendamos análisis antes de grandes actualizaciones, migraciones, o cuando se detectan problemas de rendimiento. Para sistemas legacy o con tecnologías obsoletas, sugerimos evaluaciones más frecuentes. Ofrecemos planes de monitoreo continuo para clientes que requieren supervisión constante de la salud de sus sistemas.",
    },
    {
      question: "¿Qué diferencia su análisis de las herramientas automáticas?",
      answer:
        "Mientras las herramientas automáticas detectan problemas superficiales, nuestro análisis combina tecnología avanzada con experiencia humana para entender el contexto de negocio. Evaluamos no solo qué está mal, sino por qué ocurre y cómo impacta tus objetivos específicos. Consideramos factores como el crecimiento esperado, restricciones presupuestarias, capacidades del equipo, y prioridades estratégicas. Nuestras recomendaciones son accionables y están adaptadas a tu realidad empresarial, no solo a mejores prácticas genéricas.",
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
          title="Tipos de análisis especializados"
          subtitle="Cada sistema tiene necesidades específicas. Ofrecemos diferentes tipos de análisis técnico adaptados a tu situación particular y objetivos de negocio."
          cases={useCasesContent}
          imageSrc="/img_placeholder.webp"
        />
        <WorkProcess
          colorKey="purple"
          title="Metodología de análisis profundo"
          subtitle="Nuestro proceso estructurado garantiza un diagnóstico completo y recomendaciones accionables que tu equipo puede implementar de forma segura y prioritaria."
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre nuestro servicio de análisis de sistemas"
          items={faqs}
          colorKey="purple"
        />
        <CTA
          colorKey="purple"
          title=" ¿Listo para prevenir problemas costosos?"
          description="No esperes a que los problemas técnicos afecten tu negocio. Una auditoría preventiva puede ahorrarte miles de euros y dolores de cabeza futuros."
          features={[
            "Diagnóstico completo en 1-2 semanas",
            "Análisis no intrusivo",
            "Recomendaciones priorizadas",
            "Soporte en implementación",
          ]}
          buttons={[
            {
              label: "Solicitar auditoría técnica",
              href: "/contacto",
              targetBlank: true,
            },
            {
              label: "Ver ejemplo de informe",
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

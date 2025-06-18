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
        "Revisamos a fondo tu arquitectura, código y bases de datos para detectar fallos, riesgos y oportunidades de mejora.",
      colorKey: "purple",
    },
    {
      icon: <Activity className="h-6 w-6 text-solbyt-blue-600" />,
      title: "Evaluación de rendimiento técnico",
      description:
        "Medimos tiempos de respuesta, consumo de recursos y rendimiento general para detectar cuellos de botella técnicos.",
      colorKey: "blue",
    },
    {
      icon: <Target className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Detección de puntos críticos",
      description:
        "Identificamos componentes sensibles al fallo que pueden afectar la estabilidad y escalabilidad de tu sistema.",
      colorKey: "pink",
    },
    {
      icon: <Settings className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Revisión de arquitectura y stack",
      description:
        "Analizamos la adecuación de tu stack tecnológico y su capacidad para sostener los objetivos actuales y futuros.",
      colorKey: "blue",
    },
    {
      icon: <FileText className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Informe de mejoras priorizadas",
      description:
        "Te entregamos un plan claro y accionable, con recomendaciones clasificadas por impacto, urgencia y coste.",
      colorKey: "pink",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-purple-500" />,
      title: "Asesoría para tu equipo actual",
      description:
        "Acompañamos a tu equipo con sesiones técnicas para facilitar la implementación de las mejoras sugeridas.",
      colorKey: "purple",
    },
  ];

  const useCasesContent = [
    {
      key: "auditoria",
      title: "Auditoría técnica completa",
      description:
        "Revisamos todo tu ecosistema digital: código, arquitectura, infraestructura y procesos de desarrollo para detectar riesgos y oportunidades.",
      features: [
        "Inspección detallada del código y arquitectura",
        "Detección de vulnerabilidades y fallos críticos",
        "Evaluación de rendimiento y escalabilidad",
        "Revisión de procesos de desarrollo y despliegue",
        "Análisis de documentación técnica y procedimientos",
        "Informe con roadmap técnico de mejora",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Aplicaciones complejas, sistemas con errores recurrentes o en preparación para una gran actualización",
      color: "blue",
      icon: SearchIcon,
      img: "/img_placeholder.webp",
    },
    {
      key: "optimizacion",
      title: "Optimización de base de datos",
      description:
        "Mejoramos el rendimiento de tu base de datos mediante análisis de consultas, estructura de tablas y uso eficiente de recursos.",
      features: [
        "Detección de consultas lentas y cuellos de botella",
        "Optimización de índices y organización de tablas",
        "Revisión de triggers y procedimientos almacenados",
        "Evaluación de backup y recuperación",
        "Análisis de uso de memoria y almacenamiento",
        "Recomendaciones para escalar según la carga",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Aplicaciones con bases de datos pesadas, alta concurrencia o problemas de rendimiento persistente",
      color: "purple",
      icon: Database,
      img: "/img_placeholder.webp",
    },
    {
      key: "seguridad",
      title: "Mejora de seguridad",
      description:
        "Auditamos la seguridad de tu sistema, detectamos vulnerabilidades y fortalecemos la protección de datos sensibles.",
      features: [
        "Análisis de posibles vectores de ataque",
        "Evaluación de autenticación y control de accesos",
        "Revisión de cifrado y gestión de datos",
        "Inspección de configuraciones de red y servidor",
        "Verificación de cumplimiento RGPD y normativas",
        "Plan de respuesta ante incidentes",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Sistemas expuestos públicamente, manejo de datos sensibles o con exigencias de compliance",
      color: "pink",
      icon: Shield,
      img: "/img_placeholder.webp",
    },
    {
      key: "stack",
      title: "Evaluación de stack tecnológico",
      description:
        "Analizamos las tecnologías que usás y te ayudamos a definir si están alineadas con tus objetivos presentes y futuros.",
      features: [
        "Evaluación de frameworks y librerías actuales",
        "Detección de tecnologías obsoletas o riesgosas",
        "Análisis de dependencias críticas",
        "Capacidad de escalado del stack",
        "Comparación con alternativas modernas",
        "Roadmap de migración tecnológica si aplica",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Sistemas legacy, aplicaciones que necesitan modernización o redefinición tecnológica",
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
        "Analizamos documentación técnica, accedemos a entornos de desarrollo y hablamos con tu equipo para entender el contexto real del sistema.",
      color: "blue",
      duration: "1-2 días",
      icon: FileTextIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Diagnóstico técnico",
      description:
        "Realizamos pruebas exhaustivas del código, la arquitectura, el rendimiento y la seguridad utilizando herramientas avanzadas.",
      color: "purple",
      duration: "3-5 días",
      icon: SearchIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Análisis de resultados",
      description:
        "Procesamos los datos recolectados, identificamos patrones de falla y priorizamos los hallazgos según su impacto y criticidad.",
      color: "pink",
      duration: "2-3 días",
      icon: ActivityIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Informe y recomendaciones",
      description:
        "Presentamos un informe completo con todos los hallazgos, mejoras sugeridas y un plan de acción práctico para tu equipo.",
      color: "blue",
      duration: "2-3 días",
      icon: TargetIcon,
    },
  ];

  const faqs = [
    {
      question: "¿Qué nivel de acceso necesitan a nuestros sistemas?",
      answer:
        "Dependiendo del tipo de análisis, podemos requerir acceso de solo lectura al código fuente, entornos de desarrollo o staging, y documentación técnica. Para el análisis de rendimiento, accedemos a logs, métricas y configuraciones del sistema. Siempre trabajamos bajo estrictos acuerdos de confidencialidad y, cuando es necesario, utilizamos datos anonimizados. Nunca accedemos a datos sensibles de producción sin supervisión explícita.",
    },
    {
      question: "¿El análisis afectará el funcionamiento normal del sistema?",
      answer:
        "No. Nuestro enfoque es no intrusivo y se realiza principalmente sobre entornos de desarrollo, staging y datos históricos. En caso de requerir observación en producción, utilizamos herramientas pasivas que no interfieren con el rendimiento. Las pruebas que puedan implicar riesgo se planifican con tu equipo y se ejecutan en momentos de baja actividad.",
    },
    {
      question: "¿Qué incluye exactamente el informe de análisis?",
      answer:
        "Incluye: un resumen ejecutivo, análisis detallado por área (código, arquitectura, rendimiento, seguridad), listado priorizado de problemas, recomendaciones técnicas con estimaciones de implementación, y un roadmap de acción. También añadimos anexos técnicos con métricas y evidencias, más una sesión de presentación para resolver dudas con tu equipo.",
    },
    {
      question: "¿Pueden ayudar a implementar las mejoras recomendadas?",
      answer:
        "Sí. Podemos implementar directamente las mejoras, trabajar junto a tu equipo técnico o brindar supervisión y asesoría durante el proceso. También ofrecemos capacitaciones específicas para que tu equipo incorpore las mejores prácticas y tecnologías sugeridas.",
    },
    {
      question: "¿Con qué frecuencia recomiendan realizar un análisis?",
      answer:
        "Para sistemas críticos, sugerimos al menos una revisión anual. Para aplicaciones en crecimiento acelerado, cada 6-12 meses. Sistemas estables pueden revisarse cada 2-3 años. También es recomendable hacerlo antes de migraciones, actualizaciones o ante problemas persistentes. Ofrecemos planes de análisis recurrente para monitoreo continuo.",
    },
    {
      question: "¿Qué diferencia su análisis de las herramientas automáticas?",
      answer:
        "Nuestro análisis va más allá de los diagnósticos superficiales. Combinamos herramientas técnicas con experiencia humana para entender el contexto real del negocio. Evaluamos causas raíz, impacto en objetivos, capacidades del equipo y prioridades estratégicas. El resultado son recomendaciones accionables, alineadas a tu realidad, no genéricas.",
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
          title="Auditoría Técnica de Sistemas"
          subtitle="Prevenimos fallos antes de que afecten tu negocio"
          description="Auditamos tus sistemas para detectar errores críticos, cuellos de botella y oportunidades de optimización, con foco en rendimiento, escalabilidad y estabilidad operativa."
          buttons={[
            {
              label: "Solicitar diagnóstico técnico",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Explorar ejemplo de informe técnico",
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
            overlayTitle: "Prevención estratégica de riesgos técnicos",
            overlaySubtitle: "Diagnóstico experto + Soluciones accionables",
          }}
        />

        <ProblemsWeSolve />

        <Features
          items={features}
          title="Análisis técnico con impacto real"
          description="Vamos más allá de los síntomas: identificamos la raíz de los problemas técnicos, evaluamos tu stack actual y proponemos mejoras priorizadas que tu equipo puede implementar de inmediato."
          titleGradient="purple"
        />

        <UseCases
          colorKey="purple"
          title="Tipos de análisis especializados"
          subtitle="Cada sistema tiene necesidades específicas. Ofrecemos diferentes tipos de análisis técnico adaptados a tu situación particular y objetivos de negocio."
          cases={useCasesContent}
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
          title="¿Listo para anticiparte a los problemas críticos?"
          description="Una auditoría técnica no es un gasto, es una inversión inteligente. Te ayudamos a detectar fallos antes de que se conviertan en pérdidas costosas."
          features={[
            "Diagnóstico completo en 1-2 semanas",
            "Análisis sin interrumpir tu operación",
            "Informe claro con prioridades y soluciones",
            "Soporte experto en cada etapa del proceso",
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
          note="Análisis inicial gratuito • Desarrollo por módulos • Resultados tangibles desde la primera fase"
        />
      </main>
      <Footer />
    </>
  );
};

export default SystemAnalysis;

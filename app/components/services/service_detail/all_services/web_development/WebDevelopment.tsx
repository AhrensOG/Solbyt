"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import CustomerValue from "./auxiliarComponents/CustomerValue";
import {
  ArrowRight,
  Brain,
  Building2,
  Clock,
  Code,
  CreditCard,
  LayoutDashboard,
  Megaphone,
  PenTool,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Hero from "../../shared/Hero";
import Features from "../../shared/Features";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";

const WebDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-solbyt-purple-600" />,
      colorKey: "purple",
      title: "Diseño responsive y profesional",
      description:
        "Interfaces personalizadas que se adaptan a todos los dispositivos, centradas en experiencia de usuario.",
    },
    {
      icon: <Search className="h-6 w-6 text-solbyt-blue-600" />,
      colorKey: "blue",
      title: "Optimización para buscadores",
      description:
        "Aplicamos buenas prácticas SEO desde el código para que tu sitio sea fácilmente indexado por Google.",
    },
    {
      icon: <Zap className="h-6 w-6 text-solbyt-pink-500" />,
      colorKey: "pink",
      title: "Velocidad y rendimiento superior",
      description:
        "Desarrollamos sitios ultrarrápidos, sin depender de plantillas pesadas ni CMS limitantes.",
    },
    {
      icon: <Settings className="h-6 w-6 text-solbyt-pink-500" />,
      colorKey: "pink",
      title: "Arquitectura moderna y escalable",
      description:
        "Desarrollamos tu sitio con tecnologías modernas que aseguran velocidad, seguridad y la posibilidad de crecer junto a tu negocio.",
    },

    {
      icon: <Code className="h-6 w-6 text-solbyt-purple-600" />,
      colorKey: "purple",
      title: "Código limpio y personalizado",
      description:
        "Cada proyecto se construye desde cero según tus objetivos, sin plantillas genéricas ni soluciones prefabricadas.",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-blue-500" />,
      colorKey: "blue",
      title: "Soporte técnico continuo",
      description:
        "Acompañamos el proyecto después del lanzamiento para ajustes, mejoras o nuevas funcionalidades según evoluciona tu negocio.",
    },
  ];

  const useCasesContent = [
    {
      key: "Landing Pages",
      title: "Landing Pages",
      description:
        "Páginas de aterrizaje diseñadas para convertir visitantes en leads o clientes, con un objetivo específico y llamados a la acción estratégicos.",
      features: [
        "Diseño enfocado en conversión",
        "Formularios optimizados para captura de leads",
        "Tiempo de carga ultrarrápido",
        "Análisis de comportamiento del usuario",
        "A/B testing para optimizar resultados",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Negocios que necesitan campañas de marketing efectivas, startups en etapa de validación, o lanzamientos de productos con foco en conversión.",
      color: "blue",
      icon: Megaphone,
      img: "/img_placeholder.webp",
    },
    {
      key: "E-commerce",
      title: "E-commerce",
      description:
        "Tiendas online intuitivas y seguras que ofrecen una experiencia de compra fluida y aumentan tus ventas digitales.",
      features: [
        "Catálogo de productos fácil de gestionar",
        "Proceso de compra simplificado",
        "Integración con pasarelas de pago seguras",
        "Gestión de inventario y pedidos",
        "Optimización para conversión de ventas",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Tiendas físicas que buscan digitalizarse, emprendedores que venden productos en redes sociales, o negocios que quieren escalar sus ventas online.",
      color: "purple",
      icon: ShoppingCart,
      img: "/img_placeholder.webp",
    },
    {
      key: "Sitios Corporativos",
      title: "Sitios Corporativos",
      description:
        "Webs profesionales que reflejan la identidad de tu empresa y comunican eficazmente tus servicios y valores.",
      features: [
        "Diseño alineado con tu identidad corporativa",
        "Estructura clara y navegación intuitiva",
        "Contenido persuasivo orientado a conversión",
        "Integración con CRM y herramientas de marketing",
        "Optimización SEO para keywords de negocio",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Empresas que desean proyectar una imagen profesional, mejorar su comunicación institucional o captar clientes B2B desde su sitio web.",
      color: "pink",
      icon: Building2,
      img: "/img_placeholder.webp",
    },
    {
      key: "Blogs Personalizados",
      title: "Blogs Personalizados",
      description:
        "Plataformas de contenido optimizadas para SEO que posicionan tu marca como referente en tu sector y atraen tráfico cualificado.",
      features: [
        "Estructura optimizada para SEO",
        "Categorización inteligente de contenidos",
        "Integración con redes sociales",
        "Sistema de comentarios y engagement",
        "Estrategia de contenidos para captación de leads",
      ],
      titleCaseStudy: "Ideal para",
      caseStudy:
        "Profesionales que buscan posicionarse como referentes, agencias de marketing con estrategia de contenidos, o marcas que desean atraer tráfico orgánico calificado.",
      color: "blue",
      icon: PenTool,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: "Fase 1",
      title: "Estrategia y planificación",
      description:
        "Nos reunimos para entender tus objetivos, analizamos a tu competencia y definimos una hoja de ruta personalizada para tu sitio web.",
      color: "purple",
      duration: "3-5 días hábiles",
      icon: Brain,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 2",
      title: "Diseño UX/UI",
      description:
        "Creamos la arquitectura del sitio, wireframes y diseños visuales centrados en la experiencia del usuario y alineados con tu marca.",
      color: "blue",
      duration: "5-7 días hábiles",
      icon: LayoutDashboard,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 3",
      title: "Desarrollo y optimización",
      description:
        "Programamos tu sitio con código limpio, responsive y seguro. Incluimos SEO técnico y pruebas de rendimiento para garantizar velocidad y visibilidad.",
      color: "pink",
      duration: "8-12 días hábiles",
      icon: Code,
      connectorIcon: ArrowRight,
    },
    {
      phase: "Fase 4",
      title: "Lanzamiento y soporte",
      description:
        "Lanzamos tu sitio y te acompañamos con soporte técnico, mantenimiento, formación y mejoras continuas según tus necesidades.",
      color: "purple",
      duration: "2-3 días hábiles",
      icon: Wrench,
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda en desarrollarse un sitio web?",
      answer:
        "Depende de la complejidad y del contenido disponible. Para sitios estándar, estimamos entre 4 y 6 semanas. Proyectos más avanzados como tiendas online o plataformas a medida pueden requerir más tiempo. Al inicio del proyecto, te compartimos un cronograma detallado adaptado a tus necesidades.",
    },
    {
      question: "¿Qué necesito proporcionar para iniciar el proyecto?",
      answer:
        "Lo más importante es que nos cuentes tus objetivos, tu público y si tenés alguna referencia visual. También ayuda contar con tu logo, identidad visual, textos o imágenes que quieras incluir. Si no tenés todo listo, no te preocupes: te guiamos paso a paso y podemos ayudarte con contenido también.",
    },
    {
      question: "¿Cómo hacen para que mi sitio aparezca en Google?",
      answer:
        "Aplicamos buenas prácticas de SEO desde el desarrollo: velocidad de carga, estructura optimizada, contenido estratégico y herramientas de análisis. Esto ayuda a que tu sitio sea visible en buscadores desde el primer día. También ofrecemos servicios adicionales de posicionamiento continuo si lo necesitás.",
    },
    {
      question: "¿Podré actualizar el contenido de mi web?",
      answer:
        "Nuestros sitios están desarrollados a medida y no utilizan CMS como WordPress. Si necesitás cambios frecuentes, te ofrecemos un plan de soporte o podemos crear un panel personalizado a pedido. Siempre vas a poder contar con nosotros para mantener tu web actualizada.",
    },
    {
      question: "¿Qué incluye el mantenimiento del sitio?",
      answer:
        "Incluye actualizaciones técnicas, copias de seguridad, mejoras de rendimiento y soporte por email. También podemos ayudarte con cambios puntuales en el contenido o nuevas funcionalidades según evolucione tu negocio.",
    },
    {
      question: "¿Trabajan solo con empresas locales?",
      answer:
        "No. Trabajamos con empresas y emprendedores de todo el mundo. Nuestro proceso está pensado para funcionar perfectamente de forma remota, con comunicación clara, entregas organizadas y soporte continuo, sin importar dónde estés.",
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
            text: "Servicios • Desarrollo Web",
            color: "purple",
          }}
          title="Tu nuevo sitio web, más rápido y rentable"
          subtitle="Convertimos tu presencia online en una máquina de ventas"
          description="Creamos sitios profesionales, veloces y seguros, pensados para destacar en buscadores, reflejar tu identidad y generar resultados reales para tu negocio."
          buttons={[
            {
              label: "Solicitar presupuesto gratuito",
              href: "/contacto",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: "Ver ejemplos de proyectos",
              href: "/automatizacion#casos",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: "3-5 semanas",
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
              text: "Desde €1.200",
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: "Desarrollo web profesional por Solbyt",
            overlayTitle: "Sitios web que convierten visitantes en clientes",
            overlaySubtitle: "Diseño profesional + Rendimiento + SEO",
          }}
        />

        <CustomerValue />

        <Features
          items={features}
          title="¿Qué incluye nuestro servicio de desarrollo web?"
          description="Creamos sitios web completos y optimizados que no solo lucen profesionales, sino que están diseñados estratégicamente para alcanzar tus objetivos de negocio."
          titleGradient="purple"
        />
        <UseCases
          colorKey="purple"
          title="Soluciones adaptadas a tus necesidades"
          subtitle="Desarrollamos diferentes tipos de sitios web según los objetivos específicos de tu negocio."
          cases={useCasesContent}
        />
        <WorkProcess
          colorKey="purple"
          title="Nuestro proceso de trabajo"
          subtitle="Metodología clara y transparente para que sepas exactamente qué esperar en cada etapa del desarrollo de tu sitio web."
          phases={phases}
        />
        <FAQ
          title="Preguntas frecuentes"
          subtitle="Resolvemos tus dudas sobre nuestro servicio de desarrollo web profesional"
          items={faqs}
          colorKey="purple"
        />
        <CTA
          colorKey="purple"
          title="¿Listo para llevar tu presencia digital al siguiente nivel?"
          description="Desarrollamos sitios web personalizados que conectan con tu audiencia, proyectan profesionalismo y generan resultados reales para tu negocio."
          features={[
            "Diseño único y adaptado a tu marca",
            "Arquitectura rápida y escalable",
            "Optimización SEO desde el primer día",
            "Soporte técnico directo y continuo",
          ]}
          buttons={[
            {
              label: "Solicitar presupuesto gratuito",
              href: "/contacto",
              targetBlank: true,
            },
            {
              label: "Agendar consulta gratuita",
              href: "/contacto",
              variant: "outline",
              targetBlank: true,
            },
          ]}
          note="Sin compromiso • Respuesta en menos de 24 horas"
        />
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;

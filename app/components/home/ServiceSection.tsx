import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Link,
  Monitor,
  ShoppingCart,
  Server,
  CheckCircle,
  PieChart,
  Cloud,
  Gauge,
  Briefcase,
  Layers,
  Zap,
  BarChart3,
  Package,
  ShieldCheck,
  Sparkles,
  Code,
  Layout,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios rápidos, responsivos, modernos y adaptados a tus necesitas.",
    details:
      "Desde landing pages hasta plataformas complejas. Aseguramos rendimiento, diseño y funcionalidad.",
    cta: "Contáctanos para más información sobre desarrollo web.",
    icon: <Code size={48} />,
    secondaryIcons: [
      <Globe size={24} />,
      <Server size={24} />,
      <Cloud size={24} />,
    ],
  },
  {
    title: "Diseño UX/UI",
    description:
      "Ofrecemos interfaces atractivas y funcionales enfocadas en tus clientes.",
    details:
      "Creamos experiencias de usuario intuitivas que maximizan la satisfacción del cliente.",
    cta: "Descubre cómo mejorar la experiencia de tus usuarios.",
    icon: <Layout size={48} />,
    secondaryIcons: [
      <Monitor size={24} />,
      <CheckCircle size={24} />,
      <PieChart size={24} />,
    ],
  },
  {
    title: "Automatización de Procesos",
    description:
      "Simplifica tareas y optimiza operaciones con tecnología avanzada.",
    details:
      "Integramos soluciones personalizadas que aumentan tu productividad y reducen costos.",
    cta: "Solicita un análisis para automatizar tu negocio.",
    icon: <Settings size={48} />,
    secondaryIcons: [
      <Link size={24} />,
      <Gauge size={24} />,
      <ShoppingCart size={24} />,
    ],
  },
  {
    title: "Estrategia Digital",
    description:
      "Diseñamos estrategias digitales personalizadas para maximizar tu presencia online.",
    details:
      "Desde SEO hasta campañas en redes sociales, impulsamos el crecimiento de tu marca.",
    cta: "Descubre cómo podemos posicionar tu negocio online.",
    icon: <Globe size={48} />,
    secondaryIcons: [
      <BarChart3 size={24} />,
      <Zap size={24} />,
      <Briefcase size={24} />,
    ],
  },
  {
    title: "Integración de API",
    description: "Conectamos sistemas y plataformas mediante APIs avanzadas.",
    details:
      "Integramos servicios de terceros para optimizar flujos de trabajo y mejorar la eficiencia.",
    cta: "Solicita una integración avanzada para tu negocio.",
    icon: <Link size={48} />,
    secondaryIcons: [
      <Layers size={24} />,
      <Cloud size={24} />,
      <Server size={24} />,
    ],
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Asesoramos empresas para implementar soluciones tecnológicas innovadoras.",
    details:
      "Descubre cómo optimizar tus recursos y procesos con tecnología avanzada.",
    cta: "Agenda una consultoría gratuita.",
    icon: <Briefcase size={48} />,
    secondaryIcons: [
      <Monitor size={24} />,
      <PieChart size={24} />,
      <Sparkles size={24} />,
    ],
  },
  {
    title: "E-commerce Personalizado",
    description:
      "Creamos tiendas online adaptadas a las necesidades de tu negocio.",
    details:
      "Soluciones escalables y optimizadas para maximizar tus ventas en línea.",
    cta: "¡Anímate y lleva tu tienda al siguiente nivel!",
    icon: <ShoppingCart size={48} />,
    secondaryIcons: [
      <Package size={24} />,
      <BarChart3 size={24} />,
      <CheckCircle size={24} />,
    ],
  },
  {
    title: "Optimización de Desempeño",
    description:
      "Mejoramos la velocidad y experiencia de tus sitios web y aplicaciones.",
    details:
      "Análisis técnico y optimización para un rendimiento superior en cualquier dispositivo.",
    cta: "Haz que tu sitio más rápido y eficiente.",
    icon: <Gauge size={48} />,
    secondaryIcons: [
      <Zap size={24} />,
      <Layers size={24} />,
      <BarChart3 size={24} />,
    ],
  },
  {
    title: "Desarrollo Backend",
    description:
      "Creamos sistemas robustos y escalables para manejar datos y operaciones.",
    details:
      "Desde APIs hasta bases de datos, optimizamos la lógica de servidor para tu negocio.",
    cta: "Optimiza el corazón de tu sistema.",
    icon: <Server size={48} />,
    secondaryIcons: [
      <Cloud size={24} />,
      <ShieldCheck size={24} />,
      <Package size={24} />,
    ],
  },
];

const ServiceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="py-16 h-auto relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff, #ffffff, #e1f0e7, #beb0fa, #ffffff, #ffffff)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-extrabold text-gray-800 mb-8"
        >
          ¿Qué ofrecemos?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={` ${
                expandedIndex !== index
                  ? "border-transparent"
                  : "border-indigo-600"
              } relative p-6 bg-white rounded-lg shadow-lg transition-all overflow-hidden border-2 duration-300`}
              style={{ height: "350px" }} // Altura fija
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }} // Activa al 20% del viewport
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {/* Logo Principal */}
              <motion.div
                className="flex items-center justify-center text-indigo-500 mb-4"
                whileHover={{ rotate: 15 }} // Rotación durante el hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>

              {/* Descripción Breve */}
              <p className="text-gray-500">{service.description}</p>

              {/* Logos Secundarios y Botón */}
              {expandedIndex !== index ? (
                <motion.div
                  className="flex flex-col items-center mt-4 space-y-4"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Logos Secundarios */}
                  <div className="flex space-x-4">
                    {service.secondaryIcons.map((icon, i) => (
                      <div key={i} className="text-indigo-400">
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Botón "Más Información" */}
                  <motion.button
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md text-sm font-medium hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setExpandedIndex(index)}
                  >
                    Más información
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col justify-start items-center mt-4 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Contenido Detallado */}
                  <motion.p
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.details}
                  </motion.p>

                  {/* CTA */}
                  <motion.a
                    href="#"
                    className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.cta}
                  </motion.a>

                  {/* Botón para Cerrar */}
                  <motion.button
                    onClick={() => setExpandedIndex(null)}
                    className="mt-4 text-indigo-500 hover:text-indigo-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Cerrar
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

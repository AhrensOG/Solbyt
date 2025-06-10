"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Code,
  BarChart2,
  Zap,
  Globe,
  Smartphone,
  FileSearch,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-solbyt-blue-500" />,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web profesionales, responsivos y optimizados para SEO que convierten visitantes en clientes.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-solbyt-pink-500" />,
    title: "Aplicaciones a Medida",
    description:
      "Desarrollamos aplicaciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
  },
  {
    icon: <Zap className="h-10 w-10 text-solbyt-purple-600" />,
    title: "Automatización",
    description:
      "Automatizamos procesos repetitivos para aumentar la productividad y reducir costos operativos.",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-solbyt-blue-500" />,
    title: "Análisis de Sistemas",
    description:
      "Evaluamos tus sistemas actuales para identificar oportunidades de mejora y optimización.",
  },
  {
    icon: <FileSearch className="h-10 w-10 text-solbyt-pink-500" />,
    title: "Asesoría Digital",
    description:
      "Te guiamos en el proceso de transformación digital con soluciones adaptadas a tu presupuesto.",
  },
  {
    icon: <Code className="h-10 w-10 text-solbyt-purple-600" />,
    title: "Desarrollo de Software",
    description:
      "Creamos software personalizado que impulsa la eficiencia y el crecimiento de tu empresa.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            Ofrecemos soluciones digitales completas para impulsar tu negocio al
            siguiente nivel
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-solbyt-purple-600 hover:text-solbyt-purple-600 hover:bg-purple-50 p-0">
                Saber más →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            ¿No estás seguro de qué servicio necesitas? Agenda una consulta
            gratuita y te ayudaremos a encontrar la solución perfecta para tu
            negocio.
          </p>
          <Link
            href="https://calendly.com/solbyt-tech/30min"
            target="_blank"
            className="border bg-solbyt-purple-600 hover:bg-solbyt-purple-600/90 text-white sm:text-lg font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-300">
            Consulta gratuita
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Phone, Mail, MailIcon } from "lucide-react";

const Hero: React.FC = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Reunión",
      description: "Agenda 30 min para analizar tu proyecto",
      action: "Agendar reunión",
      href: "https://calendly.com/solbyt-tech/30min",
      primary: true,
    },
    {
      icon: MailIcon,
      title: "Consulta rápida",
      description: "Envíanos tus dudas o consultas por email",
      action: "Escribir email",
      href: "mailto:info@solbyt.com",
      primary: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Habla directamente con nuestro equipo",
      action: "Llamar ahora",
      href: "tel:+351123456789",
      primary: false,
    },
  ];

  return (
    <section className="relative pt-28 pb-16 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-solbyt-purple-600/5 via-solbyt-pink-500/3 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Disponibles para nuevos proyectos
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Hablemos de tu próximo proyecto
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}>
            Transformamos ideas en soluciones digitales robustas. Cuéntanos tu
            desafío y diseñaremos la{" "}
            <span className="font-medium text-gray-900">
              estrategia tecnológica perfecta
            </span>{" "}
            para tu negocio.
          </motion.p>

          {/* Contact methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group block p-8 py-4 rounded-2xl border transition-all duration-300 ${
                  method.primary
                    ? "bg-gradient-to-br from-solbyt-purple-600 to-solbyt-pink-500 border-transparent text-white hover:shadow-lg hover:scale-105"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}>
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                    method.primary
                      ? "bg-white/20 group-hover:bg-white/30"
                      : "bg-gray-50 group-hover:bg-solbyt-purple-600/10"
                  }`}>
                  <method.icon
                    className={`w-7 h-7 transition-colors duration-300 ${
                      method.primary
                        ? "text-white"
                        : "text-gray-700 group-hover:text-solbyt-purple-600"
                    }`}
                  />
                </div>

                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    method.primary
                      ? "text-white"
                      : "text-gray-900 group-hover:text-solbyt-purple-600"
                  }`}>
                  {method.title}
                </h3>

                <p
                  className={`text-sm mb-6 transition-colors duration-300 ${
                    method.primary ? "text-white/90" : "text-gray-600"
                  }`}>
                  {method.description}
                </p>

                <div
                  className={`text-sm font-medium transition-colors duration-300 ${
                    method.primary ? "text-white" : "text-solbyt-purple-600"
                  }`}>
                  {method.action} →
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}>
            <p className="text-sm text-gray-500 mb-4">
              Respuesta garantizada en menos de 24 horas
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@solbyt.com
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +41 76 272 64 91
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

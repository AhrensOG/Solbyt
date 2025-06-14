"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Preguntas frecuentes
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            Resolvemos las dudas más comunes sobre el desarrollo de aplicaciones
            empresariales a medida
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-solbyt-purple-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-solbyt-purple-600/10 via-solbyt-pink-500/10 to-solbyt-blue-500/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <MessageCircle className="h-12 w-12 text-solbyt-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para una asesoría gratuita y
            conoce cómo podemos ayudarte a tener presencia online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-solbyt-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Agendar reunión
            </button>
            <button className="border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-500/10 px-6 py-2 rounded-lg font-medium transition-colors">
              Escribinos por whatsapp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

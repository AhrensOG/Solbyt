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
      question: "¿Cómo identifican qué procesos se pueden automatizar?",
      answer:
        "Realizamos una auditoría completa de tus operaciones actuales, identificando procesos repetitivos, que consumen mucho tiempo o son propensos a errores. Utilizamos una matriz de impacto vs. esfuerzo para priorizar qué automatizar primero. Nos enfocamos en procesos con reglas claras, alta frecuencia de ejecución y que no requieren toma de decisiones complejas. También consideramos el ROI potencial y la facilidad de implementación para maximizar el valor desde el inicio.",
    },
    {
      question: "¿La automatización afectará el trabajo de mi equipo?",
      answer:
        "La automatización está diseñada para liberar a tu equipo de tareas repetitivas y permitirles enfocarse en actividades de mayor valor estratégico. No reemplazamos personas, sino que optimizamos su tiempo para que puedan dedicarse a tareas que requieren creatividad, análisis y toma de decisiones. Incluimos capacitación completa para que tu equipo aprenda a trabajar con las nuevas herramientas y pueda aprovechar al máximo su potencial.",
    },
    {
      question:
        "¿Qué pasa si nuestros procesos cambian después de la automatización?",
      answer:
        "Diseñamos automatizaciones flexibles que pueden adaptarse a cambios en tus procesos. Incluimos documentación completa y herramientas de configuración que permiten ajustes sin necesidad de reprogramación completa. Además, ofrecemos soporte continuo para modificaciones y mejoras. Nuestro enfoque modular permite agregar, quitar o modificar pasos en los flujos automatizados según evolucionen tus necesidades de negocio.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse el retorno de la inversión?",
      answer:
        "El ROI típico se observa entre 2-6 meses, dependiendo de la complejidad de los procesos automatizados. Los ahorros más inmediatos provienen de la reducción de tiempo en tareas manuales y la eliminación de errores costosos. Proporcionamos métricas claras desde el inicio para medir el impacto: horas ahorradas, errores reducidos, y mejoras en velocidad de procesamiento. Muchos clientes recuperan su inversión en el primer trimestre solo con el ahorro en costos operativos.",
    },
    {
      question: "¿Pueden integrarse con nuestros sistemas actuales?",
      answer:
        "Sí, nos especializamos en integrar automatizaciones con sistemas existentes sin necesidad de cambiar tus herramientas actuales. Trabajamos con APIs, conectores nativos, y soluciones de middleware para conectar diferentes plataformas. Realizamos un análisis técnico previo para asegurar compatibilidad y diseñar la mejor estrategia de integración. Nuestro objetivo es que la automatización funcione de forma transparente con tu ecosistema tecnológico actual.",
    },
    {
      question:
        "¿Qué nivel de soporte técnico ofrecen después de la implementación?",
      answer:
        "Ofrecemos soporte técnico continuo que incluye monitoreo proactivo de los procesos automatizados, resolución de incidencias, actualizaciones de seguridad, y optimizaciones basadas en el uso real. Proporcionamos diferentes niveles de soporte: desde básico por email hasta premium con respuesta inmediata. También incluimos reportes mensuales de rendimiento, recomendaciones de mejora, y acceso a nuestro equipo técnico para consultas y nuevas automatizaciones.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500"
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

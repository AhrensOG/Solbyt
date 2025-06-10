"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-solbyt-purple-600/90 via-solbyt-pink-500/90 to-solbyt-blue-500/90 z-0"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse">
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            ¿Listo para transformar tu negocio con soluciones digitales?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            Agenda una reunión gratuita con nuestros expertos y descubre cómo
            podemos ayudarte a alcanzar tus objetivos.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}>
            <button className="bg-white text-solbyt-purple-600 hover:bg-gray-100 sm:text-lg font-medium px-6 py-3 rounded-lg shadow transition-colors duration-300">
              Agendar reunión gratuita
            </button>

            <button className="border border-white text-white hover:bg-white/10 sm:text-lg font-medium flex items-center px-6 py-3 rounded-lg shadow transition-colors duration-300">
              Ver nuestros proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          <motion.p
            className="mt-6 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}>
            Sin compromisos. Sin costos ocultos. Solo soluciones que funcionan.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

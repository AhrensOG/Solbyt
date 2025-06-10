import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

const HeroSecondaryText = () => {
  const companies = [
    {
      name: "helloflatmate",
      url: "https://helloflatmate.com/es",
    },
    {
      name: "ViajeSeguro",
      url: "https://viajeseguro.site",
    },
    {
      name: "CleanNet",
      url: "https://www.clean-net.ch/en",
    },
  ];
  return (
    <motion.div
      className="flex flex-col space-y-6 p-4 text-center md:text-left order-2 md:order-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div>
        <motion.span
          className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-solbyt-purple-600 text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}>
          Soluciones Digitales a Medida
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Transformamos tus ideas en soluciones digitales
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          Desarrollo de software, páginas web y aplicaciones a medida que
          impulsan el crecimiento de tu negocio con la mejor relación
          calidad-precio del mercado.
        </motion.p>
      </div>

      {/* Puntos clave */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}>
        {[
          "Asesoría en digitalización",
          "Automatización de procesos",
          "Desarrollo web profesional",
          "Aplicaciones a medida",
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-solbyt-purple-600" />
            <span className="text-sm md:text-base text-gray-700">{item}</span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}>
        <Link
          href="https://calendly.com/solbyt-tech/30min"
          target="_blank"
          className="flex items-center gap-2 bg-solbyt-purple-600 hover:bg-solbyt-purple-600/90 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-300">
          <Calendar className="h-5 w-5" />
          Agendar reunión gratuita
        </Link>

        <Link href="#contact">
          <button className="flex items-center gap-2 border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Solicitar presupuesto
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </motion.div>

      {/* Empresas */}
      <motion.div
        className="pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}>
        <p className="text-lg text-gray-500 mb-3">
          Empresas que confían en nosotros:
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {companies.map((company, index) => (
            <Link
              href={company.url}
              target="_blank"
              title={company.name}
              key={index}
              className="font-medium text-solbyt-purple-600 hover:text-solbyt-pink-500 duration-300">
              {company.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSecondaryText;

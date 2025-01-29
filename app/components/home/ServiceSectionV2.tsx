import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LinesBG from "./auxiliarComponents/Lines";

export default function ServiceSectionV2() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      className="h-screen bg-white relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-between pl-4 gap-4 md:pl-8">
        {/* Contenido de texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-4xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            About Our Products
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            Write a paragraph that talks about your company here. You can talk
            about your company's background, history, mission, vision, or
            philosophy. Anything that will introduce your brand's persona to
            your clients. This will help build a connection between you and
            them, that hopefully leads into a working relationship.
          </motion.p>
        </div>

        {/* Contenedor visual */}
        <div className="md:w-1/2 h-screen relative overflow-hidden">
          {/* Fondo con líneas verticales */}
          <motion.div
            className="w-full h-full absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8}}
          >
            <LinesBG color="#e79fc4" />
            <LinesBG color="#d06ef5" left="15" top="-20" />
            <LinesBG color="#ff66b5" left="10" top="-30" />
            <LinesBG color="#a76cf5" left="5" top="-10" />
          </motion.div>

          {/* Marco del móvil */}
          <motion.div
            className="w-full h-full flex justify-center items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-64 h-[500px] bg-black rounded-2xl mx-auto shadow-lg overflow-hidden z-10 relative">
              {/* Pantalla del móvil */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
                {/* Contenido dentro del móvil */}
                <motion.div
                  className="w-[97%] h-[90%] bg-white rounded-md overflow-hidden shadow-md relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <Image
                    src="/hero.webp"
                    alt="Project Preview"
                    fill
                    className="object-center"
                  />
                </motion.div>
              </div>

              {/* Barra inferior (botones del móvil) */}
              <div className="absolute bottom-2 w-full flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Gradiente superior */}
          <div
            className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"
            style={{ zIndex: 1 }}
          ></div>

          {/* Gradiente inferior */}
          <div
            className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"
            style={{ zIndex: 1 }}
          ></div>
        </div>
      </div>
    </motion.section>
  );
}

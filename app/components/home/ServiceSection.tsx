"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinesBG from "./auxiliarComponents/Lines";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import MobileFrame from "./auxiliarComponents/MobileFrame";
import TabletFrame from "./auxiliarComponents/TabletFrame";
import LaptopFrame from "./auxiliarComponents/LaptopFrame";
import Link from "next/link";

const ServiceSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      title: "E-commerce en Móvil",
      text: "Transforma la experiencia de compra en línea con una plataforma móvil optimizada. Nuestro diseño responsive garantiza una navegación intuitiva, maximizando la conversión y fidelizando a tus clientes a través de una experiencia de usuario excepcional.",
      image: "/services/ecommerce.webp",
    },
    {
      title: "ERP Integral",
      text: "Centraliza y optimiza todos los procesos de tu empresa con un sistema ERP a medida. Desde la gestión financiera hasta la cadena de suministro, nuestra solución te brinda una visión unificada y un control total, impulsando la eficiencia y el crecimiento de tu negocio.",
      image: "/services/erp.webp",
    },
    {
      title: "Panel de Administración Desktop",
      text: "Eleva la gestión de tu negocio con un panel de administración robusto y sofisticado. Diseñado para ofrecer análisis en tiempo real y control total, esta solución te permite tomar decisiones estratégicas de manera rápida y eficiente.",
      image: "/services/dashboard.webp",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  // Asociamos cada índice a un componente de dispositivo
  const DeviceFrames = [MobileFrame, TabletFrame, LaptopFrame];
  const CurrentFrame = DeviceFrames[currentIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      id="services"
      className="py-10 md:py-0 h-auto bg-white relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:pl-8">
        {/* Carousel de contenido de texto */}
        <div className="px-4 md:w-1/2 text-center md:text-left relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
            className="pb-10">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 mb-4">
              Soluciones que transforman tu futuro
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En Solbyt convertimos desafíos en oportunidades mediante software
              a medida, integrando tecnología de punta, estrategias innovadoras
              y un diseño excepcional. Descubre cómo impulsamos tu éxito
              digital.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.25 }}>
              <h3 className="text-xl font-extrabold text-gray-800 mb-4">
                {carouselItems[currentIndex].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {carouselItems[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 flex justify-center md:justify-center space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-purple-300 duration-300"
              aria-label="Anterior">
              <ChevronLeftIcon className="size-10 text-purple-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-purple-300 duration-300"
              aria-label="Siguiente">
              <ChevronRightIcon className="size-10 text-purple-600" />
            </button>
          </div>
          <div className="mt-10 w-full grid place-items-center">
            <Link href={"/#contact"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold uppercase">
                Descubre nuestras soluciones
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Contenedor visual */}
        <div className="w-full md:w-1/2 md:h-screen relative overflow-hidden grid place-items-center">
          {/* Fondo con líneas verticales */}
          <motion.div
            className="w-full h-full absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <LinesBG color="#e79fc4" />
            <LinesBG color="#d06ef5" left="15" top="-20" />
            <LinesBG color="#ff66b5" left="10" top="-30" />
            <LinesBG color="#a76cf5" left="5" top="-10" />
          </motion.div>

          {/* Dispositivo dinámico según el índice del carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="w-full relative z-10 py-10 md:py-0">
              <CurrentFrame imageSrc={carouselItems[currentIndex].image} />
            </motion.div>
          </AnimatePresence>

          {/* Gradiente superior */}
          <div
            className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"
            style={{ zIndex: 1 }}></div>

          {/* Gradiente inferior */}
          <div
            className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"
            style={{ zIndex: 1 }}></div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;

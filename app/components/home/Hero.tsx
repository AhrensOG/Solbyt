"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeroInitialText from "./auxiliarComponents/HeroInitialText";
import HeroSecondaryText from "./auxiliarComponents/HeroSecondaryText";

const Hero: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondary(true);
    }, 1500); // Espera 3 segundos antes de mostrar el texto secundario

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-white pb-20 md:pb-0 w-full flex justify-center items-center md:min-h-[calc(100vh-80px)] mt-[80px]">
      <div className="w-full h-full flex flex-col-reverse md:flex-row-reverse items-center justify-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-8 max-w-screen-xl">
        {/* Imagen */}
        <div className="hidden md:block sm:basis-[50%] md:basis-[40%]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-72 min-w-72 w-full max-w-[500px]">
            <Image
              src="/icon.svg"
              alt="Logo Solbyt"
              title="Solbyt"
              fill
              priority
              sizes="(max-width: 500px) 288px, 500px"
              className="overflow-visible object-cover"
            />
          </motion.div>
        </div>

        {/* Textos */}
        <div className="basis-[60%] sm:basis-[50%] md:basis-[60%] w-full flex flex-col items-center lg:items-start">
          <AnimatePresence mode="wait">
            {!showSecondary ? (
              <motion.div
                key="initial"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <HeroInitialText />
              </motion.div>
            ) : (
              <motion.div
                key="secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}>
                <HeroSecondaryText />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;

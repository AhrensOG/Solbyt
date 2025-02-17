"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-white pb-20 md:pb-0 w-full flex justify-center items-center h-[calc(100vh-80px)] mt-[80px]">
      <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-8 max-w-screen-xl">
        <div className="basis-[40%] sm:basis-[50%] md:basis-[40%]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-72 min-w-72 w-full max-w-[500px]"
          >
            <Image
              src="/hero.webp"
              alt="Fondo principal que destaca la innovación digital de ADev"
              title="Fondo principal - ADev"
              fill
              priority
              sizes="(max-width: 500px) 288px, 500px"
              className="overflow-visible object-cover"
            />
            <Image
              src="/hero-reverse.webp"
              alt="Fondo principal que destaca la innovación digital de ADev"
              title="Fondo principal - ADev"
              fill
              priority
              sizes="(max-width: 500px) 288px, 500px"
              className="overflow-visible object-cover"
            />
          </motion.div>
        </div>

        <div className="basis-[60%] sm:basis-[50%] md:basis-[60%] w-full text-center flex flex-col justify-center items-center gap-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DESARROLLO DE SOFTWARE
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            SOLUCIONES INNOVADORAS
          </motion.h2>
          <motion.p
            className="text-xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Llevamos tus ideas al siguiente nivel.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

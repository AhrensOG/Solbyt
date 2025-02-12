import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="pb-20 md:pb-0 w-full flex justify-center items-center h-[calc(100vh-79.99px)] mt-[79.99px]">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-8 max-w-screen-xl">
        <div className="basis-[60%] sm:basis-[50%] md:basis-[60%] w-full text-center flex flex-col justify-center items-center gap-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DESARROLLO DE SOFTWARE
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            SOLUCIONES INNOVADORAS
          </motion.h2>
          <motion.p
            className="text-xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Llevamos tus ideas al siguiente nivel.
          </motion.p>
        </div>

        <div className="basis-[40%] sm:basis-[50%] md:basis-[40%]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="relative h-56 w-72 md:w-full"
          >
            <Image
              src="/hero.webp"
              alt="Hero Background"
              fill
              className="overflow-visible object-cover"
            />
            <Image
              src="/hero.webp"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className="overflow-visible rotate-90"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

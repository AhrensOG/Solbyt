"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HeroInitialText = () => {
  const translation = useTranslations("home_page.hero.initial_text");

  return (
    <div className="basis-[60%] sm:basis-[50%] md:basis-[60%] w-full text-center flex flex-col justify-center items-center gap-4">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        {translation("title")}
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 via-solbyt-pink-500 to-purple-600"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}>
        {translation("subtitle")}
      </motion.h2>

      <motion.p
        className="text-xl font-semibold text-solbyt-gray-800 "
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        {translation("description")}
      </motion.p>
    </div>
  );
};

export default HeroInitialText;

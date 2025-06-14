"use client";

import { ArrowRight, Clock, CreditCard } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const Hero = () => {
  const translation = useTranslations("service_detail.desarrollo-web.hero");

  return (
    <section className="relative bg-gradient-to-b from-white via-solbyt-pink-50 to-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CONTENIDO IZQUIERDO */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-solbyt-purple-600/10 text-solbyt-purple-600 text-sm font-semibold tracking-wide">
              {translation("badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500">
              {translation("title")}
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
              {translation("subtitle")}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {translation("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-6 py-3 rounded-lg bg-solbyt-purple-600 hover:bg-purple-700 text-white text-sm font-semibold shadow transition">
                {translation("buttons.quote")}
              </button>
              <button className="px-6 py-3 rounded-lg border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-500/10 text-sm font-semibold transition flex items-center justify-center">
                {translation("buttons.examples")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-solbyt-purple-600" />
                <span>{translation("duration")}</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="h-4 w-4 text-solbyt-purple-600" />
                <span>{translation("price")}</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[440px] md:h-[440px] bg-gradient-to-r from-solbyt-purple-600/20 via-solbyt-pink-500/20 to-solbyt-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
              <Image
                src="/img_placeholder.webp"
                alt={translation("image.alt")}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-bold text-lg">{translation("image.tagline")}</p>
                  <p className="text-sm text-white/80">{translation("image.subtext")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ServicesHero: React.FC = () => {
  const translation = useTranslations("services_page.services_hero");

  const benefits = translation.raw("benefits") as {
    icon: string;
    title: string;
    description: string;
  }[];

  return (
    <section className="top-[77px] h-[calc(100vh-77px)] grid place-items-center bg-gradient-to-b from-white via-solbyt-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge + Título + Párrafo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-solbyt-purple-600 text-white mb-6">
              {translation("badge")}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 leading-tight">
              {translation("title")}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              {translation("description")}
            </p>
          </motion.div>

          {/* Beneficios */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Botones */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}>
            <Link
              href="https://calendly.com/solbyt-tech/30min"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-solbyt-purple-600 hover:bg-solbyt-purple-700 text-white font-medium px-6 py-3 rounded-lg transition">
              <Calendar className="h-5 w-5" />
              {translation("buttons.cta_1")}
            </Link>

            <button className="inline-flex items-center justify-center gap-2 border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-50 font-medium px-6 py-3 rounded-lg transition">
              {translation("buttons.cta_2")}
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

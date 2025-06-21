"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Code, Database, Shield, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap = {
  code: Code,
  database: Database,
  shield: Shield,
};

const ServicesHero: React.FC = () => {
  const translation = useTranslations("services_page.services_hero");

  const benefits = translation.raw("benefits") as {
    icon: keyof typeof iconMap;
    title: string;
    description: string;
  }[];

  const brands = translation.raw("trust.brands") as string[];

  return (
    <section className="relative top-[77px] min-h-[calc(100vh-77px)] py-10 pb-32 grid place-items-center bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-solbyt-purple-600/10 via-solbyt-pink-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header text */}
          <div className="text-center mb-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <div className="flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-solbyt-purple-600 mr-3 animate-pulse" />
                <span className="text-sm font-bold text-solbyt-purple-600">
                  {translation("badge")}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}>
              {translation("title")}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}>
              {translation("description")}
            </motion.p>
          </div>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 items-stretch"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}>
            {benefits.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    duration: 0.5,
                  }}>
                  <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-solbyt-purple-200">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-6 group-hover:from-solbyt-purple-600/10 group-hover:to-solbyt-pink-500/10 transition-all duration-300">
                      <Icon className="w-7 h-7 text-gray-700 group-hover:text-solbyt-purple-600 transition-colors duration-300" />
                    </div>

                    {/* Text */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-solbyt-purple-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}>
            {/* <Link
              href="https://calendly.com/solbyt-tech/30min"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-solbyt-purple-600 hover:bg-solbyt-purple-700 text-white font-medium px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
              <Calendar className="h-5 w-5" />
              {translation("buttons.cta_1")}
            </Link> */}

            {/* <button className="inline-flex items-center justify-center gap-3 border border-gray-200 text-gray-800 hover:border-solbyt-blue-500 hover:text-solbyt-blue-500 hover:bg-solbyt-blue-50 font-medium px-8 py-4 shadow-md hover:shadow-lg rounded-xl transition-all duration-200">
              {translation("buttons.cta_2")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button> */}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mb-16 mt-3 pt-3 border-t-2 border-gray-100 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}>
            <p className="text-sm text-gray-500 mb-6">
              {translation("trust.label")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {brands.map((company, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-solbyt-purple-600" />
                  <span className="text-gray-600 font-medium">{company}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

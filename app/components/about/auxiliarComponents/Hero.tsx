"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const translation = useTranslations("about_page.hero");

  const stats = [
    {
      icon: Lightbulb,
      value: translation("stats.0.value"),
      label: translation("stats.0.label"),
    },
    {
      icon: Users,
      value: translation("stats.1.value"),
      label: translation("stats.1.label"),
    },
    {
      icon: Zap,
      value: translation("stats.2.value"),
      label: translation("stats.2.label"),
    },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-solbyt-purple-600/5 via-solbyt-pink-500/3 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-solbyt-purple-600 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
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
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            dangerouslySetInnerHTML={{
              __html: translation.raw("description"),
            }}
          />

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-solbyt-purple-600 text-white font-medium rounded-xl hover:bg-solbyt-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group">
              {translation("cta_primary")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href={`#${translation("cta_secondary_link")}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-solbyt-blue-500 hover:text-solbyt-blue-500 hover:bg-solbyt-blue-500/5 transition-all duration-200">
              {translation("cta_secondary")}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4 mx-auto group-hover:from-solbyt-purple-600/10 group-hover:to-solbyt-pink-500/10 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-gray-700 group-hover:text-solbyt-purple-600 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-solbyt-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

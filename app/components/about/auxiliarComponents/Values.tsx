"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Heart, Compass, Code, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap = [Heart, Compass, Code, TrendingUp];

const Values: React.FC = () => {
  const translation = useTranslations("about_page.values");
  const items = translation.raw("items") as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500">
              {translation("title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translation("subtitle")}
            </p>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((value, index) => {
              const Icon = iconMap[index] ?? Heart;
              const gradients = [
                "from-solbyt-purple-600/10 to-solbyt-purple-600/5",
                "from-solbyt-pink-500/10 to-solbyt-pink-500/5",
                "from-solbyt-blue-500/10 to-solbyt-blue-500/5",
                "from-solbyt-purple-600/10 to-solbyt-blue-500/5",
              ];
              const iconColors = [
                "text-solbyt-purple-600",
                "text-solbyt-pink-500",
                "text-solbyt-blue-500",
                "text-solbyt-purple-600",
              ];

              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}>
                  <div
                    className={`bg-gradient-to-br ${gradients[index]} to-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full group-hover:scale-[1.02]`}>
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow duration-300">
                      <Icon className={`w-8 h-8 ${iconColors[index]}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-solbyt-purple-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-6">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-solbyt-purple-600 to-solbyt-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

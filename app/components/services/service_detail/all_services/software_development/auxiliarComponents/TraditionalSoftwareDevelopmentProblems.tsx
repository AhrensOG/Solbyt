"use client";

import React from "react";
import { Target, Layers, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const iconsMap = {
  Target: <Target className="h-8 w-8 text-red-500" />,
  Layers: <Layers className="h-8 w-8 text-orange-500" />,
  TrendingUp: <TrendingUp className="h-8 w-8 text-yellow-500" />,
};

const TraditionalSoftwareDevelopmentProblems = () => {
  const translation = useTranslations(
    "service_detail.desarrollo-software.traditional_software_development_problems"
  );

  const cards = translation.raw("cards") as {
    title: string;
    description: string;
    solution: string;
    gradient: string;
    icon: keyof typeof iconsMap;
    iconColor: string;
  }[];

  const cta = translation.raw("cta") as {
    title: string;
    description: string;
    button_label: string;
  };

  if (!cards || !cta) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map(({ title, description, solution, gradient, icon }, i) => (
            <motion.div
              key={i}
              className={`border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${gradient} to-white`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  {iconsMap[icon]}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{description}</p>
                <div className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-3 py-1 inline-block shadow-sm">
                  {translation("solution_prefix") || "Solución"}: {solution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-solbyt-purple-600/5 via-solbyt-blue-500/5 to-solbyt-pink-500/5 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-bold mb-4 text-gray-800">{cta.title}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {cta.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionalSoftwareDevelopmentProblems;

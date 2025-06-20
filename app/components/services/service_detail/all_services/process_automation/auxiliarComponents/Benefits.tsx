"use client";

import React from "react";
import { Target, TrendingUp, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const iconsMap = {
  TrendingUp: <TrendingUp className="h-8 w-8 text-solbyt-pink-500" />,
  Target: <Target className="h-8 w-8 text-solbyt-purple-600" />,
  Zap: <Zap className="h-8 w-8 text-solbyt-blue-500" />,
};

const Benefits = () => {
  const translation = useTranslations("service_detail.automatizacion.benefits");

  const cards = translation.raw("cards") as {
    stat: string;
    title: string;
    description: string;
    color: string;
    icon: keyof typeof iconsMap;
  }[];

  const cta = translation.raw("cta") as {
    question: string;
    text: string;
    button_label: string;
  };

  if (!cards || !cta) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título y descripción */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("description")}</p>
        </motion.div>

        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map(({ stat, title, description, color, icon }, i) => (
            <motion.div
              key={i}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-solbyt-${color}-50`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}>
              <div className="p-6 text-center">
                <div
                  className={`h-16 w-16 rounded-full bg-solbyt-${color}-500/10 flex items-center justify-center mx-auto mb-6`}>
                  {iconsMap[icon]}
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 text-solbyt-${color}-500`}>
                  {stat}
                </h3>
                <p className="text-lg font-medium mb-2">{title}</p>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-solbyt-pink-500/5 via-solbyt-purple-600/5 to-solbyt-blue-500/5 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-bold mb-4">{cta.question}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{cta.text}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

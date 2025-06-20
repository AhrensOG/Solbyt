"use client";

import React from "react";
import { AlertTriangle, Database, Shield, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const iconsMap = {
  AlertTriangle: <AlertTriangle className="h-8 w-8 text-red-500" />,
  TrendingUp: <TrendingUp className="h-8 w-8 text-orange-500" />,
  Shield: <Shield className="h-8 w-8 text-yellow-500" />,
  Database: <Database className="h-8 w-8 text-blue-500" />,
};

const ProblemsWeSolve = () => {
  const translation = useTranslations(
    "service_detail.analisis-sistemas.problems_we_solve"
  );

  const cards = translation.raw("cards") as {
    title: string;
    description: string;
    gradient: string;
    icon: keyof typeof iconsMap;
    iconColor: string;
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
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map(({ title, description, gradient, icon }, i) => (
            <motion.div
              key={i}
              className={`rounded-xl bg-gradient-to-br ${gradient} to-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  {iconsMap[icon]}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-solbyt-purple-600/5 via-solbyt-blue-500/5 to-solbyt-pink-500/5 rounded-xl p-8 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            {cta.question}
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">{cta.text}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;

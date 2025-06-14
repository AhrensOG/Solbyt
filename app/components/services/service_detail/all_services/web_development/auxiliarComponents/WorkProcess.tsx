"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WorkProcess = () => {
  const translation = useTranslations(
    "service_detail.desarrollo-web.work_process"
  );

  const steps = Array.from({ length: 6 }, (_, i) => ({
    number: `0${i + 1}`,
    title: translation(`steps.${i}.title`),
    description: translation(`steps.${i}.description`),
    color:
      i % 3 === 0
        ? "from-solbyt-purple-600 to-solbyt-pink-500"
        : i % 3 === 1
        ? "from-solbyt-pink-500 to-solbyt-blue-500"
        : "from-solbyt-blue-500 to-solbyt-purple-600",
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("paragraph")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0">
              <div className="flex items-start gap-6">
                <div
                  className={`flex-shrink-0 h-14 w-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-14 h-24 w-0.5 bg-gradient-to-b from-solbyt-purple-600/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

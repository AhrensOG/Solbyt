"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Code,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

const ProcessSection: React.FC = () => {
  const translation = useTranslations("services_page.process_section");

  const processSteps = [
    {
      step: 1,
      icon: <MessageSquare className="h-8 w-8" />,
      color: "solbyt-purple-600",
    },
    {
      step: 2,
      icon: <FileText className="h-8 w-8" />,
      color: "solbyt-pink-500",
    },
    {
      step: 3,
      icon: <Code className="h-8 w-8" />,
      color: "solbyt-blue-500",
    },
    {
      step: 4,
      icon: <Rocket className="h-8 w-8" />,
      color: "solbyt-purple-600",
    },
    {
      step: 5,
      icon: <HeadphonesIcon className="h-8 w-8" />,
      color: "solbyt-pink-500",
    },
  ].map((step) => ({
    ...step,
    title: translation(`steps.${step.step - 1}.title`),
    description: translation(`steps.${step.step - 1}.description`),
    duration: translation(`steps.${step.step - 1}.duration`),
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {translation("title")}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            {translation("subtitle")}
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gray-200">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`${
                index % 2 === 0
                  ? "md:ml-auto text-left md:justify-end md:flex-row-reverse"
                  : "md:mr-auto text-left md:justify-end"
              } relative flex flex-col md:flex-row items-center mb-10 gap-6`}>
              {/* Circle icon */}
              <div className="z-10 w-14 h-14 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-${step.color}`}>
                  {step.icon}
                </div>
              </div>

              {/* Card */}
              <div className="mt-8 md:mt-0 w-full md:w-[44.2%] p-6 bg-white border border-gray-100 rounded-xl shadow-md">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400 font-bold">
                    {translation("step_prefix")} {step.step}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-${step.color} bg-${step.color}/10 font-medium`}>
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-solbyt-purple-600/10 via-solbyt-pink-500/10 to-solbyt-blue-500/10 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {translation("bottom_cta.title")}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {translation("bottom_cta.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {translation
              .raw("bottom_cta.tags")
              .map((item: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  ✓ {item}
                </span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

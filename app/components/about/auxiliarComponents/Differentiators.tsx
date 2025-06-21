"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Users, Zap, Target, DollarSign, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap = [Users, Zap, Target, DollarSign];

const Differentiators: React.FC = () => {
  const translation = useTranslations("about_page.differentiators");
  const list = translation.raw("list") as {
    title: string;
    description: string;
  }[];
  const benefits = translation.raw("benefits") as string[];

  return (
    <section className="py-20">
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

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Differentiators */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              {list.map((item, index) => {
                const Icon = iconMap[index] ?? Users;

                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow duration-300">
                      <Icon className="w-6 h-6 text-solbyt-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-solbyt-purple-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right side - Value proposition */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {translation("why_title")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {translation("why_description.before_highlight")}
                  <strong className="text-gray-900">
                    {translation("why_description.highlight")}
                  </strong>
                  {translation("why_description.after_highlight")}
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-solbyt-purple-600/5 to-solbyt-blue-500/5 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-600 italic">
                  “{translation("quote.text")}”
                </p>
                <p className="text-sm font-medium text-gray-800 mt-2">
                  — {translation("quote.author")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

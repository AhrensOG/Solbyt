"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  faq_color_styles,
  SolbytColor,
} from "@/app/lib/styles/faq_color_styles";
import { useTranslations } from "next-intl";
import Link from "next/link";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  colorKey: SolbytColor;
  title: string;
  subtitle: string;
  items: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ colorKey, title, subtitle, items }) => {
  const translation = useTranslations("shared_components.faq.cta");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
              faq_color_styles[colorKey as SolbytColor].titleGradient
            }`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            {subtitle}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-solbyt-purple-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-solbyt-purple-600/10 via-solbyt-pink-500/10 to-solbyt-blue-500/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <MessageCircle className="h-12 w-12 text-solbyt-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {translation("ctaTitle")}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {translation("ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/solbyt-tech/30min"
              target="_blank"
              className="bg-solbyt-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              {translation("ctaPrimaryLabel")}
            </Link>
            <Link
              href="https://wa.me/41762726491"
              target="_blank"
              className="border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-500/10 px-6 py-2 rounded-lg font-medium transition-colors">
              {translation("ctaSecondaryLabel")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  CheckCircle,
  Rocket,
  Lock,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTA: React.FC = () => {
  const translation = useTranslations("about_page.cta");
  const benefits = translation.raw("benefits") as string[];

  return (
    <section className="py-20 bg-gradient-to-br from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {translation("title")}
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light">
              {translation("subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}>
                  <CheckCircle className="h-6 w-6 text-white mr-4 flex-shrink-0" />
                  <span className="opacity-90 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}>
              <Link
                href="https://calendly.com/solbyt-tech/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-solbyt-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl group">
                <Calendar className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                {translation("button_primary")}
              </Link>

              <Link
                href={translation("button_secondary_link")}
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 group">
                <MessageCircle className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                {translation("button_secondary")}
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}>
            <p className="text-sm opacity-80 mb-4">
              {translation("footer_note")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-70">
              <div className="flex gap-2 items-center">
                <Rocket />
                {translation("features.agile")}
              </div>
              <div className="flex gap-2 items-center">
                <Lock />
                {translation("features.secure")}
              </div>
              <div className="flex gap-2 items-center">
                <Globe />
                {translation("features.global")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

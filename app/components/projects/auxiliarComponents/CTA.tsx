"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTA: React.FC = () => {
  const translation = useTranslations("projects_page.cta");
  const brands = translation.raw("trustedBy.brands") as string[];
  const benefits = translation.raw("benefits") as string[];

  return (
    <section className="py-20 bg-gradient-to-br from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 relative overflow-hidden text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            {translation("title")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}>
            {translation("subtitle")}
          </motion.p>

          {/* Value propositions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <Link
              href="https://wa.me/41762726491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-solbyt-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl group">
              <MessageCircle className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              {translation("buttons.whatsapp")}
            </Link>

            <Link
              href="https://calendly.com/solbyt-tech/30min"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 group">
              <Calendar className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              {translation("buttons.calendar")}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            <p className="mb-4">{translation("trustedBy.label")}</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brands.map((brand, index) => (
                <span key={index} className="text-lg font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

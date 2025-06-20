"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTASection: React.FC = () => {
  const translation = useTranslations("home_page.cta");

  return (
    <section className="py-20 relative overflow-hidden grid place-items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-solbyt-purple-600/90 via-solbyt-pink-500/90 to-solbyt-blue-500/90 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {translation("title")}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            {translation("subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}>
            <Link
              href="https://calendly.com/solbyt-tech/30min"
              target="_blank"
              className="bg-white text-solbyt-purple-600 hover:bg-gray-100 sm:text-lg font-medium px-6 py-3 rounded-lg shadow transition-colors duration-300">
              {translation("button_primary")}
            </Link>

            <Link
              href="/projects"
              className="border border-white text-white hover:bg-white/10 sm:text-lg font-medium flex items-center px-6 py-3 rounded-lg shadow transition-colors duration-300">
              {translation("button_secondary")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.p
            className="mt-6 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}>
            {translation("footer_note")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

"use client";

import { CheckCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CTA = () => {
  const translation = useTranslations(
    "service_detail.desarrollo-web.cta_final"
  );
  const features = translation.raw("features") as string[];

  return (
    <section className="py-20 bg-gradient-to-br from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}>
            {translation("title")}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            {translation("subtitle")}
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              {features.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}>
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                  <span className="opacity-90">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}>
              <button className="bg-white text-solbyt-purple-600 hover:bg-white/90 px-6 py-2 rounded-lg font-medium transition-colors">
                {translation("buttons.quote")}
              </button>
              <button className="border border-white text-white hover:bg-white/20 px-6 py-2 rounded-lg font-medium transition-colors">
                {translation("buttons.meeting")}
              </button>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-sm opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}>
            {translation("disclaimer")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

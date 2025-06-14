"use client";

import { Search, Shield, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const CustomerValue = () => {
  const translation = useTranslations("service_detail.desarrollo-web.customer_value");

  const cards = [
    {
      icon: <Search className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("cards.0.title"),
      text: translation("cards.0.text"),
      bg: "bg-solbyt-purple-600/10",
    },
    {
      icon: <Shield className="h-6 w-6 text-solbyt-pink-500" />,
      title: translation("cards.1.title"),
      text: translation("cards.1.text"),
      bg: "bg-solbyt-pink-500/10",
    },
    {
      icon: <Zap className="h-6 w-6 text-solbyt-blue-500" />,
      title: translation("cards.2.title"),
      text: translation("cards.2.text"),
      bg: "bg-solbyt-blue-500/10",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600">{translation("paragraph")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-solbyt-pink-50 rounded-xl">
              <div className="p-6">
                <div
                  className={`h-12 w-12 rounded-lg ${card.bg} flex items-center justify-center mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerValue;

"use client";

import { Code, Search, Settings, Shield, Smartphone, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const ServiceFeatures = () => {
  const translation = useTranslations(
    "service_detail.desarrollo-web.service_features"
  );

  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.0.title"),
      description: translation("features.0.description"),
    },
    {
      icon: <Search className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.1.title"),
      description: translation("features.1.description"),
    },
    {
      icon: <Zap className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.2.title"),
      description: translation("features.2.description"),
    },
    {
      icon: <Settings className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.3.title"),
      description: translation("features.3.description"),
    },
    {
      icon: <Code className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.4.title"),
      description: translation("features.4.description"),
    },
    {
      icon: <Shield className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.5.title"),
      description: translation("features.5.description"),
    },
  ];

  return (
    <section className="py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-12 w-12 rounded-lg bg-solbyt-purple-600/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;

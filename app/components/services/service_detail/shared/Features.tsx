"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  features_color_styles,
  SolbytColor,
} from "@/app/lib/styles/features_color_styles";

type FeaturesProps = {
  items: {
    icon: JSX.Element;
    title: string;
    description: string;
    colorKey: string;
  }[];
  titleGradient: string;
  title: string;
  description: string;
};

const Features = ({
  items,
  titleGradient,
  title,
  description,
}: FeaturesProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título y descripción con animación */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
              features_color_styles[titleGradient as SolbytColor].titleGradient
            }`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}>
            {title}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            {description}
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all border border-gray-100 bg-gradient-to-br ${
                features_color_styles[feature.colorKey as SolbytColor].gradient
              } to-white group hover:scale-105`}>
              <div className="h-12 w-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
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

export default Features;

"use client";

import {
  cta_color_styles,
  SolbytColor,
} from "@/app/lib/styles/cta_color_styles";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Feature = string;

type Button = {
  label: string;
  href: string;
  variant?: "solid" | "outline";
  targetBlank: boolean;
};

type CTAProps = {
  colorKey: SolbytColor;
  title: string;
  description: string;
  features: Feature[];
  buttons: Button[];
  note?: string;
};

const CTA = ({
  colorKey,
  title,
  description,
  features,
  buttons,
  note,
}: CTAProps) => {
  const baseClasses =
    "font-semibold px-6 py-3 rounded-lg transition-colors duration-200";

  return (
    <section
      className={`py-20 bg-gradient-to-br ${
        cta_color_styles[colorKey as SolbytColor].bgGradient
      } text-white transition-colors`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}>
            {title}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}>
            {description}
          </motion.p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
              {features.map((feature, i) => (
                <motion.div
                  className="flex items-center"
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}>
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                  <span className="opacity-90">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
                hidden: {},
              }}>
              {buttons.map((btn, i) => {
                const solid =
                  cta_color_styles[colorKey as SolbytColor].buttons.primary;
                const outline =
                  "border border-white text-white hover:bg-white/10";
                const finalClass = btn.variant === "outline" ? outline : solid;

                return (
                  <motion.div
                    key={i}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0.8 },
                    }}
                    transition={{ duration: 0.3 }}>
                    <Link
                      href={btn.href}
                      target={btn.targetBlank ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`${baseClasses} ${finalClass}`}>
                      {btn.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {note && (
            <motion.p
              className="text-sm opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 1.5 }}>
              {note}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;

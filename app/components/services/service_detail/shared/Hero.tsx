"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  hero_color_styles,
  SolbytColor,
} from "@/app/lib/styles/hero_color_styles";

type HeroProps = {
  generalColor: string;
  badge: { text: string; color: string };
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant: "primary" | "outline";
    targetBlank?: boolean;
  }[];
  features: {
    icon: JSX.Element;
    text: string;
  }[];
  image: {
    src: string;
    alt: string;
    overlayTitle: string;
    overlaySubtitle: string;
  };
};

const Hero: React.FC<HeroProps> = ({
  generalColor,
  badge,
  title,
  subtitle,
  description,
  buttons,
  features,
  image,
}) => {
  return (
    <section
      className={`relative top-[77px] bg-gradient-to-b ${
        hero_color_styles[generalColor as SolbytColor].backgroundGradient
      } py-10 pb-28`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                hero_color_styles[badge.color as SolbytColor].badge
              }`}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}>
              {badge.text}
            </motion.div>

            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                hero_color_styles[generalColor as SolbytColor].titleGradient
              }`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}>
              {title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.6 }}>
              {subtitle}
            </motion.p>

            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.6 }}>
              {description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
                hidden: {},
              }}>
              {buttons.map((btn, index) => {
                const baseClasses =
                  "px-6 py-3 rounded-lg text-sm font-semibold transition flex items-center justify-center shadow";
                const solid =
                  hero_color_styles[generalColor as SolbytColor].buttons
                    .primary;
                const outline =
                  hero_color_styles[generalColor as SolbytColor].buttons
                    .outline;

                const finalClass = btn.variant === "outline" ? outline : solid;

                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}>
                    <Link
                      href={btn.href}
                      target={btn.targetBlank ? "_blank" : "_self"}
                      className={`${baseClasses} ${finalClass}`}
                      rel="noopener noreferrer">
                      {btn.label}
                      {btn.variant === "outline" && (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm text-gray-500 pt-4 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
                hidden: {},
              }}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}>
                  {f.icon}
                  <span className="ml-1">{f.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}>
            <div className="relative w-auto h-[420px] sm:h-[560px] md:h-[720px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-bold text-lg">{image.overlayTitle}</p>
                  <p className="text-sm text-white/80">
                    {image.overlaySubtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

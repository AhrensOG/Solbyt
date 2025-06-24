"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Code, Zap, Target, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const translation = useTranslations("projects_page.hero");
  const brands = translation.raw("trustedBy.brands") as string[];

  return (
    <section className="relative top-[77px] min-h-[calc(100vh-77px)] py-10 pb-32 bg-white overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-solbyt-purple-600/10 via-solbyt-pink-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-solbyt-purple-600 mr-3 animate-pulse" />
              <span className="text-sm font-bold text-solbyt-purple-600">
                {translation("badge")}
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            {translation("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}>
            {translation("subtitle")}
          </motion.p>

          {/* Value Propositions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {translation("valuePropositions.automation.title")}
              </h3>
              <p className="text-gray-600">
                {translation("valuePropositions.automation.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {translation("valuePropositions.growth.title")}
              </h3>
              <p className="text-gray-600">
                {translation("valuePropositions.growth.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {translation("valuePropositions.digitalPresence.title")}
              </h3>
              <p className="text-gray-600">
                {translation("valuePropositions.digitalPresence.description")}
              </p>
            </div>
          </motion.div>

          {/* Trusted Brands */}
          <motion.div
            className="mb-16 mt-3 pt-10 border-t-2 border-gray-100 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}>
            <p className="text-sm text-gray-500 mb-6">
              {translation("trustedBy.label")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {brands.map((company, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-solbyt-purple-600" />
                  <span className="text-gray-600 font-medium">{company}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

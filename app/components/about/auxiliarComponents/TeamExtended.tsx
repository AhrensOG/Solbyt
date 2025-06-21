"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Users, Code, Palette, BarChart3, Cog, Heart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const iconMap = [Code, Palette, BarChart3, Cog];

const TeamExtended: React.FC = () => {
  const translation = useTranslations("about_page.team_extended");
  const roles = translation.raw("roles") as {
    title: string;
    description: string;
    count: string;
  }[];

  const bullets = translation.raw("philosophy.bullets") as string[];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500">
              {translation("title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {translation("subtitle")}
            </p>
          </motion.div>

          {/* Team composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roles.map((role, index) => {
              const Icon = iconMap[index] ?? Users;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center h-full group-hover:scale-105">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-solbyt-purple-600/10 to-solbyt-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:from-solbyt-purple-600/20 group-hover:to-solbyt-pink-500/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-solbyt-purple-600" />
                    </div>
                    <div className="text-xl font-bold text-solbyt-purple-600 mb-2">
                      {role.count}
                    </div>
                    <h3 className="text-base font-medium text-gray-900 mb-3 group-hover:text-solbyt-purple-600 transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-600">{role.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Team philosophy */}
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-solbyt-purple-600/10 to-solbyt-pink-500/10 flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-solbyt-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {translation("philosophy.title")}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {translation("philosophy.description")}
                </p>

                <div className="space-y-4">
                  {bullets.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-solbyt-purple-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-solbyt-purple-600/5 to-solbyt-blue-500/5 rounded-2xl p-8 border border-gray-100 flex flex-col">
                  <div className="relative w-auto h-80">
                    <Image src="/img_placeholder.webp" alt="" fill />
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600 font-medium">
                      {translation("philosophy.image_caption_title")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {translation("philosophy.image_caption_subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamExtended;

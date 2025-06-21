"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";
import { useTranslations } from "next-intl";

const Story: React.FC = () => {
  const translation = useTranslations("about_page.story");

  return (
    <section id={translation("id")} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
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
            <div className="w-24 h-1 bg-gradient-to-r from-solbyt-purple-600 to-solbyt-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Story content */}
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="prose prose-lg max-w-none">
              {/* Paragraph 1 */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                {translation("paragraph_1.before_highlight")}
                <span className="font-semibold text-gray-900">
                  {translation("paragraph_1.highlight")}
                </span>
                {translation("paragraph_1.after_highlight")}
              </p>

              {/* Paragraph 2 */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {translation("paragraph_2")}
              </p>

              {/* Paragraph 3 */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {translation("paragraph_3.before_highlight")}
                <span className="font-medium text-gray-800">
                  {translation("paragraph_3.highlight")}
                </span>
                {translation("paragraph_3.after_highlight")}
              </p>

              {/* Paragraph 4 */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {translation("paragraph_4.before_highlight_1")}
                <strong className="font-medium text-gray-800">
                  {translation("paragraph_4.highlight_1")}
                </strong>
                {translation("paragraph_4.after_highlight_1")}
                <strong className="font-medium text-gray-800">
                  {translation("paragraph_4.highlight_2")}
                </strong>
                {translation("paragraph_4.after_highlight_2")}
              </p>
            </div>

            {/* Mission highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
              {[
                {
                  icon: Lightbulb,
                  title: translation("pillars.0.title"),
                  description: translation("pillars.0.description"),
                },
                {
                  icon: Rocket,
                  title: translation("pillars.1.title"),
                  description: translation("pillars.1.description"),
                },
                {
                  icon: Target,
                  title: translation("pillars.2.title"),
                  description: translation("pillars.2.description"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-solbyt-purple-600/10 to-solbyt-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:from-solbyt-purple-600/20 group-hover:to-solbyt-pink-500/20 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-solbyt-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;

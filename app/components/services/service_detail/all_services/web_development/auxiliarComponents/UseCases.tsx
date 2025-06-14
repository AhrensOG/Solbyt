"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const UseCases = () => {
  const translation = useTranslations(
    "service_detail.desarrollo-web.use_cases"
  );

  const [activeTab, setActiveTab] = useState<
    "landing" | "ecommerce" | "corporativo" | "blog"
  >("landing");

  const data = {
    title: translation("cases." + activeTab + ".title"),
    description: translation("cases." + activeTab + ".description"),
    items: translation.raw("cases." + activeTab + ".items") as string[],
    imageAlt: translation("cases." + activeTab + ".imageAlt"),
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500">
              {translation("title")}
            </span>
          </h2>
          <p className="text-lg text-gray-600">{translation("subtitle")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {(["landing", "ecommerce", "corporativo", "blog"] as const).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-3 rounded-lg text-center font-medium transition-all ${
                    activeTab === key
                      ? "bg-solbyt-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}>
                  {translation(`cases.${key}.title`)}
                </button>
              )
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold mb-4">
                    {data.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mb-6">
                    {data.description}
                  </motion.p>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="space-y-3">
                    {data.items.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-solbyt-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}>
                    <Image
                      src="/img_placeholder.webp"
                      alt={data.imageAlt}
                      width={500}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

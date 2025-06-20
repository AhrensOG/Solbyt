"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  SolbytColor,
  use_cases_color_styles,
} from "@/app/lib/styles/use_cases_color_styles";

export type UseCase = {
  key: string;
  title: string;
  description: string;
  features: string[];
  caseStudy: string;
  color: string;
  icon: React.ElementType;
  titleCaseStudy: string;
  img: string;
};

type UseCasesProps = {
  colorKey: SolbytColor;
  title: string;
  subtitle: string;
  cases: UseCase[];
  id: string;
};

const UseCases: React.FC<UseCasesProps> = ({
  colorKey,
  title,
  subtitle,
  cases,
  id,
}) => {
  const [selected, setSelected] = useState<string>(cases[0]?.key);
  const content = cases.find((c) => c.key === selected) ?? cases[0];
  const Icon = content.icon;

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
              use_cases_color_styles[colorKey as SolbytColor].titleGradient
            }`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}>
          {cases.map((useCase) => {
            const IconComp = useCase.icon;
            const isSelected = selected === useCase.key;

            return (
              <motion.button
                key={useCase.key}
                onClick={() => setSelected(useCase.key)}
                className={`py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border transition-colors ${
                  isSelected
                    ? "bg-solbyt-blue-500 text-white"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3 }}>
                <IconComp
                  className={`h-6 w-6 ${isSelected ? "text-white" : ""} ${
                    use_cases_color_styles[useCase.color as SolbytColor].icon
                  }`}
                />
                <span className="hidden sm:inline capitalize">
                  {useCase.key}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          key={content.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}>
                <div
                  className={`h-12 w-12 rounded-lg flex items-center justify-center mr-4 ${
                    use_cases_color_styles[content.color as SolbytColor].iconBg
                  }`}>
                  <Icon
                    className={`${
                      use_cases_color_styles[content.color as SolbytColor].icon
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold">{content.title}</h3>
              </motion.div>
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                {content.description}
              </motion.p>
              <div className="space-y-4 mb-6">
                {content.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}>
                    <CheckCircle
                      className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                        use_cases_color_styles[content.color as SolbytColor]
                          .icon
                      }`}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className={`rounded-lg p-4 mb-6 ${
                  use_cases_color_styles[content.color as SolbytColor]
                    .caseStudyBg
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}>
                <p className="text-sm text-gray-600">
                  <strong>{content.titleCaseStudy}:</strong> {content.caseStudy}
                </p>
              </motion.div>
            </div>

            <motion.div
              className={`${
                use_cases_color_styles[content.color as SolbytColor].caseStudyBg
              } flex items-center justify-center p-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              {content.img && (
                <Image
                  src={content.img}
                  alt={content.title}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;

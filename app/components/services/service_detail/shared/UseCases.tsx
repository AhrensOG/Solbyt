"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
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
};

const UseCases: React.FC<UseCasesProps> = ({
  colorKey,
  title,
  subtitle,
  cases,
}) => {
  const [selected, setSelected] = useState<string>(cases[0]?.key);
  const content = cases.find((c) => c.key === selected) ?? cases[0];
  const Icon = content.icon;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
              use_cases_color_styles[colorKey as SolbytColor].titleGradient
            }`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {cases.map((useCase) => {
            const IconComp = useCase.icon;
            const isSelected = selected === useCase.key;

            return (
              <button
                key={useCase.key}
                onClick={() => setSelected(useCase.key)}
                className={`py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border transition-colors ${
                  isSelected
                    ? "bg-solbyt-blue-500 text-white"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}>
                <IconComp
                  className={`h-6 w-6 ${isSelected ? "text-white" : ""} ${
                    use_cases_color_styles[useCase.color as SolbytColor].icon
                  }`}
                />
                <span className="hidden sm:inline capitalize">
                  {useCase.key}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-4">
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
              </div>
              <p className="text-gray-600 mb-6">{content.description}</p>
              <div className="space-y-4 mb-6">
                {content.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle
                      className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                        use_cases_color_styles[content.color as SolbytColor]
                          .icon
                      }`}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div
                className={`rounded-lg p-4 mb-6 ${
                  use_cases_color_styles[content.color as SolbytColor]
                    .caseStudyBg
                }`}>
                <p className="text-sm text-gray-600">
                  <strong>{content.titleCaseStudy}:</strong> {content.caseStudy}
                </p>
              </div>
            </div>

            <div
              className={`${
                use_cases_color_styles[content.color as SolbytColor].caseStudyBg
              } flex items-center justify-center p-6`}>
              {content.img && (
                <Image
                  src={content.img}
                  alt={content.title}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

import React from "react";
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
};

const Features = ({ items, titleGradient }: FeaturesProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
              features_color_styles[titleGradient as SolbytColor].titleGradient
            }`}>
            Nuestro proceso de diagnóstico integral
          </h2>
          <p className="text-lg text-gray-600">
            Realizamos una evaluación técnica exhaustiva que va más allá de los
            síntomas superficiales, identificando las causas raíz de los
            problemas y oportunidades de optimización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 bg-gradient-to-br ${
                features_color_styles[feature.colorKey as SolbytColor].gradient
              } to-white group hover:scale-105`}>
              <div className="h-12 w-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Zap,
  BarChart2,
  FileSearch,
  Code,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ServicesGrid: React.FC = () => {
  const translation = useTranslations("services_page.services_grid");

  const tArray = (baseKey: string, length: number) =>
    Array.from({ length }, (_, i) => translation(`${baseKey}.${i}`));

  const services = [
    {
      id: "desarrollo-web",
      icon: <Globe className="h-12 w-12 text-solbyt-blue-500" />,
      title: translation("services.desarrollo-web.title"),
      subtitle: translation("services.desarrollo-web.subtitle"),
      description: translation("services.desarrollo-web.description"),
      features: tArray("services.desarrollo-web.features", 6),
      examples: tArray("services.desarrollo-web.examples", 4),
      timeframe: translation("services.desarrollo-web.timeframe"),
      startingPrice: translation("services.desarrollo-web.startingPrice"),
      link: translation("services.desarrollo-web.link"),
    },
    {
      id: "analisis-sistemas",
      icon: <BarChart2 className="h-12 w-12 text-solbyt-blue-500" />,
      title: translation("services.analisis-sistemas.title"),
      subtitle: translation("services.analisis-sistemas.subtitle"),
      description: translation("services.analisis-sistemas.description"),
      features: tArray("services.analisis-sistemas.features", 6),
      examples: tArray("services.analisis-sistemas.examples", 4),
      timeframe: translation("services.analisis-sistemas.timeframe"),
      startingPrice: translation("services.analisis-sistemas.startingPrice"),
      link: translation("services.analisis-sistemas.link"),
    },
    {
      id: "asesoria-digital",
      icon: <FileSearch className="h-12 w-12 text-solbyt-pink-500" />,
      title: translation("services.asesoria-digital.title"),
      subtitle: translation("services.asesoria-digital.subtitle"),
      description: translation("services.asesoria-digital.description"),
      features: tArray("services.asesoria-digital.features", 6),
      examples: tArray("services.asesoria-digital.examples", 4),
      timeframe: translation("services.asesoria-digital.timeframe"),
      startingPrice: translation("services.asesoria-digital.startingPrice"),
      link: translation("services.asesoria-digital.link"),
    },
    {
      id: "automatizacion",
      icon: <Zap className="h-12 w-12 text-solbyt-purple-600" />,
      title: translation("services.automatizacion.title"),
      subtitle: translation("services.automatizacion.subtitle"),
      description: translation("services.automatizacion.description"),
      features: tArray("services.automatizacion.features", 6),
      examples: tArray("services.automatizacion.examples", 4),
      timeframe: translation("services.automatizacion.timeframe"),
      startingPrice: translation("services.automatizacion.startingPrice"),
      link: translation("services.automatizacion.link"),
    },
    {
      id: "aplicaciones-medida",
      icon: <Smartphone className="h-12 w-12 text-solbyt-pink-500" />,
      title: translation("services.aplicaciones-medida.title"),
      subtitle: translation("services.aplicaciones-medida.subtitle"),
      description: translation("services.aplicaciones-medida.description"),
      features: tArray("services.aplicaciones-medida.features", 6),
      examples: tArray("services.aplicaciones-medida.examples", 4),
      timeframe: translation("services.aplicaciones-medida.timeframe"),
      startingPrice: translation("services.aplicaciones-medida.startingPrice"),
      link: translation("services.aplicaciones-medida.link"),
    },
    {
      id: "desarrollo-software",
      icon: <Code className="h-12 w-12 text-solbyt-purple-600" />,
      title: translation("services.desarrollo-software.title"),
      subtitle: translation("services.desarrollo-software.subtitle"),
      description: translation("services.desarrollo-software.description"),
      features: tArray("services.desarrollo-software.features", 6),
      examples: tArray("services.desarrollo-software.examples", 4),
      timeframe: translation("services.desarrollo-software.timeframe"),
      startingPrice: translation("services.desarrollo-software.startingPrice"),
      link: translation("services.desarrollo-software.link"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-solbyt-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500">
            {translation("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translation("subtitle")}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="p-8">
                {/* header */}
                <div className="flex flex-col sm:flex-row gap-4 items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-solbyt-purple-600 text-sm font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right min-w-[100px]">
                    <p className="text-sm text-gray-500">{service.timeframe}</p>
                    <p className="text-base font-semibold text-solbyt-blue-500">
                      {service.startingPrice}
                    </p>
                  </div>
                </div>

                {/* description */}
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>

                {/* features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    {translation("sections.includes_title")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* examples */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    {translation("sections.examples_title")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-solbyt-pink-50 text-solbyt-purple-600">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link
                    href={service.link}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-solbyt-purple-600 hover:bg-solbyt-purple-700 text-white font-medium px-6 py-3 rounded-lg transition">
                    {translation("buttons.more_info")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {/* <button className="flex-1 inline-flex items-center justify-center gap-2 border border-solbyt-blue-500 text-solbyt-blue-500 hover:bg-solbyt-blue-50 font-medium px-6 py-3 rounded-lg transition">
                    {translation("buttons.more_info")}
                    <ArrowRight className="h-4 w-4" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-solbyt-purple-600/10 via-solbyt-pink-500/10 to-solbyt-blue-500/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {translation("bottom_cta.title")}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {translation("bottom_cta.description")}
          </p>
          <button className="flex-1 inline-flex items-center justify-center gap-2 bg-solbyt-purple-600 hover:bg-solbyt-purple-700 text-white font-medium px-6 py-3 rounded-lg transition">
            {translation("buttons.custom_project")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;

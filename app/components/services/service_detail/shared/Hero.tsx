import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
      className={`relative bg-gradient-to-b ${
        hero_color_styles[generalColor as SolbytColor].backgroundGradient
      } py-24 md:py-32`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                hero_color_styles[badge.color as SolbytColor].badge
              }`}>
              {badge.text}
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                hero_color_styles[generalColor as SolbytColor].titleGradient
              }`}>
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  href={btn.href}
                  target={btn.targetBlank ? "_blank" : "_self"}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition flex items-center justify-center shadow ${
                    btn.variant === "primary"
                      ? `${
                          hero_color_styles[generalColor as SolbytColor].buttons
                            .primary
                        }`
                      : `${
                          hero_color_styles[generalColor as SolbytColor].buttons
                            .outline
                        }`
                  }`}>
                  {btn.label}
                  {btn.variant === "outline" && (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 flex-wrap">
              {features.map((f, i) => (
                <div className="flex items-center" key={i}>
                  {f.icon}
                  <span className="ml-1">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

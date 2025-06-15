"use client";

import {
  cta_color_styles,
  SolbytColor,
} from "@/app/lib/styles/cta_color_styles";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

type Feature = string;

type Button = {
  label: string;
  href: string;
  variant?: "solid" | "outline";
  targetBlank: boolean;
};

type CTAProps = {
  colorKey: SolbytColor;
  title: string;
  description: string;
  features: Feature[];
  buttons: Button[];
  note?: string;
};

const CTA = ({
  colorKey,
  title,
  description,
  features,
  buttons,
  note,
}: CTAProps) => {
  return (
    <section
      className={`py-20 bg-gradient-to-br ${
        cta_color_styles[colorKey as SolbytColor].bgGradient
      } text-white transition-colors`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
              {features.map((feature, i) => (
                <div className="flex items-center" key={i}>
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                  <span className="opacity-90">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((btn, i) => {
                const baseClasses =
                  "font-semibold px-6 py-3 rounded-lg transition-colors duration-200";
                const solid =
                  cta_color_styles[colorKey as SolbytColor].buttons.primary;
                const outline =
                  "border border-white text-white hover:bg-white/10";

                const finalClass = btn.variant === "outline" ? outline : solid;

                return btn.href ? (
                  <Link
                    href={btn.href}
                    target={btn.targetBlank ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`${baseClasses} ${finalClass}`}
                    key={i}>
                    {btn.label}
                  </Link>
                ) : (
                  <Link
                    href={btn.href}
                    target={btn.targetBlank ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`${baseClasses} ${finalClass}`}
                    key={i}>
                    {btn.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {note && <p className="text-sm opacity-80">{note}</p>}
        </div>
      </div>
    </section>
  );
};

export default CTA;

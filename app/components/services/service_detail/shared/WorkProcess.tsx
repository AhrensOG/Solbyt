"use client";

import {
  SolbytColor,
  work_process_color_styles,
} from "@/app/lib/styles/work_process_color_styles";
import { Clock } from "lucide-react";
import React from "react";

export type Phase = {
  phase: string;
  title: string;
  description: string;
  duration: string;
  color: string;
  icon: React.ElementType;
  connectorIcon?: React.ElementType;
};

type WorkProcessProps = {
  colorKey: SolbytColor;
  title: string;
  subtitle: string;
  phases: Phase[];
};

const WorkProcess: React.FC<WorkProcessProps> = ({
  colorKey,
  title,
  subtitle,
  phases,
}) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${
              work_process_color_styles[colorKey as SolbytColor].titleGradient
            }`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="relative flex flex-col items-center lg:flex-row justify-center gap-12 lg:gap-8 lg:items-stretch">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const ConnectorIcon = phase.connectorIcon;
            return (
              <div
                key={index}
                className="relative bg-white max-w-xs w-full rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.03] text-center border">
                <div className="p-6 flex flex-col items-center">
                  <div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-r ${
                      work_process_color_styles[phase.color as SolbytColor]
                        .iconBg
                    } flex items-center justify-center mb-4 shadow-md`}>
                    {<Icon className="w-8 h-8 text-white" />}
                  </div>
                  <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-1">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 px-2">
                    {phase.description}
                  </p>
                  <div className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full flex items-center gap-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {phase.duration}
                  </div>
                </div>

                {ConnectorIcon && (
                  <div className="hidden lg:flex absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-10">
                    <ConnectorIcon className="w-7 h-7 text-solbyt-purple-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

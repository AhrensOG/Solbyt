"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Benefits from "./auxiliarComponents/Benefits";
import {
  Clock,
  CreditCard,
  BarChart3,
  Play,
  RefreshCw,
  Target,
  Users,
  Mail,
  Database,
  BarChart2,
  Link2,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import Hero from "../../shared/Hero";
import Features from "../../shared/Features";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";
import { useTranslations } from "next-intl";

const ProcessAutomation = () => {
  const translation = useTranslations("service_detail.automatizacion");

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-pink-500" />,
      colorKey: "pink",
      title: translation("features.items.0.title"),
      description: translation("features.items.0.description"),
    },
    {
      icon: <Target className="h-6 w-6 text-solbyt-purple-600" />,
      colorKey: "blue",
      title: translation("features.items.1.title"),
      description: translation("features.items.1.description"),
    },
    {
      icon: <Play className="h-6 w-6 text-solbyt-blue-500" />,
      colorKey: "purple",
      title: translation("features.items.2.title"),
      description: translation("features.items.2.description"),
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-solbyt-purple-600" />,
      colorKey: "purple",
      title: translation("features.items.3.title"),
      description: translation("features.items.3.description"),
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-blue-500" />,
      colorKey: "pink",
      title: translation("features.items.4.title"),
      description: translation("features.items.4.description"),
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-pink-500" />,
      colorKey: "blue",
      title: translation("features.items.5.title"),
      description: translation("features.items.5.description"),
    },
  ];

  const useCasesContent = [
    {
      key: translation("use_cases.cases.0.key"),
      title: translation("use_cases.cases.0.title"),
      description: translation("use_cases.cases.0.description"),
      features: [
        translation("use_cases.cases.0.features.0"),
        translation("use_cases.cases.0.features.1"),
        translation("use_cases.cases.0.features.2"),
        translation("use_cases.cases.0.features.3"),
        translation("use_cases.cases.0.features.4"),
        translation("use_cases.cases.0.features.5"),
      ],
      titleCaseStudy: translation("use_cases.cases.0.titleCaseStudy"),
      caseStudy: translation("use_cases.cases.0.caseStudy"),
      img: "/img_placeholder.webp",
      color: "pink",
      icon: Mail,
    },
    {
      key: translation("use_cases.cases.1.key"),
      title: translation("use_cases.cases.1.title"),
      description: translation("use_cases.cases.1.description"),
      features: [
        translation("use_cases.cases.1.features.0"),
        translation("use_cases.cases.1.features.1"),
        translation("use_cases.cases.1.features.2"),
        translation("use_cases.cases.1.features.3"),
        translation("use_cases.cases.1.features.4"),
        translation("use_cases.cases.1.features.5"),
      ],
      titleCaseStudy: translation("use_cases.cases.1.titleCaseStudy"),
      caseStudy: translation("use_cases.cases.1.caseStudy"),
      img: "/img_placeholder.webp",
      color: "purple",
      icon: Database,
    },
    {
      key: translation("use_cases.cases.2.key"),
      title: translation("use_cases.cases.2.title"),
      description: translation("use_cases.cases.2.description"),
      features: [
        translation("use_cases.cases.2.features.0"),
        translation("use_cases.cases.2.features.1"),
        translation("use_cases.cases.2.features.2"),
        translation("use_cases.cases.2.features.3"),
        translation("use_cases.cases.2.features.4"),
        translation("use_cases.cases.2.features.5"),
      ],
      titleCaseStudy: translation("use_cases.cases.2.titleCaseStudy"),
      caseStudy: translation("use_cases.cases.2.caseStudy"),
      img: "/img_placeholder.webp",
      color: "blue",
      icon: BarChart2,
    },
    {
      key: translation("use_cases.cases.3.key"),
      title: translation("use_cases.cases.3.title"),
      description: translation("use_cases.cases.3.description"),
      features: [
        translation("use_cases.cases.3.features.0"),
        translation("use_cases.cases.3.features.1"),
        translation("use_cases.cases.3.features.2"),
        translation("use_cases.cases.3.features.3"),
        translation("use_cases.cases.3.features.4"),
        translation("use_cases.cases.3.features.5"),
      ],
      titleCaseStudy: translation("use_cases.cases.3.titleCaseStudy"),
      caseStudy: translation("use_cases.cases.3.caseStudy"),
      img: "/img_placeholder.webp",
      color: "pink",
      icon: Link2,
    },
  ];

  const phases = [
    {
      phase: translation("work_process.phases.0.phase"),
      title: translation("work_process.phases.0.title"),
      description: translation("work_process.phases.0.description"),
      duration: translation("work_process.phases.0.duration"),
      color: "pink",
      icon: BarChart3,
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.1.phase"),
      title: translation("work_process.phases.1.title"),
      description: translation("work_process.phases.1.description"),
      duration: translation("work_process.phases.1.duration"),
      color: "blue",
      icon: Settings,
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.2.phase"),
      title: translation("work_process.phases.2.title"),
      description: translation("work_process.phases.2.description"),
      duration: translation("work_process.phases.2.duration"),
      color: "purple",
      icon: Play,
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.3.phase"),
      title: translation("work_process.phases.3.title"),
      description: translation("work_process.phases.3.description"),
      duration: translation("work_process.phases.3.duration"),
      color: "pink",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      question: translation("faq.items.0.question"),
      answer: translation("faq.items.0.answer"),
    },
    {
      question: translation("faq.items.1.question"),
      answer: translation("faq.items.1.answer"),
    },
    {
      question: translation("faq.items.2.question"),
      answer: translation("faq.items.2.answer"),
    },
    {
      question: translation("faq.items.3.question"),
      answer: translation("faq.items.3.answer"),
    },
    {
      question: translation("faq.items.4.question"),
      answer: translation("faq.items.4.answer"),
    },
    {
      question: translation("faq.items.5.question"),
      answer: translation("faq.items.5.answer"),
    },
  ];

  const cta_features = [
    translation("cta.features.0"),
    translation("cta.features.1"),
    translation("cta.features.2"),
    translation("cta.features.3"),
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero
          generalColor="pink"
          badge={{
            text: translation("hero.badge"),
            color: "pink",
          }}
          title={translation("hero.title")}
          subtitle={translation("hero.subtitle")}
          description={translation("hero.description")}
          buttons={[
            {
              label: translation("hero.button_primary"),
              href: "https://calendly.com/solbyt-tech/30min",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: translation("hero.button_secondary"),
              href: `#${translation("use_cases.id")}`,
              variant: "outline",
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-pink-500" />,
              text: translation("hero.feature_time"),
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-pink-500" />,
              text: translation("hero.feature_price"),
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: translation("hero.image_alt"),
            overlayTitle: translation("hero.image_overlay_title"),
            overlaySubtitle: translation("hero.image_overlay_subtitle"),
          }}
        />

        <Benefits />

        <Features
          items={features}
          title={translation("features.title")}
          description={translation("features.description")}
          titleGradient="pink"
        />

        <UseCases
          colorKey="pink"
          title={translation("use_cases.title")}
          subtitle={translation("use_cases.subtitle")}
          cases={useCasesContent}
          id={translation("use_cases.id")}
        />

        <WorkProcess
          colorKey="pink"
          title={translation("work_process.title")}
          subtitle={translation("work_process.subtitle")}
          phases={phases}
        />

        <FAQ
          title={translation("faq.title")}
          subtitle={translation("faq.subtitle")}
          items={faqs}
          colorKey="pink"
        />

        <CTA
          colorKey="pink"
          title={translation("cta.title")}
          description={translation("cta.description")}
          features={cta_features}
          buttons={[
            {
              label: translation("cta.buttons.primary"),
              href: "https://calendly.com/solbyt-tech/30min",
              targetBlank: true,
            },
          ]}
          note={translation("cta.note")}
        />
      </main>
      <Footer />
    </>
  );
};

export default ProcessAutomation;

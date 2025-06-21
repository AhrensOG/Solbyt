"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import Hero from "../../shared/Hero";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Clock,
  Cloud,
  Code,
  CreditCard,
  Layers,
  Puzzle,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import Features from "../../shared/Features";
import TraditionalSoftwareDevelopmentProblems from "./auxiliarComponents/TraditionalSoftwareDevelopmentProblems";
import { useTranslations } from "next-intl";

const SoftwareDevelopment = () => {
  const translation = useTranslations("service_detail.desarrollo-software");

  const useCasesContent = [
    {
      key: translation("use_cases.items.0.key"),
      title: translation("use_cases.items.0.title"),
      description: translation("use_cases.items.0.description"),
      features: [
        translation("use_cases.items.0.features.0"),
        translation("use_cases.items.0.features.1"),
        translation("use_cases.items.0.features.2"),
        translation("use_cases.items.0.features.3"),
        translation("use_cases.items.0.features.4"),
        translation("use_cases.items.0.features.5"),
      ],
      titleCaseStudy: translation("use_cases.items.0.titleCaseStudy"),
      caseStudy: translation("use_cases.items.0.caseStudy"),
      color: "purple",
      icon: Cloud,
      img: "/img_placeholder.webp",
    },
    {
      key: translation("use_cases.items.1.key"),
      title: translation("use_cases.items.1.title"),
      description: translation("use_cases.items.1.description"),
      features: [
        translation("use_cases.items.1.features.0"),
        translation("use_cases.items.1.features.1"),
        translation("use_cases.items.1.features.2"),
        translation("use_cases.items.1.features.3"),
        translation("use_cases.items.1.features.4"),
        translation("use_cases.items.1.features.5"),
      ],
      titleCaseStudy: translation("use_cases.items.1.titleCaseStudy"),
      caseStudy: translation("use_cases.items.1.caseStudy"),
      color: "blue",
      icon: Zap,
      img: "/img_placeholder.webp",
    },
    {
      key: translation("use_cases.items.2.key"),
      title: translation("use_cases.items.2.title"),
      description: translation("use_cases.items.2.description"),
      features: [
        translation("use_cases.items.2.features.0"),
        translation("use_cases.items.2.features.1"),
        translation("use_cases.items.2.features.2"),
        translation("use_cases.items.2.features.3"),
        translation("use_cases.items.2.features.4"),
        translation("use_cases.items.2.features.5"),
      ],
      titleCaseStudy: translation("use_cases.items.2.titleCaseStudy"),
      caseStudy: translation("use_cases.items.2.caseStudy"),
      color: "pink",
      icon: Settings,
      img: "/img_placeholder.webp",
    },
    {
      key: translation("use_cases.items.3.key"),
      title: translation("use_cases.items.3.title"),
      description: translation("use_cases.items.3.description"),
      features: [
        translation("use_cases.items.3.features.0"),
        translation("use_cases.items.3.features.1"),
        translation("use_cases.items.3.features.2"),
        translation("use_cases.items.3.features.3"),
        translation("use_cases.items.3.features.4"),
        translation("use_cases.items.3.features.5"),
      ],
      titleCaseStudy: translation("use_cases.items.3.titleCaseStudy"),
      caseStudy: translation("use_cases.items.3.caseStudy"),
      color: "purple",
      icon: TrendingUp,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: translation("work_process.phases.0.phase"),
      title: translation("work_process.phases.0.title"),
      description: translation("work_process.phases.0.description"),
      icon: Target,
      color: "purple",
      duration: translation("work_process.phases.0.duration"),
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.1.phase"),
      title: translation("work_process.phases.1.title"),
      description: translation("work_process.phases.1.description"),
      icon: Code,
      color: "blue",
      duration: translation("work_process.phases.1.duration"),
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.2.phase"),
      title: translation("work_process.phases.2.title"),
      description: translation("work_process.phases.2.description"),
      icon: Activity,
      color: "pink",
      duration: translation("work_process.phases.2.duration"),
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.3.phase"),
      title: translation("work_process.phases.3.title"),
      description: translation("work_process.phases.3.description"),
      icon: TrendingUp,
      color: "purple",
      duration: translation("work_process.phases.3.duration"),
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

  const features = [
    {
      icon: <Puzzle className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.items.0.title"),
      description: translation("features.items.0.description"),
      colorKey: "purple",
    },
    {
      icon: <Layers className="h-6 w-6 text-solbyt-blue-500" />,
      title: translation("features.items.1.title"),
      description: translation("features.items.1.description"),
      colorKey: "blue",
    },
    {
      icon: <Workflow className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.items.2.title"),
      description: translation("features.items.2.description"),
      colorKey: "purple",
    },
    {
      icon: <Shield className="h-6 w-6 text-solbyt-pink-500" />,
      title: translation("features.items.3.title"),
      description: translation("features.items.3.description"),
      colorKey: "pink",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.items.4.title"),
      description: translation("features.items.4.description"),
      colorKey: "purple",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-solbyt-blue-500" />,
      title: translation("features.items.5.title"),
      description: translation("features.items.5.description"),
      colorKey: "blue",
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
          generalColor="purple"
          badge={{
            text: translation("hero.badge.text"),
            color: "purple",
          }}
          title={translation("hero.title")}
          subtitle={translation("hero.subtitle")}
          description={translation("hero.description")}
          buttons={[
            {
              label: translation("hero.buttons.0.label"),
              href: "https://calendly.com/solbyt-tech/30min",
              variant: "primary",
              targetBlank: true,
            },
            {
              label: translation("hero.buttons.1.label"),
              href: `#${translation("use_cases.id")}`,
              variant: "outline",
            },
          ]}
          features={[
            {
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: translation("hero.features.0.text"),
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
              text: translation("hero.features.1.text"),
            },
          ]}
          image={{
            src: "/img_placeholder.webp",
            alt: translation("hero.image.alt"),
            overlayTitle: translation("hero.image.overlayTitle"),
            overlaySubtitle: translation("hero.image.overlaySubtitle"),
          }}
        />

        <TraditionalSoftwareDevelopmentProblems />

        <Features
          titleGradient="purple"
          title={translation("features.title")}
          description={translation("features.description")}
          items={features}
        />

        <UseCases
          colorKey="purple"
          title={translation("use_cases.title")}
          subtitle={translation("use_cases.subtitle")}
          cases={useCasesContent}
          id={translation("use_cases.id")}
        />

        <WorkProcess
          colorKey="purple"
          title={translation("work_process.title")}
          subtitle={translation("work_process.subtitle")}
          phases={phases}
        />

        <FAQ
          title={translation("faq.title")}
          subtitle={translation("faq.subtitle")}
          items={faqs}
          colorKey="purple"
        />

        <CTA
          colorKey="blue"
          title={translation("cta.title")}
          description={translation("cta.description")}
          features={cta_features}
          buttons={[
            {
              label: translation("cta.buttons.0.label"),
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

export default SoftwareDevelopment;

"use client";
import Footer from "@/app/components/public/footer/Footer";
import Navbar from "@/app/components/public/navbar/V2/NavBar";
import React from "react";
import {
  ActivityIcon,
  ArrowRight,
  Clock,
  CreditCard,
  Database,
  FileTextIcon,
  SearchIcon,
  SettingsIcon,
  Shield,
  TargetIcon,
} from "lucide-react";
import ProblemsWeSolve from "./auxiliarComponents/ProblemsWeSolve";
import {
  Activity,
  FileText,
  Search,
  Settings,
  Target,
  Users,
} from "lucide-react";
import Hero from "../../shared/Hero";
import Features from "../../shared/Features";
import UseCases from "../../shared/UseCases";
import WorkProcess from "../../shared/WorkProcess";
import FAQ from "../../shared/FAQ";
import CTA from "../../shared/CTA";
import { useTranslations } from "next-intl";

const SystemAnalysis = () => {
  const translation = useTranslations("service_detail.analisis-sistemas");

  const features = [
    {
      icon: <Search className="h-6 w-6 text-solbyt-purple-600" />,
      title: translation("features.items.0.title"),
      description: translation("features.items.0.description"),
      colorKey: "purple",
    },
    {
      icon: <Activity className="h-6 w-6 text-solbyt-blue-600" />,
      title: translation("features.items.1.title"),
      description: translation("features.items.1.description"),
      colorKey: "blue",
    },
    {
      icon: <Target className="h-6 w-6 text-solbyt-pink-500" />,
      title: translation("features.items.2.title"),
      description: translation("features.items.2.description"),
      colorKey: "pink",
    },
    {
      icon: <Settings className="h-6 w-6 text-solbyt-blue-500" />,
      title: translation("features.items.3.title"),
      description: translation("features.items.3.description"),
      colorKey: "blue",
    },
    {
      icon: <FileText className="h-6 w-6 text-solbyt-pink-500" />,
      title: translation("features.items.4.title"),
      description: translation("features.items.4.description"),
      colorKey: "pink",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-purple-500" />,
      title: translation("features.items.5.title"),
      description: translation("features.items.5.description"),
      colorKey: "purple",
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
      color: "blue",
      icon: SearchIcon,
      img: "/img_placeholder.webp",
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
      color: "purple",
      icon: Database,
      img: "/img_placeholder.webp",
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
      color: "pink",
      icon: Shield,
      img: "/img_placeholder.webp",
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
      color: "blue",
      icon: SettingsIcon,
      img: "/img_placeholder.webp",
    },
  ];

  const phases = [
    {
      phase: translation("work_process.phases.0.phase"),
      title: translation("work_process.phases.0.title"),
      description: translation("work_process.phases.0.description"),
      duration: translation("work_process.phases.0.duration"),
      color: "blue",
      icon: FileTextIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.1.phase"),
      title: translation("work_process.phases.1.title"),
      description: translation("work_process.phases.1.description"),
      duration: translation("work_process.phases.1.duration"),
      color: "purple",
      icon: SearchIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.2.phase"),
      title: translation("work_process.phases.2.title"),
      description: translation("work_process.phases.2.description"),
      duration: translation("work_process.phases.2.duration"),
      color: "pink",
      icon: ActivityIcon,
      connectorIcon: ArrowRight,
    },
    {
      phase: translation("work_process.phases.3.phase"),
      title: translation("work_process.phases.3.title"),
      description: translation("work_process.phases.3.description"),
      duration: translation("work_process.phases.3.duration"),
      color: "blue",
      icon: TargetIcon,
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

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col min-h-screen">
        <Hero
          generalColor="purple"
          badge={{
            text: translation("hero.badge"),
            color: "purple",
          }}
          title={translation("hero.title")}
          subtitle={translation("hero.subtitle")}
          description={translation("hero.description")}
          buttons={[
            {
              label: translation("hero.button_primary"),
              href: "/contacto",
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
              icon: <Clock className="h-4 w-4 text-solbyt-blue-500" />,
              text: translation("hero.feature_time"),
            },
            {
              icon: <CreditCard className="h-4 w-4 text-solbyt-blue-500" />,
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

        <ProblemsWeSolve />

        <Features
          items={features}
          title={translation("features.title")}
          description={translation("features.description")}
          titleGradient="purple"
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
          colorKey="purple"
          title={translation("cta.title")}
          description={translation("cta.description")}
          features={[
            translation("cta.features.0"),
            translation("cta.features.1"),
            translation("cta.features.2"),
            translation("cta.features.3"),
          ]}
          buttons={[
            {
              label: translation("cta.buttons.0.label"),
              href: "/contacto",
              targetBlank: true,
            }
          ]}
          note={translation("cta.note")}
        />
      </main>
      <Footer />
    </>
  );
};

export default SystemAnalysis;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FeaturedProjects: React.FC = () => {
  const translation = useTranslations("projects_page.featuredProjects");

  const projects = [
    {
      id: "helloflatmate",
      name: translation("projects.helloflatmate.name"),
      tagline: translation("projects.helloflatmate.tagline"),
      description: translation("projects.helloflatmate.description"),
      challenge: translation("projects.helloflatmate.challenge"),
      solution: translation("projects.helloflatmate.solution"),
      beforeAfter: {
        before: translation("projects.helloflatmate.before"),
        after: translation("projects.helloflatmate.after"),
        impact: translation("projects.helloflatmate.impact"),
      },
      technologies: translation.raw(
        "projects.helloflatmate.technologies"
      ) as string[],
      image: "/projects/hfm.png",
      image_mobile: "/projects/hfm_mobile.png",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      keyFeatures: translation.raw(
        "projects.helloflatmate.keyFeatures"
      ) as string[],
    },
    {
      id: "viajeseguro",
      name: translation("projects.viajeseguro.name"),
      tagline: translation("projects.viajeseguro.tagline"),
      description: translation("projects.viajeseguro.description"),
      challenge: translation("projects.viajeseguro.challenge"),
      solution: translation("projects.viajeseguro.solution"),
      beforeAfter: {
        before: translation("projects.viajeseguro.before"),
        after: translation("projects.viajeseguro.after"),
        impact: translation("projects.viajeseguro.impact"),
      },
      technologies: translation.raw(
        "projects.viajeseguro.technologies"
      ) as string[],
      image: "/projects/vs.png",
      image_mobile: "/projects/vs_mobile.png",
      icon: MapPin,
      gradient: "from-green-500 to-emerald-500",
      keyFeatures: translation.raw(
        "projects.viajeseguro.keyFeatures"
      ) as string[],
    },
    {
      id: "cleannet",
      name: translation("projects.cleannet.name"),
      tagline: translation("projects.cleannet.tagline"),
      description: translation("projects.cleannet.description"),
      challenge: translation("projects.cleannet.challenge"),
      solution: translation("projects.cleannet.solution"),
      beforeAfter: {
        before: translation("projects.cleannet.before"),
        after: translation("projects.cleannet.after"),
        impact: translation("projects.cleannet.impact"),
      },
      technologies: translation.raw(
        "projects.cleannet.technologies"
      ) as string[],
      image: "/projects/cleannet.png",
      image_mobile: "/projects/cleannet_mobile.png",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      keyFeatures: translation.raw("projects.cleannet.keyFeatures") as string[],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            {translation("sectionTitle")}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            {translation("sectionSubtitle")}
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}>
              {/* Project image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}>
                <div className="relative h-[550px] rounded-md overflow-hidden shadow-2xl">
                  <div className={`absolute inset-0 bg-black/20 z-10`} />

                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top hidden sm:block"
                  />

                  <Image
                    src={project.image_mobile}
                    alt={project.name}
                    fill
                    className="object-cover object-top sm:hidden"
                  />

                  {/* Icon overlay */}
                  <div className="absolute z-20 top-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Key features overlay */}
                  <div className="absolute z-20 bottom-6 left-6 right-6">
                    <div className="bg-black/20 backdrop-blur-md rounded-xl p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-white text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}>
                <div>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} mr-3`}
                    />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {project.tagline}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    {translation("transformation.title")}
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-red-600">
                        {translation("transformation.before")}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {project.beforeAfter.before}
                      </p>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-blue-600">
                        {translation("transformation.after")}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {project.beforeAfter.after}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-sm font-medium text-green-600">
                        {translation("transformation.impact")}
                      </span>
                      <p className="text-sm text-gray-800 mt-1 font-medium">
                        {project.beforeAfter.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {translation("technologiesTitle")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom value proposition */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                {translation("bottomCTA.title")}
              </h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {translation("bottomCTA.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {["automation", "growth", "digital"].map((pillar) => (
                <div key={pillar} className="p-4">
                  <div
                    className={`text-2xl font-bold mb-2 text-${
                      pillar === "automation"
                        ? "blue"
                        : pillar === "growth"
                        ? "green"
                        : "purple"
                    }-600`}>
                    {translation(`bottomCTA.pillars.${pillar}.title`)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {translation(`bottomCTA.pillars.${pillar}.description`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

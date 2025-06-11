"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProjectsSection: React.FC = () => {
  const translation = useTranslations("home_page.projects");

  const projects = [
    {
      title: translation("items.0.title"),
      description: translation("items.0.description"),
      image: "/img_placeholder.webp",
      tags: translation.raw("items.0.tags") as string[],
    },
    {
      title: translation("items.1.title"),
      description: translation("items.1.description"),
      image: "/img_placeholder.webp",
      tags: translation.raw("items.1.tags") as string[],
    },
    {
      title: translation("items.2.title"),
      description: translation("items.2.description"),
      image: "/img_placeholder.webp",
      tags: translation.raw("items.2.tags") as string[],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {translation("title")}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            {translation("description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  title={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-solbyt-purple-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-solbyt-blue-500 hover:text-solbyt-blue-500 hover:bg-blue-50 p-0 flex items-center">
                  {translation("button")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <p className="text-lg text-gray-700 mb-6">
            {translation("call_to_action")}
          </p>
          <Link
            href="https://calendly.com/solbyt-tech/30min"
            target="_blank"
            className="bg-solbyt-blue-500 hover:bg-blue-600 text-white sm:text-lg font-medium px-6 py-3 rounded-lg shadow transition-colors duration-300">
            {translation("call_to_action_button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

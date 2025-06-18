"use client";
import { Target, TrendingUp, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const BenefitCard = ({ icon, stat, title, description, color, delay }: {  icon: React.ReactNode;   stat: string;   title: string;   description: string;   color: string;   delay: number; }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-solbyt-${color}-50`}>
    <div className="p-6 text-center">
      <div
        className={`h-16 w-16 rounded-full bg-solbyt-${color}-500/10 flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold mb-2 text-solbyt-${color}-500`}>
        {stat}
      </h3>
      <p className="text-lg font-medium mb-2">{title}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-solbyt-pink-500" />,
      stat: "75%",
      title: "Menos tiempo perdido",
      description:
        "Automatizá tareas repetitivas y liberá tiempo para lo que más importa.",
      color: "pink",
    },
    {
      icon: <Target className="h-8 w-8 text-solbyt-purple-600" />,
      stat: "90%",
      title: "Reducción de errores",
      description:
        "Eliminá errores humanos en procesos clave con flujos automatizados.",
      color: "purple",
    },
    {
      icon: <Zap className="h-8 w-8 text-solbyt-blue-500" />,
      stat: "24/7",
      title: "Operación continua",
      description:
        "Procesos que funcionan todo el día, todos los días, sin supervisión.",
      color: "blue",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500">
            Automatizá lo repetitivo. Enfocate en lo importante.
          </h2>
          <p className="text-lg text-gray-600">
            Tu equipo merece más que perder tiempo en tareas mecánicas. La
            automatización libera su potencial estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} delay={i * 0.2} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-solbyt-pink-500/5 via-solbyt-purple-600/5 to-solbyt-blue-500/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            ¿Cuánto tiempo puede ahorrar tu equipo?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Si dedican 2 horas diarias a tareas repetitivas, podrías liberar más
            de <span className="font-semibold">500 horas al año</span> para
            actividades de alto impacto.
          </p>
          <button className="px-6 py-3 rounded-lg text-sm font-semibold bg-solbyt-pink-500 hover:bg-solbyt-pink-600 text-white transition-colors">
            Calcular mi ahorro potencial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

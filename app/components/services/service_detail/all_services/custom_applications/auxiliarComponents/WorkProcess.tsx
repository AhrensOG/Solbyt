import { ArrowRight, Cog, Layers, Target, Zap } from "lucide-react";
import React from "react";

const WorkProcess = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Análisis y planificación",
      description:
        "Mapeo completo de procesos actuales, identificación de puntos críticos y definición de módulos prioritarios.",
      color: "from-solbyt-blue-500 to-solbyt-blue-700",
      duration: "1-2 semanas",
      icon: <Target className="w-8 h-8 text-white" />,
    },
    {
      phase: "Fase 2",
      title: "Diseño de arquitectura",
      description:
        "Creación de wireframes, definición de base de datos y diseño de interfaces centradas en la usabilidad.",
      color: "from-solbyt-purple-600 to-solbyt-purple-700",
      duration: "1-2 semanas",
      icon: <Layers className="w-8 h-8 text-white" />,
    },
    {
      phase: "Fase 3",
      title: "Desarrollo del MVP",
      description:
        "Implementación del módulo principal con funcionalidades core para validar la solución en el entorno real.",
      color: "from-solbyt-pink-500 to-solbyt-pink-700",
      duration: "2-4 semanas",
      icon: <Cog className="w-8 h-8 text-white" />,
    },
    {
      phase: "Fase 4",
      title: "Escalado modular",
      description:
        "Expansión gradual con nuevos módulos basados en feedback real y necesidades emergentes del negocio.",
      color: "from-solbyt-blue-500 to-solbyt-purple-600",
      duration: "Continuo",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-purple-600">
            Metodología por fases escalables
          </h2>
          <p className="text-lg text-gray-600">
            Desarrollamos tu aplicación por módulos, permitiendo validar
            resultados e invertir de forma inteligente en cada etapa del
            crecimiento.
          </p>
        </div>

        <div className="relative flex flex-col items-center lg:flex-row justify-center gap-12 lg:gap-8 lg:items-stretch">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative bg-white max-w-xs w-full rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.03] text-center border">
              <div className="p-6 flex flex-col items-center">
                <div
                  className={`h-16 w-16 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4 shadow-md`}>
                  {phase.icon}
                  {/* <div className="h-8 w-8 bg-white rounded-full" /> */}
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
                  <div className="h-2.5 w-2.5 bg-gray-500 rounded-full" />
                  {phase.duration}
                </div>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden lg:flex absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-7 h-7 text-solbyt-purple-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

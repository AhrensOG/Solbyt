import {
  ArrowRight,
  BarChart3,
  Clock,
  Play,
  Settings,
  TrendingUp,
} from "lucide-react";
import React from "react";

const WorkProcess = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500">
            Implementación sin interrupciones
          </h2>
          <p className="text-lg text-gray-600">
            Nuestro proceso garantiza una transición suave hacia la
            automatización, manteniendo la continuidad operativa en todo
            momento.
          </p>
        </div>

        <div className="relative flex flex-col items-center lg:flex-row justify-center gap-12 lg:gap-8 lg:items-stretch">
          {[
            {
              step: "01",
              title: "Auditoría de procesos",
              description:
                "Análisis detallado de tus flujos actuales, identificación de cuellos de botella y oportunidades de automatización.",
              icon: <BarChart3 className="h-6 w-6 text-white" />,
              color: "from-solbyt-pink-500 to-solbyt-pink-600",
              duration: "3-5 días",
            },
            {
              step: "02",
              title: "Diseño de automatización",
              description:
                "Creación del plan de automatización priorizado por impacto, con especificaciones técnicas detalladas.",
              icon: <Settings className="h-6 w-6 text-white" />,
              color: "from-solbyt-purple-600 to-solbyt-purple-700",
              duration: "1 semana",
            },
            {
              step: "03",
              title: "Implementación gradual",
              description:
                "Desarrollo e implementación por fases, comenzando por procesos de menor riesgo para validar resultados.",
              icon: <Play className="h-6 w-6 text-white" />,
              color: "from-solbyt-blue-500 to-solbyt-blue-700",
              duration: "2-4 semanas",
            },
            {
              step: "04",
              title: "Monitoreo y optimización",
              description:
                "Seguimiento continuo del rendimiento, ajustes basados en datos reales y expansión a nuevos procesos.",
              icon: <TrendingUp className="h-6 w-6 text-white" />,
              color: "from-solbyt-pink-500 to-solbyt-purple-600",
              duration: "Continuo",
            },
          ].map((phase, index) => (
            <div
              key={index}
              className="relative bg-white max-w-xs w-full rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.03] text-center border">
              <div className="border-none shadow-lg hover:shadow-xl transition-all h-full">
                <div className="p-6 flex flex-col items-center">
                  <div
                    className={`h-16 w-16 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4 shadow-md`}>
                    {phase.icon}
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-1">
                      Paso {phase.step}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm px-2">
                      {phase.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      <Clock className="h-3 w-3 mr-1" />
                      {phase.duration}
                    </div>
                  </div>
                </div>
              </div>
              {index < 3 && (
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

import { BarChart3, Play, RefreshCw, Target, Users } from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Análisis de procesos manuales actuales",
      description:
        "Mapeo detallado de tus flujos de trabajo actuales, identificando cuellos de botella y oportunidades de mejora.",
      gradient: "from-solbyt-pink-500/10 to-solbyt-pink-500/5",
    },
    {
      icon: <Target className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Priorización según impacto y urgencia",
      description:
        "Clasificamos procesos por ROI potencial y facilidad de implementación para maximizar resultados inmediatos.",
      gradient: "from-solbyt-purple-600/10 to-solbyt-purple-600/5",
    },
    {
      icon: <Play className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Automatización sin detener operaciones",
      description:
        "Implementación gradual que permite mantener la continuidad del negocio durante todo el proceso de transición.",
      gradient: "from-solbyt-blue-500/10 to-solbyt-blue-500/5",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-solbyt-purple-600" />,
      title: "Integración con tus sistemas existentes",
      description:
        "Conectamos la automatización con tus herramientas actuales sin necesidad de cambiar plataformas.",
      gradient: "from-solbyt-purple-600/10 to-solbyt-purple-600/5",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-solbyt-blue-500" />,
      title: "Panel con métricas de eficiencia",
      description:
        "Dashboard en tiempo real que muestra el impacto de la automatización en productividad y ahorro de costos.",
      gradient: "from-solbyt-blue-500/10 to-solbyt-blue-500/5",
    },
    {
      icon: <Users className="h-6 w-6 text-solbyt-pink-500" />,
      title: "Capacitación y soporte técnico",
      description:
        "Formación completa para tu equipo y soporte continuo para asegurar el máximo aprovechamiento de la automatización.",
      gradient: "from-solbyt-pink-500/10 to-solbyt-pink-500/5",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500">
            Nuestro enfoque paso a paso
          </h2>
          <p className="text-lg text-gray-600">
            Implementamos automatización de forma gradual y estratégica,
            priorizando procesos con mayor impacto y asegurando una transición
            sin interrupciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 bg-gradient-to-br ${feature.gradient} to-white group hover:scale-105`}>
              <div className="h-12 w-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Cog, Database, Layers, Puzzle, Shield, Workflow } from "lucide-react";
import React from "react";

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* TÍTULO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-pink-500 to-solbyt-blue-500">
            Software que evoluciona con tu empresa
          </h2>
          <p className="text-lg text-gray-600">
            Nuestras aplicaciones a medida están diseñadas para adaptarse a tus
            procesos únicos y crecer junto con tu negocio, optimizando cada
            operación desde el primer día.
          </p>
        </div>

        {/* TARJETAS DE BENEFICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Workflow className="h-8 w-8 text-solbyt-blue-500" />,
              title: "Arquitectura adaptada a tus procesos",
              description:
                "Diseñamos la estructura técnica basándonos en cómo realmente funciona tu empresa, no en plantillas genéricas.",
              gradient: "from-solbyt-blue-500/10 to-white",
            },
            {
              icon: <Layers className="h-8 w-8 text-solbyt-purple-600" />,
              title: "Interfaces limpias y escalables",
              description:
                "Experiencias de usuario intuitivas que reducen la curva de aprendizaje y aumentan la productividad del equipo.",
              gradient: "from-solbyt-purple-600/10 to-white",
            },
            {
              icon: <Puzzle className="h-8 w-8 text-solbyt-pink-500" />,
              title: "Módulos pensados para crecer por fases",
              description:
                "Implementación gradual que permite validar resultados e invertir de forma inteligente en cada etapa.",
              gradient: "from-solbyt-pink-500/10 to-white",
            },
            {
              icon: <Database className="h-8 w-8 text-solbyt-blue-500" />,
              title: "Base de datos eficiente y segura",
              description:
                "Estructura de datos optimizada para consultas rápidas y protección total de la información empresarial.",
              gradient: "from-solbyt-blue-500/10 to-white",
            },
            {
              icon: <Cog className="h-8 w-8 text-solbyt-purple-600" />,
              title: "Integración con tus herramientas actuales",
              description:
                "Conectamos tu nueva aplicación con sistemas existentes para mantener la continuidad operativa.",
              gradient: "from-solbyt-purple-600/10 to-white",
            },
            {
              icon: <Shield className="h-8 w-8 text-solbyt-pink-500" />,
              title: "Soporte y mejoras continuas",
              description:
                "Acompañamiento técnico permanente y actualizaciones que mantienen tu software siempre competitivo.",
              gradient: "from-solbyt-pink-500/10 to-white",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className={`rounded-lg border-none shadow-lg hover:shadow-xl transition-transform duration-300 ease-out transform hover:scale-105 bg-gradient-to-br ${benefit.gradient}`}>
              <div className="p-6">
                <div className="h-16 w-16 rounded-xl bg-white shadow flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

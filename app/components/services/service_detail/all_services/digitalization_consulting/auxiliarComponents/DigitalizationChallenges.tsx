import { Settings, Target, Users } from "lucide-react";
import React from "react";

const DigitalizationChallenges = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500">
            Digitalizar no es solo implementar tecnología
          </h2>
          <p className="text-lg text-gray-600">
            Sin una estrategia clara, las herramientas digitales se convierten
            en gastos innecesarios. La verdadera transformación ocurre cuando la
            tecnología se alinea con tus procesos, tu equipo y tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Target className="h-8 w-8 text-red-500" />,
              title: "Sin estrategia clara",
              description:
                "Se adoptan herramientas sin entender los procesos ni definir metas medibles.",
              impact: "Desperdicio de recursos",
              gradient: "from-red-50 to-red-100/30",
            },
            {
              icon: <Users className="h-8 w-8 text-orange-500" />,
              title: "Resistencia al cambio",
              description:
                "Los equipos rechazan lo nuevo si no entienden cómo ni por qué usarlo.",
              impact: "Baja productividad",
              gradient: "from-orange-50 to-orange-100/30",
            },
            {
              icon: <Settings className="h-8 w-8 text-yellow-500" />,
              title: "Herramientas inadecuadas",
              description:
                "Se eligen soluciones que no encajan con la operativa ni el nivel técnico del equipo.",
              impact: "Procesos ineficientes",
              gradient: "from-yellow-50 to-yellow-100/30",
            },
          ].map((challenge, index) => (
            <div
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${challenge.gradient} to-white`}>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {challenge.description}
                </p>
                <div className="text-xs font-medium text-gray-500 bg-white/70 rounded-full px-3 py-1">
                  Resultado: {challenge.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-solbyt-blue-500/5 via-solbyt-purple-600/5 to-solbyt-pink-500/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            ¿Sabés dónde está tu empresa en el camino digital?
          </h3>
          <p className="text-gray-600 mb-6">
            Te ayudamos a diagnosticar tu punto de partida y a construir una
            hoja de ruta adaptada a tus desafíos. Sin interrupciones. Con
            resultados desde el primer mes.
          </p>
          <button className="px-6 py-3 rounded-lg text-sm font-semibold bg-solbyt-blue-500 hover:bg-solbyt-blue-600 text-white transition-colors">
            Hacer diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalizationChallenges;

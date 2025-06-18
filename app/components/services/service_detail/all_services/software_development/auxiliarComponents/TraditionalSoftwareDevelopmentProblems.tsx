import { Layers, Target, TrendingUp } from "lucide-react";
import React from "react";

const TraditionalSoftwareDevelopmentProblems = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500">
            ¿Tu software actual acompaña realmente tu crecimiento?
          </h2>
          <p className="text-lg text-gray-600">
            Muchas pymes invierten en software que no se adapta a sus cambios,
            requiere grandes desembolsos iniciales y termina frenando su
            evolución. Nuestro enfoque modular resuelve esos problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Target className="h-8 w-8 text-red-500" />,
              title: "Inversión inicial alta",
              description:
                "Software completo desde el inicio que requiere grandes desembolsos sin validar valor",
              solution: "Desarrollo por fases",
              gradient: "from-red-50 to-red-100/50",
            },
            {
              icon: <Layers className="h-8 w-8 text-orange-500" />,
              title: "Rigidez y falta de adaptación",
              description:
                "Sistemas que no pueden modificarse cuando cambian las necesidades del negocio",
              solution: "Arquitectura modular",
              gradient: "from-orange-50 to-orange-100/50",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
              title: "Problemas de escalabilidad",
              description:
                "Software que no soporta el crecimiento y requiere reescritura completa",
              solution: "Diseño escalable",
              gradient: "from-yellow-50 to-yellow-100/50",
            },
          ].map((problem, index) => (
            <div
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${problem.gradient} to-white`}>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {problem.description}
                </p>
                <div className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-3 py-1 inline-block shadow-sm">
                  Solución: {problem.solution}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-solbyt-purple-600/5 via-solbyt-blue-500/5 to-solbyt-pink-500/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Evaluamos tu situación actual sin compromiso
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Diagnóstico gratuito de tus necesidades digitales y propuesta de
            desarrollo por fases, adaptada a tu presupuesto y objetivos reales.
          </p>
          <button className="px-6 py-3 rounded-lg text-sm font-semibold bg-solbyt-purple-500 hover:bg-solbyt-purple-600 text-white transition-colors">
            Solicitar evaluación gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default TraditionalSoftwareDevelopmentProblems;

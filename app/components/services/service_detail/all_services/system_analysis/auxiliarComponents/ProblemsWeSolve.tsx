import { AlertTriangle, Database, Shield, TrendingUp } from "lucide-react";
import React from "react";

const ProblemsWeSolve = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Fallos críticos ocultos",
      description:
        "Errores que permanecen invisibles… hasta que paralizan todo en el peor momento.",
      gradient: "from-red-50 to-red-100/50",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Rendimiento degradado",
      description:
        "Tu sistema responde, pero cada vez más lento. Y eso aleja usuarios, clientes y oportunidades.",
      gradient: "from-orange-50 to-orange-100/50",
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Brechas de seguridad",
      description:
        "Puntos débiles que podrían ser explotados y poner en riesgo datos sensibles o confidenciales.",
      gradient: "from-yellow-50 to-yellow-100/50",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Escalabilidad limitada",
      description:
        "Arquitecturas que hoy funcionan, pero no están listas para el crecimiento que se viene.",
      gradient: "from-blue-50 to-blue-100/50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500">
            Detectamos los fallos antes de que te cuesten caro
          </h2>
          <p className="text-lg text-gray-600">
            Un sistema puede funcionar bien… hasta que deja de hacerlo. Los
            fallos ocultos no solo afectan la operativa: pueden costarte dinero,
            datos y reputación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`rounded-xl bg-gradient-to-br ${problem.gradient} to-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all backdrop-blur-sm`}>
              <div className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-solbyt-purple-600/5 via-solbyt-blue-500/5 to-solbyt-pink-500/5 rounded-xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            ¿Cuánto te costaría una caída del sistema durante 4 horas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Además de las pérdidas directas, considera el impacto en la
            confianza del cliente, productividad del equipo y tiempo de
            recuperación. Una auditoría preventiva cuesta una fracción de lo que
            costarían estos riesgos.
          </p>
          <button className="bg-solbyt-purple-600 hover:bg-solbyt-purple-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition shadow">
            Evaluar mis riesgos actuales
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;

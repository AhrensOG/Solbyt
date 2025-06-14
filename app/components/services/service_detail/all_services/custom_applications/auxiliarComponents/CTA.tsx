import { CheckCircle } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-solbyt-blue-500 via-solbyt-purple-600 to-solbyt-pink-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para optimizar tus procesos desde el primer día?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Desarrollamos la aplicación que tu empresa necesita, pensada por
            módulos para crecer contigo y adaptarse a tu forma única de
            trabajar.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">
                  Arquitectura adaptada a tus procesos
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">Desarrollo modular escalable</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">
                  Integración con sistemas actuales
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">Soporte técnico continuo</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-solbyt-blue-500 hover:bg-white/90 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm">
                Agendar reunión de análisis
              </button>
              <button className="border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Solicitar presupuesto personalizado
              </button>
            </div>
          </div>
          <p className="text-sm opacity-80">
            Análisis inicial gratuito • Desarrollo por módulos • Resultados
            desde la primera fase
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

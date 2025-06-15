import { CheckCircle } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-solbyt-pink-500 via-solbyt-purple-600 to-solbyt-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para liberar el potencial de tu equipo?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Transforma tareas repetitivas en ventajas competitivas. Automatiza
            procesos clave sin alterar tu operación actual y obtén resultados
            desde la primera semana.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">
                  Análisis gratuito de procesos
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">
                  Implementación sin interrupciones
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">ROI visible en 2-6 meses</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="opacity-90">Soporte técnico continuo</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg bg-white text-solbyt-pink-600 font-semibold hover:bg-white/90 transition">
                Análisis gratuito de procesos
              </button>
              <button className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition">
                Ver casos de automatización
              </button>
            </div>
          </div>
          <p className="text-sm opacity-80">
            Auditoría sin costo • Implementación gradual • Resultados medibles
            desde el inicio
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

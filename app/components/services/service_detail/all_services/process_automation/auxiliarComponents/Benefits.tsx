import { Target, TrendingUp, Zap } from "lucide-react";
import React from "react";

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500">
            Transforma tareas repetitivas en ventajas competitivas
          </h2>
          <p className="text-lg text-gray-600">
            La automatización no solo ahorra tiempo, sino que libera a tu equipo
            para enfocarse en actividades estratégicas que realmente impulsan el
            crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-solbyt-pink-50">
            <div className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-solbyt-pink-500/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-solbyt-pink-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-solbyt-pink-500">
                75%
              </h3>
              <p className="text-lg font-medium mb-2">Reducción de tiempo</p>
              <p className="text-gray-600 text-sm">
                En tareas administrativas repetitivas que ahora se ejecutan
                automáticamente
              </p>
            </div>
          </div>

          <div className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-solbyt-purple-50">
            <div className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-solbyt-purple-600/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-solbyt-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-solbyt-purple-600">
                90%
              </h3>
              <p className="text-lg font-medium mb-2">Menos errores</p>
              <p className="text-gray-600 text-sm">
                Eliminación de errores humanos en procesos críticos de tu
                operación
              </p>
            </div>
          </div>

          <div className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-solbyt-blue-50">
            <div className="p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-solbyt-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-solbyt-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-solbyt-blue-500">
                24/7
              </h3>
              <p className="text-lg font-medium mb-2">Operación continua</p>
              <p className="text-gray-600 text-sm">
                Procesos que funcionan sin supervisión, incluso fuera del
                horario laboral
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-solbyt-pink-500/5 via-solbyt-purple-600/5 to-solbyt-blue-500/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            ¿Cuánto tiempo podría ahorrar tu equipo?
          </h3>
          <p className="text-gray-600 mb-6">
            Si tu equipo dedica 2 horas diarias a tareas repetitivas, la
            automatización puede liberar más de 500 horas al año para
            actividades de mayor valor.
          </p>
          <button className="px-6 py-3 rounded-lg text-sm font-semibold bg-solbyt-pink-500 hover:bg-solbyt-pink-600 text-white transition-colors">
            Calcular mi ahorro potencial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { ArrowRight, Clock, CreditCard } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-solbyt-pink-50 to-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-solbyt-pink-500/10 text-solbyt-pink-500 text-sm font-medium">
              Servicios <span className="mx-2">•</span> Automatización de
              Procesos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-solbyt-pink-500 via-solbyt-purple-600 to-solbyt-blue-700">
              Automatización de Procesos
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Eficiencia en tareas clave, sin fricciones
            </p>
            <p className="text-lg text-gray-600">
              Detectamos procesos repetitivos y los automatizamos paso a paso,
              mejorando productividad y reduciendo errores sin alterar tu
              operación actual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-6 py-3 rounded-lg bg-solbyt-pink-500 hover:bg-solbyt-pink-600 text-white text-sm font-semibold shadow transition duration-300">
                Análisis gratuito de procesos
              </button>
              <button className="px-6 py-3 rounded-lg border border-solbyt-purple-600 text-solbyt-purple-600 hover:bg-solbyt-purple-600/10 text-sm font-semibold transition flex items-center justify-center">
                Ver casos de automatización
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-solbyt-pink-500" />
                <span>Desde 2 semanas por flujo</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-1 text-solbyt-pink-500" />
                <span>Desde €800 por flujo</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-solbyt-pink-500/20 via-solbyt-purple-600/20 to-solbyt-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <Image
                src="/img_placeholder.webp"
                alt="Automatización de procesos por Solbyt"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-bold text-lg">
                    Libera tiempo para lo que realmente importa
                  </p>
                  <p className="text-sm text-white/80">
                    Automatización inteligente + Procesos optimizados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

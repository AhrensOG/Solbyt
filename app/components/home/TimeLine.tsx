"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Headphones, Rocket, Euro } from "lucide-react";
import LinesTimeLine from "./auxiliarComponents/LinesTimeLine";
import Link from "next/link";

interface TimelineItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  // {
  //   title: "Precios Competitivos",
  //   description:
  //     "Ofrecemos una excelente relación calidad-precio, asegurando que obtengas el mayor valor por tu inversión.",
  //   icon: <Euro size={48} className="text-indigo-500" />,
  // },
  // {
  //   title: "Calidad Garantizada",
  //   description:
  //     "Ofrecemos servicios de la más alta calidad, asegurando estándares superiores en cada proyecto que realizamos.",
  //   icon: <ShieldCheck size={48} className="text-indigo-500" />,
  // },
  // {
  //   title: "Velocidad y Eficiencia",
  //   description:
  //     "Nos destacamos por nuestra rapidez en la implementación, cumpliendo plazos ajustados sin comprometer la calidad.",
  //   icon: <Gauge size={48} className="text-indigo-500" />,
  // },
  // {
  //   title: "Soporte Rápido y Directo",
  //   description:
  //     "Resolvemos tus dudas en tiempo récord para que no pierdas ni un minuto de productividad.",
  //   icon: <Headphones size={48} className="text-indigo-500" />,
  // },
  // {
  //   title: "Estrategias de Crecimiento",
  //   description:
  //     "No solo creamos, sino que te ayudamos a escalar y hacer crecer tu proyecto.",
  //   icon: <Rocket size={48} className="text-indigo-500" />,
  // },
  // {
  //   title: "Precios Transparentes",
  //   description: "Sin costos ocultos ni sorpresas. Lo que ves es lo que pagas.",
  //   icon: <DollarSign size={48} className="text-indigo-500" />,
  // },
  // {
  //   title: "Soporte Personalizado",
  //   description:
  //     "Nuestro equipo está disponible para ayudarte en cada paso. Resolución rápida y atención cercana son nuestra prioridad.",
  //   icon: <Headset size={48} className="text-indigo-500" />,
  // },

  // {
  //   title: "Tecnología Innovadora",
  //   description:
  //     "Utilizamos herramientas tecnológicas de vanguardia para brindar soluciones modernas y eficientes.",
  //   icon: <Code size={48} className="text-indigo-500" />,
  // },
  {
    title: "Inversión Inteligente",
    description:
      "Maximiza tu presupuesto con soluciones de alto impacto y precios competitivos.",
    icon: <Euro size={48} className="text-indigo-500" />,
  },
  {
    title: "Calidad Certificada",
    description:
      "Desarrollamos con estándares de primer nivel para asegurar resultados impecables.",
    icon: <ShieldCheck size={48} className="text-indigo-500" />,
  },
  {
    title: "Ejecución Exprés",
    description:
      "Velocidad sin sacrificar calidad. Cumplimos plazos ajustados con precisión milimétrica.",
    icon: <Gauge size={48} className="text-indigo-500" />,
  },
  {
    title: "Soporte 24/7",
    description:
      "Siempre disponibles. Resolvemos tus dudas en minutos, sin burocracia ni esperas.",
    icon: <Headphones size={48} className="text-indigo-500" />,
  },
  {
    title: "Estrategia Ganadora",
    description:
      "No solo creamos, diseñamos soluciones escalables para que tu negocio crezca sin límites.",
    icon: <Rocket size={48} className="text-indigo-500" />,
  },
];

const Timeline: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const updatePositions = () => {
    const container = containerRef.current;
    if (!container) return;

    // Esperar al próximo frame de renderizado
    requestAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect();
      const cardRects = cardRefs.current.map((ref) =>
        ref?.getBoundingClientRect()
      );

      const calculatedPositions = cardRects.map((rect) => {
        if (!rect) return { x: 0, y: 0 };

        // Calcular posiciones relativas al viewBox del SVG
        const x =
          ((rect.left - containerRect.left + rect.width / 2) /
            containerRect.width) *
          100;
        const y =
          ((rect.top - containerRect.top + rect.height / 2) /
            containerRect.height) *
          100;

        return { x, y };
      });

      setPositions(calculatedPositions);
    });
  };

  useEffect(() => {
    if (isVisible) {
      updatePositions();
      window.addEventListener("resize", updatePositions);
    }
    return () => window.removeEventListener("resize", updatePositions);
  }, [isVisible]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onAnimationComplete={() => setIsVisible(true)}
      className="py-28 bg-gradient-to-b from-white via-purple-50 to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="min-h-24 sm:min-h-11 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Más que un servicio, un aliado estratégico
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            No solo desarrollamos software, creamos soluciones pensadas para
            impulsar tu negocio y hacerlo crecer con las mejores herramientas
            tecnológicas.
          </p>
          <div className="w-36 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>

        {isVisible ? (
          <div
            ref={containerRef}
            className="relative flex flex-col lg:flex-row lg:justify-between items-start gap-20 lg:gap-8 h-auto lg:h-[500px]"
          >
            <LinesTimeLine positions={positions} />

            {/* Tarjetas (se mantienen igual) */}
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`h-full w-full flex justify-center ${
                  index % 2 === 0 ? "items-start" : "items-end"
                }`}
              >
                <motion.div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="relative bg-white shadow-lg rounded-full p-4 border-t-4 border-indigo-400 transform transition-transform hover:scale-105 h-64 max-w-64"
                  whileHover={{ y: -10, scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  onAnimationComplete={() => {
                    if (index === timelineData.length - 1) updatePositions();
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-2 hover:rotate-12 duration-200">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm text-center">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[500px] w-full" />
        )}

        {/* Llamada a la acción final */}
        <div className="mt-12 text-center  lg:absolute bottom-28 w-full lg:max-w-52 lg:left-[calc(50%-104px)]">
          <Link href={"/#contact"}>
            <motion.button
              className="w-full max-w-52 uppercase px-6 py-3 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-75 text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ¡Hablemos!
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;

import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Calidad Garantizada",
    description: "Ofrecemos servicios de la más alta calidad.",
  },
  {
    title: "Soporte Personalizado",
    description: "Siempre estamos disponibles para ayudarte.",
  },
  {
    title: "Tecnología Innovadora",
    description: "Utilizamos las últimas herramientas tecnológicas.",
  },
  {
    title: "Precios Competitivos",
    description: "Garantizamos el mejor balance entre costo y valor.",
  },
  {
    title: "Implementación Rápida",
    description: "Minimizamos tiempos de entrega sin comprometer calidad.",
  },
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Posiciones de las esferas en un tablero 3x2 (usando porcentajes para responsividad)
  const gridPositions = [
    { x: "10%", y: "20%" },
    { x: "30%", y: "60%" },
    { x: "50%", y: "20%" },
    { x: "70%", y: "60%" },
    { x: "90%", y: "20%" },
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          ¿Por qué trabajar con nosotros?
        </h2>

        {/* Contenedor del timeline */}
        <div className="relative w-full h-[500px]">
          {/* Líneas curvas con SVG */}
          {/* <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {gridPositions.map((start, index) => {
              const end = gridPositions[index + 1];
              if (!end) return null;

              const startX = parseFloat(start.x);
              const startY = parseFloat(start.y);
              const endX = parseFloat(end.x);
              const endY = parseFloat(end.y);

              return (
                <motion.path
                  key={index}
                  d={`M${startX} ${startY} C${(startX + endX) / 2} ${startY}, ${
                    (startX + endX) / 2
                  } ${endY}, ${endX} ${endY}`}
                  stroke="#c3aed6"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1 + index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg> */}

          {/* Esferas y tarjetas */}
          {timelineData.map((item, index) => {
            const position = gridPositions[index];
            const isExpanded = selectedIndex === index;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: position.y,
                  left: position.x,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Esfera interactiva */}
                <motion.div
                  className="relative w-24 h-24 rounded-full cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", // Colores inspirados en la imagen
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? null : index)
                  }
                >
                  {/* Partes de la esfera */}
                  <motion.div
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{
                      clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                      background:
                        "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
                    }}
                    animate={{
                      x: isExpanded ? -150 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 w-full h-full rounded-full"
                    style={{
                      clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                      background:
                        "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
                    }}
                    animate={{
                      x: isExpanded ? 150 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Número en el centro */}
                  {!isExpanded && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-white"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isExpanded ? 0 : 1 }}
                    >
                      {index + 1}
                    </motion.div>
                  )}
                </motion.div>

                {/* Tarjeta Detallada (emerge desde el centro de la esfera) */}
                {isExpanded && (
                  <motion.div
                    className="absolute bg-white shadow-xl p-6 rounded-lg w-72 text-center"
                    style={{
                      top: "-50%",
                      left: "-100%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold text-gray-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.description}</p>
                    <button
                      className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
                      onClick={() => setSelectedIndex(null)}
                    >
                      Cerrar
                    </button>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

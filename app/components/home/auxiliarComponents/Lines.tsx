import React from "react";

interface LinesProps {
  color: string; // Tipo para el color de la línea
  top?: string; // Opcional para la posición superior
  left?: string; // Opcional para la posición izquierda
  isInverted?: boolean;
}

const LinesBG: React.FC<LinesProps> = ({
  color = "#d06ef5",
  top = "0",
  left = "0",
  isInverted = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 0 850 600"
      className="w-full h-full absolute"
      style={{ top, left }}
      preserveAspectRatio="none"
    >
      {Array.from({ length: 80 }).map((_, i) => {
        const startX = i * 35; // Espaciado horizontal entre líneas
        const amplitude = 60; // Amplitud de la curva (qué tan pronunciada es)

        // Generar el path con una "S y media"

        const path = isInverted
          ? `
              M ${startX} 0 
              Q ${startX - amplitude} 100, ${startX} 200 
              Q ${startX + amplitude} 300, ${startX} 400
              Q ${startX - amplitude} 500, ${startX} 600
            `
          : `
              M ${startX} 0 
              Q ${startX + amplitude} 100, ${startX} 200 
              Q ${startX - amplitude} 300, ${startX} 400
              Q ${startX + amplitude} 500, ${startX} 600
            `;

        return (
          <path
            key={i}
            d={path}
            fill="none"
            stroke={color} // Aplicar el color recibido en props
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

export default LinesBG;

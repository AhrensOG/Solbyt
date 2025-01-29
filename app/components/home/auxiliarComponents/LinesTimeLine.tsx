import { motion } from "framer-motion";
import React from "react";

interface Position {
  x: number;
  y: number;
}

interface LinesTimeLineProps {
  positions: Position[];
}

const LinesTimeLine: React.FC<LinesTimeLineProps> = ({ positions }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {positions.map((pos, index) => {
        if (index === positions.length - 1) return null;
        const nextPos = positions[index + 1];
        // Ajustar los puntos de control para crear una ondulación constante
        // const controlX1 = pos.x + 15; // Punto de control 1 en X
        // const controlY1 = pos.y + (nextPos.y > pos.y ? 55 : -55); // Punto de control 1 en Y
        // const controlX2 = nextPos.x - 15; // Punto de control 2 en X
        // const controlY2 = nextPos.y + (nextPos.y > pos.y ? -55 : 55); // Punto de control 2 en Y

        const controlX1 = pos.x + 25; // Punto de control 1 en X
        const controlY1 = pos.y + (nextPos.y > pos.y ? 0 : -0); // Punto de control 1 en Y
        const controlX2 = nextPos.x - 25; // Punto de control 2 en X
        const controlY2 = nextPos.y + (nextPos.y > pos.y ? -0 : 0); // Punto de control 2 en Y

        return (
          <motion.path
            key={index}
            d={`M ${pos.x} ${pos.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${nextPos.x} ${nextPos.y}`}
            stroke="#a78bfa"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3.5,
              delay: index * 1,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
};

export default LinesTimeLine;

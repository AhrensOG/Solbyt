import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

interface LinesTimeLineProps {
  positions: Position[];
}

const LinesTimeLine: React.FC<LinesTimeLineProps> = ({ positions }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // 'lg' en Tailwind es 1024px
    };

    updateScreenSize(); // Verifica en la carga inicial
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="gradient-line"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="33%" stopColor="#a855f7" />
          <stop offset="66%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#6e8df5" />
        </linearGradient>
      </defs>

      {positions.map((pos, index) => {
        if (index === positions.length - 1) return null;
        const nextPos = positions[index + 1];

        // Lógica para líneas rectas en pantallas pequeñas y curvas en grandes
        const pathD = isSmallScreen
          ? `M ${pos.x} ${pos.y} L ${nextPos.x} ${nextPos.y}` // Línea recta
          : `M ${pos.x} ${pos.y} C ${pos.x + 25} ${pos.y}, ${nextPos.x - 25} ${
              nextPos.y
            }, ${nextPos.x} ${nextPos.y}`; // Curva

        return (
          <motion.path
            key={index}
            d={pathD}
            stroke="url(#gradient-line)"
            strokeWidth="0.3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
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

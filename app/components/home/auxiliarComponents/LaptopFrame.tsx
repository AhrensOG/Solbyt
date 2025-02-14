import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LaptopFrameProps {
  imageSrc: string;
}

const LaptopFrame: React.FC<LaptopFrameProps> = ({ imageSrc }) => {
  return (
    <motion.div
      className="w-[90%] h-[300px] sm:h-[400px] md:h-[500px] bg-gray-800 rounded-t-lg mx-auto shadow-lg overflow-hidden z-10 relative border-8 border-gray-700"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0.5 sm:top-1 md:top-1.5 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-600 rounded-full border border-gray-500 z-20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[98%] h-[90%] bg-white rounded-md overflow-hidden shadow-md relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imageSrc}
            alt="Desktop Preview"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LaptopFrame;

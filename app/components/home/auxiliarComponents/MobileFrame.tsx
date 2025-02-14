import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MobileFrameProps {
  imageSrc: string;
}

const MobileFrame: React.FC<MobileFrameProps> = ({ imageSrc }) => {
  return (
    <motion.div
      className="w-48 h-[300px] sm:w-56 sm:h-[400px] md:w-64 md:h-[500px] bg-black rounded-2xl mx-auto shadow-lg overflow-hidden z-10 relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <motion.div
          className="w-[97%] h-[90%] bg-white rounded-md overflow-hidden shadow-md relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imageSrc}
            alt="Mobile Preview"
            fill
            className="object-center"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-1 sm:bottom-2 w-full flex items-center justify-center space-x-4">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default MobileFrame;

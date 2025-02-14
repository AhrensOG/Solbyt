import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TabletFrameProps {
  imageSrc: string;
}

const TabletFrame: React.FC<TabletFrameProps> = ({ imageSrc }) => {
  return (
    <motion.div
      className="w-60 h-[300px] sm:w-80 sm:h-[400px] md:w-96 md:h-[500px] bg-gray-900 rounded-xl mx-auto shadow-xl overflow-hidden z-10 relative border-6 border-gray-700"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 flex items-center justify-center pb-5">
        <motion.div
          className="w-[95%] h-[95%] bg-white rounded-xl overflow-hidden shadow-md relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imageSrc}
            alt="Tablet Preview"
            fill
            className="object-center"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-600 rounded-full"></div>
    </motion.div>
  );
};

export default TabletFrame;

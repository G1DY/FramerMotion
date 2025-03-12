import { motion } from "framer-motion";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div className="perspective-1000 justify-center flex py-[15rem]">
      <motion.div
        onClick={() => setIsFlipped(!isFlipped)}
        variants={{ front: { rotateY: 0 }, back: { rotateY: 180 } }}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      >
        <motion.div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-xl font-bold">
          FrontSide
        </motion.div>
        <motion.div className="absolute inset-0 rotate-y-3 bg-gray-900 flex items-center justify-center text-xl font-bold">
          BackSide
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default FlippingCard;

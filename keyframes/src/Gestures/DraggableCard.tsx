import { useState } from "react";
import { motion } from "framer-motion";

const DraggableCard = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIsRemoved(true);
    } else if (info.offset.x < 100) {
      setIsRemoved(true);
    }
  };
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleSwipe}
      className={`bg-blue-400 w-64 h-32 items-center rounded justify-center flex ${
        isRemoved ? "hidden" : ""
      }`}
    >
      DraggableCard
    </motion.div>
  );
};
export default DraggableCard;

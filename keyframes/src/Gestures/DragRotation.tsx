import { useState } from "react";
import { motion } from "framer-motion";

const DragRotation = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotation = (_: any, info: any) => {
    const newRotation = rotation + info.offset.x;
    setRotation(newRotation);
  };
  return (
    <motion.div
      drag
      onDrag={handleRotation}
      animate={{ rotate: rotation }}
      transition={{
        duration: 5,
      }}
      className="w-32 h-16 bg-green-400 justify-center flex items-center"
    >
      DragRotation
    </motion.div>
  );
};
export default DragRotation;

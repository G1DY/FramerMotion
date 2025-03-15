import { motion, useMotionValue } from "framer-motion";

const HoverLinkedScale = () => {
  const scale = useMotionValue(1);
  return (
    <motion.button
      className="w-32 h-32 bg-blue-500 text-white rounded"
      style={{ scale }}
      onHoverStart={() => scale.set(1.1)}
      onHoverEnd={() => scale.set(1)}
    >
      Hover
    </motion.button>
  );
};
export default HoverLinkedScale;

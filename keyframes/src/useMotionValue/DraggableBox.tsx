import { motion, useMotionValue } from "framer-motion";

const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <motion.div className="flex flex-col">
      <motion.div style={{ x, y }} drag className="w-32 h-32 bg-blue-400 " />

      <p>
        Position({x.get().toFixed(0)}, {y.get().toFixed(0)})
      </p>
    </motion.div>
  );
};
export default DraggableBox;

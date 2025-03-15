import { motion, useMotionValue } from "framer-motion";
const RotatingBox = () => {
  const rotate = useMotionValue(0);
  return (
    <motion.div
      className="w-32 h-32 bg-teal-400 rounded justify-center flex items-center"
      style={{ rotate }}
      onClick={() => rotate.set(rotate.get() + 45)}
    >
      RotatingBox
    </motion.div>
  );
};
export default RotatingBox;

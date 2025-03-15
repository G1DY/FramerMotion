import { motion, useMotionValue } from "framer-motion";
const MovingBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const MoveBox = () => {
    x.set(Math.random() * 300);
    y.set(Math.random() * 300);
  };
  return (
    <motion.div
      style={{ x, y }}
      onClick={MoveBox}
      className="w-32 h-32 bg-teal-500 text-white rounded items-center justify-center flex"
    >
      MovingBox
    </motion.div>
  );
};
export default MovingBox;

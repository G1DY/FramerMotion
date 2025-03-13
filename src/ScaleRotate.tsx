import { motion } from "framer-motion";
const ScaleRotate = () => {
  return (
    <motion.div
      className="bg-amber-300 w-20 h-20 rounded-lg shadow-lg"
      animate={{ scale: [1, 2, 1], x: 100, y: -400, rotate: 360 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  );
};
export default ScaleRotate;

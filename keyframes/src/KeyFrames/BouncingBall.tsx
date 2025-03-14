import { motion } from "framer-motion";
const BouncingBall = () => {
  return (
    <motion.div
      className="absolute w-16 h-16 bg-blue-500 rounded-full flex"
      animate={{ y: [0, -100, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};
export default BouncingBall;

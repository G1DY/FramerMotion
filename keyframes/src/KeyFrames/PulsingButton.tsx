import { motion } from "framer-motion";
const PulsingButton = () => {
  return (
    <motion.div
      className="p-4 bg-blue-300 rounded-lg cursor-pointer"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      PulsingButton
    </motion.div>
  );
};
export default PulsingButton;

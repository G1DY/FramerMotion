import { motion } from "framer-motion";

const RotatingButton = () => {
  return (
    <motion.div
      className="relative  w-16 h-16 rounded-full border-8 border-t-8 border-solid border-blue-500"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute inset-0 border-8 border-solid border-blue-300 rounded-full"
        animate={{ opacity: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        style={{ borderTopColor: "transparent" }}
      ></motion.div>
    </motion.div>
  );
};
export default RotatingButton;

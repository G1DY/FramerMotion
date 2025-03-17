import { motion } from "framer-motion";

const RotatingButton = () => {
  return (
    <motion.div className="relative  rounded-full border-20 border-top-4 p-6 justify-center border-blue-800 flex items-center">
      <motion.div className="absolute rounded-full border-8 border-top-4 items-center justify-center border-blue-500 p-7"></motion.div>
    </motion.div>
  );
};
export default RotatingButton;

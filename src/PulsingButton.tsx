import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <div>
      <motion.button
        className="bg-blue-400 px-8 py-4 outline-none border-none rounded-lg "
        animate={{
          scale: [1, 2, 3, 2, 1],
          backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
        }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      >
        click me
      </motion.button>
    </div>
  );
};
export default PulsingButton;

import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <div>
      <motion.button
        className="bg-blue-400 px-8 py-4 outline-none border-2 rounded-lg "
        animate={{ scale: [1, 2, 3, 2, 1] }}
        transition={{ repeat: Infinity }}
      >
        click me
      </motion.button>
    </div>
  );
};
export default PulsingButton;

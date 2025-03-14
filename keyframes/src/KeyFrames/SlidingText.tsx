import { AnimatePresence, motion } from "framer-motion";
const SlidingText = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.h1
          className="left-0 text-lg font-bold text-white"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          Learning Keyframes
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
export default SlidingText;

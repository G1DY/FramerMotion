import { AnimatePresence, motion } from "framer-motion";
const ResponsiveButton = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.button
          className="bg-teal-500 rounded transition-transform cursor-pointer duration-300 p-2 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        >
          Button
        </motion.button>
      </AnimatePresence>
    </div>
  );
};
export default ResponsiveButton;

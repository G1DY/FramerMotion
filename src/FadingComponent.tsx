import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FadingComponent = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);
  return (
    <div>
      <button
        className="rounded bg-blue-500 text-white p-4"
        onClick={handleClick}
      >
        ClickMe
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="text-white text-sm mt-2 bg-gray-500 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            This is a fade in component
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default FadingComponent;

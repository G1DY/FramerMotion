import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tooltipVariants = {
  visible: { opacity: 1, y: -10 },
  hidden: { opacity: 0, y: 0 },
};

const ToolTip = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative inline-block ">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="bg-blue-400 px-4 cursor-pointer items-center mb-2 text-white"
      >
        Hover
      </button>
      <br />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="bg-gray-600 p-2"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.5,
            }}
          >
            This the content
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ToolTip;

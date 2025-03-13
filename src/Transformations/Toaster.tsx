import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Toaster = () => {
  const [visible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={showToast}
        className="bg-teal-300 rounded cursor-pointer mb-4 p-2 text-white"
      >
        Show Notification
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div className="fixed top-4 right-4 p-4 bg-green-400 text-white rounded">
            Notification: Action Successful
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Toaster;

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-300 p-2 mt-4 cursor-pointer rounded"
      >
        click me
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="inset-0 fixed bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="bg-white p-4 rounded"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
              transition={{ duration: 2 }}
            >
              <h2 className="text-lg font-bold">Modal Title</h2>
              <p className="text-sm">This is a modal window</p>
              <button
                className="mt-4 p-2 bg-red-500 text-white rounded cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Modal;

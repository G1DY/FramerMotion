import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const sidebarVariants = {
  open: { x: 0, opacity: 1, scale: 1 },
  closed: { x: "100%", opacity: 0, scale: 0.8 },
};

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.0,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0, scale: 1 },
  closed: { opacity: 0, y: -20, scale: 0.95 },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {/* backdrop */}
      {/* sidebar content */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ damping: 30, type: "spring", stiffness: 300 }}
        className="h-full w-64 bg-gray-800 fixed top-0 left-0 shadow-lg"
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 text-white bg-gray-600 rounded-full focus:outline-none"
          >
            <IoMdArrowBack className="h-6 w-6" />
          </button>
          <h2 className="mb-4 text-white text-2xl font-bold">Filters</h2>
          <motion.div
            variants={containerVariants}
            initial="open"
            animate={isOpen ? "open" : "closed"}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-semibold">Category</h4>
              <ul>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 1</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 2</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 3</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 4</span>
                  </label>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default Sidebar;

import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const sidebarVariants = {
  open: { x: 0, opacity: 1, scale: 1 },
  closed: { x: "100%", opacity: 0, scale: 0.8 },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <button className="absolute top-4 right-4 z-10 p-2 text-white bg-gray-600 rounded-full focus:outline-none">
            <IoMdArrowBack className="h-6 w-6" />
          </button>
          <h1 className="mb-4 text-white text-2xl font-bold">Filters</h1>
          <div className="space-y-4"></div>
        </div>
      </motion.div>
    </div>
  );
};
export default Sidebar;

import { useState } from "react";
import { motion } from "framer-motion";

const sidebarVarint = {
  closed: { x: "-100%" },
  open: { x: "0%" },
};

const SidebarCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-300 text-white cursor-pointer px-4 "
      >
        Toggle
      </button>
      <motion.div
        className="fixed top-0 left-0 w-64 bg-gray-500 h-screen"
        variants={sidebarVarint}
        animate={isOpen ? "closed" : "open"}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Home</li>
        </ul>
      </motion.div>
    </div>
  );
};
export default SidebarCollapse;

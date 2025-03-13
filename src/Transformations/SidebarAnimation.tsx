import { motion } from "framer-motion";
import { useState } from "react";

const SidebarAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="justify-center flex">
      <button
        className="bg-blue-500 rounded text-2xl p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Click to Open Sidebar
      </button>
      <motion.div
        className={`fixed left-0 w-64 top-0 h-full bg-gray-400 text-white ${
          isOpen ? "" : "translate-x"
        }`}
        initial={{ x: "0%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-amber-950 text-cente font-bold p-2 items-center pl-20 text-lg">
          SideBar
        </h1>
        <p className="text-lg text-gray-900">This is a sidebar component</p>
      </motion.div>
    </div>
  );
};
export default SidebarAnimation;

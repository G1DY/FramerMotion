import { motion } from "framer-motion";

const gestures = () => {
  return (
    <div>
      <motion.div
        className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        initial={{ scale: 1, rotate: 0 }}
        whileTap={{ scale: 1.05, rotate: 1.5 }}
        whileHover={{ scale: 0.95, rotate: 3 }}
        drag
        dragConstraints={{ left: -50, top: -50, right: 50, bottom: 50 }}
        dragElastic
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          className="object-cover w-full h-40"
          src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
        />
        <h1 className="text-lg ml-2 font-semibold mb-2">Dynamic Title</h1>
        <p className="text-sm ml-2 text-gray-600 mb-2">
          This is a project to intended solidify gestures understanding
        </p>
        <button className="bg-teal-400 rounded p-2 ml-2 text-white hover:bg-teal-600 mb-2">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};
export default gestures;

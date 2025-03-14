import { motion } from "framer-motion";
const ColorChange = () => {
  return (
    <motion.div
      className=" absolute rounded p-4 w-16 h-16"
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
        scale: [1, 1.1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
export default ColorChange;

import { motion } from "framer-motion";

const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
    },
    click: {
      scale: 0.9,
      rotate: -15,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={boxVariants}
      initial="initial"
      whileHover="hover"
      whileTap="click"
      className="w-40 h-40 bg-teal-400 rounded-lg  text-gray-900 text-center py-[4rem]"
    >
      click me
    </motion.div>
  );
};
export default AnimatedShape;

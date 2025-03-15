import { motion } from "framer-motion";
const TimelineAnimation = () => {
  const itemsVariants = {
    hidden: { opacity: 0, scale: 1, rotate: 45 },
    visible: { opacity: 1, scale: 1.2, rotate: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 1 }}
      className="flex items-center"
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <motion.div
          key={item}
          variants={itemsVariants}
          className="bg-teal-500 rounded w-32 h-16 ml-[2rem] items-center justify-center flex text-white"
        >
          Item: {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
export default TimelineAnimation;

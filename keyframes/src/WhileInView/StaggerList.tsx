import { motion } from "framer-motion";
const StaggerList = () => {
  const items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
  ];
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.ul
      variants={staggerVariants}
      transition={{ staggerChildren: 2 }}
      className="flex flex-col items-center text-white"
    >
      {items.map((item, index) => (
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="bg-teal-300 p-4 mb-4 rounded"
          key={index}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
export default StaggerList;

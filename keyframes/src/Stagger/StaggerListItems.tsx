import { motion } from "framer-motion";
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const staggerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggerListItems = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 1 },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.li
          variants={staggerVariant}
          className="mb-2 p-5 bg-teal-200 rounded"
          key={index}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
export default StaggerListItems;

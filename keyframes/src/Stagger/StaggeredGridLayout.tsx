import { motion } from "framer-motion";

const Items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
];

const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredGridLayout = () => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 1,
          },
        },
      }}
    >
      {Items.map((item, index) => (
        <motion.div
          key={index}
          className="p-2 bg-gray-300 rounded text-white"
          variants={staggeredVariants}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
export default StaggeredGridLayout;

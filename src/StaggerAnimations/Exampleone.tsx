import { motion } from "framer-motion";

const exampleone = () => {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="justify-center flex space-x-2 items-center"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      {[...Array(4)].map((_, index) => (
        <motion.div
          className="bg-amber-400 px-3 py-3 rounded-lg"
          key={index}
          variants={childVariant}
        />
      ))}
    </motion.div>
  );
};
export default exampleone;

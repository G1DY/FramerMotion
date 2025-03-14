import { motion } from "framer-motion";

const Text = "Gideon Sitienei";

const stageredVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredText = () => {
  return (
    <motion.h1
      className="text-2xl flex text-white font-bold"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      {Text.split("").map((char, index) => (
        <motion.span variants={stageredVariant} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
export default StaggeredText;

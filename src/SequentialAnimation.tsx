import { motion } from "framer-motion";

const SequentialAnimation = () => {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="w-10 h-10 bg-purple-700 m-2"
          animate={{ x: 100 }}
          transition={{ duration: 2, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
};
export default SequentialAnimation;

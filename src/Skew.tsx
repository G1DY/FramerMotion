import { useState } from "react";
import { motion } from "framer-motion";

const Skew = () => {
  const [isSkewed, setIsSkewed] = useState(true);
  return (
    <motion.div
      className="h-20 w-20 rounded m-4 bg-teal-400 text-center items-center p-6"
      onClick={() => setIsSkewed(!isSkewed)}
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 2 }}
    >
      skew
    </motion.div>
  );
};
export default Skew;

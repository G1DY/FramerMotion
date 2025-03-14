import { useState } from "react";
import { motion } from "framer-motion";

const LongPress = () => {
  const [isLarge, setIsLarge] = useState(false);

  const handleLongPressCancel = () => setIsLarge(false);
  const handleLongPressStart = () => setIsLarge(true);
  return (
    <motion.div
      onTapStart={handleLongPressStart}
      onTapCancel={handleLongPressCancel}
      onTap={handleLongPressCancel}
      className={`w-32 h-16 bg-teal-500 rounded-lg ${
        isLarge ? "w-48 h-16" : ""
      }`}
    ></motion.div>
  );
};
export default LongPress;

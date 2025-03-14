import { motion } from "framer-motion";
import { useState } from "react";

const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];
const TapToChangeColor = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const handleChange = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };
  return (
    <motion.div
      onClick={handleChange}
      className={`bg-gray-500 w-32 h-16 cursor-pointer ${colors[colorIndex]}`}
    ></motion.div>
  );
};
export default TapToChangeColor;

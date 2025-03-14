import { motion } from "framer-motion";
import { useState } from "react";

const switchVariant = {
  on: { x: 70 },
  off: { x: 0 },
};

const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="relative inline-block">
      <div
        onClick={() => setIsOn(!isOn)}
        className={`bg-gray-400 w-32 h-16 rounded-full cursor-pointer ${
          isOn ? "bg-green-400" : ""
        }`}
      >
        <motion.div
          className="bg-gray-700 w-16 h-16 rounded-full"
          variants={switchVariant}
          animate={isOn ? "on" : "off"}
          transition={{
            type: "keyframes",
            stiffness: 300,
          }}
        ></motion.div>
      </div>
    </div>
  );
};
export default OnOffButton;

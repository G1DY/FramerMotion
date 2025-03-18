import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface componentProps {
  children: ReactNode;
  style?: CSSProperties;
}

const DraggableCard = ({ children, style }: componentProps) => {
  return (
    <motion.div
      className="w-52 h-72 m-2 p-5 rounded-xl shadow-lg justify-center flex items-center text-white text-2xl "
      style={style}
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};
export default DraggableCard;

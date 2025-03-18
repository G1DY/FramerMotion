import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface componentProps {
  children: ReactNode;
  style?: CSSProperties;
}

const DraggableCard = ({ children, style }: componentProps) => {
  return <motion.div style={style}>{children}</motion.div>;
};
export default DraggableCard;

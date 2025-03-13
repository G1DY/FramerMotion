import { motion } from "framer-motion";
const SpinningIcon = () => {
  return (
    <div>
      <motion.img
        src="https://www.shutterstock.com/image-vector/flat-icon-cyclic-rotation-recycling-recurrence-1415545238"
        className="w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};
export default SpinningIcon;

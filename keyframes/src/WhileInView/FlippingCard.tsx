import { motion } from "framer-motion";
const FlippingCard = () => {
  return (
    <div className="perspective-1000 w-64 h-64">
      <motion.div
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: 180 }}
        transition={{ duration: 2 }}
        style={{ transformStyle: "preserve-3d" }}
        className=" relative w-full h-full"
      >
        <div className=" absolute w-full h-full text-white justify-center flex items-center bg-teal-400">
          Front
        </div>
        <div
          style={{ transform: "rotateY(180deg)" }}
          className=" absolute w-full h-full justify-center flex text-white items-center bg-teal-400"
        >
          Back
        </div>
      </motion.div>
    </div>
  );
};
export default FlippingCard;

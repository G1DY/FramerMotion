import { motion } from "framer-motion";
import Card from "./Card";

const StickyNav = () => {
  const menuvariants = {
    hidden: { height: "5.6rem" },
    visible: { height: "29rem", transition: { duration: 0.3 } },
  };
  const expandRowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };
  return (
    <div className="bg-blck min-h-screen">
      <motion.div
        className="fixed top-0 w-full p-8 bg-white text-black rounded-lg shadow-lg"
        variants={menuvariants}
        initial="hidden"
        whileHover="visible"
      ></motion.div>
    </div>
  );
};
export default StickyNav;

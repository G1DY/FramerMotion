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
    <div className="bg-black min-h-screen">
      <motion.div
        className="fixed top-0 w-full p-8 bg-white text-black rounded-lg shadow-lg"
        variants={menuvariants}
        initial="hidden"
        whileHover="visible"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-2 font-semibold uppercase">Gideon</div>
            </div>
            <div className="hidden text-center space-x-5 md:flex">
              <a href="#" className="text-black font-bold">
                Products
              </a>
              <a href="#" className="text-black font-bold">
                Use Cases
              </a>
              <a href="#" className="text-black font-bold">
                Pricing
              </a>
              <a href="#" className="text-black font-bold">
                Resources
              </a>
            </div>
            <div className="items-center flex">
              <a href="#" className="text-black font-bold">
                Join
              </a>
            </div>
          </div>
          <motion.div
            className="flex flex-col py-6"
            variants={expandRowVariants}
          >
            <span className="block w-full h-px bg-gray-300"></span>
            <motion.div
              variants={expandRowVariants}
              custom={1}
              className="flex items-center mt-5"
            >
              <span className="border border-black px-2 text-xs rounded-full">
                Apple
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default StickyNav;

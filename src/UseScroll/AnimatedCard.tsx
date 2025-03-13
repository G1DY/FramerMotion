import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedCard = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  return (
    <div className="justify-center items-center flex mt-[10rem] ">
      <motion.div className="justify-center flex mb-4 ">
        <motion.div
          className="bg-blue-500 text-center items-center rounded-lg shadow-lg"
          style={{ scale, opacity }}
        >
          <h2 className="text-2xl p-4 font-bold mb-4">AnimatedCard</h2>
          <p className="text-sm mb-2 mt-[-2rem]">Using usescroll prop</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default AnimatedCard;

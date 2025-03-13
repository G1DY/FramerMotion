import { motion } from "framer-motion";
const AnimationCard = () => {
  return (
    <div className=" items-center ml-[40%] justify-center flex mt-[50rem]">
      <div className="h-[200vh] w-full justify-center flex items-center text-center">
        <motion.div
          className="bg-blue-400 rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1.1,
            opacity: 1,
          }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AnimatedCard</h2>
          <p className="text-sm">This is the animated card</p>
        </motion.div>
      </div>
    </div>
  );
};
export default AnimationCard;

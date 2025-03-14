import { AnimatePresence, motion } from "framer-motion";
const FadeInComponent = () => {
  const fadeVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="absolute bg-blue-400 w-auto h-auto p-2 rounded items-center"
        variants={fadeVariant}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-white text-2xl">Fade in Component</h1>
      </motion.div>
    </AnimatePresence>
  );
};
export default FadeInComponent;

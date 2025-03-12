import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 3, 2, 1],
        rotate: [0, 90, 180, 270, 180, 90, 0],
      }}
      transition={{ duration: 5, delay: 2, ease: "easeInOut" }}
    ></motion.div>
  );
};
export default App;

import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      className="box"
      initial={{ x: 0 }}
      animate={{ x: 200, scale: 2 }}
      // transition={{ duration: 5 }}
      transition={{ duration: 5, delay: 2, ease: "linear" }}
    ></motion.div>
  );
};
export default App;

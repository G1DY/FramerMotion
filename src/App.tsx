import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      className="box"
      animate={{ rotate: 60, scale: 2, x: 200, y: 200 }}
    ></motion.div>
  );
};
export default App;

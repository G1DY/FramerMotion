import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      className="box justify-center flex items-center m-20px"
      animate={{ translateX: 200 }}
    ></motion.div>
  );
};
export default App;

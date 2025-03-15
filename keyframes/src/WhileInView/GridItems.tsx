import { motion } from "framer-motion";
const GridItems = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(9)].map((item, index) => (
        <motion.div
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
          whileInView={{ rotate: "360deg" }}
          transition={{ duration: 1 }}
          key={index}
          className="bg-teal-300 rounded px-6"
        >
          <h3 className="text-2xl">Card: {item}</h3>
        </motion.div>
      ))}
    </div>
  );
};
export default GridItems;

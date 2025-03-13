import { motion } from "framer-motion";
import { useState } from "react";
const items = [
  { title: "Item 1", content: "This is the content of item 1" },
  { title: "Item 2", content: "This is the content of item 2" },
  { title: "Item 3", content: "This is the content of item 3" },
  { title: "Item 4", content: "This is the content of item 4" },
];
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => handleOpen(index)}
              className="bg-gray-300 text-center focus:outline-none p-1 w-full cursor-pointer text-lg text-black"
            >
              {item.title}
            </button>
            <motion.div
              className="text-sm overflow-hidden m-2"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-300 p-2 rounded "> {item.content}</div>
            </motion.div>
          </div>
        ))}
      </div>
      ;
    </>
  );
};
export default Accordian;

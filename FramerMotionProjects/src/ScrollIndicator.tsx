import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const textTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    ["50px", "100px"]
  );
  return (
    <>
      <motion.div
        className="fixed left-0 top-0 bg-red-500 h-[20px] overflow-hidden"
        style={{ width: lineWidth, transition: "width 0.2s ease" }}
      />
      <motion.div
        className="mt-[10px] relative p-4 overflow-hidden"
        style={{ y: textTranslateY, opacity: textOpacity }}
      >
        {[...Array(100)].map((i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            placeat recusandae in nisi excepturi dignissimos cum quisquam vero
            cupiditate quos dolorum dolores quam nesciunt aut, voluptatem veniam
            quo. Iste, ipsa?
          </p>
        ))}
      </motion.div>
    </>
  );
};
export default ScrollIndicator;

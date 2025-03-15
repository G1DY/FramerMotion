import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <motion.div
        className="fixed left-0 top-0 bg-red-500 h-[20px]"
        style={{ width: lineWidth, transition: "width 0.2s ease" }}
      />
      <div className="mt-[50px] relative">
        {[...Array(20)].map((i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            placeat recusandae in nisi excepturi dignissimos cum quisquam vero
            cupiditate quos dolorum dolores quam nesciunt aut, voluptatem veniam
            quo. Iste, ipsa?
          </p>
        ))}
      </div>
    </>
  );
};
export default ScrollIndicator;

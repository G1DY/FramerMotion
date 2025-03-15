import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 bg-red-500 h-[20px] w-full z-100"
        style={{ width: lineWidth, transition: "width 0.2s ease" }}
      />
      <div>
        <motion.div className="mt-[10px]">
          {[...Array(100)].map((_, index) => (
            <article key={index}>
              <ol className="list-disc list-inside text-lg text-white">
                <li className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quo odio nulla cum exercitationem eveniet, soluta
                  recusandae ut possimus laudantium quisquam excepturi
                  distinctio, dolore vitae! Sapiente, nesciunt? Itaque, magni
                  odio.
                </li>
              </ol>
            </article>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default ScrollIndicator;

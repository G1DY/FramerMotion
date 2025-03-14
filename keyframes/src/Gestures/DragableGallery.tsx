import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const DragableGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.y < 100) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.y > 100) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };
  return (
    <div className="w-72 h-72 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          drag
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleSwipe}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full"
        />
      </AnimatePresence>
    </div>
  );
};
export default DragableGallery;

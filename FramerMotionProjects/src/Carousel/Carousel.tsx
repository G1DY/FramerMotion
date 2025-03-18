import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1516905041604-7935af78f572?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516906571665-49af58989c4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1525548002014-e18135d814d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
    setShowThumbnails(true);
    window.setTimeout(() => setShowThumbnails(false), 5000);
  };

  return (
    <>
      <div className="relative w-[50%] rounded-lg overflow-hidden">
        {/* clickable thumbnails */}
        <div
          className={`flex mb-[2rem] transition-opacity duration-300 ${
            showThumbnails || isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => selectSlide(index)}
              className={`w-[10rem] h-[5rem] mt-[2rem] cursor-pointer border-2 rounded-lg overflow-hidden ${
                currentIndex === index
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* actual images */}
        <motion.div
          className="flex"
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
        >
          <motion.div
            className="flex"
            initial={{ x: "-100%" }}
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ duration: 1 }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
        {/* buttons */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 transform -translate-y-1/2 p-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-4 transform -translate-y-1/2 p-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};
export default Carousel;

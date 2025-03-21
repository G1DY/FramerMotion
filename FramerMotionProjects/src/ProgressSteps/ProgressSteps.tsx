import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  { title: "Step 1", description: "This is the first step." },
  { title: "Step 2", description: "This is the second step." },
  { title: "Step 3", description: "This is the third step." },
  { title: "Step 4", description: "This is the final step." },
];

const ProgressSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="flex flex-col items-center p-5">
      <div className="relative flex justify-between mb-5 w-[40rem]">
        <motion.div
          className="absolute h-1 bg-blue-500 mt-[1rem]"
          style={{
            width: `${((currentStep + 0) / steps.length) * 130}%`,
            transition: "width 0.3s ease",
          }}
        />
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <motion.div
              className={`h-10 w-10 flex justify-center items-center rounded-full border-2 ${
                index <= currentStep ? "bg-blue-500" : "bg-gray-200"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {index < currentStep ? "✅" : null}
            </motion.div>
            <p
              className={`mt-2 ${
                index <= currentStep ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <motion.div
        className="text-center p-5 w-[40rem] h-[10rem] border rounded-lg shadow-md"
        key={currentStep}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold">{steps[currentStep].title}</h2>
        <p className="mt-2">{steps[currentStep].description}</p>
        <motion.div>
          <div className="flex mt-5 space-x-4 justify-between">
            <button
              onClick={handlePrev}
              className={`px-4 py-2 text-white bg-blue-500 rounded ${
                currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className={`px-4 py-2 text-white bg-blue-500 rounded ${
                currentStep === steps.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default ProgressSteps;

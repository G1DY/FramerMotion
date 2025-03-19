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
    </div>
  );
};
export default ProgressSteps;

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
  return <div className="flex flex-col items-center p-5"></div>;
};
export default ProgressSteps;

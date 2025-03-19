import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ProgressSteps/index.css";
import App from "./ProgressSteps/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

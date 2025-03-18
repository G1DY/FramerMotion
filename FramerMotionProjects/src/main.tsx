import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Carousel/index.css";
import App from "./Carousel/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/theme.css";
import "@visa/nova-styles/styles.css";
import "@visa/nova-styles/themes/visa-light/index.css";
import "@visa/nova-styles/themes/visa-dark/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

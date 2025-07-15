import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import PromptTool from "./components/PromptTool/PromptTool";
import ComponentPage from "./components/ComponentPage/ComponentPage";
import AccordionPage from "./pages/components/Accordion/AccordionPage";
import BannerPage from "./pages/components/Banner/BannerPage";
import ButtonPage from "./pages/components/Button/ButtonPage";
import CheckboxPage from "./pages/components/Checkbox/CheckboxPage";
import ContentCardPage from "./pages/components/ContentCard/ContentCardPage";
import FormPage from "./pages/components/Form/FormPage";
import InputPage from "./pages/components/Input/InputPage";
import RadioGroupPage from "./pages/components/RadioGroup/RadioGroupPage";
import SelectPage from "./pages/components/Select/SelectPage";
import TooltipPage from "./pages/components/Tooltip/TooltipPage";
import Header from "./components/Header/Header";

import "./index.css";
import "./styles/theme.css";
import "@visa/nova-styles/styles.css";
import "@visa/nova-styles/themes/visa-light/index.css";
import "@visa/nova-styles/themes/visa-dark/index.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={`visa-nova-theme ${
        isDarkMode ? "theme-visa-dark" : "theme-visa-light"
      }`}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Router>
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>
          {/* Sidebar */}
          <Sidebar style={{ width: "240px", flexShrink: 0 }} />

          {/* Main content layout */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "var(--background-color)",
              color: "var(--text-color)",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Header
              isDarkMode={isDarkMode}
              toggleTheme={() => setIsDarkMode((prev) => !prev)}
            />

            {/* Scrollable main content */}
            <div
              style={{
                flex: 1,
                padding: "2rem",
                overflowY: "auto",
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={<PromptTool isDarkMode={isDarkMode} />}
                />
                <Route
                  path="/components/:slug"
                  element={<ComponentPage isDarkMode={isDarkMode} />}
                />
                <Route
                  path="/components/accordion"
                  element={<AccordionPage />}
                />
                <Route path="/components/banner" element={<BannerPage />} />
                <Route path="/components/button" element={<ButtonPage />} />
                <Route path="/components/checkbox" element={<CheckboxPage />} />
                <Route
                  path="/components/contentcard"
                  element={<ContentCardPage />}
                />
                <Route path="/components/form" element={<FormPage />} />
                <Route path="/components/input" element={<InputPage />} />
                <Route
                  path="/components/radiogroup"
                  element={<RadioGroupPage />}
                />
                <Route path="/components/select" element={<SelectPage />} />
                <Route path="/components/tooltip" element={<TooltipPage />} />
              </Routes>
            </div>

            {/* Footer */}
            <Footer isDarkMode={isDarkMode} />
          </div>
        </div>
      </Router>
    </div>
  );
}

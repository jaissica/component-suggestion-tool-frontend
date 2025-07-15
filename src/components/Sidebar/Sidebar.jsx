import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css"; // Import CSS module

export default function Sidebar({ isDarkMode }) {
  const [components, setComponents] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Start with the sidebar closed on mobile
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") || "";

    fetch(`${baseURL}/api/components`)
      // fetch(`http://localhost:5050/api/components`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setComponents(data);
        } else {
          fallback();
        }
      })
      .catch(() => fallback());

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsOpen(width >= 768); // Automatically open sidebar on larger screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fallback = () => {
    setComponents([
      { slug: "form", name: "Form" },
      { slug: "input", name: "Input" },
      { slug: "checkbox", name: "Checkbox" },
      { slug: "radiogroup", name: "RadioGroup" },
      { slug: "select", name: "Select" },
      { slug: "button", name: "Button" },
      { slug: "banner", name: "Banner" },
      { slug: "contentcard", name: "ContentCard" },
      { slug: "tooltip", name: "Tooltip" },
      { slug: "accordion", name: "Accordion" },
    ]);
  };

  const isMobile = windowWidth < 768;

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sortedComponents = components.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className={styles.hamburgerButton}
          aria-label="Toggle Sidebar"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="sidebar"
        >
          ☰
        </button>
      )}

      {isMobile && isOpen && (
        <div onClick={toggleSidebar} className={styles.overlay} />
      )}

      <aside
        id="sidebar"
        role="navigation"
        className={`${styles.sidebar} ${
          isMobile ? styles.sidebarMobile : styles.sidebarDesktop
        } ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <h2 className={styles.sidebarTitle}>
          <b>Components</b>
        </h2>
        <ul className={styles.sidebarLinkList}>
          {sortedComponents.map((comp) => (
            <li key={comp.slug} className={styles.sidebarLinkItem}>
              <Link
                to={`/components/${comp.slug}`}
                className={`${styles.sidebarLink} ${
                  location.pathname === `/components/${comp.slug}`
                    ? styles.activeLink
                    : ""
                }`}
                aria-label={`Go to ${comp.name} documentation`}
              >
                {comp.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

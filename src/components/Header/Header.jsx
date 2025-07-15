import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { searchComponents } from "../../services/componentService";
import { debounce } from "lodash";
import { Typography, Button } from "@visa/nova-react";
import {
  VisaSearchTiny,
  VisaCloseTiny,
  GenericSearchTiny,
  GenericCloseTiny,
} from "@visa/nova-icons-react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header({ isDarkMode, toggleTheme }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Perform search with debounce
  const performSearch = useCallback(
    debounce(async (val) => {
      if (!val.trim()) return setResults([]);
      try {
        const data = await searchComponents(val);
        setResults(data || []);
      } catch (err) {
        console.error("Search error", err);
        setResults([]);
      }
    }, 300),
    []
  );

  // Handling input changes
  const onChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    performSearch(val);
  };

  // Handle search result selection
  const handleSelect = (slug) => {
    setQuery("");
    setResults([]);
    navigate(`/components/${slug}`);
  };

  // Clear search results and reset query
  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div className={styles.headerContainer}>
      {/* Logo and title */}
      <div className={styles.headerLogoWrapper}>
        <img
          src="/design-system-logo.png"
          alt="Design System Logo"
          className={styles.headerLogo}
        />
        <Typography variant="headline-2">Component Suggester</Typography>
      </div>

      {/* Right: Search bar + Theme toggle */}
      <div className={styles.headerRight}>
        {/* Search bar */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={onChange}
            aria-label="Search components"
            aria-live="polite"
            className={`${styles.searchInput} ${
              isFocused ? styles.searchInputFocused : ""
            }`}
          />

          {/* Search icon */}
          <span className={styles.searchIcon}>
            {isDarkMode ? (
              <VisaSearchTiny size={14} className="icon-muted" />
            ) : (
              <GenericSearchTiny size={14} className="icon-muted" />
            )}
          </span>

          {/* Clear icon */}
          {query && (
            <button
              onClick={handleClear}
              aria-label="Clear search"
              className={styles.clearButton}
            >
              {isDarkMode ? (
                <VisaCloseTiny size={14} className="icon-muted" />
              ) : (
                <GenericCloseTiny size={14} className="icon-muted" />
              )}
            </button>
          )}

          {/* Suggestions */}
          {query && results.length > 0 && (
            <ul className={styles.searchSuggestions}>
              {results.map((comp) => (
                <li
                  key={comp.slug}
                  onClick={() => handleSelect(comp.slug)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSelect(comp.slug);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${comp.name} component`}
                  className={styles.suggestionItem}
                  onMouseEnter={(e) =>
                    (e.currentTarget.className = `${styles.suggestionItem} ${styles.suggestionItemHover}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.className = styles.suggestionItem)
                  }
                >
                  {comp.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Theme toggle button */}
        <Button
          onClick={toggleTheme}
          aria-label="Switch theme"
          className={styles.themeToggleButton}
        >
          {isDarkMode ? (
            <FaMoon aria-hidden="true" />
          ) : (
            <FaSun aria-hidden="true" />
          )}
        </Button>
      </div>
    </div>
  );
}

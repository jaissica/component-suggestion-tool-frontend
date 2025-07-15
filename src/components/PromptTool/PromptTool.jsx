import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { searchComponents } from "../../services/componentService";
import debounce from "lodash.debounce";
import { Typography, Utility, Button } from "@visa/nova-react";
import {
  VisaSearchLow,
  VisaCloseLow,
  GenericSearchTiny,
  GenericCloseTiny,
} from "@visa/nova-icons-react";
import styles from "./PromptTool.module.css"; // Import the CSS Module

export default function PromptTool({ isDarkMode }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (!query) return setResults([]);
      try {
        const data = await searchComponents(query);
        setResults(data || []);
      } catch (err) {
        console.error("Component search error:", err);
        setResults([]);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  const handleSelect = (slug) => {
    navigate(`/components/${slug}`);
    setInput("");
    setResults([]);
  };

  const handleClear = () => {
    setInput("");
    setResults([]);
  };

  const handleButtonClick = (text) => {
    setInput(text);
    debouncedSearch(text);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Typography variant="display-2" className={styles.heroTitle}>
          Component Suggester
        </Typography>

        <Typography variant="body-1" className={styles.heroDescription}>
          Describe the UI you want to build. We’ll recommend matching Visa Nova
          components with ready-to-use examples and code snippets.
        </Typography>
      </div>

      {/* Search Input */}
      <div className={styles.searchInputContainer}>
        <span className={styles.searchIcon} aria-hidden="true">
          {isDarkMode ? (
            <VisaSearchLow
              size={18}
              style={{ color: "var(--text-color-muted)" }}
              aria-hidden="true"
            />
          ) : (
            <GenericSearchTiny
              size={18}
              style={{ color: "var(--text-color-muted)" }}
              aria-hidden="true"
            />
          )}
        </span>

        <input
          type="text"
          placeholder="Search components by keyword..."
          value={input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
          aria-label="Search components by keyword"
          className={`${styles.searchField} ${
            isFocused ? styles.searchFieldFocused : ""
          }`}
        />

        {/* Clear button */}
        {input && (
          <button
            onClick={handleClear}
            aria-label="Clear input"
            className={styles.clearButton}
          >
            {isDarkMode ? (
              <VisaCloseLow
                size={16}
                style={{ color: "var(--text-color-muted)" }}
                aria-hidden="true"
              />
            ) : (
              <GenericCloseTiny
                size={16}
                style={{ color: "var(--text-color-muted)" }}
                aria-hidden="true"
              />
            )}
          </button>
        )}

        {/* Suggestions */}
        {input && results.length > 0 && (
          <ul className={styles.suggestionsList} aria-live="polite">
            {results.map((comp) => (
              <li
                key={comp.slug}
                onClick={() => handleSelect(comp.slug)}
                className={styles.suggestionItem}
                role="option"
                aria-selected="false"
              >
                <Typography variant="body-2">{comp.name}</Typography>
              </li>
            ))}
          </ul>
        )}

        {/* No result message */}
        {input && results.length === 0 && (
          <Typography variant="body-3" className={styles.noResultMessage}>
            No matching components for "{input}"
          </Typography>
        )}
      </div>

      {/* Prompt Row */}
      <Utility vFlexRow vAlignItems="center" className={styles.promptRow}>
        <Typography variant="headline-5" className={styles.promptLabel}>
          Try a prompt:
        </Typography>

        {["Button", "Tooltip", "Form"].map((ex) => (
          <Button
            key={ex}
            onClick={() => handleButtonClick(ex)}
            className={styles.buttonWrapper}
            aria-label={`Search for ${ex} components`}
          >
            {ex}
          </Button>
        ))}
      </Utility>
    </div>
  );
}

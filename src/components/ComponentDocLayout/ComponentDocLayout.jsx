import React, { useState } from "react";
import styles from "./ComponentDocLayout.module.css";
import { GenericCopyTiny } from "@visa/nova-icons-react";

export default function ComponentDocLayout({
  title,
  description,
  preview,
  code,
  props,
}) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
      })
      .catch(() => {
        setCopySuccess(false);
      });
  };

  return (
    <div className={styles.container} role="main">
      {/* Heading */}
      <h1 className={styles.heading}>{title}</h1>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* Preview Section */}
      <section className={styles.previewSection}>
        <div>{preview}</div>
      </section>

      <hr className={styles.hr} />

      {/* Code Section */}
      {code && (
        <section className={styles.codeSection}>
          <div className={styles.codeHeaderRow}>
            <h2 className={styles.codeHeading}>Code</h2>
            <button
              onClick={handleCopyClick}
              aria-label="Copy code"
              className={styles.iconButton}
            >
              <GenericCopyTiny size={14} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.codeWrapper}>
            <pre className={styles.codeContainer}>
              <code>{code}</code>
            </pre>
          </div>
        </section>
      )}

      <hr className={styles.hr} />

      {/* Props Table */}
      {props?.length > 0 && (
        <section style={{ marginTop: "2.5rem" }}>
          <h2 className={styles.codeHeading}>Component Props</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th className={styles.tableCell}>Prop</th>
                  <th className={styles.tableCell}>Type</th>
                  <th className={styles.tableCell}>Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop, i) => (
                  <tr key={i}>
                    <td className={styles.tableCell}>{prop.name}</td>
                    <td className={`${styles.tableCell} ${styles.tableCode}`}>
                      {prop.type}
                    </td>
                    <td className={styles.tableCell}>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

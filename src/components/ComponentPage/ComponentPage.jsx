import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ComponentPage.module.css";

export default function ComponentPage() {
  const { slug } = useParams();
  const [component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      try {
        // const res = await fetch(`http://localhost:5050/api/components/${slug}`);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/components/${slug}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch component data");
        }
        const data = await res.json();
        setComponent(data);
      } catch (err) {
        console.error("Failed to load component:", err);
        setError("Component not found or failed to load.");
      } finally {
        setLoading(false);
      }
    }

    fetchComponent();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.loadingMessage}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorMessage}>
        <p>{error}</p>
      </div>
    );
  }

  if (!component) {
    return (
      <div className={styles.loadingMessage}>
        <p>Component not found.</p>
      </div>
    );
  }

  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.componentTitle} aria-live="polite">
        {component.name}
      </h2>

      <p className={styles.componentDescription} aria-live="polite">
        {component.description}
      </p>

      <section className={styles.usageSection}>
        <h4>Usage</h4>
        <pre className={styles.usageCode}>
          <code>{component.usage}</code>
        </pre>
      </section>

      <section className={styles.tagsSection} aria-live="polite">
        <p>Tags: {component.tags?.join(", ") || "None"}</p>
      </section>
    </div>
  );
}

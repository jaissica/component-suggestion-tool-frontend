import React from "react";
import { Button } from "@visa/nova-react";
import { VisaHomeTiny } from "@visa/nova-icons-react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeButton.module.css";

export default function HomeButton({ to = "/" }) {
  const navigate = useNavigate();

  return (
    <Button
      iconButton
      aria-label="Go Home"
      title="Go Home"
      onClick={() => navigate(to)}
      className={styles.homeButton}
    >
      <VisaHomeTiny aria-hidden="true" />{" "}
    </Button>
  );
}

import React from "react";
import { Footer as NovaFooter, Link, Utility } from "@visa/nova-react";
import styles from "./Footer.module.css";

export default function Footer({ isDarkMode }) {
  return (
    <NovaFooter
      className={`${styles.footer} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <Utility
        vFlex
        vFlexWrap
        vFlexGrow
        vJustifyContent="between"
        vAlignItems="center"
        vGap={32}
      >
        <span className={styles.footerText}>
          © {new Date().getFullYear()} All Rights Reserved
        </span>
        <Utility tag="ul" vFlex vFlexRow vGap={24}>
          <li>
            <Link
              href="#"
              className={styles.footerLink}
              aria-label="Contact us"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={styles.footerLink}
              aria-label="Privacy Policy"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={styles.footerLink}
              aria-label="Terms and conditions"
            >
              Terms and conditions
            </Link>
          </li>
        </Utility>
      </Utility>
    </NovaFooter>
  );
}

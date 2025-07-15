import React from "react";
import { Button, Utility, Typography } from "@visa/nova-react";
import {
  VisaSaveTiny,
  VisaDeleteTiny,
  VisaFileUploadTiny,
} from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./ButtonPage.module.css"; // Import CSS Module

const ButtonExamples = () => (
  <Utility className={styles.vFlex} vFlexCol vGap={32}>
    {/* Section: Basic Buttons */}
    <section className={styles.section}>
      <Typography variant="headline-4" className={styles.sectionHeader}>
        Basic Buttons
      </Typography>
      <Typography variant="body-2" style={{ marginBottom: "1rem" }}>
        These are the most common buttons used across interfaces.
      </Typography>
      <Utility vFlex vFlexRow vFlexColSm vGap={16} vFlexWrap>
        <Button>Default</Button>
        <Button alternate>Alternate</Button>
        <Button colorScheme="secondary">Secondary</Button>
        <Button subtle>Subtle</Button>
        <Button tag="a" href="#" aria-label="Anchor tag button">
          Anchor Tag
        </Button>
      </Utility>
    </section>

    {/* Section: Style Variants */}
    <section className={styles.section}>
      <Typography variant="headline-4" className={styles.sectionHeader}>
        Size & Style Variants
      </Typography>
      <Typography variant="body-2" style={{ marginBottom: "1rem" }}>
        Use different sizes or styles to indicate hierarchy or importance.
      </Typography>
      <Utility vFlex vFlexRow vFlexColSm vGap={16} vFlexWrap>
        <Button buttonSize="large">Large</Button>
        <Button buttonSize="small">Small</Button>
        <Button destructive aria-label="Delete">
          <VisaDeleteTiny />
          Delete
        </Button>
      </Utility>
    </section>

    {/* Section: Icon Buttons */}
    <section className={styles.section}>
      <Typography variant="headline-4" className={styles.sectionHeader}>
        Icon Buttons
      </Typography>
      <Typography variant="body-2" style={{ marginBottom: "1rem" }}>
        Icon-only or icon-enhanced buttons for compact or expressive actions.
      </Typography>
      <Utility vFlex vFlexRow vFlexColSm vGap={16} vFlexWrap>
        <Button iconButton aria-label="Save">
          <VisaSaveTiny />
        </Button>
        <Button iconTwoColor aria-label="Upload">
          <VisaFileUploadTiny />
          Upload
        </Button>
        <Button iconTwoColor aria-label="Upload">
          Upload
          <VisaFileUploadTiny />
        </Button>
        <Button stacked aria-label="Upload">
          <VisaFileUploadTiny />
          Upload
        </Button>
      </Utility>
    </section>
  </Utility>
);

// Code Snippet
const fullCode = `// Usage Examples
<Button>Default</Button>
<Button alternate>Alternate</Button>
<Button colorScheme="secondary">Secondary</Button>
<Button subtle>Subtle</Button>
<Button tag="a" href="#" aria-label="Anchor tag button">Anchor Tag</Button>

<Button buttonSize="large">Large</Button>
<Button buttonSize="small">Small</Button>
<Button destructive aria-label="Delete">
  <VisaDeleteTiny />
  Delete
</Button>

<Button iconButton aria-label="Save">
  <VisaSaveTiny />
</Button>
<Button iconTwoColor aria-label="Upload">
  <VisaFileUploadTiny />
  Upload
</Button>
<Button iconTwoColor aria-label="Upload">
  Upload
  <VisaFileUploadTiny />
</Button>
<Button stacked aria-label="Upload">
  <VisaFileUploadTiny />
  Upload
</Button>`;

export default function ButtonPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span className={styles.pageTitle}>Button</span>
          <Utility
            vFlex
            vFlexRow
            vFlexColSm
            vGap={16}
            vAlignItems="center"
            className={styles.buttonWrapper}
          >
            <HomeButton />
          </Utility>
        </div>
      }
      description="Interactive elements enabling users to take actions within an interface. Supports variants like destructive, icon-only, size options, and styling schemes."
      preview={<ButtonExamples />}
      code={fullCode}
      props={[
        {
          name: "alternate",
          type: "boolean",
          default: "false",
          description: "Alternate color scheme for the button",
        },
        {
          name: "buttonSize",
          type: `"small" | "large"`,
          default: `"medium"`,
          description: "Sets the button size",
        },
        {
          name: "colorScheme",
          type: `"secondary" | "tertiary"`,
          default: `"primary"`,
          description: "Applies a predefined color scheme",
        },
        {
          name: "destructive",
          type: "boolean",
          default: "false",
          description: "Marks button for destructive actions",
        },
        {
          name: "iconButton",
          type: "boolean",
          default: "false",
          description: "Icon-only button",
        },
        {
          name: "iconTwoColor",
          type: "boolean",
          default: "false",
          description: "Visa dual-tone icon styling",
        },
        {
          name: "stacked",
          type: "boolean",
          default: "false",
          description: "Stack icon above text",
        },
        {
          name: "subtle",
          type: "boolean",
          default: "false",
          description: "Subdued button for secondary actions",
        },
        {
          name: "tag",
          type: "ElementType",
          default: `"button"`,
          description: "Render button as a different HTML element",
        },
      ]}
    />
  );
}

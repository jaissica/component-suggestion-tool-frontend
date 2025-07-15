import React from "react";
import {
  Accordion,
  AccordionHeading,
  AccordionPanel,
  AccordionToggleIcon,
  Typography,
  Utility,
  UtilityFragment,
  Badge,
} from "@visa/nova-react";
import { VisaCloudLow, VisaSuccessTiny } from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./AccordionPage.module.css";

// Accordion Examples
const CollapsedAccordion = () => (
  <Accordion>
    <AccordionHeading buttonSize="large" colorScheme="primary">
      <AccordionToggleIcon />
      Accordion title
    </AccordionHeading>
    <AccordionPanel>
      <Typography>
        This is required text that describes the accordion section.
      </Typography>
    </AccordionPanel>
  </Accordion>
);

const CollapsedDisabledAccordion = () => {
  const id = "collapsed-disabled";
  const expanded = false;

  return (
    <Accordion id={id} tag="div">
      <AccordionHeading
        id={`${id}-header`}
        aria-controls={`${id}-panel`}
        aria-expanded={expanded}
        disabled
        buttonSize="large"
        colorScheme="primary"
        tag="button"
      >
        <AccordionToggleIcon accordionOpen={expanded} />
        Accordion title
      </AccordionHeading>
      <AccordionPanel id={`${id}-panel`} aria-hidden={!expanded}>
        <Typography>
          This is required text that describes the accordion section.
        </Typography>
      </AccordionPanel>
    </Accordion>
  );
};

const WithIconAccordion = () => (
  <Accordion>
    <AccordionHeading buttonSize="large" colorScheme="primary">
      <AccordionToggleIcon />
      <VisaCloudLow />
      Accordion title
    </AccordionHeading>
    <AccordionPanel>
      <Typography>With icon example content here.</Typography>
    </AccordionPanel>
  </Accordion>
);

const DefaultMultiSelectAccordionGroup = () => {
  const items = ["Accordion title 1", "Accordion title 2", "Accordion title 3"];
  return (
    <Utility className={styles.vFlex} vFlexCol vGap={6}>
      {items.map((header, i) => (
        <Accordion key={i}>
          <AccordionHeading buttonSize="large" colorScheme="primary">
            <AccordionToggleIcon />
            {header}
          </AccordionHeading>
          <AccordionPanel>
            <Typography>This is panel content.</Typography>
          </AccordionPanel>
        </Accordion>
      ))}
    </Utility>
  );
};

const MultiSelectAccordionGroupWithExpanded = () => {
  const accordions = [
    {
      content:
        "This is required text that describes the accordion section in more detail.",
      header: "Accordion title 1",
    },
    {
      content:
        "This is required text that describes the accordion section in more detail.",
      header: "Accordion title 2",
    },
    {
      content:
        "This is required text that describes the accordion section in more detail.",
      header: "Accordion title 3",
    },
  ];
  const id = "multi-select-accordion-group-with-expanded";

  return (
    <Utility className={styles.vFlex} vFlexCol vGap={6}>
      {accordions.map((accordion, index) => (
        <Accordion key={`${id}-${index}`} open={index === 0}>
          <AccordionHeading buttonSize="large" colorScheme="primary">
            <AccordionToggleIcon />
            {accordion.header}
          </AccordionHeading>
          <AccordionPanel>
            <Typography>{accordion.content}</Typography>
          </AccordionPanel>
        </Accordion>
      ))}
    </Utility>
  );
};

const WithBadgeAccordion = () => (
  <Accordion>
    <UtilityFragment vAlignItems="center">
      <AccordionHeading buttonSize="large" colorScheme="primary">
        <AccordionToggleIcon />
        Accordion title
        <UtilityFragment vMarginLeft="auto">
          <Badge badgeType="stable">
            <VisaSuccessTiny />
            Label
          </Badge>
        </UtilityFragment>
      </AccordionHeading>
    </UtilityFragment>
    <AccordionPanel>
      <Typography>Additional details here.</Typography>
    </AccordionPanel>
  </Accordion>
);

const codeSnippet = `
// Basic accordion
<Accordion>
  <AccordionHeading buttonSize="large" colorScheme="primary">
    <AccordionToggleIcon />
    Accordion title
  </AccordionHeading>
  <AccordionPanel>
    <Typography>Accordion content</Typography>
  </AccordionPanel>
</Accordion>
`;

const usageNotes = `
- Use \`buttonSize="large"\` and \`colorScheme="secondary"\` for consistent style.
- Wrap icons or badges inside \`AccordionHeading\` for better visuals.
- \`Utility\` and \`UtilityFragment\` help with layout alignment.
- Ensure accessibility using \`aria-expanded\`, \`aria-controls\`, and unique \`id\`.
`;

export default function AccordionPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span>Accordion</span>
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
      description="Vertical headers that expand or collapse to show or hide content. Useful for organizing related information into expandable sections."
      preview={
        <Utility className={styles.vFlex} vFlexCol vGap={32}>
          <section className={styles.section}>
            <Utility vFlex vFlexCol vGap={12}>
              <Typography variant="headline-4">Collapsed Accordion</Typography>
              <CollapsedAccordion />
            </Utility>
          </section>
          <section className={styles.section}>
            <Utility vFlex vFlexCol vGap={12}>
              <Typography variant="headline-4">Disabled Accordion</Typography>
              <CollapsedDisabledAccordion />
            </Utility>
          </section>
          <section className={styles.section}>
            <Utility vFlex vFlexCol vGap={12}>
              <Typography variant="headline-4">With Icon</Typography>
              <WithIconAccordion />
            </Utility>
          </section>
          <section className={styles.section}>
            <Utility vFlex vFlexCol vGap={12}>
              <Typography variant="headline-4">Multiple Accordions</Typography>
              <DefaultMultiSelectAccordionGroup />
            </Utility>
          </section>
          <section className={styles.section}>
            <Utility vFlex vFlexCol vGap={12}>
              <Typography variant="headline-4">
                Multi-Select Accordion with Default Expanded
              </Typography>
              <MultiSelectAccordionGroupWithExpanded />
            </Utility>
          </section>
          <section className={styles.section}>
            <Utility vFlex vFlexCol vGap={12}>
              <Typography variant="headline-4">With Badge</Typography>
              <WithBadgeAccordion />
            </Utility>
          </section>
        </Utility>
      }
      code={codeSnippet}
      props={[
        {
          name: "AccordionHeading",
          type: "Component",
          description:
            "Wrapper for the heading that includes toggle and content.",
        },
        {
          name: "AccordionPanel",
          type: "Component",
          description: "The collapsible panel content container.",
        },
        {
          name: "AccordionToggleIcon",
          type: "Component",
          description: "Chevron icon showing open/close state.",
        },
      ]}
      notes={usageNotes}
    />
  );
}

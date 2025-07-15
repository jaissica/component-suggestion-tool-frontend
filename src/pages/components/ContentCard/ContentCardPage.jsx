import React from "react";
import {
  ContentCard,
  ContentCardBody,
  ContentCardTitle,
  ContentCardSubtitle,
  ContentCardImage,
  Button,
  Link,
  Typography,
  Divider,
  Utility,
} from "@visa/nova-react";

import {
  VisaChevronRightTiny,
  VisaFileUploadTiny,
  VisaAccountLow,
  VisaSecurityLockHigh,
  VisaArrowUpTiny,
} from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import sampleImage from "../../../assets/content-card.jpeg";
import styles from "./ContentCardPage.module.css"; // Import the CSS Module

const ContentCardExamples = () => (
  <Utility vFlex vFlexCol vGap={40}>
    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Default content card
        </Typography>
        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            <ContentCardSubtitle variant="subtitle-3">
              Subtitle
            </ContentCardSubtitle>
            <Typography>This is optional text.</Typography>
            <Utility vAlignItems="center" vFlex vGap={16} vPaddingTop={12}>
              <Button>Primary action</Button>
              <Link href="#" noUnderline aria-label="Go to destination">
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Content card with UI buttons
        </Typography>
        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <Utility vAlignItems="center" vFlex vJustifyContent="between">
              <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
              <Button
                aria-label="Export"
                buttonSize="small"
                colorScheme="tertiary"
                iconButton
              >
                <VisaFileUploadTiny />
              </Button>
            </Utility>
            <ContentCardSubtitle variant="subtitle-3">
              Subtitle
            </ContentCardSubtitle>
            <Typography>This is optional text.</Typography>
            <Utility vFlex vFlexWrap vGap={16} vPaddingTop={12}>
              <Button>Primary action</Button>
              <Link href="#" noUnderline aria-label="Go to destination">
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Clickable content card
        </Typography>
        <ContentCard
          clickable
          tag="button"
          aria-label="Click to view details"
          tabIndex="0"
        >
          <Utility
            element={<ContentCardBody tag="span" />}
            vFlex
            vFlexCol
            vGap={4}
          >
            <ContentCardTitle variant="headline-4" tag="span">
              Headline <VisaChevronRightTiny rtl className="v-icon-move" />
            </ContentCardTitle>
            <ContentCardSubtitle variant="subtitle-3" tag="span">
              Subtitle
            </ContentCardSubtitle>
            <Typography tag="span">Optional description.</Typography>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Compact content card
        </Typography>
        <ContentCard borderBlockEnd>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={10}>
            <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            <ContentCardSubtitle className="v-pt-4" variant="body-2">
              Optional detail text.
            </ContentCardSubtitle>
            <Utility vPaddingTop={12}>
              <Link href="#" noUnderline aria-label="Go to destination">
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Content card with category
        </Typography>
        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <Utility vAlignItems="center" vFlex vGap={6} vPaddingBottom={8}>
              <VisaAccountLow />
              <Typography
                style={{ color: "var(--palette-default-active)" }}
                variant="overline"
                tag="h3"
              >
                Category
              </Typography>
            </Utility>
            <ContentCardTitle variant="headline-4" tag="h4">
              Headline
            </ContentCardTitle>
            <ContentCardSubtitle variant="subtitle-3" tag="h5">
              Subtitle
            </ContentCardSubtitle>
            <Typography>This is optional text.</Typography>
            <Utility vFlex vGap={16} vPaddingTop={12}>
              <Button>Primary action</Button>
              <Link href="#" noUnderline aria-label="Go to destination">
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Content card with icon
        </Typography>
        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <Utility element={<VisaSecurityLockHigh />} vPaddingBottom={12} />
            <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            <Divider />
            <Typography>This is optional text.</Typography>
            <Utility vPaddingTop={12}>
              <Link href="#" noUnderline aria-label="Go to destination">
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Content card with image
        </Typography>
        <ContentCard style={{ inlineSize: "50vw" }}>
          <ContentCardImage
            src={sampleImage}
            alt="Sample image illustrating content card"
            tag="img"
            className={styles.contentCardImage} // Use CSS class for image
          />
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            <ContentCardSubtitle variant="subtitle-3">
              Subtitle
            </ContentCardSubtitle>
            <Typography>This is optional text.</Typography>
            <Utility vFlex vGap={16} vPaddingTop={12}>
              <Button>Primary action</Button>
              <Link href="#" noUnderline aria-label="Go to destination">
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4" className={styles.sectionHeader}>
          Compact dashboard content card
        </Typography>
        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <Utility vFlex vJustifyContent="between">
              <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            </Utility>
            <Typography className="v-pt-4">
              This is optional dashboard text.
            </Typography>
            <Utility vAlignItems="center" vFlex vGap={16} vPaddingTop={12}>
              <Typography
                style={{ color: "var(--palette-messaging-text-positive)" }}
                variant="display-2"
              >
                0,000
              </Typography>
              <Utility
                vAlignContent="end"
                vFlex
                vFlexCol
                vGap={4}
                vMarginTop={8}
              >
                <VisaArrowUpTiny title="Increasing" />
                <Typography>Label</Typography>
              </Utility>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    </section>
  </Utility>
);

const fullCode = `// Usage Examples
<ContentCard>
  <ContentCardBody>
    <ContentCardTitle>Headline</ContentCardTitle>
    <ContentCardSubtitle>Subtitle</ContentCardSubtitle>
    <Typography>Description</Typography>
  </ContentCardBody>
</ContentCard>`;

export default function ContentCardPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span className={styles.pageTitle}>ContentCard</span>
          <Utility
            vFlex
            vFlexRow
            vGap={16}
            vAlignItems="center"
            className={styles.buttonWrapper}
          >
            <HomeButton />
          </Utility>
        </div>
      }
      description="Compact displays summarizing or directing users to more information."
      preview={<ContentCardExamples />}
      code={fullCode}
      props={[
        {
          name: "borderBlockEnd",
          type: "boolean",
          default: "false",
          required: false,
          description: "Show bottom border on content card",
        },
        {
          name: "clickable",
          type: "boolean",
          default: "false",
          required: false,
          description: "Card Clickable",
        },
        {
          name: "ref",
          type: "ForwardedRef",
          required: false,
          description: "This is a useRef",
        },
        {
          name: "tag",
          type: "ElementType",
          default: "div",
          required: false,
          description: "Tag of Component",
        },
      ]}
    />
  );
}

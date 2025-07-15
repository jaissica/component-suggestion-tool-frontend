import React from "react";
import {
  Banner,
  BannerIcon,
  BannerContent,
  BannerCloseButton,
  Typography,
  Link,
  Button,
  Utility,
} from "@visa/nova-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./BannerPage.module.css";

// Informational Banners
const InfoBannerDefault = () => (
  <Banner aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography>
        This is required text that describes the banner in more detail.
      </Typography>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

const InfoBannerWithTitle = () => (
  <Banner aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography variant="body-2-bold">Informational title</Typography>
      <Typography>
        This is required text that describes the banner in more detail.
      </Typography>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

const InfoBannerWithLink = () => (
  <Banner aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography className="v-mb-8">
        This is required text that describes the banner in more detail.
      </Typography>
      <Link
        href="./banner"
        className="v-link"
        aria-label="Navigate to banner page"
      >
        Destination label
      </Link>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

const InfoBannerWithButton = () => (
  <Banner aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography className="v-mb-8">
        This is required text that describes the banner in more detail.
      </Typography>
      <Button aria-label="Take primary action">Primary action</Button>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

// Success Banners
const SuccessBannerDefault = () => (
  <Banner messageType="success" aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography>
        This is required text that describes the banner in more detail.
      </Typography>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

const SuccessBannerWithTitle = () => (
  <Banner messageType="success" aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography variant="body-2-bold">Success title</Typography>
      <Typography>
        This is required text that describes the banner in more detail.
      </Typography>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

// Warning Banner
const WarningBannerDefault = () => (
  <Banner messageType="warning" aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography>
        This is required text that describes the banner in more detail.
      </Typography>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

// Error Banner
const ErrorBannerDefault = () => (
  <Banner messageType="error" aria-live="assertive" role="alert">
    <BannerIcon />
    <BannerContent className="v-pl-2 v-pb-2">
      <Typography>
        This is required text that describes the banner in more detail.
      </Typography>
    </BannerContent>
    <BannerCloseButton aria-label="Close banner" />
  </Banner>
);

// Examples Section
const BannerExamples = () => (
  <Utility vFlex vFlexCol vGap={40}>
    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4">Informational Banners</Typography>
        <Utility vFlex vFlexCol vGap={16}>
          <InfoBannerDefault />
          <InfoBannerWithTitle />
          <InfoBannerWithLink />
          <InfoBannerWithButton />
        </Utility>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4">Success Banners</Typography>
        <Utility vFlex vFlexCol vGap={16}>
          <SuccessBannerDefault />
          <SuccessBannerWithTitle />
        </Utility>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4">Warning Banners</Typography>
        <Utility vFlex vFlexCol vGap={16}>
          <WarningBannerDefault />
        </Utility>
      </Utility>
    </section>

    <section className={styles.section}>
      <Utility vFlex vFlexCol vGap={12}>
        <Typography variant="headline-4">Error Banners</Typography>
        <Utility vFlex vFlexCol vGap={16}>
          <ErrorBannerDefault />
        </Utility>
      </Utility>
    </section>
  </Utility>
);

// Code Snippet
const fullCode = `// Usage Examples
<Banner messageType="success" aria-live="assertive" role="alert">
  <BannerIcon />
  <BannerContent>
    <Typography>Success message</Typography>
  </BannerContent>
  <BannerCloseButton aria-label="Close banner" />
</Banner>`;

export default function BannerPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span>Banner</span>
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
      description="Banners are used to display global messages for application status. Supports message types, close buttons, actions, and inline links."
      preview={<BannerExamples />}
      code={fullCode}
      props={[
        {
          name: "messageType",
          type: '"subtle" | "warning" | "error" | "success"',
          default: "subtle",
          required: false,
          description: "Message Type",
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
          required: false,
          description: "Tag of Component",
        },
      ]}
    />
  );
}

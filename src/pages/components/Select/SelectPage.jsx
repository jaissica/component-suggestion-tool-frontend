import React, { useState, useRef } from "react";
import {
  Select,
  Label,
  InputMessage,
  InputContainer,
  InputControl,
  Utility,
  Button,
  Typography,
  Checkbox,
} from "@visa/nova-react";
import { GenericChevronDownTiny, VisaErrorTiny } from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./SelectPage.module.css"; // Import the CSS Module

const options = ["Option A", "Option B", "Option C", "Option D", "Option E"];

const SelectExamples = () => {
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const selectRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const isDarkMode =
    typeof window !== "undefined" &&
    document?.documentElement?.getAttribute("data-theme") === "dark";

  return (
    <Utility vFlex vFlexCol vGap={40} className={styles.pageContainer}>
      {/* Default Select */}
      <section className={styles.sectionContainer}>
        <Typography variant="headline-4" className={styles.sectionTitle}>
          Default Select
        </Typography>
        <fieldset>
          <Label htmlFor="default-select">Label (required)</Label>
          <InputContainer>
            <Select id="default-select" aria-required="true">
              <option hidden value="" />
              {options.map((opt, i) => (
                <option key={i} value={i}>
                  {opt}
                </option>
              ))}
            </Select>
            <InputControl>
              <GenericChevronDownTiny
                style={{ color: isDarkMode ? "white" : "#1434CB" }}
              />
            </InputControl>
          </InputContainer>
        </fieldset>
      </section>

      {/* Inline Select */}
      <section className={styles.sectionContainer}>
        <Typography variant="headline-4" className={styles.sectionTitle}>
          Inline Select
        </Typography>
        <Utility
          tag="fieldset"
          vFlex
          vFlexRow
          vFlexColSm
          vGap={6}
          vAlignItems="center"
        >
          <Label htmlFor="inline-select">Label (required)</Label>
          <InputContainer>
            <Select id="inline-select" aria-required="true">
              <option hidden value="" />
              {options.map((opt, i) => (
                <option key={i} value={i}>
                  {opt}
                </option>
              ))}
            </Select>
            <InputControl>
              <GenericChevronDownTiny
                style={{ color: isDarkMode ? "white" : "#1434CB" }}
              />
            </InputControl>
          </InputContainer>
        </Utility>
      </section>

      {/* Select with Message */}
      <section className={styles.sectionContainer}>
        <Typography variant="headline-4" className={styles.sectionTitle}>
          Select with Message
        </Typography>
        <fieldset aria-labelledby="select-message">
          <Label htmlFor="select-message">Label (required)</Label>
          <InputContainer>
            <Select id="select-message" aria-describedby="select-message">
              <option hidden value="" />
              {options.map((opt, i) => (
                <option key={i} value={i}>
                  {opt}
                </option>
              ))}
            </Select>
            <InputControl>
              <GenericChevronDownTiny
                style={{ color: isDarkMode ? "white" : "#1434CB" }}
              />
            </InputControl>
          </InputContainer>
          <InputMessage id="select-message">
            This is optional text that describes the label in more detail.
          </InputMessage>
        </fieldset>
      </section>

      {/* Select with Error */}
      <section className={styles.sectionContainer}>
        <Typography variant="headline-4" className={styles.sectionTitle}>
          Select with Error
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const isInvalid = value === "";
            setInvalid(isInvalid);
            if (isInvalid) selectRef.current?.focus();
          }}
          noValidate
        >
          <fieldset aria-labelledby="error-select-message">
            <Label htmlFor="error-select">Label (required)</Label>
            <InputContainer>
              <Select
                id="error-select"
                ref={selectRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-invalid={invalid}
                aria-describedby="error-select-message"
              >
                <option hidden value="" />
                {options.map((opt, i) => (
                  <option key={i} value={i}>
                    {opt}
                  </option>
                ))}
              </Select>
              <InputControl>
                <GenericChevronDownTiny
                  style={{ color: isDarkMode ? "white" : "#1434CB" }}
                />
              </InputControl>
            </InputContainer>
            {invalid && (
              <InputMessage
                id="error-select-message"
                role="alert"
                aria-live="assertive"
              >
                <VisaErrorTiny /> This is required text that describes the
                error.
              </InputMessage>
            )}
          </fieldset>
          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </section>

      {/* Disabled Select */}
      <section className={styles.sectionContainer}>
        <Typography variant="headline-4" className={styles.sectionTitle}>
          Disabled Select (Toggle)
        </Typography>
        <fieldset>
          <Label htmlFor="disabled-select">Label (required)</Label>
          <InputContainer>
            <Select id="disabled-select" disabled={disabled}>
              <option hidden value="" />
              {options.map((opt, i) => (
                <option key={i} value={i}>
                  {opt}
                </option>
              ))}
            </Select>
            <InputControl>
              <GenericChevronDownTiny
                style={{ color: isDarkMode ? "white" : "#1434CB" }}
              />
            </InputControl>
          </InputContainer>
          <InputMessage>
            This is optional text that describes the label.
          </InputMessage>
        </fieldset>
        <Utility vAlignItems="center" vGap={2}>
          <Checkbox
            id="disable-toggle"
            checked={disabled}
            onChange={() => setDisabled(!disabled)}
          />
          <Label htmlFor="disable-toggle">Mark select as disabled</Label>
        </Utility>
      </section>
    </Utility>
  );
};

const fullCode = `// Usage Examples
<Select id="select-id">
  <option hidden value="" />
  <option value="a">Option A</option>
  <option value="b">Option B</option>
</Select>`;

export default function SelectPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.container}>
          <span>Select</span>
          <Utility
            vFlex
            vFlexRow
            vFlexColSm
            vGap={16}
            vAlignItems="center"
            className={styles.utilitySpacing}
          >
            <HomeButton />
          </Utility>
        </div>
      }
      description="Select allows users to choose one option from a dropdown menu. Supports inline labels, messages, error states, and disabled state toggling."
      preview={<SelectExamples />}
      code={fullCode}
      props={[
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the select input is disabled",
        },
        {
          name: "aria-invalid",
          type: "boolean",
          default: "false",
          description: "Marks the field as invalid",
        },
        {
          name: "id",
          type: "string",
          required: true,
          description: "Unique identifier for accessibility",
        },
        {
          name: "value",
          type: "string",
          description: "Current selected value",
        },
        {
          name: "onChange",
          type: "(event) => void",
          description: "Callback when the value changes",
        },
      ]}
    />
  );
}

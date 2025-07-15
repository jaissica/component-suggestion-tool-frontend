import React, { useState, useRef } from "react";
import {
  Input,
  InputContainer,
  InputMessage,
  Utility,
  Button,
  Typography,
} from "@visa/nova-react";
import {
  VisaClearAltTiny,
  VisaPasswordShowTiny,
  VisaPasswordHideTiny,
  VisaErrorTiny,
  GenericAccountLow,
} from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./InputPage.module.css";

const InputExamples = ({ isDarkMode }) => {
  const [clearValue, setClearValue] = useState("");
  const [showClear, setShowClear] = useState(false);
  const clearInputRef = useRef(null);

  const [errorValue, setErrorValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const errorInputRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    setClearValue("");
    setShowClear(false);
    clearInputRef.current?.focus();
  };

  const handleSubmit = () => {
    if (!errorValue.trim()) {
      setInputError(true);
      errorInputRef.current?.focus();
    } else {
      alert(`Submitted: ${errorValue}`);
      setInputError(false);
      setErrorValue("");
    }
  };

  const handleReset = () => {
    setErrorValue("");
    setInputError(false);
    errorInputRef.current?.focus();
  };

  const iconStyle = {
    color: isDarkMode ? "var(--text-color-muted)" : "#444",
  };

  const inputs = [
    {
      label: "Default Input",
      content: (
        <InputContainer>
          <Input
            id="default-input"
            type="text"
            aria-required="true"
            placeholder="Enter text here"
            className={styles.inputField}
          />
        </InputContainer>
      ),
    },
    {
      label: "Input with Inline Message",
      content: (
        <>
          <InputContainer>
            <Input
              id="inline-message"
              type="text"
              aria-describedby="inline-message-text"
              className={styles.inputField}
            />
          </InputContainer>
          <InputMessage id="inline-message-text">
            Optional description text.
          </InputMessage>
        </>
      ),
    },
    {
      label: "Input with Clear Button",
      content: (
        <InputContainer>
          <Input
            ref={clearInputRef}
            id="clear-button"
            value={clearValue}
            onChange={(e) => {
              setClearValue(e.target.value);
              setShowClear(!!e.target.value);
            }}
            type="text"
            placeholder="Type something"
            aria-describedby={showClear ? "clear-button-clear" : undefined}
            className={styles.inputField}
          />
          {showClear && (
            <Button
              type="button"
              iconButton
              aria-label="Clear input"
              buttonSize="small"
              colorScheme="tertiary"
              onClick={handleClear}
              subtle
              title="Clear input"
            >
              <VisaClearAltTiny style={iconStyle} />
            </Button>
          )}
        </InputContainer>
      ),
    },
    {
      label: "Password Input with Toggle",
      content: (
        <InputContainer>
          <Input
            id="password-toggle"
            type={showPassword ? "text" : "password"}
            aria-required="true"
            placeholder="Enter password"
            aria-describedby="password-toggle-description"
            className={styles.inputField}
          />
          <Button
            type="button"
            iconButton
            aria-label="Toggle Password"
            buttonSize="small"
            colorScheme="tertiary"
            onClick={() => setShowPassword(!showPassword)}
            title="Toggle visibility"
          >
            {showPassword ? (
              <VisaPasswordHideTiny style={iconStyle} />
            ) : (
              <VisaPasswordShowTiny style={iconStyle} />
            )}
          </Button>
        </InputContainer>
      ),
    },
    {
      label: "Input with Prefix and Suffix",
      content: (
        <InputContainer>
          <span className={styles.iconStyle}>$</span>
          <Input
            id="prefix"
            type="number"
            inputMode="decimal"
            pattern="[0-9]*"
            placeholder="Amount"
            aria-describedby="currency-input-description"
            className={styles.inputField}
          />
          <span className={styles.iconStyle}>.00</span>
        </InputContainer>
      ),
    },
    {
      label: "Input with Leading Icon",
      content: (
        <InputContainer>
          <GenericAccountLow className={styles.iconStyle} />
          <Input
            id="icon-input"
            type="text"
            placeholder="Username"
            aria-labelledby="username-label"
            className={styles.inputField}
          />
        </InputContainer>
      ),
    },
    {
      label: "Read-only Input",
      content: (
        <InputContainer>
          <Input
            id="readonly"
            type="text"
            value="Can't edit this"
            readOnly
            aria-readonly="true"
            className={styles.inputField}
          />
        </InputContainer>
      ),
    },
    {
      label: "Disabled Input",
      content: (
        <InputContainer>
          <Input
            id="disabled"
            type="text"
            disabled
            value="Not editable"
            aria-disabled="true"
            className={styles.inputField}
          />
        </InputContainer>
      ),
    },
    {
      label: "Input with Error and Reset",
      content: (
        <>
          <InputContainer>
            <Input
              id="error-input"
              ref={errorInputRef}
              value={errorValue}
              onChange={(e) => setErrorValue(e.target.value)}
              aria-required="true"
              aria-invalid={inputError}
              aria-describedby="error-msg"
              placeholder="Enter name"
              className={styles.inputField}
            />
          </InputContainer>
          {inputError && (
            <InputMessage
              aria-atomic="true"
              aria-live="assertive"
              role="alert"
              id="error-msg"
            >
              <VisaErrorTiny style={iconStyle} /> Name is required.
            </InputMessage>
          )}
          <Utility vFlex vFlexRow vGap={12} className={styles.buttonWrapper}>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button colorScheme="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Utility>
        </>
      ),
    },
  ];

  return (
    <Utility vFlex vFlexCol vGap={32} className={styles.formContainer}>
      <Utility vFlex vFlexCol vGap={4}>
        <Typography variant="headline-3">Input</Typography>
        <Typography variant="body-1">
          Use Input fields to capture user-entered text or numbers.
        </Typography>
      </Utility>
      {inputs.map(({ label, content }, i) => (
        <Utility tag="section" key={i} vFlex vFlexCol vGap={2}>
          <Typography variant="headline-4">{label}</Typography>
          {content}
        </Utility>
      ))}
    </Utility>
  );
};

const fullCode = `// Usage Examples
<InputContainer>
  <Input id="error-input" value={errorValue} aria-invalid={true} />
</InputContainer>
<InputMessage><VisaErrorTiny /> Name is required.</InputMessage>
<Button onClick={handleSubmit}>Submit</Button>
<Button onClick={handleReset}>Reset</Button>`;

export default function InputPage({ isDarkMode }) {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span className={styles.pageTitle}>Input</span>
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
      description="Input fields for collecting user-entered text or numbers. Includes variants for clear buttons, icons, password toggles, and read-only states, with validation and reset."
      preview={<InputExamples isDarkMode={isDarkMode} />}
      code={fullCode}
      props={[
        {
          name: "type",
          type: '"text" | "email" | "password" | "tel" | "number"',
          description: "Specifies the input type",
        },
        {
          name: "value",
          type: "string",
          description: "Current value of the input",
        },
        {
          name: "onChange",
          type: "(event) => void",
          description: "Handler to update the input state",
        },
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text displayed inside the input",
        },
        {
          name: "aria-required",
          type: "boolean",
          description: "Marks the input as required for accessibility",
        },
        {
          name: "aria-invalid",
          type: "boolean",
          description: "Indicates the input is invalid",
        },
        {
          name: "readOnly",
          type: "boolean",
          description: "Makes the input read-only",
        },
        {
          name: "disabled",
          type: "boolean",
          description: "Disables the input field",
        },
        {
          name: "inputMode",
          type: '"text" | "decimal" | "numeric" | "tel" | "email"',
          description: "Helps mobile keyboards optimize input",
        },
        {
          name: "pattern",
          type: "string",
          description: "Regex pattern for validation",
        },
      ]}
    />
  );
}

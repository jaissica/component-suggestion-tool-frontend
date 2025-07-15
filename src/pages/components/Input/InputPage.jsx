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
          <label htmlFor="default-input" className={styles.inputPageLabel}>
            Default Input
          </label>
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
            <label htmlFor="inline-message" className={styles.inputPageLabel}>
              Input with Inline Message
            </label>
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
          <label htmlFor="clear-button" className={styles.inputPageLabel}>
            Input with Clear Button
          </label>
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
          <label htmlFor="password-toggle" className={styles.inputPageLabel}>
            Password Input with Toggle
          </label>
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
          <label htmlFor="prefix" className={styles.inputPageLabel}>
            Input with Prefix and Suffix
          </label>
          <span className={styles.iconStyle}>$</span>
          <Input
            id="prefix"
            type="number"
            inputMode="decimal"
            pattern="[0-9]*"
            placeholder="Amount"
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
          <label htmlFor="icon-input" className={styles.inputPageLabel}>
            Input with Leading Icon
          </label>
          <GenericAccountLow className={styles.iconStyle} />
          <Input
            id="icon-input"
            type="text"
            placeholder="Username"
            className={styles.inputField}
          />
        </InputContainer>
      ),
    },
    {
      label: "Read-only Input",
      content: (
        <InputContainer>
          <label htmlFor="readonly" className={styles.inputPageLabel}>
            Read-only Input
          </label>
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
          <label htmlFor="disabled" className={styles.inputPageLabel}>
            Disabled Input
          </label>
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
            <label htmlFor="error-input" className={styles.inputPageLabel}>
              Input with Error and Reset
            </label>
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
        <Utility tag="section" key={i} vFlex vFlexCol vGap={16}>
          <Typography variant="headline-4">{label}</Typography>
          {content}
        </Utility>
      ))}
    </Utility>
  );
};

export default InputExamples;

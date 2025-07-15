import React, { useState, useRef } from "react";
import {
  Checkbox,
  InputMessage,
  Label,
  Utility,
  Button,
  UtilityFragment,
  Typography,
} from "@visa/nova-react";
import { VisaErrorTiny } from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./CheckboxPage.module.css"; // Import the CSS Module

const SectionWrapper = ({ title, children }) => (
  <section className={styles.section}>
    <Utility vFlex vFlexCol vGap={12}>
      <Typography variant="headline-4" className={styles.sectionHeader}>
        {title}
      </Typography>
      {children}
    </Utility>
  </section>
);

const InlineMessageCheckbox = () => {
  const id = "inline-message-checkbox";
  return (
    <SectionWrapper title="Checkbox with Inline Message">
      <fieldset aria-labelledby={`${id}-message`}>
        <Utility vFlex vGap={2}>
          <Checkbox id={id} aria-describedby={`${id}-message`} />
          <Utility vFlex vFlexCol vGap={2} vMarginVertical={10}>
            <Label htmlFor={id}>Checkbox with description</Label>
            <InputMessage id={`${id}-message`} className={styles.inputMessage}>
              This is optional text that describes the label in more detail.
            </InputMessage>
          </Utility>
        </Utility>
      </fieldset>
    </SectionWrapper>
  );
};

const CheckedCheckbox = () => {
  const id = "checked-checkbox";
  return (
    <SectionWrapper title="Checked by Default">
      <Utility vAlignItems="center" vFlex vGap={2}>
        <Checkbox id={id} defaultChecked aria-checked="true" />
        <Label htmlFor={id}>Checked by default</Label>
      </Utility>
    </SectionWrapper>
  );
};

const DisabledUncheckedCheckbox = () => {
  const id = "checkbox-disabled";
  return (
    <SectionWrapper title="Disabled Checkbox">
      <Utility vAlignItems="center" vFlex vGap={2}>
        <Checkbox id={id} disabled aria-disabled="true" />
        <Label htmlFor={id}>Disabled checkbox</Label>
      </Utility>
    </SectionWrapper>
  );
};

const GroupWithValidationCheckbox = () => {
  const id = "group-with-validation-checkbox";
  const checkboxRefs = useRef([]);
  const [checkboxes, setCheckboxes] = useState([
    { checked: false, label: "Label 1" },
    { checked: true, label: "Label 2" },
    { checked: false, label: "Label 3" },
    { checked: false, label: "Label 4" },
  ]);
  const [invalid, setInvalid] = useState(false);

  const handleChange = (i) => (e) => {
    const updated = [...checkboxes];
    updated[i].checked = e.target.checked;
    setCheckboxes(updated);
  };

  const handleSubmit = () => {
    const isInvalid = !checkboxes.some((cb) => cb.checked);
    setInvalid(isInvalid);
    if (isInvalid) checkboxRefs.current[0]?.focus();
    else alert("Group submitted!");
  };

  return (
    <SectionWrapper title="Group with Validation">
      <fieldset aria-labelledby={`${id}-legend`}>
        <Label
          tag="legend"
          id={`${id}-legend`}
          aria-describedby={`${id}-message`}
        >
          Group label
        </Label>
        <Utility tag="ul" vFlex vFlexCol>
          {checkboxes.map((cb, i) => (
            <Utility key={i} tag="li" vFlex vGap={2} vAlignItems="center">
              <Checkbox
                id={`${id}-option-${i}`}
                checked={cb.checked}
                onChange={handleChange(i)}
                aria-invalid={invalid}
                ref={(el) => (checkboxRefs.current[i] = el)}
                aria-describedby={`${id}-message`}
              />
              <Label htmlFor={`${id}-option-${i}`}>{cb.label}</Label>
            </Utility>
          ))}
        </Utility>
        {invalid && (
          <UtilityFragment vMarginTop={4}>
            <InputMessage
              id={`${id}-message`}
              aria-atomic="true"
              aria-live="assertive"
              role="alert"
              className={styles.inputMessage}
            >
              <VisaErrorTiny /> At least one checkbox must be selected.
            </InputMessage>
          </UtilityFragment>
        )}
      </fieldset>
      <UtilityFragment vMarginTop={12}>
        <Button onClick={handleSubmit}>Submit</Button>
      </UtilityFragment>
    </SectionWrapper>
  );
};

const IndeterminateGroupCheckbox = () => {
  const id = "indeterminate-group-checkbox";
  const [children, setChildren] = useState([
    { label: "L2 label 1", checked: true },
    { label: "L2 label 2", checked: false },
    { label: "L2 label 3", checked: false },
  ]);

  const allChecked = children.every((c) => c.checked);
  const someChecked = children.some((c) => c.checked);

  const handleParentChange = (checked) => {
    setChildren(children.map((c) => ({ ...c, checked })));
  };

  const handleChildChange = (index) => (e) => {
    const updated = [...children];
    updated[index].checked = e.target.checked;
    setChildren(updated);
  };

  return (
    <SectionWrapper title="Indeterminate Parent-Child Group">
      <fieldset aria-labelledby={`${id}-legend`}>
        <Label id={`${id}-legend`} tag="legend">
          Parent-child group with indeterminate state
        </Label>
        <Utility tag="ul" vFlex vFlexCol>
          <Utility tag="li" vFlex vGap={2} vAlignItems="center">
            <Checkbox
              id={`${id}-parent`}
              checked={allChecked}
              indeterminate={!allChecked && someChecked}
              onChange={(e) => handleParentChange(e.target.checked)}
              aria-checked={
                allChecked ? "true" : someChecked ? "mixed" : "false"
              }
            />
            <Label htmlFor={`${id}-parent`}>L1 label 1</Label>
          </Utility>
          {children.map((child, index) => (
            <Utility
              key={index}
              tag="li"
              vFlex
              vGap={2}
              vAlignItems="center"
              vMarginLeft={16}
            >
              <Checkbox
                id={`${id}-child-${index}`}
                checked={child.checked}
                onChange={handleChildChange(index)}
              />
              <Label htmlFor={`${id}-child-${index}`}>{child.label}</Label>
            </Utility>
          ))}
        </Utility>
      </fieldset>
    </SectionWrapper>
  );
};

const ValidationCheckbox = () => {
  const id = "validation-checkbox";
  const checkboxRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = () => {
    if (!checked) {
      setInvalid(true);
      checkboxRef.current?.focus();
    } else {
      setInvalid(false);
      alert("Submitted!");
    }
  };

  return (
    <SectionWrapper title="Single Checkbox with Validation">
      <fieldset aria-labelledby={`${id}-message`}>
        <Utility vFlex vFlexCol>
          <Utility vFlex vGap={2} vAlignItems="center">
            <Checkbox
              id={id}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              aria-required="true"
              aria-invalid={invalid}
              aria-describedby={`${id}-message`}
              ref={checkboxRef}
            />
            <Label htmlFor={id}>Single checkbox (required)</Label>
          </Utility>
          {invalid && (
            <UtilityFragment vMarginTop={4}>
              <InputMessage
                id={`${id}-message`}
                aria-atomic="true"
                aria-live="assertive"
                role="alert"
                className={styles.inputMessage}
              >
                <VisaErrorTiny /> This field is required.
              </InputMessage>
            </UtilityFragment>
          )}
        </Utility>
      </fieldset>
      <UtilityFragment vMarginTop={12}>
        <Button onClick={handleSubmit}>Submit</Button>
      </UtilityFragment>
    </SectionWrapper>
  );
};

const fullCode = `// Usage Examples
<Checkbox />
<Checkbox defaultChecked />
<Checkbox disabled />
<Checkbox checked={state} onChange={handleChange} />
<Checkbox indeterminate />
`;

export default function CheckboxPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span className={styles.pageTitle}>Checkbox</span>
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
      description="Checkboxes let users select one or more options. Includes styled and themed variants."
      preview={
        <Utility vFlex vFlexCol vGap={40}>
          <InlineMessageCheckbox />
          <CheckedCheckbox />
          <DisabledUncheckedCheckbox />
          <GroupWithValidationCheckbox />
          <IndeterminateGroupCheckbox />
          <ValidationCheckbox />
        </Utility>
      }
      code={fullCode}
      props={[
        {
          name: "checked",
          type: "boolean",
          description: "Whether the checkbox is selected",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          description: "Initial checked state for uncontrolled checkbox",
        },
        {
          name: "indeterminate",
          type: "boolean",
          description: "If true, shows the indeterminate state",
        },
        {
          name: "onChange",
          type: "(event) => void",
          description: "Callback when checkbox is toggled",
        },
        {
          name: "disabled",
          type: "boolean",
          description: "Disables the checkbox",
        },
        {
          name: "aria-invalid",
          type: "boolean",
          description: "Marks the checkbox as invalid for accessibility",
        },
      ]}
    />
  );
}

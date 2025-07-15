import React, { useState, useRef } from "react";
import {
  Radio,
  Label,
  Typography,
  InputMessage,
  Utility,
  Button,
} from "@visa/nova-react";
import { VisaErrorTiny } from "@visa/nova-icons-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./RadioGroupPage.module.css";

const RadioExamples = () => {
  const singleRef = useRef(null);
  const [singleChecked, setSingleChecked] = useState(false);
  const [singleInvalid, setSingleInvalid] = useState(false);
  const errorGroupRef = useRef(null);
  const [groupError, setGroupError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const radioList = ["Label 1", "Label 2", "Label 3"];

  const sectionData = [
    {
      title: "Default Radio",
      content: (
        <Utility vAlignItems="center" vFlex vGap={2}>
          <Radio id="radio1" name="group1" />
          <Label htmlFor="radio1">Label</Label>
        </Utility>
      ),
    },
    {
      title: "Radio with Description",
      content: (
        <Utility vFlex vGap={2}>
          <Radio id="desc-radio" name="group2" />
          <Utility vFlex vFlexCol vGap={2}>
            <Label htmlFor="desc-radio">Label</Label>
            <InputMessage>
              This is optional text that describes the label.
            </InputMessage>
          </Utility>
        </Utility>
      ),
    },
    {
      title: "Selected by Default",
      content: (
        <Utility vAlignItems="center" vFlex vGap={2}>
          <Radio defaultChecked id="selected-radio" name="group3" />
          <Label htmlFor="selected-radio">Checked Option</Label>
        </Utility>
      ),
    },
    {
      title: "Disabled Radio",
      content: (
        <Utility vAlignItems="center" vFlex vGap={2}>
          <Radio disabled id="disabled-radio" name="group4" />
          <Label htmlFor="disabled-radio">Disabled</Label>
        </Utility>
      ),
    },
    {
      title: "Disabled & Checked",
      content: (
        <Utility vAlignItems="center" vFlex vGap={2}>
          <Radio defaultChecked disabled id="disabled-checked" name="group4" />
          <Label htmlFor="disabled-checked">Disabled & Checked</Label>
        </Utility>
      ),
    },
    {
      title: "Single Validation",
      content: (
        <Utility vFlex vFlexCol>
          <Utility vFlex vGap={2} vAlignItems="center">
            <Radio
              id="validation-radio"
              name="validation"
              checked={singleChecked}
              onChange={(e) => setSingleChecked(e.target.checked)}
              aria-invalid={singleInvalid}
              aria-describedby="validation-msg"
              ref={singleRef}
              aria-required="true"
            />
            <Label htmlFor="validation-radio">Required</Label>
          </Utility>
          {singleInvalid && (
            <InputMessage id="validation-msg" role="alert">
              <VisaErrorTiny /> You must select this option.
            </InputMessage>
          )}
          <Button
            onClick={() => {
              if (!singleChecked) {
                setSingleInvalid(true);
                singleRef.current?.focus();
              } else {
                setSingleInvalid(false);
              }
            }}
            className={styles.marginTopButton}
          >
            Submit
          </Button>
        </Utility>
      ),
    },
    {
      title: "Radio Group",
      content: (
        <Utility vFlex vFlexCol vGap={4}>
          {radioList.map((label, idx) => (
            <Utility key={idx} vAlignItems="center" vFlex vGap={2}>
              <Radio id={`group-radio-${idx}`} name="group5" />
              <Label htmlFor={`group-radio-${idx}`}>{label}</Label>
            </Utility>
          ))}
        </Utility>
      ),
    },
    {
      title: "Radio Group with Error",
      content: (
        <Utility vFlex vFlexCol vGap={4}>
          {radioList.map((label, idx) => (
            <Utility key={idx} vAlignItems="center" vFlex vGap={2}>
              <Radio
                id={`error-radio-${idx}`}
                name="group6"
                value={String(idx)}
                checked={selectedOption === String(idx)}
                onChange={(e) => setSelectedOption(e.target.value)}
                ref={idx === 0 ? errorGroupRef : undefined}
              />
              <Label htmlFor={`error-radio-${idx}`}>{label}</Label>
            </Utility>
          ))}
          {groupError && (
            <InputMessage id="error-msg" role="alert">
              <VisaErrorTiny /> Please select one option.
            </InputMessage>
          )}
          <Utility vFlex vFlexRow vGap={12}>
            <Button
              onClick={() => {
                if (!selectedOption) {
                  setGroupError(true);
                  errorGroupRef.current?.focus();
                } else {
                  setGroupError(false);
                }
              }}
            >
              Submit
            </Button>
            <Button
              colorScheme="secondary"
              onClick={() => setSelectedOption("")}
            >
              Reset
            </Button>
          </Utility>
        </Utility>
      ),
    },
    {
      title: "Horizontal Radio Group",
      content: (
        <Utility vFlex vFlexRow vFlexColSm vGap={24}>
          {radioList.map((label, idx) => (
            <Utility key={idx} vAlignItems="center" vFlex vGap={2}>
              <Radio id={`horizontal-${idx}`} name="group7" />
              <Label htmlFor={`horizontal-${idx}`}>{label}</Label>
            </Utility>
          ))}
        </Utility>
      ),
    },
  ];

  return (
    <Utility vFlex vFlexCol vGap={32}>
      {sectionData.map(({ title, content }, i) => (
        <section key={i}>
          <Utility vFlex vFlexCol vGap={2}>
            <Typography variant="headline-4">{title}</Typography>
            {content}
          </Utility>
        </section>
      ))}
    </Utility>
  );
};

const fullCode = `// Usage Examples
<Radio id="radio1" name="group1" />
<Label htmlFor="radio1">Label</Label>

<Radio defaultChecked id="selected-radio" name="group2" />
<Radio disabled id="disabled-radio" name="group3" />
<Radio defaultChecked disabled id="disabled-checked" name="group3" />

// With validation and error states (see component code for logic)
<Radio checked={singleChecked} aria-invalid={singleInvalid} />
<InputMessage role="alert">You must select this option</InputMessage>`;

export default function RadioGroupPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.titleBar}>
          <span>Radio</span>
          <Utility
            vFlex
            vFlexRow
            vFlexColSm
            vGap={16}
            vAlignItems="center"
            className={styles.homeButtonBar}
          >
            <HomeButton />
          </Utility>
        </div>
      }
      description="Radio buttons let users select one option from a group."
      preview={<RadioExamples />}
      code={fullCode}
      props={[
        {
          name: "checked",
          type: "boolean",
          description: "Whether the radio is selected",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          description: "Initial checked state for uncontrolled radio",
        },
        {
          name: "disabled",
          type: "boolean",
          description: "Disables the radio button",
        },
        {
          name: "aria-invalid",
          type: "boolean",
          description: "Marks the radio as invalid for accessibility",
        },
        {
          name: "onChange",
          type: "(event) => void",
          description: "Callback when the radio is toggled",
        },
      ]}
    />
  );
}

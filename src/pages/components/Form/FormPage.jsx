import React, { useState } from "react";
import {
  Input,
  Button,
  Utility,
  Typography,
  Textarea,
  Checkbox,
} from "@visa/nova-react";
import ComponentDocLayout from "../../../components/ComponentDocLayout/ComponentDocLayout";
import HomeButton from "../../../components/HomeButton/HomeButton";
import styles from "./FormPage.module.css";

const FormExample = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    notes: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    const value =
      e?.target?.type === "checkbox"
        ? e.target.checked
        : e?.target?.value ?? "";
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "Enter your first name";
    if (!form.lastName.trim()) errs.lastName = "Enter your last name";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!form.email.includes("@")) {
      errs.email = "Email must include '@'";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    if (!form.notes.trim()) {
      errs.notes = "Notes field cannot be empty";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      alert(
        `Form submitted successfully.\nRemember me: ${
          form.rememberMe ? "Yes" : "No"
        }`
      );
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        notes: "",
        rememberMe: false,
      });
      setSubmitted(false);
    }
  };

  return (
    <Utility vFlex vFlexCol vGap={32} className={styles.formContainer}>
      <Typography variant="headline-4">User Information Form</Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Utility vFlex vFlexCol vGap={20}>
          <Input
            id="firstName"
            value={form.firstName}
            onChange={handleChange("firstName")}
            status={errors.firstName ? "error" : undefined}
            aria-required="true"
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            placeholder="First name"
            className={styles.inputField}
          />
          {errors.firstName && (
            <Typography
              id="firstName-error"
              variant="body-3"
              className={styles.errorText}
            >
              {errors.firstName}
            </Typography>
          )}

          <Input
            id="lastName"
            value={form.lastName}
            onChange={handleChange("lastName")}
            status={errors.lastName ? "error" : undefined}
            aria-required="true"
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            placeholder="Last name"
            className={styles.inputField}
          />
          {errors.lastName && (
            <Typography
              id="lastName-error"
              variant="body-3"
              className={styles.errorText}
            >
              {errors.lastName}
            </Typography>
          )}

          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            status={errors.email ? "error" : undefined}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="Email address"
            className={styles.inputField}
          />
          {errors.email && (
            <Typography
              id="email-error"
              variant="body-3"
              className={styles.errorText}
            >
              {errors.email}
            </Typography>
          )}

          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            status={errors.phone ? "error" : undefined}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="Phone number"
            className={styles.inputField}
          />
          {errors.phone && (
            <Typography
              id="phone-error"
              variant="body-3"
              className={styles.errorText}
            >
              {errors.phone}
            </Typography>
          )}

          <Input
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
            status={errors.password ? "error" : undefined}
            aria-required="true"
            aria-describedby={errors.password ? "password-error" : undefined}
            placeholder="Password"
            className={styles.inputField}
          />
          {errors.password && (
            <Typography
              id="password-error"
              variant="body-3"
              className={styles.errorText}
            >
              {errors.password}
            </Typography>
          )}

          <Textarea
            id="notes"
            value={form.notes}
            onChange={handleChange("notes")}
            status={errors.notes ? "error" : undefined}
            aria-required="true"
            aria-describedby={errors.notes ? "notes-error" : undefined}
            placeholder="Add any additional notes here"
            className={styles.textareaField}
          />
          {errors.notes && (
            <Typography
              id="notes-error"
              variant="body-3"
              className={styles.errorText}
            >
              {errors.notes}
            </Typography>
          )}

          <Utility vFlex vFlexRow vAlignItems="center" vGap={8}>
            <Checkbox
              id="rememberMe"
              label="Remember me"
              checked={form.rememberMe}
              onChange={handleChange("rememberMe")}
            />
            <Typography variant="body-3" className={styles.rememberText}>
              Keep me signed in on this device
            </Typography>
          </Utility>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            className={styles.submitButton}
          >
            Submit
          </Button>
        </Utility>
      </form>
    </Utility>
  );
};

export default function FormPage() {
  return (
    <ComponentDocLayout
      title={
        <div className={styles.pageTitleWrapper}>
          <span className={styles.pageTitle}>Form</span>
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
      description="A multi-field form example demonstrating input types, validation, accessibility, and message feedback."
      preview={<FormExample />}
      code={`// Visa Nova form with checkbox
<Input id="email" type="email" />
<Input id="password" type="password" />
<Textarea id="notes" />
<Checkbox id="rememberMe" label="Remember me" />
<Button type="submit">Submit</Button>`}
      props={[
        {
          name: "id",
          type: "string",
          description: "Unique identifier for the input field.",
        },
        {
          name: "type",
          type: `"text" | "email" | "password" | "tel"`,
          description: "Specifies the input type.",
        },
        {
          name: "value",
          type: "string",
          description: "Current value of the input.",
        },
        {
          name: "onChange",
          type: "(event) => void",
          description: "Handler to update the input state.",
        },
        {
          name: "status",
          type: `"error" | "success"`,
          description: "Visually indicates input validation state.",
        },
        {
          name: "aria-required",
          type: "boolean",
          description: "Marks the input as required for accessibility.",
        },
        {
          name: "label",
          type: "string",
          description: "Label for the input or checkbox.",
        },
      ]}
    />
  );
}

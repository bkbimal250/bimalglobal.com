"use client";

import { useId, useState, type FormEvent } from "react";

import { contactPage } from "@/content/contact";

type FormStatus = "idle" | "submitting" | "success" | "delivery-unavailable" | "error";

type FieldErrors = Partial<
  Record<"email" | "message" | "name" | "projectType", string>
>;

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (response.status === 501) {
        setStatus("delivery-unavailable");
        return;
      }

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          errors?: FieldErrors;
        } | null;

        setErrors(payload?.errors ?? {});
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="grid gap-5"
      id="contact-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          error={errors.name}
          formId={formId}
          label="Name"
          name="name"
          required
        />
        <Field
          error={errors.email}
          formId={formId}
          label="Work Email"
          name="email"
          required
          type="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field formId={formId} label="Company / Organization" name="company" />
        <SelectField
          error={errors.projectType}
          formId={formId}
          label="What can we help with?"
          name="projectType"
          options={contactPage.fields.helpTopics}
          required
        />
      </div>
      <SelectField
        formId={formId}
        label="Optional Timeline"
        name="timeline"
        options={contactPage.fields.timelines}
      />
      <TextAreaField
        error={errors.message}
        formId={formId}
        label="Tell us about your project"
        name="message"
        placeholder="Describe what you want to build, the problem you are solving, any existing system, major requirements, and timeline if known."
        required
      />
      <button
        className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting"
          ? contactPage.form.loadingLabel
          : contactPage.form.submitLabel}
        <span aria-hidden="true" className="ml-8 text-lg leading-none">
          &rarr;
        </span>
      </button>
      <StatusMessage status={status} />
    </form>
  );
}

function Field({
  error,
  formId,
  label,
  name,
  required = false,
  type = "text",
}: {
  error?: string;
  formId: string;
  label: string;
  name: "company" | "email" | "name";
  required?: boolean;
  type?: string;
}) {
  const inputId = `${formId}-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="grid gap-3">
      <label className="font-sans text-sm font-semibold text-[#171817]" htmlFor={inputId}>
        {label}
        {required ? <span className="text-[#e35d3f]"> *</span> : null}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? "true" : "false"}
        className="min-h-12 border border-[#171817]/18 bg-[#f7f7f2] px-4 text-base font-normal text-[#171817] outline-none transition-colors placeholder:text-[#171817]/38 focus:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
        id={inputId}
        name={name}
        required={required}
        type={type}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function SelectField({
  error,
  formId,
  label,
  name,
  options,
  required = false,
}: {
  error?: string;
  formId: string;
  label: string;
  name: "projectType" | "timeline";
  options: readonly string[];
  required?: boolean;
}) {
  const inputId = `${formId}-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="grid gap-3">
      <label className="font-sans text-sm font-semibold text-[#171817]" htmlFor={inputId}>
        {label}
        {required ? <span className="text-[#e35d3f]"> *</span> : null}
      </label>
      <select
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? "true" : "false"}
        className="min-h-12 border border-[#171817]/18 bg-[#f7f7f2] px-4 text-base font-normal text-[#171817] outline-none transition-colors focus:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
        id={inputId}
        name={name}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function TextAreaField({
  error,
  formId,
  label,
  name,
  placeholder,
  required = false,
}: {
  error?: string;
  formId: string;
  label: string;
  name: "message";
  placeholder: string;
  required?: boolean;
}) {
  const inputId = `${formId}-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="grid gap-3">
      <label className="font-sans text-sm font-semibold text-[#171817]" htmlFor={inputId}>
        {label}
        {required ? <span className="text-[#e35d3f]"> *</span> : null}
      </label>
      <textarea
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? "true" : "false"}
        className="min-h-44 resize-y border border-[#171817]/18 bg-[#f7f7f2] px-4 py-4 text-base font-normal leading-7 text-[#171817] outline-none transition-colors placeholder:text-[#171817]/38 focus:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
        id={inputId}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="font-sans text-sm font-semibold text-[#b6422b]" id={id}>
      {message}
    </p>
  );
}

function StatusMessage({ status }: { status: FormStatus }) {
  return (
    <div aria-live="polite" className="min-h-7">
      {status === "success" ? (
        <p className="font-sans text-sm font-semibold text-[#1f6b45]">
          {contactPage.form.successMessage}
        </p>
      ) : null}
      {status === "delivery-unavailable" ? (
        <p className="font-sans text-sm font-semibold text-[#8a4c17]">
          {contactPage.form.deliveryUnavailableMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="font-sans text-sm font-semibold text-[#b6422b]">
          {contactPage.form.errorMessage}
        </p>
      ) : null}
    </div>
  );
}

function validateForm(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = getFormValue(formData, "name");
  const email = getFormValue(formData, "email");
  const projectType = getFormValue(formData, "projectType");
  const message = getFormValue(formData, "message");

  if (!name) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your work email.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!projectType) {
    errors.projectType = "Please choose the closest topic.";
  }

  if (!message) {
    errors.message = "Please describe the project or problem.";
  }

  return errors;
}

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

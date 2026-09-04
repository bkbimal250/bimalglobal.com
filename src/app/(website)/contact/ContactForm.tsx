"use client";

import { useState, type FormEvent } from "react";

import { contactPage } from "@/content/contact";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" required type="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Project Type"
          name="projectType"
          options={contactPage.fields.projectTypes}
          required
        />
        <SelectField
          label="Budget Context"
          name="budget"
          options={contactPage.fields.budgets}
        />
      </div>
      <label className="grid gap-3 font-sans text-sm font-semibold text-[#171817]">
        Message
        <textarea
          className="min-h-44 resize-y border border-[#171817]/18 bg-[#f7f7f2] px-4 py-4 text-base font-normal leading-7 text-[#171817] outline-none transition-colors placeholder:text-[#171817]/38 focus:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
          name="message"
          placeholder="Tell us about the product, system, timeline, constraints, or decision you are working through."
          required
        />
      </label>
      <button
        className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={state === "submitting"}
        type="submit"
      >
        {state === "submitting" ? "Sending..." : contactPage.form.submitLabel}
        <span aria-hidden="true" className="ml-8 text-lg leading-none">
          &rarr;
        </span>
      </button>
      <div aria-live="polite" className="min-h-7">
        {state === "success" ? (
          <p className="font-sans text-sm font-semibold text-[#1f6b45]">
            {contactPage.form.successMessage}
          </p>
        ) : null}
        {state === "error" ? (
          <p className="font-sans text-sm font-semibold text-[#b6422b]">
            {contactPage.form.errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="grid gap-3 font-sans text-sm font-semibold text-[#171817]">
      {label}
      <input
        className="min-h-12 border border-[#171817]/18 bg-[#f7f7f2] px-4 text-base font-normal text-[#171817] outline-none transition-colors placeholder:text-[#171817]/38 focus:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label className="grid gap-3 font-sans text-sm font-semibold text-[#171817]">
      {label}
      <select
        className="min-h-12 border border-[#171817]/18 bg-[#f7f7f2] px-4 text-base font-normal text-[#171817] outline-none transition-colors focus:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
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
    </label>
  );
}

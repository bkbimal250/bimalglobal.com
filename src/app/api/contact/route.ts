import { NextResponse } from "next/server";

type ContactFieldErrors = Partial<
  Record<"email" | "message" | "name" | "projectType", string>
>;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Invalid contact request" },
      { status: 400 },
    );
  }

  const errors = validateContactPayload(body as Record<string, unknown>);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { errors, message: "Please review the contact form fields." },
      { status: 422 },
    );
  }

  return NextResponse.json(
    {
      message:
        "Contact form validation passed, but delivery is not configured.",
      status: "delivery-not-configured",
    },
    { status: 501 },
  );
}

function validateContactPayload(payload: Record<string, unknown>) {
  const errors: ContactFieldErrors = {};
  const name = getString(payload.name);
  const email = getString(payload.email);
  const projectType = getString(payload.projectType);
  const message = getString(payload.message);

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

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

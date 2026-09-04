import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Invalid contact request" },
      { status: 400 },
    );
  }

  const { email, message, name, projectType } = body as Record<string, unknown>;

  if (
    typeof email !== "string" ||
    typeof message !== "string" ||
    typeof name !== "string" ||
    typeof projectType !== "string" ||
    !email.trim() ||
    !message.trim() ||
    !name.trim() ||
    !projectType.trim()
  ) {
    return NextResponse.json(
      { message: "Name, email, project type, and message are required" },
      { status: 422 },
    );
  }

  return NextResponse.json({
    message: "Contact inquiry received",
    status: "ready-for-integration",
  });
}

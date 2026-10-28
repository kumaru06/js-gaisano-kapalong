import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";

const demonstrationMessage =
  "Your inquiry was checked on the server. It was not emailed or saved, because no delivery service is configured. This form is a demonstration.";

const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < 10 * 60 * 1000);

  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many attempts. Wait a few minutes and try again.",
      },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The inquiry could not be read." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Check the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({
      ok: true,
      delivered: false,
      message: demonstrationMessage,
    });
  }

  return NextResponse.json({
    ok: true,
    delivered: false,
    message: demonstrationMessage,
  });
}

import { NextResponse, type NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { checkRateLimit } from "@/lib/rate-limit";
import { env } from "@/lib/env";
import { sendEmail } from "@/lib/email";

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateCheck = await checkRateLimit(`contact:${ip}`, env.rateLimitRequests, env.rateLimitWindowMs);

  if (!rateCheck.success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((rateCheck.reset - Date.now()) / 1000).toString(),
        },
      },
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 422 });
  }

  if (parsed.data._company?.length) {
    return NextResponse.json({ success: true, message: "Thanks for reaching out." });
  }

  const { name, email, phone, message, service } = parsed.data;
  const subject = `Contact form inquiry from ${name}`;
  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    service ? `Service: ${service}` : "",
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  await sendEmail({
    subject,
    text: details,
    html: details.replace(/\n/g, "<br />"),
  });

  return NextResponse.json({ success: true, message: "Thanks! We’ll be in touch shortly." });
}


import { NextResponse, type NextRequest } from "next/server";
import { requestServiceSchema } from "@/lib/validators";
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
  const rateCheck = await checkRateLimit(`request:${ip}`, env.rateLimitRequests, env.rateLimitWindowMs);

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
  const parsed = requestServiceSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 422 });
  }

  if (parsed.data._company?.length) {
    return NextResponse.json({ success: true });
  }

  const {
    name,
    email,
    phone,
    address,
    city,
    service,
    urgency,
    details,
    preferredDate,
    preferredTimeWindow,
    contactPreference,
  } = parsed.data;

  const subject = `Service request: ${service} from ${name}`;
  const body = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
    City: ${city}
    Service: ${service}
    Urgency: ${urgency}
    Preferred date: ${preferredDate || "Flexible"}
    Preferred time: ${preferredTimeWindow}
    Contact preference: ${contactPreference}

    Details:
    ${details}
  `;

  await sendEmail({
    subject,
    text: body,
    html: body.replace(/\n/g, "<br />"),
  });

  return NextResponse.json({ success: true, message: "Request received. We’ll confirm shortly." });
}


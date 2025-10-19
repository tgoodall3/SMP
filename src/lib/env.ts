import { EMAIL_FALLBACK, PHONE_FALLBACK } from "@/lib/utils";

const SITE_URL_FALLBACK = "https://www.simplemanplumbing.com";

export const env = {
  phone: process.env.NEXT_PUBLIC_PHONE || PHONE_FALLBACK,
  email: process.env.NEXT_PUBLIC_EMAIL || EMAIL_FALLBACK,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK,
  serviceAreaMapUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL || "",
  rateLimitRequests: Number(process.env.RATE_LIMIT_REQUESTS || 5),
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 60_000),
  smtpHost: process.env.SMTP_HOST,
  smtpPort: Number(process.env.SMTP_PORT || 587),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  smtpFrom: process.env.SMTP_FROM || "Simple Man Plumbing <no-reply@simplemanplumbing.com>",
};

export type Env = typeof env;


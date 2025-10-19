import { Mail, MapPin, Phone } from "lucide-react";
import { env } from "@/lib/env";
import { siteConfig } from "@/config/site";
import { formatPhoneNumber } from "@/lib/utils";

export function ContactDetails() {
  // Safe fallbacks if env is missing
  const rawPhone = env?.phone ?? siteConfig?.phone ?? "";
  const email = env?.email ?? siteConfig?.email ?? "";
  const telHref = rawPhone ? `tel:${rawPhone.replace(/[^\d+]/g, "")}` : undefined;

  return (
    <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="font-heading text-2xl font-semibold text-brand-navy">
        Let&apos;s talk plumbing
      </h2>

      <p className="text-sm text-slate-600">
        Reach out however you prefer. We respond quickly during business hours, and we monitor urgent calls after hours.
      </p>

      <ul className="space-y-3 text-sm text-slate-600">
        {telHref && (
          <li className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-brand-sky" aria-hidden="true" />
            <a href={telHref} className="font-semibold text-brand-navy hover:underline" aria-label={`Call ${rawPhone}`}>
              {formatPhoneNumber(rawPhone)}
            </a>
          </li>
        )}

        {email && (
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-brand-sky" aria-hidden="true" />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </li>
        )}

        <li className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-brand-sky" aria-hidden="true" />
          <span>
            {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}
          </span>
        </li>
      </ul>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-semibold text-brand-navy">Hours</p>
        <p>{siteConfig.hours.standard}</p>
        <p className="text-brand-navy">{siteConfig.hours.emergency}</p>
      </div>
    </div>
  );
}

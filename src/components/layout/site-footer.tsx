import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";

export function SiteFooter() {
  const telHref = `tel:${env.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-brand-navy">{siteConfig.name}</h3>
          <p className="text-sm text-slate-600">
            Reliable, respectful plumbers serving Fortville, greater Indianapolis, and the surrounding suburbs. Every visit includes
            straight talk, clean work, and transparent pricing.
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-brand-sky" aria-hidden />
              <Link href={telHref} className="font-semibold text-brand-navy hover:underline">
                {formatPhoneNumber(env.phone)}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-sky" aria-hidden />
              <Link href={`mailto:${env.email}`} className="hover:underline">
                {env.email}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-sky" aria-hidden />
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold text-brand-navy">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {siteConfig.navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-navy hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-brand-navy hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand-navy hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold text-brand-navy">Service areas</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {siteConfig.location.serviceAreas.map((city) => (
              <li key={city}>{city}, Indiana</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold text-brand-navy">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{siteConfig.hours.standard}</li>
            <li className="font-semibold text-brand-navy">{siteConfig.hours.emergency}</li>
          </ul>
          <div className="mt-4">
            <h5 className="font-heading text-sm font-semibold text-brand-navy">Stay in touch</h5>
            <ul className="mt-2 flex gap-3 text-sm font-medium text-brand-navy">
              {siteConfig.social.map((social) => (
                <li key={social.name}>
                  <Link href={social.href} className="hover:underline" target="_blank" rel="noreferrer">
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}



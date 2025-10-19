import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { Container } from "@/components/layout/container";

type Badge = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const BADGES: Badge[] = [
  {
    title: "Licensed & insured",
    description:
      "Indiana plumbing license #PC123456 — bonded and insured for residential and light commercial work across central Indiana.",
    icon: ShieldCheck,
  },
  {
    title: "Upfront pricing",
    description:
      "Every quote includes parts, labor, and warranty. No dispatch fees when you approve the work.",
    icon: Sparkles,
  },
  {
    title: "Same-day service",
    description:
      "Technicians based in Fortville, typically on-site within hours for urgent calls across greater Indianapolis.",
    icon: TimerReset,
  },
];

function sanitize(text: string) {
  // Strip any stray replacement glyphs from past encoding issues.
  return text.replace(/\uFFFD/g, "");
}

export function TrustBadges() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-white py-16"
    >
      <Container>
        <h2 id="trust-heading" className="sr-only">
          Simple Man Plumbing trust markers
        </h2>

        <ul role="list" className="grid gap-6 md:grid-cols-3">
          {BADGES.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <Icon className="h-8 w-8 text-brand-sky" aria-hidden="true" />
              <h3 className="font-heading text-lg font-semibold text-brand-navy">
                {sanitize(title)}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {sanitize(description)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";

export function HomeHero() {
  const telHref = `tel:${env.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-brand-sky/10 py-24">
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-sky/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-sky shadow-sm">
            Trusted by homeowners across greater Indianapolis
          </p>
          <h1 className="font-heading text-4xl font-semibold text-brand-navy sm:text-5xl lg:text-6xl">
            Reliable plumbing, fair prices, done right.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            From emergency leaks to water heater installs, Simple Man Plumbing sends licensed techs who show up on time,
            respect your home, and explain every option in plain English.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={siteConfig.callToAction.href}>{siteConfig.callToAction.label}</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-brand-navy">
              <Link href={telHref}>
                Call {formatPhoneNumber(env.phone)}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="mt-1 h-5 w-5 text-brand-sky" aria-hidden />
              <span>Licensed, insured, and background-checked technicians</span>
            </li>
            <li className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <Wrench className="mt-1 h-5 w-5 text-brand-sky" aria-hidden />
              <span>Same-day service for urgent issues with no surprise pricing</span>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col gap-4 rounded-3xl border border-brand-sky/30 bg-white/80 p-6 shadow-2xl shadow-brand-sky/15 backdrop-blur">
          <div className="rounded-2xl border border-brand-sky/20 bg-brand-sky/10 p-5 text-sm text-brand-navy">
            <h2 className="font-heading text-xl font-semibold text-brand-navy">Emergency hotline</h2>
            <p className="mt-2">
              For burst pipes, sewer backups, or no hot water, call us 24/7. A live dispatcher will help instantly.
            </p>
            <Link
              href={telHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-brand-sky px-4 py-3 font-semibold text-white transition hover:bg-brand-sky/90"
            >
              {formatPhoneNumber(env.phone)}
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <h3 className="font-heading text-lg font-semibold text-brand-navy">Today&apos;s specials</h3>
            <ul className="mt-3 list-disc space-y-2 pl-4">
              <li>Free camera inspection with any main line clearing</li>
              <li>$150 off new water heater installations</li>
              <li>Ask about veteran and teacher discounts</li>
            </ul>
          </div>
        </div>
      </Container>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.25),transparent_55%)]"
        aria-hidden
      />
    </section>
  );
}



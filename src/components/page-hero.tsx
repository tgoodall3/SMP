import { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-brand-sky/5 py-20">
      <Container className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? <span className="text-sm font-semibold uppercase tracking-wide text-brand-sky">{eyebrow}</span> : null}
          <h1 className="font-heading text-4xl font-semibold text-brand-navy md:text-5xl">{title}</h1>
          <div className="text-lg leading-relaxed text-slate-600">{description}</div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={primaryCta?.href ?? siteConfig.callToAction.href}>
                {primaryCta?.label ?? siteConfig.callToAction.label}
              </a>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="ghost" size="lg" className="text-brand-navy">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            ) : null}
          </div>
        </div>
        <div className="relative -mx-4 flex w-full max-w-md flex-col gap-4 rounded-2xl border border-brand-sky/20 bg-white p-6 shadow-lg shadow-brand-sky/10 sm:mx-0">
          <h2 className="font-heading text-xl font-semibold text-brand-navy">Need plumbing help today?</h2>
          <p className="text-sm text-slate-600">
            Call us any time. We&apos;ll pick up, walk you through next steps, and get a licensed plumber on the way.
          </p>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="font-semibold text-brand-navy">Emergency Service</p>
              <p>24/7 for urgent leaks, burst pipes, and backups.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="font-semibold text-brand-navy">Appointments</p>
              <p>{siteConfig.hours.standard}</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial" aria-hidden />
    </section>
  );
}


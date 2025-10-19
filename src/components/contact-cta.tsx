import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";

export function ContactCTA() {
  const telHref = `tel:${env.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white">
      <Container className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-brand-sky">Schedule today</p>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">Ready when you need us.</h2>
          <p className="text-base text-slate-200">
            Call our dispatcher or send a service request. We&apos;ll confirm your appointment, provide ETA updates, and
            respect your home like it&apos;s ours.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-brand-navy md:text-right">
          <Button asChild size="lg" variant="accent" className="bg-white text-brand-navy hover:bg-slate-100">
            <Link href={siteConfig.callToAction.href}>{siteConfig.callToAction.label}</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
            <Link href={telHref} className="whitespace-nowrap">
              Call {formatPhoneNumber(env.phone)}
            </Link>
          </Button>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.45),transparent_45%)]" aria-hidden />
    </section>
  );
}


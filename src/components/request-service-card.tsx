import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";

type RequestServiceCardProps = {
  title?: string;
  description?: string;
};

export function RequestServiceCard({
  title = "We can help with that.",
  description = "Schedule a visit or talk through the issue with a licensed plumber.",
}: RequestServiceCardProps) {
  const telHref = `tel:${env.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section className="bg-slate-50 py-16">
      <Container className="rounded-3xl border border-brand-sky/30 bg-white p-10 shadow-card">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-base text-slate-600">{description}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button asChild size="lg">
              <Link href="/request-service">Request Service</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-brand-navy">
              <Link href={telHref}>Call {formatPhoneNumber(env.phone)}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}


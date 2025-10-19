import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import type { ServiceCategory } from "@/types/content";
import { Button } from "@/components/ui/button";

type ServicesPreviewProps = {
  services: ServiceCategory[];
};

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Core Services"
          title="From emergency calls to maintenance programs"
          description="We tackle the plumbing issues most common around Fortville, Indianapolis, Fishers, Greenwood, and nearby communities."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="ghost" className="text-brand-navy">
            <Link href="/services">See all services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}



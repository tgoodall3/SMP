import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import type { ServiceArea } from "@/types/content";
import { Button } from "@/components/ui/button";

type ServiceAreasPreviewProps = {
  areas: ServiceArea[];
};

export function ServiceAreasPreview({ areas }: ServiceAreasPreviewProps) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Service Areas"
          title="Greater Indy neighborhoods, covered"
          description="Fortville-based plumbers with fast response across the north and south sides of Indianapolis."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.city} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-brand-navy">{area.city}</h3>
              <p className="mt-2 text-sm text-slate-600">{area.description.slice(0, 90)}...</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="ghost" className="text-brand-navy">
            <Link href="/service-areas">View all service areas</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}



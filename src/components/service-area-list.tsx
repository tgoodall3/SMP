import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { type ServiceArea } from "@/types/content";
import { Button } from "@/components/ui/button";

type ServiceAreaListProps = {
  areas: ServiceArea[];
};

export function ServiceAreaList({ areas }: ServiceAreaListProps) {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly serving greater Indianapolis"
          description="Every city gets dedicated technicians who know the neighborhoods, water tables, and common plumbing issues from Fortville to Greenwood."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.city} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-semibold text-brand-navy">{area.city}, Indiana</h3>
                <p className="text-sm text-slate-600">{area.description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {area.highlightJobs.map((job) => (
                    <li key={job} className="flex items-start gap-2">
                      <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brand-sky" />
                      <span>{job}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="ghost" className="mt-6 w-fit text-brand-navy" asChild>
                <a href="/request-service">Book in {area.city}</a>
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}



import { type ServiceCategory } from "@/types/content";
import { ServiceCard } from "@/components/service-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";

type ServiceGridProps = {
  services: ServiceCategory[];
  eyebrow?: string;
  title: string;
  description?: string;
};

export function ServiceGrid({ services, eyebrow, title, description }: ServiceGridProps) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}


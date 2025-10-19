import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { FAQAccordion } from "@/components/faq-accordion";
import { type FAQItem } from "@/types/content";

type FAQsSectionProps = {
  faqs: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function FAQsSection({ faqs, eyebrow = "Questions", title = "Plumbing questions we hear a lot", description }: FAQsSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}


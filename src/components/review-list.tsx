import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { type Review } from "@/types/content";
import { TestimonialCard } from "@/components/testimonial-card";

type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Customer reviews"
          title="Word on the street"
          description="Pulled from Google, Facebook, and direct feedback. We love honest reviews—they keep us sharp."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}



import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import type { Review } from "@/types/content";
import { Button } from "@/components/ui/button";

type ReviewsPreviewProps = {
  reviews: Review[];
};

export function ReviewsPreview({ reviews }: ReviewsPreviewProps) {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Recent reviews"
          title="Neighbors stand behind our work"
          description="We appreciate every review because it keeps us accountable and helps new customers feel confident choosing SMP."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/reviews">Read all reviews</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}


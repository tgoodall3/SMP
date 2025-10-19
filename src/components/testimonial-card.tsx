import { Quote } from "lucide-react";
import { type Review } from "@/types/content";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  review: Review;
  className?: string;
};

export function TestimonialCard({ review, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      <Quote className="h-8 w-8 text-brand-sky" aria-hidden />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">“{review.body}”</blockquote>
      <figcaption className="mt-6 text-sm font-semibold text-brand-navy">
        {review.name} · {review.city}
        <span className="ml-2 text-xs font-normal text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
          {"★".repeat(Math.round(review.rating))}{" "}
          <span className="text-slate-400">
            {Array.from({ length: 5 - Math.round(review.rating) })
              .map(() => "☆")
              .join("")}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}


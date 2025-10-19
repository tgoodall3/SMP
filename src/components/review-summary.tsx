import * as React from "react";
import { Star as StarIcon, StarHalf as StarHalfIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { type Review } from "@/types/content";

type ReviewSummaryProps = {
  reviews: Review[];
};

/** Remove prior bad-glyphs (�) if any snuck in from encoding issues */
function sanitize(text: string) {
  return (text ?? "").replace(/\uFFFD/g, "");
}

function clamp(n: number, min = 0, max = 5) {
  return Math.max(min, Math.min(max, n));
}

function getStarParts(avg: number) {
  const rounded = Math.round(avg * 2) / 2; // nearest 0.5
  const full = Math.floor(rounded);
  const half = rounded - full === 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { rounded, full, half, empty };
}

export function ReviewSummary({ reviews }: ReviewSummaryProps) {
  const average =
    reviews.length > 0
      ? clamp(reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / reviews.length)
      : 0;

  const { rounded, full, half, empty } = getStarParts(average);

  return (
    <section className="bg-white py-16">
      <Container className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
            Neighbors say nice things
          </h2>
          <p className="text-base text-slate-600">
            We don’t chase volume. We focus on clean, correct work and clear communication — the reviews follow.
          </p>

          <div
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
            role="img"
            aria-label={`${rounded.toFixed(1)} out of 5 stars based on ${reviews.length} reviews`}
          >
            <div className="flex items-center gap-1 text-amber-500">
              {/* Full stars */}
              {Array.from({ length: full }).map((_, i) => (
                <StarIcon
                  key={`full-${i}`}
                  className="h-5 w-5"
                  strokeWidth={1.5}
                  /* lucide defaults to fill="none"; set fill to currentColor to display filled stars */
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
              {/* Half star */}
              {half && (
                <StarHalfIcon
                  className="h-5 w-5"
                  strokeWidth={1.5}
                  fill="currentColor"
                  aria-hidden="true"
                />
              )}
              {/* Empty stars */}
              {Array.from({ length: empty }).map((_, i) => (
                <StarIcon key={`empty-${i}`} className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              ))}
            </div>

            <div>
              <p className="text-lg font-semibold text-brand-navy">
                {rounded.toFixed(1)} average - {reviews.length}+ reviews
              </p>
              <p className="text-xs text-slate-500">Google, Facebook, and direct customer feedback</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {reviews.slice(0, 3).map((review) => (
            <figure
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-slate-600">
                {sanitize(review.body)}
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-brand-navy">
                {sanitize(review.name)}{review.city ? ` - ${sanitize(review.city)}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

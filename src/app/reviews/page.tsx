import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { ReviewList } from "@/components/review-list";
import { siteConfig } from "@/config/site";
import { getReviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Simple Man Plumbing reviews",
  description:
    "Neighbors across Fortville and greater Indianapolis trust Simple Man Plumbing for responsive service, clean workmanship, and upfront pricing.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/reviews`,
  },
  openGraph: {
    title: "Simple Man Plumbing reviews",
    description:
      "See what Fortville, Indianapolis, Fishers, Greenwood, and Greenfield homeowners say about working with Simple Man Plumbing.",
    url: `${siteConfig.seo.siteUrl}/reviews`,
  },
};

export default function ReviewsPage() {
  const reviews = getReviews();
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: `${siteConfig.seo.siteUrl}/reviews`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average.toFixed(1),
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
    })),
  };

  return (
    <>
      <JsonLd data={reviewSchema} id="reviews-jsonld" />
      <ReviewList reviews={reviews} />
      <ContactCTA />
    </>
  );
}



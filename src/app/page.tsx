import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact-cta";
import { FinancingBanner } from "@/components/financing-banner";
import { HomeHero } from "@/components/home/hero";
import { ProcessSection } from "@/components/home/process";
import { ReviewsPreview } from "@/components/home/reviews-preview";
import { ServiceAreasPreview } from "@/components/home/service-areas-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsBar } from "@/components/home/stats-bar";
import { FAQsSection } from "@/components/faqs-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ReviewSummary } from "@/components/review-summary";
import { ServiceAreaMap } from "@/components/service-area-map";
import { TrustBadges } from "@/components/trust-badges";
import { WhyChoose } from "@/components/why-choose";
import { siteConfig } from "@/config/site";
import { getHighlightedServices, getReviews, getServiceAreas, getServiceFAQs } from "@/lib/content";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Plumbing done right. No surprises.",
  description:
    "Simple Man Plumbing delivers prompt, respectful plumbing service across Fortville, Indianapolis, Fishers, Greenwood, and Greenfield.",
  alternates: {
    canonical: siteConfig.seo.siteUrl,
  },
  openGraph: {
    title: "Plumbing done right. No surprises.",
    description:
      "Simple Man Plumbing delivers prompt, respectful plumbing service across Fortville, Indianapolis, Fishers, Greenwood, and Greenfield.",
    url: siteConfig.seo.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing done right. No surprises.",
    description:
      "Simple Man Plumbing delivers prompt, respectful plumbing service across Fortville, Indianapolis, Fishers, Greenwood, and Greenfield.",
  },
};

export default function Home() {
  const services = getHighlightedServices();
  const reviews = getReviews(6);
  const areas = getServiceAreas();
  const faqs = getServiceFAQs();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.seo.siteUrl}#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.seo.siteUrl}/logo.png`,
    url: siteConfig.seo.siteUrl,
    telephone: env.phone,
    email: env.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: siteConfig.location.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, Indiana`,
    })),
    sameAs: siteConfig.social.map((item) => item.href),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} id="localbusiness-jsonld" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
        id="home-faq-jsonld"
      />

      <HomeHero />
      <StatsBar />
      <TrustBadges />
      <ServicesPreview services={services} />
      <ProcessSection />
      <WhyChoose />
      <ReviewSummary reviews={reviews} />
      <ReviewsPreview reviews={reviews.slice(0, 3)} />
      <FinancingBanner />
      <ServiceAreasPreview areas={areas} />
      <ServiceAreaMap />
      <FAQsSection faqs={faqs} title="Common plumbing questions" description="Straight answers from licensed plumbers so you know what to expect." />
      <ContactCTA />
    </>
  );
}



import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceGrid } from "@/components/service-grid";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plumbing services for greater Indianapolis homes",
  description:
    "Emergency repairs, drain cleaning, leak detection, water heater installs, sump pumps, and fixture upgrades from respectful local plumbers.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/services`,
  },
  openGraph: {
    title: "Plumbing services for greater Indianapolis homes",
    description:
      "Emergency repairs, drain cleaning, leak detection, water heater installs, sump pumps, and fixture upgrades from respectful local plumbers.",
    url: `${siteConfig.seo.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const services = getServices();
  const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Services",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Simple Man Plumbing Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.excerpt,
          url: `${siteConfig.seo.siteUrl}/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={serviceListSchema} id="services-jsonld" />

      <PageHero
        eyebrow="Services"
        title="Plumbing experts for every job in your home"
        description="Every visit starts with a thorough inspection and straight talk. We give you options, exact pricing, and stand behind the work."
        primaryCta={{ label: "Book a plumber", href: "/request-service" }}
        secondaryCta={{ label: "Call now", href: telHref }}
      />
      <ServiceGrid
        services={services}
        eyebrow="Core services"
        title="Plumbing pros ready for anything"
        description="Explore our most requested services across Fortville, Indianapolis, Fishers, Greenwood, and Greenfield."
      />
      <Container className="py-16 text-center">
        <p className="text-base text-slate-600">
          Don&apos;t see what you need? We handle custom plumbing projects, remodel support, gas lines, and more.
        </p>
        <Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-md border border-brand-navy px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white">
          Ask about a custom project
        </Link>
      </Container>
    </>
  );
}



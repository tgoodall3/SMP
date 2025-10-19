import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact-cta";
import { ServiceAreaList } from "@/components/service-area-list";
import { ServiceAreaMap } from "@/components/service-area-map";
import { siteConfig } from "@/config/site";
import { getServiceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plumbers serving Fortville, Indianapolis, Fishers, Greenwood, and Greenfield",
  description:
    " Local Simple Man Plumbing technicians cover greater Indianapolis with rapid response and respectful service across the northside and southside.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/service-areas`,
  },
  openGraph: {
    title: "Plumbers serving Fortville, Indianapolis, Fishers, Greenwood, and Greenfield",
    description:
      "Trusted Simple Man Plumbing technicians cover Fortville and the greater Indianapolis metro with prompt service and transparent pricing.",
    url: `${siteConfig.seo.siteUrl}/service-areas`,
  },
};

export default function ServiceAreasPage() {
  const areas = getServiceAreas();

  return (
    <>
      <ServiceAreaList areas={areas} />
      <ServiceAreaMap />
      <ContactCTA />
    </>
  );
}






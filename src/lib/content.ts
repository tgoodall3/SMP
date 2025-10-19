import servicesData from "@/content/services.json";
import serviceDetailsData from "@/content/service-details.json";
import faqsData from "@/content/faqs.json";
import reviewsData from "@/content/reviews.json";
import serviceAreasData from "@/content/service-areas.json";
import type { FAQItem, Review, ServiceArea, ServiceCategory, ServiceDetail } from "@/types/content";

export function getServices(): ServiceCategory[] {
  return servicesData as ServiceCategory[];
}

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return (serviceDetailsData as ServiceDetail[]).find((service) => service.slug === slug);
}

export function getServiceFAQs(slug?: string): FAQItem[] {
  const allFaqs = faqsData as Record<string, FAQItem[]>;
  if (!slug) {
    return allFaqs["general"] || [];
  }
  return [...(allFaqs[slug] || []), ...(allFaqs["general"] || [])];
}

export function getHighlightedServices(limit = 6): ServiceCategory[] {
  return getServices().slice(0, limit);
}

export function getReviews(limit?: number): Review[] {
  const reviews = reviewsData as Review[];
  return typeof limit === "number" ? reviews.slice(0, limit) : reviews;
}

export function getServiceAreas(): ServiceArea[] {
  return serviceAreasData as ServiceArea[];
}


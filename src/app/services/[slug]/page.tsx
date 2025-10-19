import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQsSection } from "@/components/faqs-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceDetailSections } from "@/components/service-detail-sections";
import { RequestServiceCard } from "@/components/request-service-card";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site";
import { getServiceDetail, getServiceFAQs, getServices } from "@/lib/content";
import type { ServiceDetail } from "@/types/content";
import { env } from "@/lib/env";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  const canonicalUrl = `${siteConfig.seo.siteUrl}/services/${service.slug}`;
  return {
    title: `${service.title} in ${siteConfig.location.city}`,
    description: service.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.excerpt,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.excerpt,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  const faqs = getServiceFAQs(slug);

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServiceFaqJsonLd service={service} faqs={faqs} />

      <PageHero
        eyebrow="Expert plumbing services"
        title={service.hero.headline}
        description={service.hero.subheadline}
        primaryCta={{ label: "Request Service", href: "/request-service" }}
        secondaryCta={{ label: "Call now", href: `tel:${env.phone}` }}
      />
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </Container>
      <ServiceDetailSections service={service} />
      <RequestServiceCard
        title="Ready to solve it?"
        description="Share a few details and we'll confirm your appointment right away."
      />
      <FAQsSection faqs={faqs} eyebrow="FAQs" title={`Questions about ${service.title}`} />
    </>
  );
}

function ServiceJsonLd({ service }: { service: ServiceDetail }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    areaServed: siteConfig.location.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, Indiana`,
    })),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
      telephone: env.phone,
    },
    serviceType: service.title,
  };

  return <JsonLd data={data} id={`${service.slug}-service-jsonld`} />;
}

function ServiceFaqJsonLd({ service, faqs }: { service: ServiceDetail; faqs: ReturnType<typeof getServiceFAQs> }) {
  if (faqs.length === 0) return null;
  const data = {
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
  };
  return <JsonLd data={data} id={`${service.slug}-faq-jsonld`} />;
}

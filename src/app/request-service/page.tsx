import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { RequestServiceForm } from "@/components/request-service/request-service-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Request plumbing service",
  description:
    "Share a few details about your plumbing issue and preferred appointment times. Our dispatcher will confirm quickly.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/request-service`,
  },
  openGraph: {
    title: "Request plumbing service",
    description:
      "Book Simple Man Plumbing for emergency or scheduled plumbing service across Fortville, Indianapolis, Fishers, Greenwood, and Greenfield.",
    url: `${siteConfig.seo.siteUrl}/request-service`,
  },
};

export default function RequestServicePage() {
  return (
    <section className="bg-slate-50 py-16">
      <Container className="max-w-4xl space-y-6">
        <h1 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">Let&apos;s get you scheduled</h1>
        <p className="text-sm text-slate-600">
          Complete the form below. We&apos;ll confirm your appointment window, send reminders, and keep you updated when your
          technician is on the way.
        </p>
        <RequestServiceForm />
      </Container>
    </section>
  );
}



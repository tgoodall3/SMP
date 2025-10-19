import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { ContactCTA } from "@/components/contact-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Simple Man Plumbing",
  description:
    "Call, email, or send a message to schedule plumbing service with our Fortville-based team serving greater Indianapolis.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Simple Man Plumbing",
    description:
      "Reach Simple Man Plumbing by phone, email, or contact form to schedule service across Fortville, Indianapolis, Fishers, Greenwood, and Greenfield.",
    url: `${siteConfig.seo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          <ContactDetails />
          <div className="space-y-6">
            <h1 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">Tell us what&apos;s going on</h1>
            <p className="text-sm text-slate-600">
              Share your details and we&apos;ll reach out to confirm scheduling. For urgent issues, please call us right away.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-brand-navy">Visit our shop</h2>
            <p className="mt-2 text-sm text-slate-600">
              {siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state}{" "}
              {siteConfig.location.zip}
            </p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <iframe
                title="Simple Man Plumbing map"
                src="https://maps.google.com/maps?q=Fortville%20Indiana&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-brand-sky/20 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-brand-navy">Need help fast?</h2>
            <p className="mt-2 text-sm text-slate-600">
              For burst pipes, sewer backups, or major leaks, please call us. A dispatcher is on call 24/7 and will route
              the nearest technician.
            </p>
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}



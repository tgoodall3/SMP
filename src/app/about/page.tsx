import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "About Simple Man Plumbing",
  description:
    "Family-owned plumbing team serving Fortville and greater Indianapolis with licensed, courteous technicians.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/about`,
  },
  openGraph: {
    title: "About Simple Man Plumbing",
    description:
      "Meet the team of licensed plumbers serving Fortville, Indianapolis, Fishers, Greenwood, and Greenfield with fair pricing and respectful service.",
    url: `${siteConfig.seo.siteUrl}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Simple Man Plumbing",
    description:
      "Family-owned plumbers serving greater Indianapolis with honest pricing, tidy work, and licensed technicians.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-sky">About</p>
            <h1 className="font-heading text-4xl font-semibold text-brand-navy md:text-5xl">
              Local plumbers who take pride in doing it right.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Simple Man Plumbing started with one truck and a mission: deliver honest plumbing service without the hard
              sell. Today, our licensed team helps homeowners across greater Indianapolis with emergency repairs, upgrades,
              and preventative maintenance.
            </p>
            <div className="grid gap-4 border border-brand-sky/20 bg-white p-6 shadow-sm sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-navy">Licenses &amp; insurance</h3>
                <p className="text-sm text-slate-600">
                  Indiana Plumbing Contractors License #PC123456, fully insured and bonded for residential and light commercial work.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-brand-navy">Safety focused</h3>
                <p className="text-sm text-slate-600">
                  Background checks, drug screening, and ongoing training in code updates and customer care.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="/request-service">Request Service</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-brand-navy" asChild>
                <a href={`tel:${env.phone}`}>Call {formatPhoneNumber(env.phone)}</a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
            <Image
              src="/images/team-placeholder.svg"
              alt="Simple Man Plumbing team standing in front of service vans"
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-navy">
              Meet the team
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="No surprises. No shortcuts."
            description="We built our process around respect for your home and your time."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-brand-navy">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-slate-50 py-16">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-brand-navy">Community matters</h2>
            <p className="text-sm text-slate-600">
              We sponsor local youth sports, offer discounts for teachers, veterans, and first responders, and donate to
              food pantries across central Indiana. Plumbing is how we make a living - serving neighbors is why we do it.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-brand-navy">Ready to work with us?</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Licensed technicians who explain every option</li>
              <li>Tidy workspaces with shoe covers and floor protection</li>
              <li>Follow-up calls to make sure you&apos;re satisfied</li>
            </ul>
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}

const values = [
  {
    title: "Be on time",
    description:
      "We give tight arrival windows and send text updates when we're on the way. If something changes, you hear from us immediately.",
  },
  {
    title: "Tell the truth",
    description:
      "No scare tactics or bloated repair lists. We show the problem, explain it, and give straight pricing so you can decide.",
  },
  {
    title: "Leave it better",
    description:
      "Drop cloths, tool mats, cleanup, and respect for your home. We treat every job like it's our own house.",
  },
];




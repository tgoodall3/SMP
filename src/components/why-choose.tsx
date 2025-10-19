import { ThumbsUp, Timer, Handshake } from "lucide-react";
import { Container } from "@/components/layout/container";

const reasons = [
  {
    title: "Respect for your home",
    description: "Floor protection, tool mats, and tidy technicians. We clean up so you don’t have to.",
    icon: Handshake,
  },
  {
    title: "On-time arrival",
    description: "Clear appointment windows with text updates when we’re on the way.",
    icon: Timer,
  },
  {
    title: "No upsell playbook",
    description: "We troubleshoot, explain your options, and let you decide. No pressure, no gimmicks.",
    icon: ThumbsUp,
  },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">Why neighbors trust SMP</h2>
          <p className="mt-4 text-base text-slate-600">
            Local techs who show up ready, respect your time, and back every repair with a strong warranty.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <reason.icon className="h-8 w-8 text-brand-sky" aria-hidden />
              <h3 className="mt-4 font-heading text-xl font-semibold text-brand-navy">{reason.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{reason.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


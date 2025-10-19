import { Container } from "@/components/layout/container";
import { Steps } from "@/components/steps";

const steps = [
  {
    title: "Call or book online",
    description: "Share what’s going on. We’ll give straight guidance, pricing ranges, and next steps.",
  },
  {
    title: "Technician arrives",
    description: "We text when we’re en route. Expect a clean uniform, shoe covers, and a thorough inspection.",
  },
  {
    title: "Approve & relax",
    description: "We review your options, get approval, then handle the fix. Payment and warranty info on-site.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
            Here’s how a visit with SMP goes
          </h2>
          <p className="mt-4 text-base text-slate-600">
            No guesswork—just a simple process that keeps you informed and in control.
          </p>
        </div>
        <Steps steps={steps} className="mt-12" />
      </Container>
    </section>
  );
}



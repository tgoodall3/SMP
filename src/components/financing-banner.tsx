import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FinancingBanner() {
  return (
    <section className="bg-slate-900 py-14 text-white">
      <Container className="flex flex-col gap-6 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <Badge variant="subtle" className="bg-brand-sky/10 text-brand-sky">
            Budget-friendly options
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-white">Need financing or coupons?</h2>
          <p className="text-sm text-slate-300">
            Ask about current manufacturer rebates, multi-service discounts, and 0% APR financing for qualified projects.
            We&apos;ll help you stretch every dollar.
          </p>
        </div>
        <Button variant="accent" size="lg" className="bg-white text-brand-navy hover:bg-slate-100">
          Request service quote
        </Button>
      </Container>
    </section>
  );
}


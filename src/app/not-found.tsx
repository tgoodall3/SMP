import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-slate-50 py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-sky">404</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-brand-navy">That page isn’t here</h1>
        <p className="mt-4 text-base text-slate-600">
          The page you’re looking for may have moved or been retired. Let us help you find what you need.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-brand-navy">
            <Link href="/request-service">Schedule service</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}


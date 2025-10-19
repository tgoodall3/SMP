import { Container } from "@/components/layout/container";

const stats = [
  { label: "Years combined experience", value: "35+" },
  { label: "Local households served", value: "2,400+" },
  { label: "Average response time", value: "90 min" },
];

export function StatsBar() {
  return (
    <section className="bg-white py-8">
      <Container className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-semibold text-brand-navy">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}


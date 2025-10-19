import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ServiceCategory } from "@/types/content";
import { getIcon } from "@/lib/icon-map";
import { Badge } from "@/components/ui/badge";

type ServiceCardProps = {
  service: ServiceCategory;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getIcon(service.icon);
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky/10 text-brand-sky">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="font-heading text-xl font-semibold text-brand-navy">{service.title}</h3>
        </div>
        <p className="text-sm text-slate-600">{service.excerpt}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Badge variant="outline" aria-hidden>
          Always-transparent pricing
        </Badge>
        <Link
          href={`/services/${service.slug}`}
          className="flex items-center gap-1 text-sm font-semibold text-brand-sky transition group-hover:gap-2"
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}


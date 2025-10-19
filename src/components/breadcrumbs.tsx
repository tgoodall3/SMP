import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("flex flex-wrap items-center gap-1 text-sm text-slate-500", className)}>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="text-slate-500 hover:text-brand-navy hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-brand-navy">{item.label}</span>
            )}
            {index < items.length - 1 ? <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}


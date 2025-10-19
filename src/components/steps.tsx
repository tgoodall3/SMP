import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

type StepsProps = {
  steps: Step[];
  className?: string;
};

export function Steps({ steps, className }: StepsProps) {
  return (
    <ol className={cn("grid gap-6 md:grid-cols-3", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky/10 text-brand-sky font-semibold">
              {index + 1}
            </span>
            <h3 className="font-heading text-lg font-semibold text-brand-navy">{step.title}</h3>
          </div>
          <p className="mt-3 text-sm text-slate-600">{step.description}</p>
          <CheckCircle2 className="absolute -right-2 -top-2 h-6 w-6 text-brand-sky" aria-hidden />
        </li>
      ))}
    </ol>
  );
}


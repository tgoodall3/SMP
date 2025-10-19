import { cn } from "@/lib/utils";

type FormProgressProps = {
  steps: string[];
  currentStep: number;
};

export function FormProgress({ steps, currentStep }: FormProgressProps) {
  return (
    <ol className="mb-6 flex items-center justify-between gap-3">
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        return (
          <li key={label} className="flex flex-1 flex-col items-center">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed bg-white text-sm font-semibold transition",
                isCompleted && "border-brand-sky bg-brand-sky text-white",
                isActive && !isCompleted && "border-brand-sky text-brand-sky",
              )}
            >
              {index + 1}
            </span>
            <p className={cn("mt-2 text-center text-xs font-medium uppercase tracking-wide text-slate-500", (isActive || isCompleted) && "text-brand-navy")}>
              {label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}


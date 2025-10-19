"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  info: Info,
  success: CheckCircle2,
  error: AlertCircle,
};

export type AlertVariant = keyof typeof icons;

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant = "info", children, ...props }, ref) => {
  const Icon = icons[variant] ?? Info;

  return (
    <div
      ref={ref}
      role="status"
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600",
        variant === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700",
        variant === "error" && "border-red-200 bg-red-50 text-red-700",
        className,
      )}
      {...props}
    >
      <Icon className="mt-1 h-5 w-5" aria-hidden />
      <div>{children}</div>
    </div>
  );
});
Alert.displayName = "Alert";


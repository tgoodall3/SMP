"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-brand-navy text-white",
        outline: "border-brand-navy/30 text-brand-navy",
        subtle: "border-transparent bg-brand-sky/10 text-brand-navy",
        success: "border-transparent bg-emerald-500/10 text-emerald-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}


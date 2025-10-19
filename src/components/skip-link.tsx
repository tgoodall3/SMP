"use client";

import { cn } from "@/lib/utils";

type SkipLinkProps = {
  targetId?: string;
  className?: string;
};

export function SkipLink({ targetId = "main-content", className }: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-md bg-brand-sky px-4 py-2 font-medium text-white shadow-lg transition focus:outline-none",
        className,
      )}
    >
      Skip to main content
    </a>
  );
}


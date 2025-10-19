"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        classNames: {
          toast: "bg-white text-brand-slate shadow-card border border-slate-100",
        },
      }}
    />
  );
}


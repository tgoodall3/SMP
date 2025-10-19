import Link from "next/link";
import { Phone } from "lucide-react";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";

export function FloatingCallButton() {
  const telHref = `tel:${env.phone.replace(/[^\d+]/g, "")}`;

  return (
    <Link
      href={telHref}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-sky px-5 py-3 font-semibold text-white shadow-xl shadow-brand-sky/30 transition sm:hidden"
    >
      <Phone className="h-5 w-5" aria-hidden />
      <span>Call {formatPhoneNumber(env.phone)}</span>
    </Link>
  );
}


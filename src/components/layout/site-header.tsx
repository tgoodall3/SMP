import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";
import { formatPhoneNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SiteHeader() {
  const telHref = `tel:${env.phone.replace(/[^\d+]/g, "")}`;

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-backdrop:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/logo.png"
            alt="Simple Man Plumbing"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border border-brand-navy/10 bg-white object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold text-brand-navy">{siteConfig.name}</span>
            <span className="text-xs text-slate-500">{siteConfig.tagline}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-sky/10 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" className="gap-2 text-brand-navy">
            <Link href={telHref} aria-label={`Call ${formatPhoneNumber(env.phone)}`}>
              <PhoneCall className="h-4 w-4" aria-hidden />
              Call {formatPhoneNumber(env.phone)}
            </Link>
          </Button>
          <Button asChild variant="default">
            <Link href={siteConfig.callToAction.href}>{siteConfig.callToAction.label}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Button asChild variant="ghost" size="icon" className="sm:flex">
            <Link href={telHref} aria-label={`Call ${formatPhoneNumber(env.phone)}`}>
              <PhoneCall className="h-5 w-5" aria-hidden />
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </DialogTrigger>
            <DialogContent className="pt-12">
              <DialogHeader className="items-start">
                <DialogTitle className="text-left text-2xl font-semibold text-brand-navy">
                  {siteConfig.name}
                </DialogTitle>
                <DialogDescription className="text-left text-sm text-slate-600">
                  Plumbing pros covering Fortville, Indianapolis north & south, Fishers, and Greenfield.
                </DialogDescription>
              </DialogHeader>
              <nav className="mt-4 flex flex-col gap-3 text-lg font-semibold text-brand-navy">
                {siteConfig.navLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-lg bg-slate-50 px-4 py-3 hover:bg-brand-sky/10">
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild variant="accent" className="h-12 text-base">
                  <Link href={siteConfig.callToAction.href}>{siteConfig.callToAction.label}</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 text-base">
                  <Link href={telHref}>Call {formatPhoneNumber(env.phone)}</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}



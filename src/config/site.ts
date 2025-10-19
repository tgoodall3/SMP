import { env } from "@/lib/env";

/** Small helpers you can import anywhere */
export const toTelHref = (phone?: string) =>
  phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined;

export const toMailtoHref = (email?: string) =>
  email ? `mailto:${email}` : undefined;

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  phone: string;              // ← required now
  email: string;              // ← add email too
  callToAction: { label: string; href: string };
  hours: { standard: string; emergency: string };
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    serviceAreas: string[];
  };
  social: { name: string; href: string }[];
  navLinks: { title: string; href: string }[];
  seo: {
    siteUrl: string;
    twitterHandle?: string;   // keep @handle if you like
  };
}

/** Update values as needed */
export const siteConfig: SiteConfig = {
  name: "Simple Man Plumbing",
  shortName: "SMP",
  description:
    "Reliable plumbing, fair prices, and respectful technicians serving greater Indianapolis and surrounding communities.",
  tagline: "Plumbing done right. No surprises.",
  // ↓↓↓ ADD THESE ↓↓↓
  phone: "(317) 555-0123",
  email: "hello@simplemanplumbing.com",
  // ↑↑↑ ADD THESE ↑↑↑
  callToAction: {
    label: "Request Service",
    href: "/request-service",
  },
  hours: {
    standard: "Monday - Saturday | 7:00 AM - 7:00 PM",
    emergency: "Emergency plumbing available 24/7",
  },
  location: {
    address: "123 Depot Street",
    city: "Fortville",
    state: "IN",
    zip: "46040",
    serviceAreas: [
      "Fortville",
      "Fishers",
      "Indianapolis Northside",
      "Indianapolis Southside",
      "Greenfield",
    ],
  },
  social: [
    { name: "Facebook", href: "https://facebook.com/simplemanplumbing" },
    { name: "Google", href: "https://maps.app.goo.gl/example" },
  ],
  navLinks: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Service Areas", href: "/service-areas" },
    { title: "Reviews", href: "/reviews" },
    { title: "Request Service", href: "/request-service" },
  ],
  seo: {
    siteUrl: env.siteUrl || "", // guard against undefined
    twitterHandle: "@simplemanplumbing",
  },
};

import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Service terms and conditions for Simple Man Plumbing customers.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/terms`,
  },
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-white py-16">
      <Container className="prose prose-slate max-w-3xl">
        <h1>Terms &amp; Conditions</h1>
        <p>Effective {currentYear}</p>
        <h2>Service agreement</h2>
        <p>
          By scheduling service with Simple Man Plumbing (“we”, “us”), you agree to our terms and conditions. These terms
          describe how we provide plumbing services, collect payment, and handle warranties.
        </p>
        <h2>Estimates &amp; approvals</h2>
        <ul>
          <li>We provide written estimates before work begins. Your approval is required for any additional work.</li>
          <li>Quoted pricing includes labor, materials supplied by us, and applicable taxes unless noted.</li>
        </ul>
        <h2>Payment</h2>
        <ul>
          <li>Payment is due at project completion unless alternative arrangements are made in writing.</li>
          <li>We accept major credit cards, checks, and approved financing partners.</li>
        </ul>
        <h2>Warranties</h2>
        <ul>
          <li>Labor is warranted for 12 months. Manufacturer warranties apply to equipment we provide.</li>
          <li>We are not responsible for failures caused by misuse, negligence, or materials supplied by others.</li>
        </ul>
        <h2>Access &amp; safety</h2>
        <p>
          You agree to provide safe access to the work area, including disclosure of hazards, pets, or other conditions that
          may impact service.
        </p>
        <h2>Liability</h2>
        <p>
          We carry general liability and workers compensation insurance. Our liability is limited to the value of the
          service performed.
        </p>
        <h2>Contact</h2>
        <p>
          For questions regarding these terms, contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </Container>
    </section>
  );
}


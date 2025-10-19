import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Simple Man Plumbing collects, uses, and protects personal information from customers and website visitors.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-white py-16">
      <Container className="prose prose-slate max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>Last updated: {currentYear}</p>
        <p>
          Simple Man Plumbing (“we”, “us”, or “our”) respects your privacy. This policy explains how we collect, use, and
          safeguard your information when you interact with our website, schedule service, or contact us by phone or email.
        </p>
        <h2>Information we collect</h2>
        <ul>
          <li>Contact details you provide when requesting service, including name, phone, address, and email.</li>
          <li>Service history, photos, or notes relevant to your plumbing project.</li>
          <li>Website analytics collected through privacy-focused tools to understand traffic trends.</li>
        </ul>
        <h2>How we use information</h2>
        <ul>
          <li>To schedule, confirm, and complete plumbing services.</li>
          <li>To send invoices, estimates, and warranty information.</li>
          <li>To improve customer communication and website experience.</li>
        </ul>
        <h2>Sharing your information</h2>
        <p>
          We do not sell your information. We may share limited data with trusted service partners (payment processors,
          financing providers, restoration partners) only as needed to serve you.
        </p>
        <h2>Cookies &amp; analytics</h2>
        <p>
          Our website uses essential cookies for functionality and may use privacy-friendly analytics to measure traffic.
          You can adjust your browser settings to control cookies.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request to update or delete your information by contacting us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy? Reach us at {siteConfig.location.address}, {siteConfig.location.city},{" "}
          {siteConfig.location.state} {siteConfig.location.zip} or call {siteConfig.phone}.
        </p>
      </Container>
    </section>
  );
}


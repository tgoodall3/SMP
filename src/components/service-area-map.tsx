"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { env } from "@/lib/env";

const FALLBACK_MAP =
  "https://maps.google.com/maps?q=Fortville%20Indiana&t=&z=11&ie=UTF8&iwloc=&output=embed";

export function ServiceAreaMap() {
  const [mapUrl, setMapUrl] = useState(FALLBACK_MAP);

  useEffect(() => {
    if (env.serviceAreaMapUrl) {
      setMapUrl(env.serviceAreaMapUrl);
    }
  }, []);

  return (
    <section className="bg-slate-50 py-16">
      <Container className="space-y-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">Where we work</h2>
          <p className="mt-3 text-base text-slate-600">
            Based in Fortville and covering greater Indianapolis—northside and southside alike. If you don&apos;t see your
            city listed, give us a call and we&apos;ll point you in the right direction.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          <iframe
            title="Simple Man Plumbing service area map"
            src={mapUrl}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
}




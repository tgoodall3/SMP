"use client";

import { JsonLdScript } from "next-seo";

type JsonLdProps = {
  data: Record<string, unknown>;
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  const scriptKey = id ?? "jsonld";

  return <JsonLdScript data={data} id={id} scriptKey={scriptKey} />;
}


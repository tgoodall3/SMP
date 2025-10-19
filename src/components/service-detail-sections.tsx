import { type ServiceDetail } from "@/types/content";

type ServiceDetailSectionsProps = {
  service: ServiceDetail;
};

export function ServiceDetailSections({ service }: ServiceDetailSectionsProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <DetailList title="Problems we solve" items={service.problems} />
          <DetailList title="Signs to watch for" items={service.symptoms} />
          <DetailList title="How we fix it" items={service.solutions} />
          <DetailList title="What to expect on the visit" items={service.expectations} />
        </div>
        <aside className="space-y-6 rounded-3xl border border-brand-sky/20 bg-slate-50 p-6 text-sm text-slate-600">
          <h3 className="font-heading text-xl font-semibold text-brand-navy">Service highlights</h3>
          <ul className="space-y-3">
            {service.solutions.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-brand-sky" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-brand-sky/20 bg-white p-4">
            <h4 className="font-heading text-sm font-semibold text-brand-navy">Warranty</h4>
            <p>Labor guaranteed for 12 months. Manufacturer warranty honored on all installed equipment.</p>
          </div>
          <div className="rounded-xl border border-brand-sky/20 bg-white p-4">
            <h4 className="font-heading text-sm font-semibold text-brand-navy">Prep checklist</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Clear access to the work area</li>
              <li>Shutoff locations identified if possible</li>
              <li>Pets secured for tech safety</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-heading text-2xl font-semibold text-brand-navy">{title}</h3>
      <ul className="mt-4 space-y-3 text-base text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-brand-sky" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


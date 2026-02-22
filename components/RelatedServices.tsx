import Link from "next/link";

interface RelatedServiceLink {
  href: string;
  label: string;
}

interface RelatedServicesProps {
  links: RelatedServiceLink[];
}

export default function RelatedServices({ links }: RelatedServicesProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Services associés
        </h2>
        <ul className="flex flex-wrap gap-3">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
              >
                {label}
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";

/**
 * Avertissement légal affiché en haut de l'article comparatif opérateurs.
 * Indépendance, sources tarifaires, Loi 77-03, lien mentions légales (nofollow).
 */
export function ComparatifLegalDisclaimer() {
  return (
    <aside
      className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-slate-700"
      aria-label="Avertissement légal — Contenu indépendant"
    >
      <h2 className="font-bold text-slate-900 mb-3">
        ⚖️ Avertissement légal — Contenu indépendant
      </h2>
      <p className="leading-relaxed mb-2">
        AlloSupport.ma est un prestataire technique privé, sans affiliation, mandat ni rémunération d&apos;aucun opérateur télécom (Maroc Telecom, Inwi, Orange Maroc). Les données tarifaires sont issues des sites officiels des opérateurs (vérifiées en février 2026). Les tests de performance sont conduits de façon indépendante par AlloSupport.ma et constituent une opinion technique, non une publicité comparative (Loi 77-03). AlloSupport.ma décline toute responsabilité pour des évolutions tarifaires postérieures à cette date.
      </p>
      <p className="mt-3">
        <Link
          href="/mentions-legales"
          rel="nofollow"
          className="font-medium text-emerald-600 hover:text-emerald-700"
        >
          → Voir nos mentions légales complètes
        </Link>
      </p>
    </aside>
  );
}

import Link from "next/link";

export interface BlogDisclaimerProps {
  /** Afficher le bloc Marques & Opérateurs (MT, Inwi, Orange) */
  showOperateurs?: boolean;
  /** Date de publication (ISO ou format affichable) */
  publishDate: string;
  /** Date de dernière mise à jour (optionnelle, sinon = publishDate) */
  updateDate?: string;
  /** Si "comparatif", affiche le texte dédié article comparatif opérateurs */
  variant?: "default" | "comparatif";
}

function formatDateFR(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogDisclaimer({
  showOperateurs = false,
  publishDate,
  updateDate,
  variant = "default",
}: BlogDisclaimerProps) {
  const datePublication = formatDateFR(publishDate);
  const dateMaj = updateDate ? formatDateFR(updateDate) : datePublication;

  if (variant === "comparatif") {
    return (
      <aside
        className="mt-10 pt-8 border-t border-gray-200 bg-gray-50 -mx-8 -mb-8 md:-mx-12 md:-mb-12 px-8 pb-8 md:px-12 md:pb-12 rounded-b-2xl text-sm text-gray-600"
        aria-label="Avis important sur cet article comparatif"
      >
        <h3 className="font-semibold text-gray-800 mb-3">⚠️ Avis important sur cet article</h3>
        <p className="leading-relaxed mb-2">
          Les informations tarifaires publiées sont vérifiées à la date de publication (février 2026) sur les sites officiels des opérateurs. Elles peuvent évoluer sans préavis. Les données de performance sont issues de sources publiques tierces (SpeedGeo, Downdetector, TIC-Maroc) et de notre monitoring interne. Elles constituent une opinion technique indépendante. Les noms Maroc Telecom, Inwi et Orange Maroc sont des marques déposées à l&apos;OMPIC, citées dans le cadre du droit à l&apos;information comparative (Loi 31-08). AlloSupport.ma n&apos;est rémunéré par aucun opérateur et décline toute responsabilité pour toute décision d&apos;abonnement prise sur la base de cet article.
        </p>
        <p className="leading-relaxed mt-4">
          Pour un diagnostic réseau personnalisé : 📞{" "}
          <a href="tel:+212775237038" className="text-emerald-600 hover:text-emerald-700 font-medium">07 75 23 70 38</a>
          {" | "}
          <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700 font-medium">contact@allosupport.ma</a>
        </p>
        <p className="mt-6 pt-4 border-t border-gray-200">
          <Link href="/mentions-legales" className="text-emerald-600 hover:text-emerald-700 font-medium">Mentions légales</Link>
        </p>
      </aside>
    );
  }

  return (
    <aside
      className="mt-10 pt-8 border-t border-gray-200 bg-gray-50 -mx-8 -mb-8 md:-mx-12 md:-mb-12 px-8 pb-8 md:px-12 md:pb-12 rounded-b-2xl text-sm text-gray-600"
      aria-label="Avis juridique et exactitude des informations"
    >
      {/* BLOC 1 — Avertissement erreurs & exactitude */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">
          ⚠️ Avis Important — Exactitude des Informations
        </h3>
        <p className="leading-relaxed">
          Les informations publiées sur ce blog sont fournies à titre indicatif et informatif uniquement.
          AlloSupport.ma s&apos;efforce de maintenir des données exactes et à jour, mais ne peut garantir l&apos;absence
          d&apos;erreurs, d&apos;omissions ou de décalages avec la réalité au moment de votre lecture.
        </p>
        <p className="leading-relaxed">
          Les prix, tarifs, caractéristiques techniques, données de performance, disponibilités de services
          et offres opérateurs mentionnés dans nos articles sont susceptibles d&apos;évoluer sans préavis
          de la part des entreprises concernées.
        </p>
        <p className="leading-relaxed">
          AlloSupport.ma décline toute responsabilité pour :
        </p>
        <ul className="list-disc pl-6 space-y-1 leading-relaxed">
          <li>Toute erreur ou imprécision dans le contenu publié</li>
          <li>Tout préjudice direct ou indirect résultant de l&apos;utilisation des informations de ce blog</li>
          <li>Toute décision prise sur la base d&apos;un article, d&apos;un tableau comparatif ou d&apos;une recommandation publiés sur ce site</li>
          <li>Toute inexactitude liée à une évolution tarifaire ou technique postérieure à la date de publication</li>
          <li>Les contenus de sites externes liés depuis nos articles</li>
        </ul>
      </div>

      {/* BLOC 2 — Mention marques & opérateurs (conditionnel) */}
      {showOperateurs && (
        <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
          <p className="leading-relaxed">
            Les noms Maroc Telecom, IAM, Inwi et Orange Maroc sont des marques déposées appartenant à leurs
            propriétaires respectifs. Leur citation dans cet article s&apos;inscrit dans le droit à l&apos;information
            comparative (Loi 31-08 — Protection du consommateur au Maroc). AlloSupport.ma n&apos;est affilié,
            mandaté ni rémunéré par aucun de ces opérateurs. Les données de tests publiées constituent une
            opinion technique indépendante et ne représentent pas une publicité comparative au sens de la Loi 77-03.
          </p>
        </div>
      )}

      {/* BLOC 3 — Conseil professionnel */}
      <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
        <p className="leading-relaxed">
          Les contenus de ce blog ne remplacent pas un diagnostic technique personnalisé. Pour toute situation
          spécifique, contactez un technicien AlloSupport.ma pour une analyse adaptée à votre matériel et configuration.
          Contact :{" "}
          <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700 font-medium">
            contact@allosupport.ma
          </a>
          {" "}|{" "}
          <a href="tel:+212775237038" className="text-emerald-600 hover:text-emerald-700 font-medium">
            07 75 23 70 38
          </a>
        </p>
      </div>

      {/* BLOC 4 — Date de publication & validité */}
      <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
        <p className="leading-relaxed">
          Cet article a été publié le <strong>{datePublication}</strong> et dernière mise à jour le <strong>{dateMaj}</strong>.
          Les informations reflètent l&apos;état des connaissances et données disponibles à cette date.
        </p>
      </div>

      {/* Lien mentions légales */}
      <p className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/mentions-legales"
          className="text-emerald-600 hover:text-emerald-700 font-medium"
        >
          Mentions légales
        </Link>
      </p>
    </aside>
  );
}

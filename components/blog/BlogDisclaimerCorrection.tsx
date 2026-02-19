import Link from "next/link";

export interface BlogDisclaimerCorrectionProps {
  /** Date de publication affichée (ex. "9 février 2026") */
  publishDate: string;
  /** Date de dernière mise à jour (optionnelle) */
  updateDate?: string;
  /** Titre de l'article pour l'objet email de correction */
  articleTitle: string;
}

export function BlogDisclaimerCorrection({
  publishDate,
  updateDate,
  articleTitle,
}: BlogDisclaimerCorrectionProps) {
  return (
    <aside
      className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12 space-y-6 text-sm text-gray-600"
      aria-label="Avis sur l'exactitude des informations et procédure de correction"
    >
      {/* BLOC A — Limitation de responsabilité erreurs */}
      <div className="border-l-4 border-orange-400 pl-4 space-y-3">
        <h3 className="font-semibold text-gray-800">
          ⚠️ Avis sur l&apos;exactitude des informations
        </h3>
        <p className="leading-relaxed">
          Les informations publiées dans cet article sont fournies à titre indicatif et informatif uniquement. AlloSupport.ma s&apos;efforce de publier des données exactes et vérifiées, mais ne peut garantir l&apos;absence totale d&apos;erreurs, d&apos;imprécisions ou d&apos;informations devenues obsolètes après la date de publication.
        </p>
        <p className="leading-relaxed">
          Les tarifs, conditions contractuelles et performances des opérateurs (Maroc Telecom, Inwi, Orange Maroc) sont susceptibles d&apos;évoluer à tout moment sans préavis de leur part. AlloSupport.ma n&apos;est pas en mesure de mettre à jour cet article en temps réel.
        </p>
        <p className="leading-relaxed">
          AlloSupport.ma décline expressément toute responsabilité pour :
        </p>
        <ul className="list-disc pl-5 space-y-1 leading-relaxed">
          <li>Toute erreur ou imprécision dans les données publiées</li>
          <li>Tout préjudice direct ou indirect résultant d&apos;une décision prise sur la base de cet article</li>
          <li>Toute évolution tarifaire ou technique postérieure à la date de publication</li>
          <li>Toute inexactitude liée aux données de performance réseau, lesquelles varient selon la zone géographique, l&apos;heure et la configuration de l&apos;abonné</li>
          <li>Les contenus des sites tiers référencés en sources</li>
        </ul>
        <p className="text-gray-500 mt-3">
          Publié le {publishDate}
          {updateDate && <> — Dernière mise à jour : {updateDate}</>}
        </p>
      </div>

      {/* BLOC B — Procédure de signalement erreur */}
      <div className="bg-white rounded-md p-4 border-l-4 border-blue-500 space-y-3">
        <h3 className="font-semibold text-gray-800">
          📩 Vous avez repéré une erreur ou une information inexacte ?
        </h3>
        <p className="leading-relaxed">
          AlloSupport.ma s&apos;engage à examiner toute demande de correction motivée et documentée.
        </p>
        <p className="leading-relaxed">
          Si vous estimez qu&apos;une information publiée dans cet article est inexacte, erronée ou susceptible d&apos;induire en erreur, vous pouvez nous le signaler par email en précisant :
        </p>
        <ol className="list-decimal pl-5 space-y-1 leading-relaxed">
          <li>L&apos;information concernée (titre de section + texte exact)</li>
          <li>La correction proposée</li>
          <li>La source ou preuve à l&apos;appui (lien, capture, document)</li>
        </ol>
        <p className="leading-relaxed">
          📧 Adresse de contact :{" "}
          <a
            href={`mailto:contact@allosupport.ma?subject=${encodeURIComponent(`[CORRECTION ARTICLE] ${articleTitle}`)}`}
            className="text-blue-600 font-semibold underline hover:text-blue-700"
          >
            contact@allosupport.ma
          </a>
          <br />
          <span className="text-gray-500">Objet de l&apos;email : [CORRECTION ARTICLE] {articleTitle}</span>
        </p>
        <p className="leading-relaxed">
          AlloSupport.ma s&apos;engage à examiner toute demande sous 15 jours ouvrés et à apporter une correction si les éléments fournis sont fondés.
        </p>
        <p className="leading-relaxed">
          Cette procédure est valable pour tout lecteur, professionnel, ou entreprise citée dans l&apos;article.
        </p>
      </div>

      {/* BLOC C — Indépendance & marques */}
      <div className="text-xs text-gray-400 border-t border-gray-200 pt-4 leading-relaxed">
        Les noms Maroc Telecom, Inwi et Orange Maroc sont des marques déposées à l&apos;OMPIC. Leur citation relève du droit à l&apos;information comparative (Loi 31-08). AlloSupport.ma n&apos;est affilié, mandaté ni rémunéré par aucun opérateur télécom.{" "}
        <Link href="/mentions-legales" rel="nofollow" className="text-gray-500 hover:underline">
          → Voir nos mentions légales complètes
        </Link>
      </div>
    </aside>
  );
}

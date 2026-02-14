import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export default function PasswordGeneratorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-slate prose-lg max-w-none mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Générateur de Mots de Passe Sécurisés — Maroc
            </h1>
            <p className="text-lg text-gray-700 lead">
              Au Maroc comme ailleurs, la <strong>sécurité des mots de passe</strong> est souvent négligée : réutilisation du même mot de passe, dates de naissance, noms ou séquences simples. Les fuites de données et le phishing ciblent aussi bien les particuliers que les <strong>PME au Maroc</strong>. Un générateur de mots de passe permet de créer des combinaisons aléatoires, longues et complexes, difficiles à deviner ou à cracker. Utilisez l&apos;outil ci-dessous pour générer un mot de passe fort en quelques clics.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Pourquoi des mots de passe forts au Maroc ?
            </h2>
            <p className="text-gray-700">
              Les comptes email, bancaires, réseaux sociaux et outils professionnels (Maroc Telecom, banques, CRM, facturation) sont des cibles privilégiées. Un mot de passe faible ou réutilisé multiplie le risque : une seule fuite sur un site peut ouvrir l&apos;accès à tous vos autres comptes. Au Maroc, la prise de conscience sur la <strong>sécurité des mots de passe</strong> progresse, mais beaucoup d&apos;entreprises et de particuliers utilisent encore des mots de passe courts ou prévisibles. Un mot de passe d&apos;au moins 12 caractères, avec majuscules, minuscules, chiffres et symboles, et unique par compte, réduit fortement ce risque.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Bonnes pratiques : longueur, complexité, gestionnaire
            </h2>
            <p className="text-gray-700">
              La longueur prime : 12 caractères minimum, 16 ou plus pour les comptes sensibles. Mélanger les types de caractères (majuscules, minuscules, chiffres, symboles) augmente le nombre de combinaisons possibles et rend les attaques par force brute quasi impossibles. Ne réutilisez jamais le même mot de passe sur plusieurs services. Pour les stocker, utilisez un <strong>gestionnaire de mots de passe</strong> (Bitwarden, 1Password, KeePass, etc.) : un seul mot de passe maître bien protégé, et des mots de passe uniques et forts pour chaque site. Activez la double authentification (2FA) dès que possible, en particulier pour l&apos;email et le bancaire.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              PME et particuliers au Maroc : sécuriser ses accès
            </h2>
            <p className="text-gray-700">
              Pour les <strong>PME au Maroc</strong>, les comptes administrateur, messagerie professionnelle et outils cloud doivent être protégés par des mots de passe robustes et des politiques de changement régulier. Évitez les mots de passe partagés en clair (Excel, WhatsApp) ; privilégiez un gestionnaire d&apos;équipe ou des coffres partagés. Pour les particuliers, le générateur ci-dessous suffit pour créer des mots de passe uniques ; enregistrez-les dans un gestionnaire et protégez l&apos;accès à celui-ci par un mot de passe maître fort et une 2FA. En cas de doute après un piratage ou une fuite, changez immédiatement le mot de passe concerné et tous ceux qui étaient identiques.
            </p>
          </article>

          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Générer un mot de passe</h2>
          <PasswordGeneratorClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

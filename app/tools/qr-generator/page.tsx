import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRGeneratorClient from "./QRGeneratorClient";

export default function QRGeneratorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-slate prose-lg max-w-none mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Générateur de QR Code Gratuit — Restaurants & PME Maroc
            </h1>
            <p className="text-lg text-gray-700 lead">
              Les <strong>QR codes</strong> ont envahi le quotidien au Maroc : menus de restaurants, cartes de visite, affiches et sites web. Un simple scan avec le smartphone ouvre un lien, un menu, un réseau Wi-Fi ou des coordonnées. Pour les <strong>restaurants au Maroc</strong> et les <strong>PME</strong>, créer un QR code gratuitement permet de moderniser l&apos;accès à l&apos;info sans budget marketing lourd. Utilisez l&apos;outil ci-dessous pour générer des QR codes (URL, texte, Wi-Fi, téléphone, email) et les télécharger en PNG.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              QR codes pour restaurants et commerces au Maroc
            </h2>
            <p className="text-gray-700">
              De plus en plus de <strong>restaurants au Maroc</strong> proposent un menu scannable en QR code : le client scanne, consulte la carte et les prix sur son téléphone, sans contact avec un menu papier. Idéal pour les mises à jour (changement de plats, prix) sans réimprimer. Le même principe vaut pour les cafés, boulangeries et commerces : lien vers la page Facebook, le site, le catalogue ou une offre promotionnelle. Un <strong>générateur de QR code</strong> gratuit suffit pour créer le lien ; il suffit d&apos;afficher le QR à l&apos;entrée ou sur les tables.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              PME Maroc : site, Wi-Fi, contact
            </h2>
            <p className="text-gray-700">
              Pour les <strong>PME au Maroc</strong>, les QR codes servent à diriger les clients vers le site web, la page de contact, un formulaire de devis ou une fiche Google Business. Sur les cartes de visite, un QR code renvoyant vers un site ou un vCard évite de ressaisir les coordonnées. En bureau ou en espace d&apos;accueil, un QR code <strong>Wi-Fi</strong> permet aux visiteurs de se connecter au réseau sans taper le mot de passe : on génère un QR contenant le SSID et le mot de passe (format WIFI:...), on l&apos;affiche, le client scanne et se connecte. Pratique pour les cabinets, salons et salles de réunion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Types de QR codes : URL, texte, Wi-Fi, téléphone, email
            </h2>
            <p className="text-gray-700">
              Un générateur de QR code peut encoder plusieurs types de contenu. <strong>URL</strong> : le plus courant, pour un site, une landing page ou un menu en ligne. <strong>Texte</strong> : un message court, une adresse, des horaires. <strong>Wi-Fi</strong> : nom du réseau (SSID) et mot de passe, pour une connexion en un scan. <strong>Téléphone</strong> : numéro au format international (ex. +212 6...) pour lancer un appel. <strong>Email</strong> : adresse email pour ouvrir le client mail. Choisissez le type adapté à votre usage, remplissez les champs, générez et téléchargez l&apos;image. Vérifiez toujours en scannant le QR code avant de l&apos;imprimer ou de l&apos;afficher.
            </p>
          </article>

          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Créer votre QR code</h2>
          <QRGeneratorClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

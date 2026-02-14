import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeedTestClient from "./SpeedTestClient";

export default function SpeedTestPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-slate prose-lg max-w-none mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Test Vitesse Internet Maroc 2026
            </h1>
            <p className="text-lg text-gray-700 lead">
              Mesurer le débit de votre connexion au Maroc permet de vérifier si vous recevez bien ce que promet votre opérateur. Un <strong>test vitesse internet Maroc</strong> donne en quelques secondes votre débit en téléchargement (download), en envoi (upload) et la latence (ping). Utilisez l&apos;outil ci-dessous pour une estimation rapide ; pour des mesures officielles, des services comme Speedtest.net ou le <strong>speed test Maroc Telecom</strong> restent des références.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Comment interpréter les résultats ?
            </h2>
            <p className="text-gray-700">
              Les chiffres affichés par un test de vitesse correspondent au débit entre votre box ou votre 4G et le serveur de test. En ADSL, le débit annoncé (par exemple 8 Mbps) est souvent supérieur au débit réel : une ligne ADSL 8 Mbps affiche en pratique <strong>6 à 7 Mbps en réel</strong>, ce qui est normal à cause de la décroissance sur la ligne et du surcoût des protocoles. Si vous êtes très en dessous (par exemple 2–3 Mbps sur une offre 8 Mbps), vérifiez le câblage, le routeur et les appareils connectés avant d&apos;appeler votre opérateur.
            </p>
            <p className="text-gray-700">
              La latence (ping) se mesure en millisecondes : en dessous de 50 ms, la connexion est très réactive (visioconférence, jeux en ligne). Au-delà de 100 ms, les délais deviennent sensibles. Le <strong>débit 4G Maroc</strong> varie fortement selon la zone et l&apos;heure : interprétez vos résultats en les comparant aux ordres de grandeur typiques pour votre type d&apos;accès.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Débits normaux au Maroc (ADSL, 4G, fibre)
            </h2>
            <p className="text-gray-700">
              En ADSL, les offres 8 à 20 Mbps sont courantes ; en réel, comptez environ 6–7 Mbps pour une offre 8 Mbps et 15–18 Mbps pour une offre 20 Mbps. En <strong>4G Maroc Telecom</strong> en centre-ville (Casablanca, Rabat), des débits de 40 Mbps et plus sont fréquents ; en zones rurales ou peu couvertes, 10–15 Mbps sont souvent observés. La fibre, là où elle est déployée, peut dépasser 100 Mbps en download. Ces ordres de grandeur aident à situer votre propre <strong>test vitesse internet Maroc</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Problèmes de connexion lente au Maroc
            </h2>
            <p className="text-gray-700">
              Un débit faible ou instable peut venir du <strong>routeur ou de la box</strong> : modèle obsolète, surchauffe (placez la box dans un endroit aéré), trop d&apos;appareils connectés en Wi-Fi. Les <strong>câbles RJ45</strong> défectueux ou trop longs dégradent aussi le débit en filaire. Vérifiez les branchements, redémarrez la box, testez en câble plutôt qu&apos;en Wi-Fi et refaites un test à différents moments. Si malgré ça votre connexion reste lente, le problème peut être côté ligne ou opérateur.
            </p>
            <p className="text-gray-700">
              <strong>Internet toujours lent après le test ?</strong> AlloSupport diagnostique votre connexion et votre installation à distance : identification des goulots d&apos;étranglement (Wi-Fi, routeur, paramètres). Diagnostic et optimisation à partir de <strong>250 DH</strong>.{" "}
              <a href="https://wa.me/212775237038?text=Bonjour%2C%20ma%20connexion%20reste%20lente%20apr%C3%A8s%20le%20test.%20Je%20veux%20un%20diagnostic%20%C3%A0%20distance%20(250%20DH)." className="text-emerald-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Contactez-nous par WhatsApp</a> pour une prise en charge rapide.
            </p>
          </article>

          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Lancer le test de vitesse</h2>
          <SpeedTestClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

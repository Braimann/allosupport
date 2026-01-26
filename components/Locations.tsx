import { MapPin, Building2, Globe } from "lucide-react";

const casablancaZones = [
  "Maârif",
  "Sidi Maâruf",
  "CFC (Casablanca Finance City)",
  "Ain Sebaa",
  "Anfa",
  "Maarif Extension",
  "Gauthier",
  "Bourgogne",
];

const rabatZones = [
  "Agdal",
  "Hay Riad",
  "Souissi",
  "Hassan",
  "Centre-ville",
];

const otherCities = [
  "Marrakech",
  "Tanger",
  "Fès",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Témara",
  "El Jadida",
];

export default function Locations() {
  return (
    <section id="zones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Zones d&apos;intervention
          </span>
          <h2 className="section-title">
            Support Informatique{" "}
            <span className="text-accent-500">Partout au Maroc</span>
          </h2>
          <p className="section-subtitle">
            Intervention sur site dans les principales zones économiques ou
            support à distance via TeamViewer pour tout le Maroc.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Casablanca */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Casablanca</h3>
                <p className="text-sm text-gray-500">
                  Capitale économique du Maroc
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Support IT Casablanca</strong> : intervention rapide dans
              tous les quartiers d&apos;affaires.
            </p>
            <ul className="space-y-2">
              {casablancaZones.map((zone, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">
                    {zone.includes("CFC")
                      ? "Dépannage CFC"
                      : zone === "Sidi Maâruf"
                      ? "Support IT Sidi Maâruf"
                      : zone === "Maârif"
                      ? "Informatique Maârif"
                      : zone === "Ain Sebaa"
                      ? "Zone Industrielle Ain Sebaa"
                      : zone}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rabat */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Rabat</h3>
                <p className="text-sm text-gray-500">Capitale administrative</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Maintenance informatique Rabat</strong> : support aux
              administrations et entreprises.
            </p>
            <ul className="space-y-2">
              {rabatZones.map((zone, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <MapPin className="w-4 h-4 text-accent-500" />
                  <span className="text-sm">
                    {zone === "Agdal"
                      ? "Maintenance informatique Agdal"
                      : zone}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Cities / Remote */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tout le Maroc
                </h3>
                <p className="text-sm text-gray-500">
                  Sur site ou à distance
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Dépannage informatique à distance</strong> via TeamViewer
              ou intervention sur site programmée.
            </p>
            <ul className="space-y-2">
              {otherCities.map((city, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{city}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">
                💻 <strong>Support à distance</strong> : Assistance TeamViewer
                disponible partout au Maroc
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous êtes dans une autre ville ?{" "}
            <strong>Nous intervenons partout au Maroc</strong>.
          </p>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Vérifier la disponibilité
          </a>
        </div>
      </div>
    </section>
  );
}

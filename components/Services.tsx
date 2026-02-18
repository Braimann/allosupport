"use client";

import {
  Monitor,
  Home,
  Video,
  Server,
  Shield,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Réparation PC & Dépannage",
    description:
      "Réparation ordinateur Maroc : PC portable lent, écran bleu, formatage PC, récupération données. Technicien à distance en 15 min, dès 250 DH.",
    keywords: ["Réparation PC Maroc", "Formatage PC prix Maroc", "Récupération données"],
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/50",
    href: "/reparation-ordinateur",
    anchor: "Réparation ordinateur Maroc →",
  },
  {
    icon: Shield,
    title: "Suppression Virus & Sécurité",
    description:
      "Suppression virus ordinateur Maroc : malwares, ransomware, pop-ups. Nettoyage complet + installation antivirus professionnel. Paiement après résultat.",
    keywords: ["Suppression virus PC Maroc", "Antivirus Maroc", "Nettoyage malware"],
    gradient: "from-red-500 to-rose-500",
    glow: "shadow-red-500/50",
    href: "/virus-ordinateur-maroc",
    anchor: "Suppression virus PC Maroc →",
  },
  {
    icon: Video,
    title: "PC Lent – Optimisation",
    description:
      "PC t9il ? Solution rapide : nettoyage système, suppression programmes inutiles, optimisation Windows. Résultat visible en 15 min à distance.",
    keywords: ["PC lent solution", "Optimisation Windows", "PC t9il"],
    gradient: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/50",
    href: "/pc-lent-solution",
    anchor: "PC lent solution rapide →",
  },
  {
    icon: Home,
    title: "Formatage & Installation Windows",
    description:
      "Formatage PC Maroc 350 DH : réinstallation Windows 10/11, pilotes, logiciels. Installation propre à distance sans perte de données.",
    keywords: ["Formatage PC Maroc 350 DH", "Installation Windows Maroc"],
    gradient: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/50",
    href: "/formatage-pc",
    anchor: "Formatage PC Maroc 350 DH →",
  },
  {
    icon: Server,
    title: "Infogérance & Support PME",
    description:
      "Infogérance PME Maroc : maintenance préventive, cybersécurité, sauvegardes, support utilisateurs 24/7. Forfaits dès 999 DH/mois.",
    keywords: ["Infogérance PME Maroc", "Cybersécurité PME", "Support PME"],
    gradient: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/50",
    href: "/infogerance-pme-maroc",
    anchor: "Infogérance PME Maroc →",
  },
  {
    icon: Search,
    title: "Récupération de Données",
    description:
      "Récupération de données Maroc : disque dur, clé USB, carte SD. Fichiers supprimés, disque formaté par erreur. Diagnostic gratuit.",
    keywords: ["Récupération données Maroc", "Disque dur", "Fichiers supprimés"],
    gradient: "from-teal-500 to-cyan-500",
    glow: "shadow-teal-500/50",
    href: "/recuperation-donnees",
    anchor: "Récupération de données Maroc →",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-secondary-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-400 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Nos Expertises
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dépannage Informatique{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              à Distance
            </span>{" "}
            au Maroc
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Réparation PC, suppression virus, formatage, maintenance PME. Technicien
            connecté en 15 min, partout au Maroc. Paiement uniquement après résultat.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 ${service.glow}`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full flex flex-col hover:border-white/20 transition-all duration-300">
                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg ${service.glow}`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Keywords Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.keywords.map((keyword, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-xs bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full border border-white/10"
                    >
                      {keyword}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={service.href}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary-400 font-semibold mt-auto group-hover:text-primary-300 transition-colors"
                >
                  {service.anchor}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 mb-6 text-lg">
            Vous avez un besoin spécifique ?{" "}
            <strong className="text-primary-400">Audit parc informatique gratuit</strong> pour votre
            entreprise.
          </p>
          <motion.a
            href="#devis"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary-500/50 hover:shadow-xl transition-all duration-300"
          >
            Demander un devis gratuit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

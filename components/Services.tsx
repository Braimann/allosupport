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
    title: "Dépannage & Réparation PC",
    description:
      "Réparation PC portable Casablanca, formatage PC, récupération données disque dur. Nos techniciens résolvent tous vos problèmes matériels et logiciels.",
    keywords: ["Réparation PC portable", "Formatage PC prix Maroc", "Récupération données"],
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/50",
  },
  {
    icon: Home,
    title: "Technicien à Domicile",
    description:
      "Technicien informatique à domicile à Casablanca et Rabat. Intervention sur site pour installation, configuration et dépannage de vos équipements.",
    keywords: ["Technicien informatique à domicile", "Intervention sur site"],
    gradient: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/50",
  },
  {
    icon: Video,
    title: "Support à Distance",
    description:
      "Dépannage informatique à distance via TeamViewer. Assistance rapide sans déplacement pour résoudre vos problèmes en quelques minutes.",
    keywords: ["Dépannage informatique à distance TeamViewer", "Support IT"],
    gradient: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/50",
  },
  {
    icon: Server,
    title: "Infogérance PME",
    description:
      "Contrat maintenance informatique PME : gestion parc informatique Maroc, sauvegardes automatiques, mises à jour et supervision 24/7.",
    keywords: ["Contrat maintenance informatique PME", "Gestion parc informatique"],
    gradient: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/50",
  },
  {
    icon: Shield,
    title: "Sécurité & Réseau",
    description:
      "Sécurité informatique Maroc : protection antivirus, pare-feu, VPN. Installation réseau entreprise et audit de sécurité complet.",
    keywords: ["Sécurité informatique Maroc", "Installation réseau entreprise"],
    gradient: "from-red-500 to-rose-500",
    glow: "shadow-red-500/50",
  },
  {
    icon: Search,
    title: "SEO & Solutions Google",
    description:
      "Agence SEO Maroc : création site web, référencement Google, fiche Google My Business et campagnes Google Ads pour votre visibilité.",
    keywords: ["Agence SEO Maroc", "Création site web Maroc", "Google Ads"],
    gradient: "from-teal-500 to-cyan-500",
    glow: "shadow-teal-500/50",
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
            Support Informatique &{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              SEO
            </span>{" "}
            au Maroc
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            De la réparation PC portable au référencement Google, nous
            accompagnons les PME marocaines dans leur transformation digitale.
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

                {/* CTA Link */}
                <motion.a
                  href="#devis"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary-400 font-semibold mt-auto group-hover:text-primary-300 transition-colors"
                >
                  En savoir plus
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
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

"use client";

import {
  MapPin,
  Receipt,
  Shield,
  Clock,
  CheckCircle,
  FileText,
  Lock,
  CreditCard,
  Video,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: CreditCard,
    title: "Paiement Sécurisé",
    description:
      "Paiement sécurisé par carte bancaire ou virement. Facture TVA récupérable incluse.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Video,
    title: "Intervention Enregistrée",
    description:
      "Chaque intervention est enregistrée pour votre traçabilité et notre amélioration continue.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lock,
    title: "Confidentialité Garantie",
    description:
      "Vos données sont protégées. Engagement de confidentialité signé pour chaque intervention.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: RefreshCw,
    title: "Satisfait ou Remboursé",
    description:
      "Si on ne répare pas votre problème en 15 minutes, vous êtes intégralement remboursé.",
    gradient: "from-red-500 to-orange-500",
  },
];

const stats = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "15 min", label: "Temps de réponse" },
  { value: "24/7", label: "Support disponible" },
  { value: "98%", label: "Taux de satisfaction" },
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Trust() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
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
            className="inline-block bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-600 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Pourquoi nous choisir
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            La <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Confiance</span> des PME Marocaines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plus de 500 entreprises au Maroc nous font confiance pour leur
            support informatique et leur présence digitale.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 h-full flex flex-col hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-3xl p-8 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="group"
              >
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all"
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

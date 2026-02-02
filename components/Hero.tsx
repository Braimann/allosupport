"use client";

import { AlertTriangle, Briefcase, Clock, Shield, Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/components/PhoneLink";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"particuliers" | "entreprises">("particuliers");
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // SSR-safe: Only access window on client side
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setMounted(true); // Mark as mounted to enable animations
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/30 rounded-full"
            initial={{
              x: Math.random() * (windowSize?.width || 1920),
              y: Math.random() * (windowSize?.height || 1080),
            }}
            animate={{
              y: [null, Math.random() * windowSize.height],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={mounted ? { opacity: 0, x: -50 } : false}
            animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-white ${!mounted ? "opacity-100" : ""}`}
          >
            {/* Animated Badge */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 shadow-lg ${!mounted ? "opacity-100" : ""}`}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-primary-400" />
              </motion.div>
              <span className="text-sm font-medium">Intervention en 15 min • Partout au Maroc</span>
            </motion.div>

            {/* Main Title with Gradient Text */}
            <motion.h1
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${!mounted ? "opacity-100" : ""}`}
            >
              <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                Dépannage Informatique à Distance au Maroc
              </span>
              <br />
              <span className="text-primary-400">Intervention 15 min</span>
              <br />
              <span className="text-white/90">Satisfait ou Remboursé</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl text-white/80 mb-6 leading-relaxed ${!mounted ? "opacity-100" : ""}`}
            >
              PC lent, virus, panne ? Notre équipe d&apos;experts intervient à distance en{" "}
              <strong className="text-primary-400">15 minutes</strong>, partout au Maroc.
              Si on ne répare pas,{" "}
              <strong className="text-primary-400">vous ne payez pas</strong>.
            </motion.p>

            {/* Quick internal SEO links */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 10 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className={`flex flex-wrap gap-3 mb-6 ${!mounted ? "opacity-100" : ""}`}
            >
              <a
                href="/casablanca"
                className="text-sm px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 transition"
              >
                Dépannage PC Casablanca
              </a>
              <a
                href="/pc-lent-solution"
                className="text-sm px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 transition"
              >
                PC lent solution
              </a>
            </motion.div>

            {/* Tab Interface */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`mb-8 ${!mounted ? "opacity-100" : ""}`}
            >
              <div className="flex gap-2 mb-6 bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setActiveTab("particuliers")}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "particuliers"
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Particuliers
                </button>
                <button
                  onClick={() => setActiveTab("entreprises")}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "entreprises"
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Entreprises
                </button>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={mounted ? { opacity: 0, x: -20 } : false}
                animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ${!mounted ? "opacity-100" : ""}`}
              >
                {activeTab === "particuliers" ? (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      PC Lent ? Virus ? Panne ?
                    </h3>
                    <p className="text-white/80 mb-6">
                      Intervention rapide à partir de <strong className="text-primary-400">250 Dhs</strong>
                    </p>
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, je souhaite un diagnostic gratuit pour mon problème informatique")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Diagnostic Gratuit via WhatsApp
                    </a>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Maintenance & Sécurité IT
                    </h3>
                    <p className="text-white/80 mb-6">
                      Support dédié pour votre équipe. Devis personnalisé.
                    </p>
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, je souhaite un devis pour mon entreprise")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:scale-105"
                    >
                      <Briefcase className="w-5 h-5" />
                      Parler à un expert
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`flex flex-wrap gap-4 mb-8 ${!mounted ? "opacity-100" : ""}`}
            >
              <div className="flex items-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Clock className="w-5 h-5 text-primary-400" />
                <span>15 min de réponse</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Shield className="w-5 h-5 text-primary-400" />
                <span>Satisfait ou Remboursé</span>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 ${!mounted ? "opacity-100" : ""}`}
            >
              {[
                { value: "15 min", label: "Intervention" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Disponible" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={mounted ? { opacity: 0, scale: 0.8 } : false}
                  animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className={`text-center ${!mounted ? "opacity-100" : ""}`}
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card Effect */}
          <motion.div
            initial={mounted ? { opacity: 0, x: 50 } : false}
            animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`hidden lg:block ${!mounted ? "opacity-100" : ""}`}
          >
            <div className="relative perspective-1000">
              <motion.div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="space-y-6">
                  {[
                    {
                      icon: Zap,
                      title: "Ticket Urgence",
                      desc: "Virus, lenteur, installation",
                      price: "250 Dhs",
                      color: "bg-accent-500",
                    },
                    {
                      icon: Shield,
                      title: "Pack Sérénité",
                      desc: "Nettoyage complet + Optimisation",
                      price: "450 Dhs",
                      color: "bg-primary-500",
                    },
                    {
                      icon: Briefcase,
                      title: "Pro PME",
                      desc: "Maintenance parc informatique",
                      price: "Sur devis",
                      color: "bg-blue-500",
                    },
                  ].map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={mounted ? { opacity: 0, x: 20 } : false}
                      animate={mounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className={`flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group ${!mounted ? "opacity-100" : ""}`}
                    >
                      <motion.div
                        className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                        <p className="text-white/70 text-sm mb-2">{service.desc}</p>
                        <p className="text-primary-400 font-bold">{service.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={mounted ? { scale: 0 } : false}
                  animate={mounted ? { scale: 1 } : { scale: 1 }}
                  transition={{ delay: 1, type: "spring" as const }}
                  className={`absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-xl shadow-2xl ${!mounted ? "opacity-100 scale-100" : ""}`}
                >
                  <p className="font-bold">Satisfait ou Remboursé</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

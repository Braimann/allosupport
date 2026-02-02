"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Monitor,
  MessageCircle,
  ChevronDown,
  Home,
  Users,
  Building2,
  DollarSign,
  BookOpen,
  ShieldAlert,
  Download,
  HardDrive,
  Briefcase,
  Lock,
  Wifi,
  Cloud,
  User,
  Ticket,
  Wrench,
  Code,
  Key,
  Gauge,
  HardDriveIcon,
  QrCode,
  ArrowRight,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

// Services data for dropdowns
const servicesParticuliers = [
  {
    name: "Dépannage PC & Mac",
    href: "/services/depannage-pc-mac",
    icon: Monitor,
    desc: "Lenteurs, bugs, écrans bleus",
  },
  {
    name: "Suppression Virus",
    href: "/services/suppression-virus",
    icon: ShieldAlert,
    desc: "Nettoyage complet & Sécurité",
  },
  {
    name: "Installation & Config",
    href: "/services/installation-config",
    icon: Download,
    desc: "Imprimantes, Office, Windows",
  },
  {
    name: "Récupération Données",
    href: "/services/recuperation-donnees",
    icon: HardDrive,
    desc: "Photos et fichiers perdus",
  },
];

const servicesEntreprises = [
  {
    name: "Infogérance PME",
    href: "/services/infogerance-pme",
    icon: Briefcase,
    desc: "Contrat de maintenance mensuel",
  },
  {
    name: "Cybersécurité",
    href: "/services/cybersecurite",
    icon: Lock,
    desc: "Audit et protection données",
  },
  {
    name: "Réseau & Wi-Fi",
    href: "/services/reseau-wifi",
    icon: Wifi,
    desc: "Serveurs, VPN, Routeurs",
  },
  {
    name: "Email Pro & Cloud",
    href: "/services/email-cloud",
    icon: Cloud,
    desc: "Office 365, Google Workspace",
  },
];

const tools = [
  {
    name: "Éditeur HTML",
    href: "/tools/html-editor",
    icon: Code,
    desc: "Éditeur HTML/CSS/JS en ligne",
  },
  {
    name: "Générateur de Mots de Passe",
    href: "/tools/password-generator",
    icon: Key,
    desc: "Créer des mots de passe sécurisés",
  },
  {
    name: "Test de Vitesse",
    href: "/tools/speed-test",
    icon: Gauge,
    desc: "Tester votre connexion internet",
  },
  {
    name: "Convertisseur d'Unités",
    href: "/tools/unit-converter",
    icon: HardDriveIcon,
    desc: "Convertir bytes, KB, MB, GB, TB",
  },
  {
    name: "Générateur QR Code",
    href: "/tools/qr-generator",
    icon: QrCode,
    desc: "Créer des QR codes instantanément",
  },
  {
    name: "Générateur Devis/Facture",
    href: "/tools/invoice-generator",
    icon: FileText,
    desc: "Créer des devis et factures en PDF",
  },
];

export default function Header() {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const navLinks = [
    { href: "/", label: "Accueil", icon: Home },
    {
      href: "/#particuliers",
      label: "Particuliers",
      icon: Users,
      hasDropdown: true,
      dropdownKey: "particuliers",
      services: servicesParticuliers,
    },
    {
      href: "/#entreprises",
      label: "Entreprises",
      icon: Building2,
      hasDropdown: true,
      dropdownKey: "entreprises",
      services: servicesEntreprises,
    },
    {
      href: "/#tarifs",
      label: "Tarifs",
      icon: DollarSign,
      isHighlighted: true,
    },
    { href: "/blog", label: "Blog", icon: BookOpen },
    {
      href: "/tools",
      label: "Outils",
      icon: Wrench,
      hasDropdown: true,
      dropdownKey: "tools",
      services: tools,
    },
  ];

  const handleDropdownToggle = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleMobileDropdownToggle = (key: string) => {
    setMobileDropdown(mobileDropdown === key ? null : key);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 right-0 z-50"
    >
      {/* Top Bar (Announcement Bar) - Navy Blue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-900 text-white py-2 hidden md:block relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <motion.a
              href={`tel:${GOOGLE_BUSINESS.PHONE}`}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{GOOGLE_BUSINESS.PHONE_FORMATTED}</span>
            </motion.a>
            <motion.a
              href="mailto:contact@allosupport.ma"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>contact@allosupport.ma</span>
            </motion.a>
          </div>

          {/* Right: Online Status */}
          <motion.div
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-emerald-400 font-medium"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full"
            />
            <span>Techniciens en ligne : Dispo immédiate</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation Bar - Pure White */}
      <nav
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-shadow"
              >
                <Monitor className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <span className="text-xl font-bold text-slate-900">
                  AlloSupport
                </span>
                <span className="text-xl font-bold text-emerald-600">.ma</span>
                <p className="text-xs text-slate-500 -mt-1">
                  Dépannage IT à Distance
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link, idx) => {
                const isActive =
                  (link.href === "/" && pathname === "/") ||
                  (link.href !== "/" && pathname.startsWith(link.href)) ||
                  (link.href.startsWith("/#") && isHomePage);

                return (
                  <div key={link.href} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          link.hasDropdown && setOpenDropdown(link.dropdownKey!)
                        }
                        onMouseLeave={() =>
                          link.hasDropdown && setOpenDropdown(null)
                        }
                      >
                        <Link
                          href={link.href}
                          onClick={() => !link.hasDropdown && setOpenDropdown(null)}
                          className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            link.isHighlighted
                              ? "text-emerald-600 font-bold"
                              : isActive
                              ? "text-emerald-600 bg-emerald-50"
                              : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                          }`}
                        >
                          {link.icon && <link.icon className="w-4 h-4" />}
                          <span>{link.label}</span>
                          {link.hasDropdown && (
                            <ChevronDown
                              className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                                openDropdown === link.dropdownKey
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                          {isActive && !link.isHighlighted && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"
                            />
                          )}
                        </Link>

                        {/* Dropdown Menu */}
                        {link.hasDropdown && (
                          <AnimatePresence>
                            {openDropdown === link.dropdownKey && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
                              >
                                <div className="p-2">
                                  {link.services?.map((service, serviceIdx) => {
                                    const IconComponent = service.icon;
                                    return (
                                      <Link
                                        key={service.href}
                                        href={service.href}
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                                      >
                                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                          <IconComponent className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-slate-500 mt-0.5">
                                            {service.desc}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                  {/* Link to all tools page */}
                                  {link.dropdownKey === "tools" && (
                                    <Link
                                      href="/tools"
                                      className="flex items-center justify-center gap-2 p-3 mt-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-semibold transition-colors group border-t border-slate-200"
                                    >
                                      <Wrench className="w-4 h-4" />
                                      <span className="text-sm">Voir tous les outils</span>
                                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Account & CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Account Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  href={user ? "/dashboard" : "/login"}
                  className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-slate-50"
                >
                  <User className="w-4 h-4" />
                  <span>{user ? "Mon Compte" : "Connexion"}</span>
                </Link>
              </motion.div>

              {/* WhatsApp CTA Button - Emerald Green */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai une urgence informatique")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  {/* Pulse Animation */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-emerald-400 rounded-full"
                  />
                  <MessageCircle className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Réponse Immédiate</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive =
                    (link.href === "/" && pathname === "/") ||
                    (link.href !== "/" && pathname.startsWith(link.href)) ||
                    (link.href.startsWith("/#") && isHomePage);

                  return (
                    <div key={link.href}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() =>
                              handleMobileDropdownToggle(link.dropdownKey!)
                            }
                            className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                              link.isHighlighted
                                ? "text-emerald-600 font-bold bg-emerald-50"
                                : isActive
                                ? "bg-emerald-50 text-emerald-600"
                                : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {link.icon && <link.icon className="w-5 h-5" />}
                              <span>{link.label}</span>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                                mobileDropdown === link.dropdownKey
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {/* Mobile Dropdown Content */}
                          <AnimatePresence>
                            {mobileDropdown === link.dropdownKey && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-2 space-y-1">
                                  {link.services?.map((service) => {
                                    const IconComponent = service.icon;
                                    return (
                                      <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                                      >
                                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                          <IconComponent className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-slate-500 mt-0.5">
                                            {service.desc}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                  {/* Link to all tools page - Mobile */}
                                  {link.dropdownKey === "tools" && (
                                    <Link
                                      href="/tools"
                                      onClick={() => setIsMenuOpen(false)}
                                      className="flex items-center justify-center gap-2 p-3 mt-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-semibold transition-colors group border-t border-slate-200"
                                    >
                                      <Wrench className="w-4 h-4" />
                                      <span className="text-sm">Voir tous les outils</span>
                                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                              link.isHighlighted
                                ? "text-emerald-600 font-bold bg-emerald-50"
                                : isActive
                                ? "bg-emerald-50 text-emerald-600"
                                : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                            }`}
                          >
                            {link.icon && <link.icon className="w-5 h-5" />}
                            <span>{link.label}</span>
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile Account & CTA */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  {/* Account Link */}
                  {user ? (
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 text-slate-700 hover:text-emerald-600 font-medium py-3 px-6 rounded-lg hover:bg-slate-50 transition-colors w-full"
                    >
                      <User className="w-5 h-5" />
                      <span>Mon Compte</span>
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 text-slate-700 hover:text-emerald-600 font-medium py-3 px-6 rounded-lg hover:bg-slate-50 transition-colors w-full"
                    >
                      <User className="w-5 h-5" />
                      <span>Connexion</span>
                    </Link>
                  )}

                  {/* WhatsApp CTA */}
                  <motion.a
                    href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai une urgence informatique")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg w-full group"
                  >
                    {/* Pulse Animation */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-emerald-400 rounded-full"
                    />
                    <MessageCircle className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Réponse Immédiate</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

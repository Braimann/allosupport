"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Send,
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
  Wrench,
  Code,
  Key,
  Gauge,
  HardDriveIcon,
  QrCode,
  FileText,
} from "lucide-react";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

// Email (contact centralisé)
const EMAIL = "contact@allosupport.ma";

// ============================================
// 📋 SERVICES DATA
// ============================================
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

// ============================================
// 🎯 COMPOSANT HEADER
// ============================================
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<number | null>(null);

  // ============================================
  // 🔧 EFFECTS
  // ============================================

  // Scroll detection & Mount
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  // Close dropdown on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // ============================================
  // 🎨 HANDLERS
  // ============================================

  const cancelDropdownClose = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // ============================================
  // 📋 NAV LINKS
  // ============================================
  const navLinks = [
    {
      label: "Accueil",
      href: "/",
      icon: Home
    },
    {
      label: "Particuliers",
      href: "/services",
      icon: Users,
      dropdown: "particuliers",
      items: servicesParticuliers,
    },
    {
      label: "Entreprises",
      href: "/services",
      icon: Building2,
      dropdown: "entreprises",
      items: servicesEntreprises,
    },
    {
      label: "Tarifs",
      href: "/#tarifs",
      icon: DollarSign,
      highlight: true,
    },
    {
      label: "Blog",
      href: "/blog",
      icon: BookOpen
    },
    {
      label: "Outils",
      href: "/tools",
      icon: Wrench,
      dropdown: "tools",
      items: tools,
    },
  ];

  // ============================================
  // 🎨 RENDER
  // ============================================
  return (
    <>
      {/* ============================================ */}
      {/* TOP BAR - Desktop Only */}
      {/* ============================================ */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${GOOGLE_BUSINESS.PHONE}`}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <span className="flex items-center justify-center w-4 h-4">
                {mounted && <Phone className="w-4 h-4" />}
              </span>
              <span>{GOOGLE_BUSINESS.PHONE_FORMATTED}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <span className="flex items-center justify-center w-4 h-4">
                {mounted && <Mail className="w-4 h-4" />}
              </span>
              <span>{EMAIL}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-medium">Techniciens en ligne : Dispo immédiate</span>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MAIN HEADER */}
      {/* ============================================ */}
      <header
        className={`site-header sticky top-0 bg-white z-[999999] transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-md"
          }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* ============================================ */}
            {/* LOGO */}
            {/* ============================================ */}
            <Link
              href="/"
              className="flex items-center gap-3 group z-[1000000]"
              onClick={closeMobileMenu}
            >
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
                {mounted && <Monitor className="w-6 h-6 text-white" />}
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-slate-900">AlloSupport</span>
                  <span className="text-emerald-600">.ma</span>
                </div>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Dépannage IT à Distance
                </p>
              </div>
            </Link>

            {/* ============================================ */}
            {/* DESKTOP NAV */}
            {/* ============================================ */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.dropdown ? (
                    // Dropdown Link
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.dropdown!)}
                        onMouseEnter={() => {
                          cancelDropdownClose();
                          setActiveDropdown(link.dropdown!);
                        }}
                        onMouseLeave={scheduleDropdownClose}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isActive(link.href)
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                          }`}
                      >
                        <span className="flex items-center justify-center w-4 h-4">{mounted && <link.icon className="w-4 h-4" />}</span>
                        <span>{link.label}</span>
                        {mounted && <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${activeDropdown === link.dropdown ? "rotate-180" : ""
                            }`}
                        />}
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === link.dropdown && (
                        <div
                          onMouseEnter={() => {
                            cancelDropdownClose();
                            setActiveDropdown(link.dropdown!);
                          }}
                          onMouseLeave={scheduleDropdownClose}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-[1000000]"
                        >
                          {link.items?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover/item:bg-emerald-100 transition-colors flex-shrink-0">
                                {mounted && <item.icon className="w-5 h-5 text-emerald-600" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-slate-900 group-hover/item:text-emerald-600 transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Simple Link
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${link.highlight
                        ? "text-emerald-600 font-bold"
                        : isActive(link.href)
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                        }`}
                    >
                      <span className="flex items-center justify-center w-4 h-4">{mounted && <link.icon className="w-4 h-4" />}</span>
                      <span>{link.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* ============================================ */}
            {/* DESKTOP CTA */}
            {/* ============================================ */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-slate-50"
              >
                <span className="flex items-center justify-center w-4 h-4">
                  {mounted && <Send className="w-4 h-4" />}
                </span>
                <span>Contact</span>
              </Link>

              <a
                href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai une urgence informatique")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center w-4 h-4">{mounted && <MessageCircle className="w-4 h-4" />}</span>
                <span>Réponse Immédiate</span>
              </a>
            </div>

            {/* ============================================ */}
            {/* MOBILE HAMBURGER */}
            {/* ============================================ */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors z-[1000000]"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                mounted && <X className="w-6 h-6" />
              ) : (
                mounted && <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ============================================ */}
      {/* MOBILE MENU */}
      {/* ============================================ */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black/40 z-[999998] lg:hidden backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-[999999] lg:hidden overflow-y-auto shadow-2xl">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    // Dropdown in Mobile
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.dropdown!)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.href)
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-slate-700 hover:bg-slate-50"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="w-5 h-5" />
                          <span>{link.label}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === link.dropdown ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {activeDropdown === link.dropdown && (
                        <div className="mt-2 ml-4 space-y-1">
                          {link.items?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-5 h-5 text-emerald-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-slate-900">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Simple Link in Mobile
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${link.highlight
                        ? "text-emerald-600 font-bold bg-emerald-50"
                        : isActive(link.href)
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-slate-700 hover:bg-slate-50"
                        }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 text-slate-700 font-medium py-3 px-6 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center justify-center w-5 h-5">
                    {mounted && <Send className="w-5 h-5" />}
                  </span>
                  <span>Contact</span>
                </Link>

                <a
                  href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai une urgence informatique")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-full transition-all shadow-lg"
                  suppressHydrationWarning
                >
                  <span className="flex items-center justify-center"><MessageCircle className="w-5 h-5" /></span>
                  <span>Réponse Immédiate</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ============================================ */}
      {/* GLOBAL STYLES */}
      {/* ============================================ */}
    </>
  );
}

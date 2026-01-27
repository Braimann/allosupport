"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ticket, UserPlus, MessageSquare, Shield, Clock, CheckCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function ClientPortal() {
  const { user } = useAuth();

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg">
              <Ticket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portail Client AlloSupport
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Créez votre compte gratuitement et gérez tous vos tickets de support en un seul endroit
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <UserPlus className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Créez votre compte
            </h3>
            <p className="text-gray-600 text-sm">
              Inscription gratuite en 30 secondes. Utilisez votre email ou connectez-vous avec Google.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Créez vos tickets
            </h3>
            <p className="text-gray-600 text-sm">
              Décrivez votre problème en détail. Nos techniciens vous répondent rapidement.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Suivez vos demandes
            </h3>
            <p className="text-gray-600 text-sm">
              Consultez l'historique de vos tickets, répondez aux techniciens et suivez le statut.
            </p>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pourquoi créer un compte ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Suivi en temps réel</h4>
                <p className="text-sm text-gray-600">
                  Consultez l'état de vos tickets à tout moment, 24/7
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Communication directe</h4>
                <p className="text-sm text-gray-600">
                  Échangez directement avec nos techniciens via le chat intégré
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Historique complet</h4>
                <p className="text-sm text-gray-600">
                  Accédez à tous vos tickets précédents et leurs solutions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Sécurisé et privé</h4>
                <p className="text-sm text-gray-600">
                  Vos données sont protégées et confidentielles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          {user ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-700 mb-4">
                Vous êtes connecté ! Accédez à votre espace client
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Ticket className="w-5 h-5" />
                Accéder à mes tickets
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-700 mb-4">
                Rejoignez AlloSupport.ma gratuitement
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <UserPlus className="w-5 h-5" />
                  Créer mon compte
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-full transition-all duration-300 border-2 border-gray-300 hover:border-emerald-500"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, RefreshCw, Bug, Trophy, Zap } from "lucide-react";

export default function NotFound() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [bugs, setBugs] = useState<Array<{ id: number; x: number; y: number; clicked: boolean }>>([]);
  const [level, setLevel] = useState(1);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameStarted, gameOver, timeLeft]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const spawnInterval = setInterval(() => {
        if (bugs.length < 10) {
          const newBug = {
            id: Date.now(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 60 + 20,
            clicked: false,
          };
          setBugs((prev) => [...prev, newBug]);
        }
      }, 2000 - level * 150);

      return () => clearInterval(spawnInterval);
    }
  }, [gameStarted, gameOver, bugs.length, level]);

  useEffect(() => {
    if (score > 0 && score % 5 === 0) {
      setLevel((prev) => prev + 1);
    }
  }, [score]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    setBugs([]);
    setLevel(1);
  };

  const catchBug = (bugId: number) => {
    if (gameOver) return;
    setBugs((prev) => prev.filter((bug) => bug.id !== bugId));
    setScore((prev) => prev + 1);
  };

  const getMessage = () => {
    if (score === 0) return "Aucun bug attrapé... 😅";
    if (score < 5) return "Pas mal pour commencer ! 🐛";
    if (score < 10) return "Vous êtes sur la bonne voie ! 🎯";
    if (score < 20) return "Excellent score ! 🏆";
    return "Vous êtes un vrai chasseur de bugs ! 🦸";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-500/30 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
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

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* 404 Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oups ! Cette page n'existe pas
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Mais ne vous inquiétez pas, on a un jeu pour vous occuper ! 🎮
          </p>
        </motion.div>

        {/* Game Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
        >
          {!gameStarted ? (
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-2xl mb-4 shadow-lg">
                <Bug className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Chassez les bugs ! 🐛
              </h3>
              <p className="text-gray-300 mb-6">
                Cliquez sur les bugs qui apparaissent pour gagner des points. Vous avez 30 secondes !
              </p>
              <motion.button
                onClick={startGame}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-colors inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Commencer le jeu
              </motion.button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Game Stats */}
              <div className="flex items-center justify-center gap-6 text-white">
                <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="text-sm text-gray-300">Score</div>
                  <div className="text-2xl font-bold">{score}</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="text-sm text-gray-300">Temps</div>
                  <div className={`text-2xl font-bold ${timeLeft <= 5 ? "text-red-400" : ""}`}>
                    {timeLeft}s
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="text-sm text-gray-300">Niveau</div>
                  <div className="text-2xl font-bold">{level}</div>
                </div>
              </div>

              {/* Game Area */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 min-h-[400px] border-2 border-gray-700 overflow-hidden">
                {gameOver ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20"
                  >
                    <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">Partie terminée !</h3>
                    <p className="text-xl text-gray-300 mb-4">{getMessage()}</p>
                    <p className="text-2xl font-bold text-emerald-400 mb-6">
                      Score final : {score} points
                    </p>
                    <div className="flex gap-4">
                      <motion.button
                        onClick={startGame}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center gap-2"
                      >
                        <RefreshCw className="w-5 h-5" />
                        Rejouer
                      </motion.button>
                      <Link
                        href="/"
                        className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center gap-2"
                      >
                        <Home className="w-5 h-5" />
                        Retour à l'accueil
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-white/60 text-sm mb-4 text-center">
                      Cliquez sur les bugs pour les attraper !
                    </p>
                    <AnimatePresence>
                      {bugs.map((bug) => (
                        <motion.button
                          key={bug.id}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                          onClick={() => catchBug(bug.id)}
                          className="absolute"
                          style={{
                            left: `${bug.x}%`,
                            top: `${bug.y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            className="text-4xl"
                          >
                            🐛
                          </motion.div>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Navigation Links */}
          {!gameStarted && (
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
              <span className="text-white/40">•</span>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                Voir le blog
              </Link>
              <span className="text-white/40">•</span>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                Mon compte
              </Link>
            </div>
          )}
        </motion.div>

        {/* Fun Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-gray-400 text-sm"
        >
          Cette page a peut-être été déplacée, supprimée ou n'a jamais existé. Comme un bug dans le code ! 🐛
        </motion.p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Gauge, Wifi, Download, Upload, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function SpeedTestClient() {
  const [isRunning, setIsRunning] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [progress, setProgress] = useState(0);

  const runSpeedTest = async () => {
    setIsRunning(true);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setPing(0);
    setProgress(0);

    await new Promise((resolve) => setTimeout(resolve, 500));
    setPing(Math.floor(Math.random() * 50) + 10);

    for (let i = 0; i <= 100; i += 5) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setProgress(i);
      if (i <= 50) setDownloadSpeed(Math.min(i * 2, 100));
    }

    setProgress(0);
    for (let i = 0; i <= 100; i += 5) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setProgress(i);
      if (i <= 50) setUploadSpeed(Math.min(i * 1.5, 75));
    }

    setProgress(100);
    setIsRunning(false);
  };

  const formatSpeed = (mbps: number) => {
    if (mbps < 1) return `${(mbps * 1000).toFixed(0)} Kbps`;
    return `${mbps.toFixed(2)} Mbps`;
  };

  const getSpeedQuality = (mbps: number, type: "download" | "upload") => {
    if (type === "download") {
      if (mbps >= 25) return { label: "Excellent", color: "text-green-500" };
      if (mbps >= 10) return { label: "Bon", color: "text-emerald-500" };
      if (mbps >= 5) return { label: "Moyen", color: "text-yellow-500" };
      return { label: "Faible", color: "text-red-500" };
    }
    if (mbps >= 10) return { label: "Excellent", color: "text-green-500" };
    if (mbps >= 5) return { label: "Bon", color: "text-emerald-500" };
    if (mbps >= 2) return { label: "Moyen", color: "text-yellow-500" };
    return { label: "Faible", color: "text-red-500" };
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
          <Activity className="w-5 h-5" />
          <span className="text-sm font-medium">Latence (Ping)</span>
        </div>
        <div className="text-4xl font-bold text-gray-900">
          {ping > 0 ? `${ping} ms` : "-"}
        </div>
        {ping > 0 && (
          <div className={`text-sm mt-1 ${ping < 50 ? "text-green-500" : ping < 100 ? "text-yellow-500" : "text-red-500"}`}>
            {ping < 50 ? "Excellent" : ping < 100 ? "Bon" : "Élevé"}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-emerald-700 mb-4">
            <Download className="w-6 h-6" />
            <span className="font-semibold">Téléchargement</span>
          </div>
          <div className="text-5xl font-bold text-emerald-600 mb-2">
            {formatSpeed(downloadSpeed)}
          </div>
          {downloadSpeed > 0 && (
            <div className={getSpeedQuality(downloadSpeed, "download").color}>
              {getSpeedQuality(downloadSpeed, "download").label}
            </div>
          )}
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-700 mb-4">
            <Upload className="w-6 h-6" />
            <span className="font-semibold">Téléversement</span>
          </div>
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {formatSpeed(uploadSpeed)}
          </div>
          {uploadSpeed > 0 && (
            <div className={getSpeedQuality(uploadSpeed, "upload").color}>
              {getSpeedQuality(uploadSpeed, "upload").label}
            </div>
          )}
        </div>
      </div>

      {isRunning && (
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Test en cours...</span>
            <span className="text-sm font-semibold text-gray-900">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-emerald-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <button
        onClick={runSpeedTest}
        disabled={isRunning}
        className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Wifi className="w-5 h-5" />
        {isRunning ? "Test en cours..." : "Lancer le test"}
      </button>

      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600 text-center">
          Ce test est une simulation. Pour un test réel, utilisez Speedtest.net ou Fast.com.
        </p>
      </div>
    </div>
  );
}

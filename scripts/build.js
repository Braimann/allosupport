/**
 * Build script: crée .build-in-progress pour que tous les workers Next.js
 * (qui n'héritent pas toujours des env) n'initialisent pas Firebase.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const cwd = process.cwd();
const flagFile = path.join(cwd, ".build-in-progress");

fs.writeFileSync(flagFile, "1", "utf8");
const env = { ...process.env, NEXT_PHASE: "phase-production-build" };

// Sous Windows utiliser node_modules\.bin\next.cmd, sinon next
const isWin = process.platform === "win32";
const nextBin = path.join(cwd, "node_modules", ".bin", "next" + (isWin ? ".cmd" : ""));
const result = spawnSync(nextBin, ["build"], { stdio: "inherit", env, cwd, shell: isWin });

try {
  fs.unlinkSync(flagFile);
} catch (_) {}

if (result.error) {
  console.error("Erreur lancement next build:", result.error.message);
  process.exit(1);
}
if (result.status !== 0 && result.status != null) {
  console.error("\n[next build a quitté avec le code:", result.status, "]");
}
process.exit(result.status ?? 1);

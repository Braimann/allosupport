# Script PowerShell pour lancer AlloSupport en local
# Important : arrêtez tout serveur déjà lancé (Ctrl+C dans l'autre terminal) avant d'exécuter ce script.

Write-Host "🚀 Lancement d'AlloSupport en local..." -ForegroundColor Cyan
Write-Host ""

# Vérifier que .env.local existe
if (-not (Test-Path ".env.local")) {
    Write-Host "❌ ERREUR: .env.local n'existe pas !" -ForegroundColor Red
    Write-Host "   Créez-le avec toutes les variables Firebase" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ .env.local trouvé" -ForegroundColor Green
Write-Host ""

# Vérifier que node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erreur lors de l'installation" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dépendances installées" -ForegroundColor Green
    Write-Host ""
}

# Nettoyer le cache si nécessaire (arrêtez le serveur avant si .next est verrouillé)
if (Test-Path ".next") {
    Write-Host "🧹 Nettoyage du cache .next..." -ForegroundColor Yellow
    try {
        Remove-Item -Recurse -Force .next -ErrorAction Stop
        Write-Host "✅ Cache nettoyé" -ForegroundColor Green
    } catch {
        Write-Host "⚠️ Impossible de supprimer .next (serveur en cours ?). Arrêtez le serveur (Ctrl+C) puis relancez ce script." -ForegroundColor Yellow
    }
    Write-Host ""
}

# Lancer l'application (dev:turbo = démarrage plus rapide, évite le blocage "Starting...")
Write-Host "🚀 Lancement de l'application..." -ForegroundColor Cyan
Write-Host "   URL: http://localhost:3000 (ou 3001 si 3000 est occupé)" -ForegroundColor Gray
Write-Host "   Appuyez sur Ctrl+C pour arrêter" -ForegroundColor Gray
Write-Host ""

npm run dev:turbo

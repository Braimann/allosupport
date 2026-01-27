# Script PowerShell pour lancer AlloSupport en local

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

# Nettoyer le cache si nécessaire
if (Test-Path ".next") {
    Write-Host "🧹 Nettoyage du cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
    Write-Host "✅ Cache nettoyé" -ForegroundColor Green
    Write-Host ""
}

# Lancer l'application
Write-Host "🚀 Lancement de l'application..." -ForegroundColor Cyan
Write-Host "   L'application sera accessible sur: http://localhost:3000" -ForegroundColor Gray
Write-Host "   Appuyez sur Ctrl+C pour arrêter" -ForegroundColor Gray
Write-Host ""

npm run dev

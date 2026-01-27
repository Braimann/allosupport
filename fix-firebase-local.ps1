# Script PowerShell pour corriger l'erreur Firebase en local

Write-Host "🔧 Correction de l'erreur Firebase en local..." -ForegroundColor Cyan
Write-Host ""

# Vérifier que .env.local existe
if (-not (Test-Path ".env.local")) {
    Write-Host "❌ ERREUR: .env.local n'existe pas !" -ForegroundColor Red
    Write-Host ""
    Write-Host "Création du fichier .env.local..." -ForegroundColor Yellow
    
    # Créer le fichier
    @"
# Firebase Configuration - supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564

# Admin Email
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
"@ | Out-File -FilePath .env.local -Encoding utf8 -NoNewline
    
    Write-Host "✅ Fichier .env.local créé" -ForegroundColor Green
} else {
    Write-Host "✅ .env.local existe" -ForegroundColor Green
    
    # Vérifier le contenu
    $content = Get-Content .env.local -Raw
    if ($content -notmatch "NEXT_PUBLIC_FIREBASE_API_KEY=") {
        Write-Host "⚠️  ATTENTION: NEXT_PUBLIC_FIREBASE_API_KEY manquant dans .env.local" -ForegroundColor Yellow
        Write-Host "   Vérifiez le contenu du fichier" -ForegroundColor Yellow
    } else {
        Write-Host "✅ Variables Firebase présentes" -ForegroundColor Green
    }
}

Write-Host ""

# Nettoyer le cache
Write-Host "🧹 Nettoyage du cache..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
    Write-Host "✅ Cache .next supprimé" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Pas de cache .next à nettoyer" -ForegroundColor Gray
}

if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
    Write-Host "✅ Cache node_modules supprimé" -ForegroundColor Green
}

Write-Host ""

# Instructions
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "✅ CORRECTION TERMINÉE" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 PROCHAINES ÉTAPES:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Si le serveur tourne, arrêtez-le (Ctrl+C)" -ForegroundColor White
Write-Host "2. Relancez le serveur:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Ouvrez http://localhost:3000/admin/login" -ForegroundColor White
Write-Host ""
Write-Host "💡 Si l'erreur persiste, vérifiez:" -ForegroundColor Yellow
Write-Host "   - Que .env.local est à la racine du projet" -ForegroundColor Gray
Write-Host "   - Qu'il n'y a pas d'espaces avant/après le =" -ForegroundColor Gray
Write-Host "   - Que le fichier est en UTF-8" -ForegroundColor Gray
Write-Host ""

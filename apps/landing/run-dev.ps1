# Run Next.js development server with execution policy bypass
# Development script for Karnue Website
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Write-Host "Starting Karnue Website development server..." -ForegroundColor Cyan
npx next dev

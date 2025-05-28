# Karnue Project Setup Script
# This script will set up the Karnue Website project with all required dependencies

Write-Host "Setting up Karnue Website project..." -ForegroundColor Cyan

# Navigate to the website directory
Set-Location -Path ".\apps\landing"

# Install Next.js and React dependencies
Write-Host "Installing Next.js and React dependencies..." -ForegroundColor Green
npm install next@latest react@latest react-dom@latest

# Install TypeScript and types
Write-Host "Installing TypeScript and type definitions..." -ForegroundColor Green
npm install --save-dev typescript @types/react @types/node @types/react-dom

# Install UI dependencies
Write-Host "Installing UI libraries and components..." -ForegroundColor Green
npm install framer-motion react-feather react-intersection-observer

# Install styling dependencies
Write-Host "Installing styling dependencies..." -ForegroundColor Green
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Return to root directory
Set-Location -Path "..\.."

Write-Host "Setup complete! You can now run the website development server:" -ForegroundColor Cyan
Write-Host "npm run dev" -ForegroundColor Yellow

Write-Host "To build the static website for production:" -ForegroundColor Cyan
Write-Host "npm run build" -ForegroundColor Yellow
Write-Host "npm run export" -ForegroundColor Yellow

# RydeEz Project Setup Script
# This script will set up the Next.js project with all required dependencies

Write-Host "Setting up RydeEz project..." -ForegroundColor Cyan

# Navigate to the landing page directory
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

Write-Host "Setup complete! You can now run the development server:" -ForegroundColor Cyan
Write-Host "cd apps/landing" -ForegroundColor Yellow
Write-Host "npm run dev" -ForegroundColor Yellow

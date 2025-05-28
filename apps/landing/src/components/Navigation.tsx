'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-secondary/80 to-primary/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-1.5 mr-2">
              <div className="bg-gradient-to-r from-primary to-accent rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-white font-poppins">Karnue</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors font-medium">Home</Link>
            <Link href="/riders" className="text-white hover:text-primary transition-colors font-medium">Riders</Link>
            <Link href="/drivers" className="text-white hover:text-primary transition-colors font-medium">Drivers</Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors font-medium">About</Link>
            <Link href="/#features" className="text-white hover:text-primary transition-colors font-medium">Features</Link>
            <Link href="/#how-it-works" className="text-white hover:text-primary transition-colors font-medium">How It Works</Link>
            
            {/* Call to Action Buttons */}
            <div className="flex items-center space-x-4 ml-4">
              <Link href="/riders" className="bg-white text-primary hover:bg-gray-100 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Ride with us
              </Link>
              <Link href="/drivers" className="bg-accent text-white hover:bg-accent/90 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Become a driver
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-white p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white outline-lg rounded-b-xl p-4 mt-1 z-50">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-800 hover:text-primary font-medium py-2">Home</Link>
                <Link href="/riders" className="text-gray-800 hover:text-primary font-medium py-2">Riders</Link>
                <Link href="/drivers" className="text-gray-800 hover:text-primary font-medium py-2">Drivers</Link>
                <Link href="/about" className="text-gray-800 hover:text-primary font-medium py-2">About</Link>
                <Link href="/#features" className="text-gray-800 hover:text-primary font-medium py-2">Features</Link>
                <Link href="/#how-it-works" className="text-gray-800 hover:text-primary font-medium py-2">How It Works</Link>
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <Link href="/riders" className="block bg-primary text-white py-2 px-4 rounded-lg text-center font-medium mb-2">Ride with us</Link>
                  <Link href="/drivers" className="block bg-accent text-white py-2 px-4 rounded-lg text-center font-medium">Become a driver</Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

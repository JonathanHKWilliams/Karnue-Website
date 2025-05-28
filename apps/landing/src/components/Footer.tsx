'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Brand and Social */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-3">
              <div className="bg-white rounded-full p-1 mr-2">
                <div className="bg-gradient-to-r from-primary to-accent rounded-full w-7 h-7 flex items-center justify-center">
                  <span className="text-white font-bold text-base">K</span>
                </div>
              </div>
              <h3 className="text-lg font-bold">Karnue</h3>
            </div>
            <p className="text-gray-300 mb-3 text-sm max-w-xs">
              Schedule rides in advance for stress-free commuting. Premium service designed for your comfort and convenience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* For Riders */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-3">For Riders</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/riders" className="text-gray-300 hover:text-white transition-colors">Rider Benefits</Link></li>
              <li><Link href="/riders#features" className="text-gray-300 hover:text-white transition-colors">Safety Features</Link></li>
              <li><Link href="/riders#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/riders" className="text-gray-300 hover:text-white transition-colors">Book a Ride</Link></li>
              <li><Link href="/riders" className="text-gray-300 hover:text-white transition-colors">Premium Service</Link></li>
            </ul>
          </div>
          
          {/* For Drivers */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-3">For Drivers</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/drivers" className="text-gray-300 hover:text-white transition-colors">Become a Driver</Link></li>
              <li><Link href="/drivers#earnings" className="text-gray-300 hover:text-white transition-colors">Earnings</Link></li>
              <li><Link href="/drivers#requirements" className="text-gray-300 hover:text-white transition-colors">Vehicle Requirements</Link></li>
              <li><Link href="/drivers#support" className="text-gray-300 hover:text-white transition-colors">Driver Support</Link></li>
              <li><Link href="/drivers#benefits" className="text-gray-300 hover:text-white transition-colors">Driver Benefits</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">123 Innovation Drive<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@karnue.com" className="text-gray-300 hover:text-white transition-colors">info@karnue.com</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
              <form className="flex flex-row gap-1 mb-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-primary text-white w-full"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-1 px-2 rounded-lg transition-colors whitespace-nowrap text-xs"
                >
                  Join
                </button>
              </form>
            </div>
            
            {/* App Download Buttons - Inline with Newsletter */}
            <div className="flex items-center flex-wrap gap-2 mt-2">
              <span className="text-xs text-gray-300 whitespace-nowrap">Get our app:</span>
              <div className="flex gap-2">
                <a href="#" className="bg-black/80 rounded-lg px-2 py-1 flex items-center justify-center hover:bg-black transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1 text-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-xs text-white group-hover:text-primary transition-colors">App Store</div>
                </a>
                
                <a href="#" className="bg-black/80 rounded-lg px-2 py-1 flex items-center justify-center hover:bg-black transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1 text-white">
                    <path d="M3.18 23.94c-.44 0-.86-.17-1.18-.49-.33-.32-.5-.75-.5-1.2v-20.5c0-.45.17-.88.49-1.2.33-.33.75-.5 1.19-.5h17.64c.44 0 .86.17 1.18.49.33.32.5.75.5 1.2v20.5c0 .45-.17.88-.49 1.2-.33.33-.75.5-1.19.5h-17.64zm2.27-10.94l1.34-2.45 1.35-2.45c.04-.08.06-.16.06-.25 0-.09-.02-.17-.06-.25-.08-.14-.23-.22-.39-.22-.08 0-.16.02-.23.06l-2.73 1.58-2.72 1.57c-.07.04-.13.1-.18.16-.05.07-.08.14-.1.22-.01.08-.01.16.01.24.02.08.05.15.1.22.05.07.11.12.18.16l2.73 1.57 2.73 1.58c.07.04.15.06.23.06.16 0 .31-.09.39-.23.04-.08.06-.16.06-.25s-.02-.17-.06-.25l-1.35-2.45-1.36-2.45zm14.86 0l-5.5 3.18c-.08.04-.14.11-.19.18-.05.07-.07.15-.08.23-.01.08.01.16.04.24.03.08.07.14.13.2.06.06.13.1.2.12.08.03.16.04.24.03.08-.01.16-.03.23-.07.07-.04.13-.1.18-.17l5.5-9.09c.05-.08.08-.16.08-.25 0-.09-.03-.18-.08-.25-.1-.17-.29-.28-.49-.28-.1 0-.2.03-.28.08l-5.5 3.18 5.52 2.67z"/>
                  </svg>
                  <div className="text-xs text-white group-hover:text-primary transition-colors">Google Play</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Karnue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

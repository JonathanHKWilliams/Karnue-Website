import React from 'react'
import '../styles/globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Basic metadata that won't conflict with extensions
export const metadata = {
  title: 'Karnue - Premium Ride-Hailing Service',
  description: 'Book now, ride later. Your driver arrives right on time.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white tailwind-enabled font-inter">
        {/* Font loading moved to a script tag to avoid extension conflicts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preconnect to Google Fonts
              const link1 = document.createElement('link');
              link1.rel = 'preconnect';
              link1.href = 'https://fonts.googleapis.com';
              document.head.appendChild(link1);
              
              const link2 = document.createElement('link');
              link2.rel = 'preconnect';
              link2.href = 'https://fonts.gstatic.com';
              link2.crossOrigin = 'anonymous';
              document.head.appendChild(link2);
              
              // Load fonts
              const fontLink = document.createElement('link');
              fontLink.rel = 'stylesheet';
              fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap';
              document.head.appendChild(fontLink);
              
              // Add favicon
              const favicon = document.createElement('link');
              favicon.rel = 'icon';
              favicon.href = '/favicon.ico';
              document.head.appendChild(favicon);
            `
          }}
        />
        <Navigation />
        <div className="min-h-screen pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

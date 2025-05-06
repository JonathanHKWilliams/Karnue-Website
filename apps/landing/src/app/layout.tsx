import type { Metadata } from 'next'
import React from 'react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Karnue - Schedule Rides in Advance',
  description: 'Book now, ride later. Your driver arrives right on time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white tailwind-enabled font-inter">{children}</body>
    </html>
  )
}

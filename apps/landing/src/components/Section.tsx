'use client'

import React from 'react'

type ReactNode = React.ReactNode
import AnimatedSection from './AnimatedSection'

interface SectionProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  background?: 'white' | 'light' | 'primary' | 'secondary' | 'accent' | 'gradient' | 'dark';
  className?: string;
  id?: string;
}

export default function Section({
  children,
  title,
  subtitle,
  centered = false,
  background = 'white',
  className = '',
  id
}: SectionProps) {
  // Background classes
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    gradient: 'bg-gradient-to-r from-primary to-accent text-white',
    dark: 'bg-secondary text-white'
  }
  
  // Text alignment
  const textAlign = centered ? 'text-center' : 'text-left'
  
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <AnimatedSection className={`mb-12 ${centered ? 'mx-auto max-w-3xl' : ''}`}>
            {title && (
              <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${textAlign}`}>
                {typeof title === 'string' ? title : title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${background !== 'white' && background !== 'light' ? 'text-white/80' : 'text-gray-600'} ${textAlign}`}>
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}
        
        {children}
      </div>
    </section>
  )
}

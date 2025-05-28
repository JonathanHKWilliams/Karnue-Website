'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  image: string;
  location?: string;
  className?: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  text,
  image,
  location,
  className = '',
  rating = 5,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: delay }}
      className={`bg-white rounded-xl p-6 outline-lg ${className}`}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
          <Image 
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-primary text-sm">{role}</p>
            {location && (
              <>
                <span className="hidden sm:inline mx-2 text-gray-300">•</span>
                <p className="text-gray-500 text-sm">{location}</p>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      
      <blockquote className="text-gray-700 italic relative">
        <svg 
          className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 transform -scale-x-100" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
        </svg>
        <p className="relative z-10 pl-2">{text}</p>
      </blockquote>
    </motion.div>
  )
}

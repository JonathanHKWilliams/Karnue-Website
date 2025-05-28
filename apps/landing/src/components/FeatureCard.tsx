'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  imageSrc,
  imageAlt = 'Feature image',
  className = '',
  delay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl p-6 outline-lg hover:outline-xl transition-outline ${className}`}
    >
      {imageSrc && (
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

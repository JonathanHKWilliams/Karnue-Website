'use client'

import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  fullWidth = false,
}: ButtonProps) {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300'
  
  // Size classes
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  }
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 active:scale-95',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 active:scale-95',
    accent: 'bg-accent text-white hover:bg-accent/90 active:scale-95',
    outline: 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 active:scale-95',
    light: 'bg-white text-primary hover:bg-gray-100 active:scale-95',
  }
  
  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`
  
  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return icon;
  }
  
  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{renderIcon()}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{renderIcon()}</span>}
    </>
  )
  
  // Render as link or button
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  )
}

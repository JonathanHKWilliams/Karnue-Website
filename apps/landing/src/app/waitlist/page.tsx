'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft } from 'react-feather'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

type UserType = 'rider' | 'driver'

export default function Waitlist() {
  const [userType, setUserType] = useState<UserType>('rider')
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    zipCode: '',
    referralSource: '',
    // Driver-specific fields
    vehicleType: '',
    licenseStatus: '',
    availability: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [position, setPosition] = useState(0)

  // Define the form data type for better type safety
  type FormDataType = typeof formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev: FormDataType) => ({ ...prev, [name]: value }))
  }

  const handleUserTypeChange = (type: UserType) => {
    setUserType(type)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real implementation, this would send data to an API
    console.log('Form submitted:', { userType, ...formData })
    
    // Simulate successful submission
    setSubmitted(true)
    // Generate a random waitlist position between 1-500
    setPosition(Math.floor(Math.random() * 500) + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <ChevronLeft className="mr-2" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-primary mx-auto">Karnue Waitlist</h1>
          </div>
        </div>
      </header>

      <div className="container py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden"
        >
          {!submitted ? (
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Join Our Waitlist</h2>
                <p className="text-gray-600">
                  Be among the first to experience Karnue when we launch in your area.
                </p>
              </div>

              {/* User Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                  <button
                    className={`px-6 py-2 rounded-md ${userType === 'rider' ? 'bg-white shadow-sm text-primary font-medium' : 'text-gray-500'}`}
                    onClick={() => handleUserTypeChange('rider')}
                  >
                    I'm a Rider
                  </button>
                  <button
                    className={`px-6 py-2 rounded-md ${userType === 'driver' ? 'bg-white shadow-sm text-primary font-medium' : 'text-gray-500'}`}
                    onClick={() => handleUserTypeChange('driver')}
                  >
                    I'm a Driver
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {formStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setFormStep(2)}
                        className="w-full btn btn-primary"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Location & Additional Info */}
                {formStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Your city"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="12345"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select an option</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend or Family</option>
                        <option value="search">Search Engine</option>
                        <option value="news">News Article</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    {/* Driver-specific fields */}
                    {userType === 'driver' && (
                      <>
                        <div>
                          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                            Vehicle Type
                          </label>
                          <select
                            id="vehicleType"
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select vehicle type</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="luxury">Luxury</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="licenseStatus" className="block text-sm font-medium text-gray-700 mb-1">
                            Do you have a valid driver's license?
                          </label>
                          <select
                            id="licenseStatus"
                            name="licenseStatus"
                            value={formData.licenseStatus}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Availability
                          </label>
                          <select
                            id="availability"
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select availability</option>
                            <option value="fulltime">Full-time</option>
                            <option value="parttime">Part-time</option>
                            <option value="weekends">Weekends only</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </>
                    )}
                    
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="w-1/2 btn btn-secondary"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 btn btn-primary"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">You're on the List!</h2>
              <p className="text-xl mb-2">Your waitlist position: <span className="font-bold text-primary">#{position}</span></p>
              <p className="text-gray-600 mb-8">
                Thanks for joining our waitlist! We'll notify you as soon as Karnue launches in your area.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">What's Next?</h3>
                <ul className="text-left max-w-md mx-auto space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Check your email for a confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>We'll send you updates on our launch progress</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Early access members get special perks!</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <Link href="/" className="btn btn-primary inline-block">
                  Return to Home
                </Link>
                <div>
                  <p className="text-sm text-gray-500">
                    Have questions? <a href="mailto:support@karnue.com" className="text-primary hover:underline">Contact our team</a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

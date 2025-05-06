'use client'

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, CreditCard, ChevronRight, ChevronLeft } from 'react-feather'
import Image from 'next/image'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Testimonials state and auto-slide functionality
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Karnue Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      text: "As a driver, I love the scheduled rides. It helps me plan my day better and earn more consistently.",
      location: "Chicago, IL"
    },
    {
      id: 2,
      name: "Jennifer Lee",
      role: "Family Caregiver",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      text: "The premium experience with Karnue is worth every penny. I love being able to schedule rides for my elderly parents.",
      location: "Boston, MA"
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      text: "I rely on Karnue for my daily commute. The ability to schedule rides in advance has been a game-changer for my work routine.",
      location: "San Francisco, CA"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-r from-secondary/80 to-primary/80 backdrop-blur-md border-b border-white/10">
          <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-1.5 mr-2">
                <div className="bg-gradient-to-r from-primary to-accent rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Karnue</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-white font-poppins">Karnue</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors font-medium">Home</a>
              <a href="/riders" className="text-white hover:text-primary transition-colors font-medium">Riders</a>
              <a href="/drivers" className="text-white hover:text-primary transition-colors font-medium">Drivers</a>
              <a href="/about" className="text-white hover:text-primary transition-colors font-medium">About</a>
              <a href="#features" className="text-white hover:text-primary transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-white hover:text-primary transition-colors font-medium">How It Works</a>
              
              {/* Call to Action Buttons */}
              <div className="flex items-center space-x-4 ml-4">
                <a href="/riders" className="bg-white text-primary hover:bg-gray-100 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Ride with us
                </a>
                <a href="/drivers" className="bg-accent text-white hover:bg-accent/90 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Become a driver
                </a>
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
              <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl p-4 mt-1 z-50">
                <div className="flex flex-col space-y-3">
                  <a href="/" className="text-gray-800 hover:text-primary font-medium py-2">Home</a>
                  <a href="/riders" className="text-gray-800 hover:text-primary font-medium py-2">Riders</a>
                  <a href="/drivers" className="text-gray-800 hover:text-primary font-medium py-2">Drivers</a>
                  <a href="/about" className="text-gray-800 hover:text-primary font-medium py-2">About</a>
                  <a href="#features" className="text-gray-800 hover:text-primary font-medium py-2">Features</a>
                  <a href="#how-it-works" className="text-gray-800 hover:text-primary font-medium py-2">How It Works</a>
                  <div className="pt-2 mt-2 border-t border-gray-100">
                    <a href="/riders" className="block bg-primary text-white py-2 px-4 rounded-lg text-center font-medium mb-2">Ride with us</a>
                    <a href="/drivers" className="block bg-accent text-white py-2 px-4 rounded-lg text-center font-medium">Become a driver</a>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10"></div>
        
        <div className="container relative px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Schedule Rides in Advance – Stress-Free Commuting
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Book now, ride later. Your driver arrives right on time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/waitlist" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                  </svg>
                  Join as Rider
                </a>
                <a href="/waitlist?type=driver" className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 012 2v4a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-9a1 1 0 00-.293-.707l-2-2A1 1 0 0017 3h-3a1 1 0 00-1 1v4h-2V5a1 1 0 00-1-1H3z" />
                  </svg>
                  Join as Driver
                </a>
              </div>
              <div className="mt-6 text-center lg:text-left">
                <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors inline-flex items-center">
                  <span>See how it works</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto lg:ml-auto mt-12 lg:mt-0"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
                {/* Desktop Device Frame */}
                <div className="relative order-2 md:order-1 mt-12 md:mt-0">
                  <div className="relative w-[320px] md:w-[380px] bg-secondary rounded-xl overflow-hidden shadow-2xl">
                    {/* Laptop Top Part (Screen) */}
                    <div className="relative bg-secondary rounded-t-xl pt-3 pb-2 px-3">
                      <div className="bg-gray-800 rounded-t-lg overflow-hidden">
                        {/* Screen Content */}
                        <div className="relative pt-2 bg-white">
                          <div className="h-2 w-16 mx-auto bg-gray-200 rounded-full mb-2"></div>
                          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 h-[180px] flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">R</div>
                                <span className="ml-2 font-bold text-primary text-sm">Karnue Dashboard</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white rounded-lg shadow-sm p-3">
                                <h3 className="text-xs font-bold mb-1">Scheduled Rides</h3>
                                <div className="flex justify-between items-center">
                                  <span className="text-lg font-bold text-primary">12</span>
                                  <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full">+4</span>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg shadow-sm p-3">
                                <h3 className="text-xs font-bold mb-1">Total Savings</h3>
                                <div className="flex justify-between items-center">
                                  <span className="text-lg font-bold text-primary">$128</span>
                                  <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full">+$32</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Laptop Bottom Part (Body) */}
                    <div className="bg-gray-800 h-4 rounded-b-xl relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Device Frame */}
                <div className="relative order-1 md:order-2">
                  <div className="relative w-[220px] h-[440px] rounded-[36px] border-[12px] border-secondary bg-white shadow-2xl overflow-hidden">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-secondary rounded-b-xl z-10"></div>
                    
                    {/* Phone Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary to-accent opacity-5"></div>
                    <div className="absolute inset-0 flex flex-col">
                      {/* App Header */}
                      <div className="w-full h-14 flex items-center justify-between px-4 border-b border-gray-200 bg-white">
                        <div className="flex items-center">
                          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">R</div>
                          <span className="ml-2 font-bold text-primary text-sm">Karnue</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="w-full flex-1 p-3 bg-gray-50">
                        <div className="bg-white rounded-xl shadow-sm p-3 mb-3">
                          <h3 className="text-sm font-bold mb-2">Schedule a Ride</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-gray-500">Pickup</div>
                                <div className="text-xs">Current Location</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-gray-500">Destination</div>
                                <div className="text-xs">Airport Terminal 1</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-gray-500">Time</div>
                                <div className="text-xs">Tomorrow, 8:00 AM</div>
                              </div>
                            </div>
                          </div>
                          <button className="w-full mt-3 bg-gradient-to-r from-primary to-accent text-white py-1.5 rounded-lg font-medium text-xs">Book Ride</button>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-3">
                          <h3 className="text-xs font-bold mb-2">Upcoming Rides</h3>
                          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg mb-2">
                            <div>
                              <div className="text-xs font-medium">Today, 2:30 PM</div>
                              <div className="text-xs text-gray-500">Downtown Office</div>
                            </div>
                            <div className="text-xs text-primary font-medium">Confirmed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone Home Button/Bar */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4">Why Choose <span className="text-primary">Karnue</span>?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our premium ride-hailing platform offers unique features designed to make your commuting experience seamless and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Instant Booking" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Instant Booking</h3>
              <p className="text-gray-600 mb-4">Schedule rides in advance with our easy-to-use booking system. Perfect for airport pickups and important meetings.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Real-Time Tracking" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-4">Know exactly where your driver is and when they'll arrive with our precise real-time tracking system.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Secure Payments" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Secure Payments</h3>
              <p className="text-gray-600 mb-4">Pay securely through our app with multiple payment options. No cash needed, and receipts are automatically emailed.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
              </div>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1594022078472-8d27e6bf9fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Premium Safety" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Premium Safety</h3>
              <p className="text-gray-600 mb-4">Your safety is our priority. All drivers undergo rigorous background checks, and our vehicles meet the highest safety standards.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
              </div>
            </motion.div>
            
            {/* Feature 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Schedule in Advance" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Schedule in Advance</h3>
              <p className="text-gray-600 mb-4">Plan ahead by scheduling rides up to 7 days in advance. Perfect for airport trips, meetings, or any important appointment.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
              </div>
            </motion.div>
            
            {/* Feature 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-300"></div>
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Premium Vehicles" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">Premium Vehicles</h3>
              <p className="text-gray-600 mb-4">Ride in style with our fleet of premium, late-model vehicles. Enjoy comfort, cleanliness, and a touch of luxury on every trip.</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" />
              </div>
            </motion.div>
          </div>
          
          {/* Additional Features Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">And Much More...</h3>
                <p className="text-gray-600 mb-6">
                  Discover additional premium features like priority support, VIP access, family accounts, and business profiles. Download the app today to experience the full suite of Karnue benefits.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">24/7 Support</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">VIP Access</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Family Accounts</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Business Profiles</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a href="#download" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Get the App
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Drive and Earn Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:max-w-[50%]">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Drive and earn your way</h2>
              <p className="text-lg text-gray-600 mb-8">
                With Karnue, you can be your own boss, set your own schedule, and drive when it makes sense for you. You keep 100% of your tips, and can cash out instantly whenever you want.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#driver-signup" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Apply to drive
                </a>
                <a href="#driver-info" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more about earnings
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:max-w-[45%] flex-shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Happy Karnue driver" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Content */}
            <div className="lg:max-w-[55%]">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-3">Ready, set, go</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">in just a few quick taps</h3>
                <p className="text-lg text-gray-600 max-w-2xl">
                  No matter your destination, we'll get you where you need to go
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Feature 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="text-primary w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Get a reliable ride in minutes</h3>
                    <p className="text-gray-600">Request a ride and our nearby drivers will pick you up in minutes, day or night.</p>
                  </div>
                </motion.div>
                
                {/* Feature 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Schedule your ride in advance</h3>
                    <p className="text-gray-600">Book rides up to 7 days in advance for those important meetings or airport pickups.</p>
                  </div>
                </motion.div>
                
                {/* Feature 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Earn rewards on every ride</h3>
                    <p className="text-gray-600">Collect points with each trip and redeem them for discounts, upgrades, and exclusive perks.</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-10">
                <a href="#download" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Sign up to ride
                </a>
                <a href="#learn-more" className="inline-flex items-center ml-4 text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more about riding with Karnue
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Phone Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:max-w-[40%] flex-shrink-0 mt-10 lg:mt-0 lg:-mr-5"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
                <div className="relative bg-white p-2 rounded-[40px] shadow-xl border-8 border-gray-100 max-w-[320px] mx-auto">
                  {/* Phone Screen Content */}
                  <div className="bg-gray-50 rounded-[32px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white px-4 py-2 flex justify-between items-center">
                      <div className="text-xs font-medium">9:41</div>
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-.5h1.05a2.5 2.5 0 014.9 0H17a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Map View */}
                    <div className="h-[300px] relative bg-blue-50">
                      {/* Simplified Map */}
                      <div className="absolute inset-0 opacity-60">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>
                      
                      {/* Map Features */}
                      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      
                      {/* Route Line */}
                      <svg className="absolute inset-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80,60 Q120,120 180,120 T240,180" stroke="#3A86FF" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                      </svg>
                    </div>
                    
                    {/* Ride Options */}
                    <div className="bg-white p-4 rounded-t-3xl -mt-6 relative z-10">
                      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">Choose a ride</h4>
                        <span className="text-xs text-gray-500">Arrive by 10:45 AM</span>
                      </div>
                      
                      {/* Ride Option 1 */}
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg mb-2 border-2 border-primary">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-.5h1.05a2.5 2.5 0 014.9 0H17a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Premium</div>
                            <div className="text-xs text-gray-500">2 min away</div>
                          </div>
                        </div>
                        <div className="font-medium">$15.75</div>
                      </div>
                      
                      {/* Ride Option 2 */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-.5h1.05a2.5 2.5 0 014.9 0H17a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium text-sm">Standard</div>
                            <div className="text-xs text-gray-500">5 min away</div>
                          </div>
                        </div>
                        <div className="font-medium">$12.50</div>
                      </div>
                      
                      {/* Book Button */}
                      <button className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-4 text-sm">
                        Book Karnue Premium
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Modern Image Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-16">Services For Every Need</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare transportation" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-primary text-white text-sm font-medium py-1 px-4 rounded-full inline-block mb-3">
                  HEALTHCARE
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Medical Transportation</h3>
                <p className="text-gray-200 text-sm mb-4">Reliable rides for medical appointments</p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <ChevronRight className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education transportation" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-primary text-white text-sm font-medium py-1 px-4 rounded-full inline-block mb-3">
                  HIGHER EDUCATION
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Campus Commuting</h3>
                <p className="text-gray-200 text-sm mb-4">Safe rides for students and faculty</p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <ChevronRight className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="DMV transportation" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-primary text-white text-sm font-medium py-1 px-4 rounded-full inline-block mb-3">
                  DMV
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Daily Commute</h3>
                <p className="text-gray-200 text-sm mb-4">Beat the traffic with scheduled rides</p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <ChevronRight className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Driver Benefits Section */}
      <section id="drivers" className="py-12 md:py-16 bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold font-poppins mb-4">Drive With <span className="text-primary">Karnue</span></h2>
                <p className="text-base text-gray-300 mb-6">
                  Join our growing network of professional drivers and enjoy premium benefits while building your own flexible schedule.
                </p>
              
                <div className="space-y-4">
                  {/* Benefit 1 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Earn on Your Schedule</h3>
                      <p className="text-sm text-gray-300">Set your own hours and work when it fits your lifestyle.</p>
                    </div>
                  </motion.div>
                  
                  {/* Benefit 2 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Higher Earnings with Reservations</h3>
                      <p className="text-sm text-gray-300">Earn more with scheduled rides and premium fares.</p>
                    </div>
                  </motion.div>
                  
                  {/* Benefit 3 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Easy Navigation & Payouts</h3>
                      <p className="text-sm text-gray-300">Get turn-by-turn directions and weekly payments.</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-6">
                  <a href="/waitlist" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm">
                    Join driver waitlist
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Right Video */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-2/5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
                
                {/* Video Container */}
                <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white/10">
                  {/* Video Placeholder - Replace with actual video */}
                  <div className="aspect-video bg-black/40 relative">
                    {/* Video element with direct source */}
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      src="https://assets.mixkit.co/videos/preview/mixkit-driving-through-a-city-at-night-34573-large.mp4"
                    ></video>
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Caption */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white text-sm font-medium">Experience the freedom of driving with Karnue</div>
                    </div>
                  </div>
                </div>
                
                {/* Video Caption */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-300">Join thousands of drivers earning on their own terms</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Removed duplicate button */}
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied riders and drivers
            </p>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Controls */}
            <div className="absolute top-1/2 -left-2 md:-left-12 transform -translate-y-1/2 z-10">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors hover:scale-110 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-2 md:-right-12 transform -translate-y-1/2 z-10">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors hover:scale-110 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            
            {/* Carousel Items */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-base md:text-lg italic">
                          "{testimonial.text}"
                        </p>
                        
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role} | {testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 gap-3">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentTestimonial ? 'bg-primary' : 'bg-gray-300 hover:bg-primary/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonial Cards (Visible on larger screens) */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 italic text-sm mb-4">
                  "{testimonial.text}"
                </p>
                
                <div className="flex justify-end">
                  <span className="text-xs text-gray-400">{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="section bg-gradient-to-r from-primary to-accent text-white">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ride Smarter?</h2>
            <p className="text-xl mb-8">
              Download the Karnue app today and experience stress-free commuting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-black rounded-xl px-6 py-3 flex items-center justify-center hover:bg-black/80 transition-colors">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-medium">App Store</div>
                </div>
              </a>
              
              <a href="#" className="bg-black rounded-xl px-6 py-3 flex items-center justify-center hover:bg-black/80 transition-colors">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.94c-.44 0-.86-.17-1.18-.49-.33-.32-.5-.75-.5-1.2v-20.5c0-.45.17-.88.49-1.2.33-.33.75-.5 1.19-.5h17.64c.44 0 .86.17 1.18.49.33.32.5.75.5 1.2v20.5c0 .45-.17.88-.49 1.2-.33.33-.75.5-1.19.5h-17.64zm2.27-10.94l1.34-2.45 1.35-2.45c.04-.08.06-.16.06-.25 0-.09-.02-.17-.06-.25-.08-.14-.23-.22-.39-.22-.08 0-.16.02-.23.06l-2.73 1.58-2.72 1.57c-.07.04-.13.1-.18.16-.05.07-.08.14-.1.22-.01.08-.01.16.01.24.02.08.05.15.1.22.05.07.11.12.18.16l2.73 1.57 2.73 1.58c.07.04.15.06.23.06.16 0 .31-.09.39-.23.04-.08.06-.16.06-.25s-.02-.17-.06-.25l-1.35-2.45-1.36-2.45zm14.86 0l-5.5 3.18c-.08.04-.14.11-.19.18-.05.07-.07.15-.08.23-.01.08.01.16.04.24.03.08.07.14.13.2.06.06.13.1.2.12.08.03.16.04.24.03.08-.01.16-.03.23-.07.07-.04.13-.1.18-.17l5.5-9.09c.05-.08.08-.16.08-.25 0-.09-.03-.18-.08-.25-.1-.17-.29-.28-.49-.28-.1 0-.2.03-.28.08l-5.5 3.18 5.52 2.67z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-medium">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/waitlist" className="bg-white text-primary hover:bg-primary hover:text-white transition-colors py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl flex items-center">
                Join Rider Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="/waitlist?type=driver" className="bg-accent text-white hover:bg-accent/90 transition-colors py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl flex items-center">
                Join Driver Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Apps Section removed as requested */}

      {/* Footer */}
      <footer className="bg-secondary text-white py-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            {/* Brand and Social */}
            <div className="md:col-span-4">
              <div className="flex items-center mb-3">
                <div className="bg-white rounded-full p-1 mr-2">
                  <div className="bg-gradient-to-r from-primary to-accent rounded-full w-7 h-7 flex items-center justify-center">
                    <span className="text-white font-bold text-base">R</span>
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
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            {/* For Riders */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold mb-3">For Riders</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/riders" className="text-gray-300 hover:text-white transition-colors">Rider Benefits</a></li>
                <li><a href="/riders#features" className="text-gray-300 hover:text-white transition-colors">Safety Features</a></li>
                <li><a href="/riders#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/riders" className="text-gray-300 hover:text-white transition-colors">Book a Ride</a></li>
                <li><a href="/riders" className="text-gray-300 hover:text-white transition-colors">Premium Service</a></li>
              </ul>
            </div>
            
            {/* For Drivers */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold mb-3">For Drivers</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/drivers" className="text-gray-300 hover:text-white transition-colors">Become a Driver</a></li>
                <li><a href="/drivers#earnings" className="text-gray-300 hover:text-white transition-colors">Earnings</a></li>
                <li><a href="/drivers#requirements" className="text-gray-300 hover:text-white transition-colors">Vehicle Requirements</a></li>
                <li><a href="/drivers#support" className="text-gray-300 hover:text-white transition-colors">Driver Support</a></li>
                <li><a href="/drivers#benefits" className="text-gray-300 hover:text-white transition-colors">Driver Benefits</a></li>
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
    </main>
  )
}

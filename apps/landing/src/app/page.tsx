'use client'

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, CreditCard, ChevronRight, ChevronLeft } from 'react-feather'
import Image from 'next/image'

// Import custom components
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'
import AnimatedSection from '../components/AnimatedSection'
import Section from '../components/Section'

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
                <a href="/waitlist" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg hover:outline-xl transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                  </svg>
                  Join as Rider
                </a>
                <a href="/waitlist?type=driver" className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg hover:outline-xl transition-all flex items-center justify-center">
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
                  <div className="relative w-[320px] md:w-[380px] bg-secondary rounded-xl overflow-hidden">
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
                              <div className="bg-white rounded-lg p-3">
                                <h3 className="text-xs font-bold mb-1">Scheduled Rides</h3>
                                <div className="flex justify-between items-center">
                                  <span className="text-lg font-bold text-primary">12</span>
                                  <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full">+4</span>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-3">
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
                  <div className="relative w-[220px] h-[440px] rounded-[36px] border-[12px] border-secondary bg-white overflow-hidden">
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
                        <div className="bg-white rounded-xl p-3 mb-3">
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
                        
                        <div className="bg-white rounded-xl p-3">
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
      <Section 
        id="features" 
        title={<>Why Choose <span className="text-primary">Karnue</span>?</>}
        subtitle="Experience premium ride-hailing with features designed for your comfort and convenience."
        centered
        background="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            title="Instant Booking"
            description="Book your ride with just a few taps. Our streamlined app makes it quick and easy to get on your way."
            imageSrc="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            imageAlt="Instant Booking"
            delay={0.1}
            className="group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden"
          />
            
          {/* Feature 2 */}
          <FeatureCard
            title="Real-Time Tracking"
            description="Know exactly when your driver will arrive with our precise GPS tracking. Share your trip status with friends and family."
            imageSrc="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            imageAlt="Real-Time Tracking"
            delay={0.2}
            className="group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden"
          />
            
          {/* Feature 3 */}
          <FeatureCard
            title="Secure Payments"
            description="Pay securely through the app with multiple payment options. No need to handle cash or worry about change."
            imageSrc="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            imageAlt="Secure Payments"
            delay={0.3}
            className="group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden"
          />
            
          {/* Feature 4 */}
          <FeatureCard
            title="Premium Safety"
            description="Your safety is our priority. All drivers undergo rigorous background checks, and vehicles meet strict safety standards."
            imageSrc="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            imageAlt="Premium Safety"
            delay={0.4}
            className="group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden"
          />
            
          {/* Feature 5 */}
          <FeatureCard
            title="Schedule in Advance"
            description="Plan ahead by scheduling rides up to 7 days in advance. Perfect for airport trips, meetings, or any important appointment."
            imageSrc="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            imageAlt="Schedule in Advance"
            delay={0.5}
            className="group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden"
          />
            
          {/* Feature 6 */}
          <FeatureCard
            title="Premium Vehicles"
            description="Ride in style with our fleet of premium, late-model vehicles. Enjoy comfort, cleanliness, and a touch of luxury on every trip."
            imageSrc="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            imageAlt="Premium Vehicles"
            delay={0.6}
            className="group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden"
          />
        </div>
        
        {/* Additional Features Banner */}
        <AnimatedSection className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h3 className="text-2xl font-semibold mb-4">And Much More...</h3>
              <p className="text-gray-600 mb-6">
                Discover additional premium features like priority support, VIP access, family accounts, and business profiles. Download the app today to experience the full suite of Karnue benefits.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 ">24/7 Support</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 ">VIP Access</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 ">Family Accounts</span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 ">Business Profiles</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button 
                href="#download" 
                variant="primary" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>}
              >
                Get the App
              </Button>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href="/waitlist" 
            variant="outline"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>}
            iconPosition="right"
          >
            Join Rider Waitlist
          </Button>
          <Button 
            href="/waitlist?type=driver" 
            variant="accent"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>}
            iconPosition="right"
          >
            Join Driver Waitlist
          </Button>
        </div>
      </Section>

      {/* Driver Benefits Section */}
      <Section 
        id="drivers" 
        title={<>Drive With <span className="text-primary">Karnue</span></>}
        subtitle="Join our growing network of professional drivers and enjoy premium benefits while building your own flexible schedule."
        background="dark"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="lg:w-3/5">
            <AnimatedSection>
              <div className="space-y-4">
                {/* Benefit 1 */}
                <div className="flex items-start">
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
                </div>
                
                {/* Benefit 2 */}
                <div className="flex items-start">
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
                </div>
                
                {/* Benefit 3 */}
                <div className="flex items-start">
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
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  href="/waitlist?type=driver" 
                  variant="primary"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>}
                  iconPosition="right"
                >
                  Join driver waitlist
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Video */}
          <div className="lg:w-2/5 flex justify-center">
            <AnimatedSection className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              
              {/* Video Container */}
              <div className="relative rounded-xl overflow-hidden border-4 border-white/10">
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
            </AnimatedSection>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        id="testimonials" 
        title="What Our Users Say"
        subtitle="Join thousands of satisfied riders and drivers"
        centered
        background="light"
      >
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Regular Rider"
            location="New York"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            rating={5}
            text="Karnue has completely changed how I commute. The ability to schedule rides in advance means I'm never late for meetings. The drivers are professional and the cars are always clean!"
            delay={0.1}
          />
          <TestimonialCard
            name="Michael Chen"
            role="Business Traveler"
            location="Chicago"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            rating={5}
            text="As someone who travels frequently for work, Karnue has been a game-changer. The premium vehicles and professional service make every trip comfortable and stress-free."
            delay={0.2}
          />
          <TestimonialCard
            name="David Rodriguez"
            role="Karnue Driver"
            location="Miami"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            rating={5}
            text="Driving for Karnue has given me the flexibility I need while earning a great income. The scheduled rides feature means I can plan my day efficiently and maximize my earnings."
            delay={0.3}
          />
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section 
        id="download" 
        title="Ready to Ride Smarter?"
        subtitle="Download the Karnue app today and experience stress-free commuting."
        centered
        background="gradient"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href="/waitlist" 
            variant="light"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>}
            iconPosition="right"
          >
            Join Rider Waitlist
          </Button>
          <Button 
            href="/waitlist?type=driver" 
            variant="accent"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>}
            iconPosition="right"
          >
            Join Driver Waitlist
          </Button>
        </div>
      </Section>

    </main>
  )
}

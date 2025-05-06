import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Karnue',
  description: 'Learn about Karnue, the premium ride-hailing platform designed to compete with Uber and Lyft.',
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              About <span className="text-primary">Karnue</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              We're on a mission to transform the ride-hailing experience with premium service, 
              advanced scheduling, and a focus on both rider comfort and driver success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Karnue was founded in 2023 by a team of transportation industry veterans who saw an opportunity 
                to create a better ride-hailing experience for both riders and drivers.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We recognized that while existing platforms had revolutionized urban mobility, there was still 
                a significant gap in the market for a service that truly prioritized quality, reliability, and 
                advanced scheduling.
              </p>
              <p className="text-lg text-gray-700">
                Our platform is built on the belief that ride-hailing can be elevated to a premium experience 
                without premium prices, and that drivers deserve better compensation and more control over their work.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/team.jpg" 
                  alt="Karnue Team" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Karnue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Excellence" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every ride, every interaction, and every feature we develop.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Community" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We're building a community of riders and drivers who value quality, respect, and reliability.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Sustainability" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to reducing our environmental impact and promoting sustainable transportation options.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Care" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Care</h3>
              <p className="text-gray-600">
                We care deeply about the safety, comfort, and success of both our riders and drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced team behind Karnue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src="/images/ceo.jpg" 
                  alt="Sarah Johnson, CEO" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600">
                  Former executive at a major ride-sharing company with 15+ years in transportation and tech.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src="/images/cto.jpg" 
                  alt="Michael Chen, CTO" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-primary font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Tech innovator with experience building scalable platforms at leading tech companies.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src="/images/coo.jpg" 
                  alt="David Rodriguez, COO" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Rodriguez</h3>
                <p className="text-primary font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Operations expert with a background in logistics and transportation management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                To transform urban mobility by providing a premium ride-hailing experience that prioritizes 
                reliability, comfort, and convenience for riders while offering drivers fair compensation 
                and schedule flexibility.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="text-lg mb-4">
                To become the leading premium ride-hailing service globally, known for exceptional quality, 
                innovative scheduling features, and creating sustainable livelihoods for drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Join the Karnue Journey</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're just getting started, and we'd love for you to be part of our story. 
              Whether you're looking for a better way to get around or a more rewarding driving opportunity, 
              Karnue is building something special for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/waitlist" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Join as Rider
              </Link>
              <Link href="/waitlist?type=driver" className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                Join as Driver
              </Link>
              <Link href="/careers" className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

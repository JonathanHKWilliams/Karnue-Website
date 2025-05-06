import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, CreditCard } from 'react-feather';

export const metadata: Metadata = {
  title: 'For Riders | Karnue',
  description: 'Experience premium ride-hailing with Karnue. Schedule rides in advance for stress-free commuting.',
};

export default function RidersPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        
        <div className="container relative px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Ride with <span className="text-primary">Confidence</span> and <span className="text-accent">Comfort</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Schedule rides in advance, enjoy premium service, and travel stress-free with Karnue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/waitlist" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                  </svg>
                  Join Waitlist
                </Link>
                <Link href="#features" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative mx-auto lg:ml-auto">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
                
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/images/rider-app.png" 
                    alt="Karnue Rider App" 
                    width={500} 
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Riders Choose Karnue</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience premium ride-hailing designed with your comfort and convenience in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Schedule in Advance" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule in Advance</h3>
              <p className="text-gray-600">
                Plan your trips ahead of time and have a driver ready exactly when you need one.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Real-Time Tracking" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Know exactly where your driver is and when they'll arrive with precise GPS tracking.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Secure Payments" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Pay seamlessly through the app with multiple payment options and digital receipts.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1594022078472-8d27e6bf9fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Enhanced Safety" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Safety</h3>
              <p className="text-gray-600">
                Ride with confidence knowing all drivers are thoroughly vetted and trips are monitored.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Punctual Service" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Punctual Service</h3>
              <p className="text-gray-600">
                Our drivers pride themselves on punctuality, so you're never kept waiting.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Premium Experience" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
              <p className="text-gray-600">
                Enjoy a comfortable, clean vehicle and professional service on every ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fare Estimator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Estimate Your Fare</h2>
              <p className="text-lg text-gray-600">
                Get a quick estimate for your ride before booking.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Pickup Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter pickup address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Destination</label>
                    <input 
                      type="text" 
                      placeholder="Enter destination address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ride Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <input type="radio" id="standard" name="ride-type" className="peer hidden" defaultChecked />
                      <label htmlFor="standard" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5">
                        <div className="font-medium">Standard</div>
                        <div className="text-sm text-gray-500">Everyday rides</div>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="premium" name="ride-type" className="peer hidden" />
                      <label htmlFor="premium" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5">
                        <div className="font-medium">Premium</div>
                        <div className="text-sm text-gray-500">Luxury vehicles</div>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="xl" name="ride-type" className="peer hidden" />
                      <label htmlFor="xl" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5">
                        <div className="font-medium">XL</div>
                        <div className="text-sm text-gray-500">Up to 6 people</div>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="reserved" name="ride-type" className="peer hidden" />
                      <label htmlFor="reserved" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5">
                        <div className="font-medium">Reserved</div>
                        <div className="text-sm text-gray-500">Schedule ahead</div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Calculate Fare
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-600">Estimated fare:</div>
                    <div className="text-2xl font-semibold">$15 - $20</div>
                  </div>
                  <Link href="/waitlist" className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Experience Premium Rides?</h2>
            <p className="text-xl mb-8">
              Join our waitlist today and be among the first to experience Karnue.
            </p>
            
            <Link href="/waitlist" className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center">
              Join Waitlist
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

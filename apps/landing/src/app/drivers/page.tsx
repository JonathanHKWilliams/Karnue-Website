import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Drivers | Karnue',
  description: 'Join our network of professional drivers and enjoy premium benefits while building your own flexible schedule.',
};

export default function DriversPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10"></div>
        
        <div className="container relative px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Drive with <span className="text-primary">Karnue</span> and Earn on Your Terms
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Join our growing network of professional drivers and enjoy premium benefits while building your own flexible schedule.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/waitlist?type=driver" className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 012 2v4a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-9a1 1 0 00-.293-.707l-2-2A1 1 0 0017 3h-3a1 1 0 00-1 1v4h-2V5a1 1 0 00-1-1H3z" />
                  </svg>
                  Apply to Drive
                </Link>
                <Link href="#benefits" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative mx-auto lg:ml-auto">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                
                {/* Video Container */}
                <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white/10">
                  <div className="aspect-video bg-black/40 relative">
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
                    
                    {/* Caption */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white text-sm font-medium">Experience the freedom of driving with Karnue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Driver Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enjoy these exclusive benefits when you join the Karnue driver network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Flexible Hours" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">
                Set your own schedule and work when it fits your lifestyle. No minimum hours required.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Higher Earnings" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Higher Earnings</h3>
              <p className="text-gray-600">
                Earn more with our premium pricing model and scheduled rides. Weekly payouts guaranteed.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Smart Navigation" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Navigation</h3>
              <p className="text-gray-600">
                Our app provides optimized routes and real-time traffic updates to maximize your efficiency.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1594022078472-8d27e6bf9fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Driver Protection" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Driver Protection</h3>
              <p className="text-gray-600">
                Comprehensive insurance coverage while on duty and 24/7 support for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Earnings Calculator</h2>
              <p className="text-lg text-gray-600">
                See how much you could earn driving with Karnue.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Hours per week</label>
                    <input 
                      type="number" 
                      placeholder="20" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your city</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                      <option>San Francisco</option>
                      <option>Los Angeles</option>
                      <option>New York</option>
                      <option>Chicago</option>
                      <option>Miami</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Vehicle Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <input type="radio" id="economy" name="vehicle-type" className="peer hidden" defaultChecked />
                      <label htmlFor="economy" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-accent peer-checked:bg-accent/5">
                        <div className="font-medium">Economy</div>
                        <div className="text-sm text-gray-500">Sedan</div>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="comfort" name="vehicle-type" className="peer hidden" />
                      <label htmlFor="comfort" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-accent peer-checked:bg-accent/5">
                        <div className="font-medium">Comfort</div>
                        <div className="text-sm text-gray-500">SUV</div>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="premium" name="vehicle-type" className="peer hidden" />
                      <label htmlFor="premium" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-accent peer-checked:bg-accent/5">
                        <div className="font-medium">Premium</div>
                        <div className="text-sm text-gray-500">Luxury</div>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="xl" name="vehicle-type" className="peer hidden" />
                      <label htmlFor="xl" className="block p-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-accent peer-checked:bg-accent/5">
                        <div className="font-medium">XL</div>
                        <div className="text-sm text-gray-500">Minivan</div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Calculate Earnings
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-600">Estimated weekly earnings:</div>
                    <div className="text-2xl font-semibold">$800 - $1,200</div>
                    <div className="text-sm text-gray-500 mt-1">Based on 20 hours per week in San Francisco</div>
                  </div>
                  <Link href="/waitlist?type=driver" className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Driver Requirements</h2>
              <p className="text-lg text-gray-600">
                Here's what you need to get started with Karnue.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Valid Driver's License</h3>
                    <p className="text-gray-600 mt-1">Must have a valid driver's license in your state of residence with at least 1 year of driving experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Vehicle Requirements</h3>
                    <p className="text-gray-600 mt-1">Your vehicle must be 2010 or newer, have 4 doors, and be in excellent condition with no cosmetic damage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Background Check</h3>
                    <p className="text-gray-600 mt-1">Pass our comprehensive background check and driving record review for safety and security.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Smartphone</h3>
                    <p className="text-gray-600 mt-1">You'll need an iPhone or Android smartphone to use the Karnue Driver app.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Insurance</h3>
                    <p className="text-gray-600 mt-1">Maintain valid personal auto insurance that meets or exceeds state requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Start Earning?</h2>
            <p className="text-xl mb-8">
              Join our driver network today and take control of your income.
            </p>
            
            <Link href="/waitlist?type=driver" className="bg-white text-accent hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center">
              Apply to Drive
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

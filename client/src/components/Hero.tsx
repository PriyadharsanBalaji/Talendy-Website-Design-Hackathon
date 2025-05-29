import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      <div className="absolute inset-0 tech-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '100px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-orange-500 rounded-full floating-animation opacity-60"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-orange-600 rounded-full floating-animation opacity-50" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-orange-300 rounded-full floating-animation opacity-70" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 text-center lg:text-left slide-in-left">
            {/* Animated Trust Badge */}
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-8 pulse-glow">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-500 text-sm font-semibold">16+ Premier Institutions • 12,000+ Active Candidates</span>
            </div>
            
            <h1 className="hero-text text-white mb-10 fade-in-up">
              Accelerate the Future with the Power of
              <span className="text-orange-500 block relative mt-4">
                <span className="typing-animation inline-block">Diversity</span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="body-large text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0 fade-in-up" style={{animationDelay: '0.3s'}}>
              Accelerate <span className="text-orange-500 font-bold relative">
                digitization
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500/50 rounded-full"></div>
              </span> with the power of diversity and create a prosperous society. 
              <span className="text-white font-bold block mt-2">A one stop platform to connect with top 1% talent from India.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-10 py-5 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Start Hiring Now →
                </Button>
              </Link>
              <Link href="/download">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-5 font-semibold transition-all duration-200">
                  Download Guide
                </Button>
              </Link>
            </div>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left fade-in-up" style={{animationDelay: '0.6s'}}>
              {[
                { number: "47+", label: "Total Industries", delay: "0.1s" },
                { number: "12,000+", label: "Active Candidates", delay: "0.2s" },
                { number: "16+", label: "Premier Universities", delay: "0.3s" },
                { number: "6+", label: "Years Experience", delay: "0.4s" }
              ].map((stat, index) => (
                <div key={index} className="tech-card rounded-xl p-6 group hover:scale-105 transition-all duration-300" style={{animationDelay: stat.delay}}>
                  <div className="stat-number group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-400 font-medium text-base">{stat.label}</div>
                  <div className="w-full h-1 bg-gradient-to-r from-orange-500/20 to-orange-500/60 rounded-full mt-2 group-hover:from-orange-500/40 group-hover:to-orange-500/80 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 mt-32 lg:mt-24 slide-in-right">
            <div className="relative floating-animation">
              {/* Advanced Tech Dashboard */}
              <div className="tech-card rounded-2xl p-8 shadow-2xl shadow-orange-500/20 relative overflow-hidden">
                {/* Animated circuit lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-orange-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-orange-500 rounded-full pulse-glow"></div>
                      <div className="text-2xl font-black text-white">Live Talent Dashboard</div>
                    </div>
                    <div className="glass-effect rounded-lg px-4 py-2 pulse-glow">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm font-bold">REAL-TIME</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Raj S.", skills: "React, Node.js, AWS", exp: "5+ years", location: "IIT Bangalore", match: "98%", status: "Available" },
                      { name: "Priya M.", skills: "Python, ML, Django", exp: "7+ years", location: "NIT Mumbai", match: "95%", status: "Interviewing" },
                      { name: "Arjun K.", skills: "Go, Kubernetes, GCP", exp: "6+ years", location: "IIIT Chennai", match: "92%", status: "Available" }
                    ].map((engineer, index) => (
                      <div key={index} className="glass-effect rounded-xl p-5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 group fade-in-up" style={{animationDelay: `${0.8 + index * 0.2}s`}}>
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors duration-300">{engineer.name}</div>
                              <div className="bg-orange-500/20 text-orange-500 text-xs px-3 py-1 rounded-full font-bold pulse-glow">
                                {engineer.match} MATCH
                              </div>
                              <div className={`text-xs px-2 py-1 rounded-full ${engineer.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                {engineer.status}
                              </div>
                            </div>
                            <div className="text-gray-300 font-medium mb-1">{engineer.skills}</div>
                            <div className="text-gray-400 text-sm">{engineer.exp} • {engineer.location}</div>
                          </div>
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-glow">
                            <CheckCircle className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-orange-400 h-1 rounded-full transition-all duration-1000"
                            style={{width: engineer.match, animationDelay: `${1 + index * 0.2}s`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-6 border-t border-gray-700/50 fade-in-up" style={{animationDelay: '1.4s'}}>
                    <div className="text-white font-black text-xl mb-2">12,000+ Pre-vetted Engineers</div>
                    <div className="text-gray-400 font-medium">AI-powered matching • Real-time updates</div>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-orange-500 text-sm font-bold">ACTIVE NOW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Tech Indicators */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 shadow-2xl shadow-orange-500/50 floating-animation pulse-glow">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 floating-animation pulse-glow" style={{animationDelay: '3s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-sm">AI POWERED</span>
                </div>
              </div>
              
              {/* Dynamic Background Tech Elements */}
              <div className="absolute top-20 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl floating-animation"></div>
              <div className="absolute bottom-20 -left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 -right-5 w-20 h-20 bg-orange-400/10 rounded-full blur-xl floating-animation" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
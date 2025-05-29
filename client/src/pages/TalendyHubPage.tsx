import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Check, BookOpen, ArrowRight, GraduationCap, TrendingDown, Clock, Heart, Play } from "lucide-react";

export default function TalendyHubPage() {
  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
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
              height: '120px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full floating-animation opacity-60"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-orange-600 rounded-full floating-animation opacity-50" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">a one stop platform to Recruit new tech graduates</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Discover and Recruit the <span className="text-orange-500 relative">
              <span className="typing-animation inline-block">top 1% talents</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse"></div>
            </span> from the premier institutes in India
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.3s'}}>
            Connect with top 16 premier universities from India including IIT, IISc, NIT, IIIT etc. We have a collaboration with 16 premier institutions from India like Indian Institute of Technology (IIT), Indian Institute of Management (IIM), National Institute of Technology (NIT), Indian Institute of Information Technology (IIIT) and Indian Institute of Sciences (IISc).
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">16+ Premier Colleges</h3>
              <p className="text-gray-300 text-sm">Hire from premier Institutions in India like IIT's and IIM's.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">7000+ Candidates</h3>
              <p className="text-gray-300 text-sm">Find the best from a pool of 7000+ candidates.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reduce time by 80%</h3>
              <p className="text-gray-300 text-sm">Efficient communication and consolidated information in one platform</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Increased Cultural Bonding</h3>
              <p className="text-gray-300 text-sm">Reduce cultural mismatch through internships.</p>
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">BACKGROUND</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              With growing demand for excellent IT and digital human resources
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Japanese companies feel the need to connect with the talents from India more efficiently and effectively. Companies all over the world are accelerating the efforts for DX in order to respond to drastic environmental changes; utilize data and digital technologies, and transform their products, services, and business models based on the needs of customers and society.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">HOW IT WORKS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Simple Process to <span className="text-orange-500">Find Your Talent</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tell us your Requirements</h3>
              <p className="text-gray-300">Share your hiring needs, preferred skills, and team requirements with us.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Get Matched Candidates</h3>
              <p className="text-gray-300">Receive profiles of pre-screened candidates from premier Indian institutions.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Interview and Hire</h3>
              <p className="text-gray-300">Connect with candidates and make your final selection from the top talent pool.</p>
            </div>
          </div>
        </div>

        {/* Partner Institutions Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our <span className="text-orange-500">Partner Institutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We work directly with India's most prestigious educational institutions to bring you the best engineering talent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur",
              "IISc Bangalore", "NIT Trichy", "IIIT Hyderabad", "IIT Kharagpur",
              "NIT Warangal", "IIIT Bangalore", "IIT Roorkee", "NIT Surathkal",
              "IIT Guwahati", "BITS Pilani", "VIT Vellore", "DTU Delhi"
            ].map((institution, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-orange-500 transition-all duration-300">
                <p className="text-white font-semibold">{institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with top engineering talent from India's premier institutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center">
                Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/download">
              <Button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

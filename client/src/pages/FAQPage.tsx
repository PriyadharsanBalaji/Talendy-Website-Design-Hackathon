import FAQSection from "@/components/FAQSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Download } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '90px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500 rounded-full floating-animation opacity-40"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-4 h-4 bg-orange-600 rounded-full floating-animation opacity-30" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow">
            <HelpCircle className="text-white h-8 w-8" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-orange-500 relative">
              Questions
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.3s'}}>
            Find answers to common questions about our services, processes, and how Talendy can help your company build exceptional engineering teams.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="tech-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 pulse-glow">
              <HelpCircle className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">General Questions</h3>
            <p className="text-gray-300 text-sm">
              Learn about our company, services, and how we can help your business grow.
            </p>
          </div>
          <div className="tech-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 pulse-glow">
              <MessageCircle className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Service Details</h3>
            <p className="text-gray-300 text-sm">
              Detailed information about Talendy Hub and EOR services.
            </p>
          </div>
          <div className="tech-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 pulse-glow">
              <Download className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Process & Pricing</h3>
            <p className="text-gray-300 text-sm">
              Understanding our hiring process, timelines, and pricing models.
            </p>
          </div>
        </div>

        {/* Main FAQ Component */}
        <FAQSection />

        {/* Additional Resources */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Still Have Questions?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Our Team</h3>
              <p className="text-gray-600 mb-4">
                Get personalized answers to your specific questions from our expert team.
              </p>
              <Link href="/contact">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download Resources</h3>
              <p className="text-gray-600 mb-4">
                Access detailed guides and documentation for comprehensive information.
              </p>
              <Link href="/download">
                <Button className="bg-amber-500 text-white hover:bg-amber-600">Download Guides</Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat Support
              </Button>
              <Button variant="outline">
                <HelpCircle className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-sm text-gray-600">How to begin your journey with Talendy</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Pricing Models</h3>
              <p className="text-sm text-gray-600">Understanding our flexible pricing options</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600">How we ensure engineer quality</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Support & Success</h3>
              <p className="text-sm text-gray-600">Ongoing support for your team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

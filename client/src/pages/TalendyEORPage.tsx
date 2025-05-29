import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building, Check, Shield, Globe, ArrowRight, Users, CreditCard, FileText, HeartHandshake } from "lucide-react";

export default function TalendyEORPage() {
  return (
    <div className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/25 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '110px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500 rounded-full floating-animation opacity-50"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-4 h-4 bg-orange-600 rounded-full floating-animation opacity-60" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">EMPLOYER OF RECORD SERVICES</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Talendy EOR: <span className="text-orange-500 relative">
              <span className="typing-animation inline-block">We offer a comprehensive service</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse"></div>
            </span> for payroll and benefit management
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.3s'}}>
            for your full-time employees working remotely from India. Our solution removes the complexities of cross-border employment, ensuring legal compliance and seamless operations while you focus on scaling your business.
          </p>
        </div>

        {/* Key Services Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Payroll Management</h3>
              <p className="text-gray-300 text-sm">Complete payroll processing, tax compliance, and benefit administration for your remote team in India.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Legal Compliance</h3>
              <p className="text-gray-300 text-sm">Full compliance with Indian labor laws, contracts, and regulatory requirements.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">HR Administration</h3>
              <p className="text-gray-300 text-sm">Employee onboarding, performance management, and HR support services.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Employee Benefits</h3>
              <p className="text-gray-300 text-sm">Comprehensive benefits package including health insurance, PF, and leave management.</p>
            </div>
          </div>
        </div>

        {/* Why Choose EOR Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">WHY TALENDY EOR</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Focus on Your Business, <span className="text-orange-500">We Handle the Rest</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Eliminate the complexities of international employment. Our EOR service provides complete peace of mind with full legal compliance and administrative support.
            </p>
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Why Choose <span className="text-orange-500">Talendy EOR?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Traditional Hiring Challenges</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Legal Entity Setup Required</h4>
                    <p className="text-gray-300 text-sm">6-12 months to establish operations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Compliance Burden</h4>
                    <p className="text-gray-300 text-sm">Complex local laws and regulations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">High Initial Investment</h4>
                    <p className="text-gray-300 text-sm">Substantial upfront costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-1">Administrative Overhead</h4>
                    <p className="text-gray-300 text-sm">Ongoing HR and payroll management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-orange-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Talendy EOR Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">Immediate Market Entry</h4>
                    <p className="text-gray-300 text-sm">Start hiring within 2-3 weeks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">Full Compliance Assurance</h4>
                    <p className="text-gray-300 text-sm">We handle all legal requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">Minimal Upfront Cost</h4>
                    <p className="text-gray-300 text-sm">No entity setup expenses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">Complete Administration</h4>
                    <p className="text-gray-300 text-sm">Full payroll and benefits management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">SIMPLE PROCESS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Get Started in <span className="text-orange-500">3 Easy Steps</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300">Share your hiring requirements and team structure with our EOR specialists.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Setup Agreement</h3>
              <p className="text-gray-300">Sign the EOR agreement and establish service parameters for your team.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Start Hiring</h3>
              <p className="text-gray-300">Begin onboarding employees under our legal entity with full compliance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Team in India?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle the complexity while you focus on building great products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center">
                Start with EOR <ArrowRight className="ml-2 h-4 w-4" />
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

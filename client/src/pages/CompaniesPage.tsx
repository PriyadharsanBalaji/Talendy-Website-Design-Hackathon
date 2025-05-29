import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building, Clock, Shield, Users, CheckCircle, ArrowRight, Star, Globe } from "lucide-react";

export default function CompaniesPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Hire in 2 Weeks",
      description: "Our streamlined process gets you qualified engineers faster than traditional recruitment methods.",
      metrics: "75% faster than industry average"
    },
    {
      icon: Shield,
      title: "100% Compliant",
      description: "Full legal compliance across 15+ countries with our comprehensive EOR services.",
      metrics: "Zero legal complications"
    },
    {
      icon: Users,
      title: "Pre-vetted Talent",
      description: "Every engineer goes through rigorous technical assessments by ex-FAANG engineers.",
      metrics: "98% client satisfaction rate"
    },
    {
      icon: Globe,
      title: "Asian Market Focus",
      description: "Deep understanding of Asian business culture and timezone-optimized operations.",
      metrics: "24/7 support in Asian timezones"
    }
  ];

  const solutions = [
    {
      title: "Startup Package",
      description: "Perfect for early-stage companies looking to build their first tech team",
      features: [
        "Access to junior and mid-level engineers",
        "Flexible engagement models",
        "Startup-friendly pricing",
        "Technical mentorship support"
      ],
      pricing: "Starting from $2,500/month",
      cta: "Get Started"
    },
    {
      title: "Scale Package", 
      description: "Ideal for growing companies ready to expand their engineering teams",
      features: [
        "Senior engineers and tech leads",
        "Team building expertise",
        "Custom skill matching",
        "Dedicated account manager"
      ],
      pricing: "Custom pricing",
      cta: "Schedule Demo",
      popular: true
    },
    {
      title: "Enterprise Package",
      description: "Comprehensive solution for large organizations with complex requirements",
      features: [
        "Architect-level engineers",
        "White-glove service",
        "Multi-team coordination",
        "Executive reporting"
      ],
      pricing: "Enterprise pricing",
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      company: "TechCorp Singapore",
      industry: "Fintech",
      quote: "Talendy helped us scale our engineering team from 5 to 25 engineers in just 6 months. The quality of talent is exceptional.",
      author: "Sarah Kim, CTO"
    },
    {
      company: "Innovation Labs Tokyo",
      industry: "AI/ML",
      quote: "We found our lead AI engineer through Talendy. The vetting process ensured we got exactly the expertise we needed.",
      author: "Hiroshi Tanaka, Founder"
    },
    {
      company: "E-commerce Giant Bangkok",
      industry: "E-commerce",
      quote: "The EOR services made international hiring seamless. We focus on building, Talendy handles the complexity.",
      author: "Ananya Patel, VP Engineering"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "We understand your technical needs, company culture, and project requirements in detail."
    },
    {
      step: "2", 
      title: "Talent Matching",
      description: "Our AI-powered platform identifies the best candidates from our pre-vetted talent pool."
    },
    {
      step: "3",
      title: "Technical Interviews",
      description: "Candidates undergo rigorous technical assessments and cultural fit evaluations."
    },
    {
      step: "4",
      title: "Onboarding & Support",
      description: "Seamless integration with ongoing support to ensure long-term success."
    }
  ];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
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
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-500 text-sm font-semibold">FOR COMPANIES</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8">
              Scale Your Team with <span className="text-orange-500 relative">
                <span className="typing-animation inline-block">Elite Engineers</span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 fade-in-up" style={{animationDelay: '0.3s'}}>
              Join 50+ Asian companies that trust Talendy to connect them with world-class Indian engineering talent. 
              From startups to enterprises, we have the perfect solution for your growth needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-10 py-5 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Start Hiring Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/download">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-5 font-semibold transition-all duration-200">
                  Download Case Studies
                </Button>
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Star className="text-orange-500 h-5 w-5 mr-2" />
                <span>Trusted by Samsung, Rakuten, Grab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Why Companies Choose <span className="text-orange-500">Talendy</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We eliminate the complexity of international hiring while delivering exceptional engineering talent
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-black rounded-2xl p-8 border-2 border-gray-700 hover:border-orange-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="text-black h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="text-orange-500 font-bold">{benefit.metrics}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Choose Your Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible packages designed for companies at every stage of growth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-gray-900 rounded-2xl p-8 border-2 ${solution.popular ? 'border-orange-500' : 'border-gray-700'} relative`}>
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-black text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-orange-500 mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-orange-500 font-bold text-lg mb-6">{solution.pricing}</div>
                <Link href="/contact">
                  <Button className={`w-full py-3 text-lg font-bold transition-all duration-200 ${
                    solution.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-black' 
                      : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black'
                  }`}>
                    {solution.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial consultation to successful team integration
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-black text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Success stories from companies across Asia
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-700">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-500 h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-bold">{testimonial.author}</div>
                  <div className="text-orange-500 font-semibold">{testimonial.company}</div>
                  <div className="text-gray-400 text-sm">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the companies already scaling with Talendy. Get matched with pre-vetted engineers in just 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-10 py-5 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Your Search <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-5 font-semibold transition-all duration-200">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
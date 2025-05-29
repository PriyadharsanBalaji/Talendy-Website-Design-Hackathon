import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Target, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";

export default function CompanyPage() {
  const stats = [
    { number: "2019", label: "Founded" },
    { number: "500+", label: "Engineers Placed" },
    { number: "50+", label: "Partner Companies" },
    { number: "15+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Bridging the talent gap between Asian companies and Indian engineering excellence through innovative technology solutions."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting businesses across Asia with top-tier Indian talent, creating opportunities that transcend geographical boundaries."
    },
    {
      icon: Users,
      title: "People First",
      description: "Building lasting relationships with both clients and engineers, ensuring mutual success and sustainable growth."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results through rigorous vetting processes and continuous innovation."
    }
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      title: "CEO & Founder",
      background: "Former VP Engineering at Samsung, 15+ years in tech leadership",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Priya Sharma",
      title: "CTO",
      background: "Ex-Google Senior Engineer, AI/ML specialist with Stanford PhD",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Chen",
      title: "VP Operations",
      background: "Former McKinsey Partner, expert in Asian market dynamics",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/25 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '130px'
            }}
          />
        ))}
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full floating-animation opacity-60"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-orange-600 rounded-full floating-animation opacity-50" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-60 right-10 w-2 h-2 bg-orange-300 rounded-full floating-animation opacity-70" style={{animationDelay: '1s'}}></div>
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8">
              About <span className="text-orange-500 relative">
                <span className="typing-animation inline-block">TALENDY</span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse"></div>
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 fade-in-up" style={{animationDelay: '0.3s'}}>
              We're revolutionizing how Asian companies access world-class Indian engineering talent through cutting-edge technology and deep market expertise.
            </p>
            <div className="inline-flex bg-orange-500/20 border border-orange-500 rounded-full px-8 py-3 pulse-glow fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-500 font-bold">Trusted by industry leaders since 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center tech-card rounded-xl p-6 hover:scale-105 transition-all duration-300 fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl lg:text-5xl font-black text-orange-500 mb-2 pulse-glow">{stat.number}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-500/20 to-orange-500/60 rounded-full mt-3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in 2019, Talendy emerged from a simple observation: Asian companies were struggling to access the incredible pool of engineering talent in India, while skilled Indian engineers sought opportunities with innovative global companies.
                </p>
                <p>
                  Our founders, having worked at leading tech companies across Asia and Silicon Valley, recognized that traditional recruitment methods weren't designed for the complexities of cross-border hiring in the modern tech landscape.
                </p>
                <p>
                  Today, we've built the most advanced platform for connecting Asian businesses with Indian engineering talent, combining AI-powered matching with comprehensive legal and operational support.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-700">
              <h3 className="text-2xl font-black text-white mb-6">Why We Exist</h3>
              <ul className="space-y-4">
                {[
                  "Bridge the global talent gap in technology",
                  "Enable Asian companies to scale faster",
                  "Create opportunities for Indian engineers",
                  "Simplify complex international hiring"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-black rounded-2xl p-8 border-2 border-gray-700 hover:border-orange-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="text-black h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced leaders from top global tech companies
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-700 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-black text-white mb-2">{leader.name}</h3>
                <p className="text-orange-500 font-bold mb-4">{leader.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{leader.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Ready to Scale Your Team?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join 50+ Asian companies that trust Talendy to connect them with elite Indian engineering talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg px-10 py-5 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Hiring Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-5 font-semibold transition-all duration-200">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
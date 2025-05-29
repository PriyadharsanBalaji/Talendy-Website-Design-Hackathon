import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Building, Check, Zap, Target } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      name: "Talendy",
      description: "A platform to hire fresh graduates full time from the top premier institutions through internships, hackathons like the Indian Institute of Technology etc.",
      features: [
        "16+ Premier Colleges - Hire from premier Institutions in India like IIT's and IIM's",
        "7000+ Candidates - Find the best from a pool of 7000+ candidates",
        "Reduce time by 80% - Efficient communication and consolidated information in one platform",
        "Increased Cultural Bonding - Reduce cultural mismatch through internships"
      ],
      icon: Users,
      color: "bg-orange-500",
      cta: "Learn More",
      link: "/talendy-hub"
    },
    {
      name: "Talendy EOR", 
      description: "When relocation is a challenge, we support the HR and payroll services for your full time employees so that you can focus on building great things together!",
      features: [
        "No Need for Relocation - Diversity/Globalization of the team without relocation",
        "Skip New Legal Entity - No hassle of building a new legal entity in new geography",
        "Low Initial Cost - Take advantage of very low initial and operational cost",
        "Simple Onboarding Process - A simple onboarding process allows to kickstart in 2-3 weeks"
      ],
      icon: Building,
      color: "bg-orange-500", 
      cta: "Learn More",
      link: "/talendy-eor"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-500 rounded-full floating-animation opacity-40"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-animation opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-32 w-4 h-4 bg-orange-600 rounded-full floating-animation opacity-30" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">WHAT WE DO</span>
          </div>
          <h2 className="section-heading text-white mb-8">
            A one stop platform to connect with <span className="text-orange-500">top 1% talent from India</span>
          </h2>
          <p className="body-large text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover India's <span className="text-orange-500 font-bold">top 1% talent</span> from premier institutions, including IITs, IIMs, NITs, IISc, and IIITs, through our comprehensive one-stop destination. We not only introduce <span className="text-white font-bold">highly-skilled Indian human resources</span> but also provide unwavering support for their consistent and active role in your company.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`group tech-card rounded-2xl p-10 hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden ${index === 0 ? 'slide-in-left' : 'slide-in-right'}`} style={{animationDelay: `${index * 0.3}s`}}>
                {/* Animated Background Tech Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl floating-animation"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-400/10 rounded-full blur-xl floating-animation" style={{animationDelay: '2s'}}></div>
                
                {/* Animated circuit lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/25 pulse-glow`}>
                  <IconComponent className="text-white h-12 w-12" />
                </div>
                
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight group-hover:text-orange-400 transition-colors duration-300">{service.name}</h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">{service.description}</p>
                
                <div className="space-y-6 mb-12">
                  {service.features.map((feature, featureIndex) => {
                    const [title, description] = feature.split(' - ');
                    return (
                      <div key={featureIndex} className="flex items-start fade-in-up" style={{animationDelay: `${0.5 + featureIndex * 0.1}s`}}>
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 pulse-glow">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors duration-300">{title}</div>
                          <div className="text-gray-300">{description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Link href={service.link}>
                  <Button className="btn-primary w-full group pulse-glow">
                    {service.cta}
                    <Target className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Why TALENDY section */}
        <div className="mt-24 relative">
          <div className="tech-card rounded-3xl p-12 text-center border-2 border-orange-500/50 relative overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 tech-gradient"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center glass-effect rounded-full px-8 py-4 mb-8">
                <Zap className="text-orange-500 h-6 w-6 mr-3" />
                <span className="text-orange-500 font-bold text-lg">PROVEN RESULTS</span>
              </div>
              
              <h3 className="text-5xl font-black mb-12 text-white">
                Why Asian Companies Choose <span className="text-orange-500">TALENDY</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "15", unit: "Days", desc: "Average time to hire", icon: "⚡" },
                  { number: "98", unit: "%", desc: "Client retention rate", icon: "💯" },
                  { number: "500", unit: "+", desc: "Engineers placed", icon: "👥" },
                  { number: "Zero", unit: "", desc: "Legal complications", icon: "🛡️" }
                ].map((stat, index) => (
                  <div key={index} className="glass-effect rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="stat-number">{stat.number}{stat.unit}</div>
                    <div className="text-gray-300 font-medium text-lg">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

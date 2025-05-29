import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              height: '100px'
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
        <div className="py-24 text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">WHAT WE LIVE FOR</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Diversity is Our Super Power. <span className="text-orange-500 relative">
              <span className="typing-animation inline-block">What's Yours?</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto fade-in-up" style={{animationDelay: '0.3s'}}>
            Join us in this journey as we work towards building a society where every individual is valued, respected, and equal. Together, we can make a meaningful difference.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">OUR MISSION</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Regardless of nationality, gender, etc. A society where <span className="text-orange-500">everyone can shine!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With the creation of a global high-skilled human resource platform, our vision is to achieve a diverse and enriched society. A society where each individual is recognised, fulfilled, and empowered to actively contribute. By connecting talents from all corners of the world, we aim to promote diversity and equal opportunities.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">WHAT WE AIM FOR</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              OUR VISION: Accelerating Digitisation with the <span className="text-orange-500">Power of Diversity!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our vision is to build a global platform by harnessing the power of diversity, we unlock the potential of talents from all walks of life. Embracing innovation and cutting-edge technologies, we spearhead the digitisation movement. Together, we create a future where opportunities abound, talents thrive, and societies prosper.
            </p>
          </div>
        </div>

        {/* Our Culture */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our <span className="text-orange-500">Culture</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Respect and Appreciation</h3>
              <p className="text-gray-300 leading-relaxed">We work forward with respect and gratitude always. We appreciate inputs and constructive feedback from our team members.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fail Fast and Learning Agility</h3>
              <p className="text-gray-300 leading-relaxed">We fail quickly and apply what we learn to our next challenge. This helps us grow and learn exponentially each day.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Responsibility and Results</h3>
              <p className="text-gray-300 leading-relaxed">At our core, we are driven by a sense of speed and responsibility, delivering impactful results with utmost efficiency.</p>
            </div>
          </div>
        </div>

        {/* CEO's Voice */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">OUR STORY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our CEO's <span className="text-orange-500">Voice</span>
            </h2>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
                <p className="mb-6">
                  "I am energised when I see that person motivated, having fun, and performing."
                </p>
                <p className="mb-6">
                  "That passion and energy propagates and makes people enthusiastic, empathetic, and want to cheer them on."
                </p>
                <p className="mb-6">
                  "I believe that any person has the opportunity to play an active role. There are many people in the world who look gloomy or think they are useless. However, I believe that they just don't fit in that environment."
                </p>
                <p>
                  "I believe that anyone can shine just by changing their environment or what they do. I would like to increase such opportunities and people more and more."
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">OUR COMPANY DETAILS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our Company <span className="text-orange-500">Profile</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">Company Name</h3>
              <p className="text-white">Tech Japan Inc.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">Established On</h3>
              <p className="text-white">February 5, 2019</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">Representative</h3>
              <p className="text-white">Naotaka Nishiyama</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">Our Location</h3>
              <p className="text-white">Spaces, Otemachi Building 1-6-1 Otemachi Chiyodaku Tokyo</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">License Number</h3>
              <p className="text-white">13-ユ-310752</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold text-orange-500 mb-2">Business Content</h3>
              <p className="text-white">Global India Recruitment<br/>Support Global Recruitment</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in this journey as we work towards building a society where every individual is valued, respected, and equal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 text-lg font-bold">
                Start Hiring →
              </Button>
            </Link>
            <Link href="/candidates">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold">
                Join Our Network
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

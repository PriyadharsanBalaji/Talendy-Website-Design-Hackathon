import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseSection />

      
      {/* Company Mission Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
              <span className="text-orange-500 text-sm font-semibold">OUR COMPANY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Regardless of nationality, gender, etc. A society where <span className="text-orange-500">everyone can shine!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A global platform for highly-skilled human resources that fosters a diverse and enriched society. A place where every individual is motivated, fulfilled, and empowered to play an active role in shaping a brighter world. By connecting talents from all walks of life, we aim to promote inclusivity, equal opportunities, and global collaboration.
            </p>
          </div>
        </div>
      </section>

      <NewsSection />

      {/* CTA Section */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">Join Us Today</h2>
          <p className="text-xl text-black/80 mb-8 leading-relaxed">
            Diversity is Our Super Power. What's Yours? Join us in this journey as we work towards building a society where every individual is valued, respected, and equal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
                Start Hiring →
              </Button>
            </Link>
            <Link href="/download">
              <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold">
                Download Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

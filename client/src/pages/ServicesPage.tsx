import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Building, Check, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive suite of talent solutions designed to meet your specific hiring needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Talendy Hub */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Users className="text-white h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Talendy Hub</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our flagship recruitment platform that connects you directly with pre-vetted Indian engineers. 
              Perfect for companies looking to build their in-house teams with top-tier talent.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">AI-powered matching algorithm that finds engineers based on technical skills and cultural fit</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Comprehensive technical assessments including coding tests and system design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Video interviews and soft skills evaluation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Flexible engagement models: full-time, contract, or project-based</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Ongoing support and performance monitoring</span>
                </li>
              </ul>
            </div>

            <Link href="/services/hub">
              <Button className="btn-primary inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Talendy EOR */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
              <Building className="text-white h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Talendy EOR</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Comprehensive Employer of Record services that handle all legal, compliance, and administrative 
              aspects of international employment, making global hiring effortless.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Complete legal compliance management across multiple jurisdictions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Payroll processing, tax handling, and benefits administration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Employment contracts and HR documentation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Risk mitigation and liability protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-700">Local HR support and employee relations</span>
                </li>
              </ul>
            </div>

            <Link href="/services/eor">
              <Button className="bg-amber-500 text-white hover:bg-amber-600 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">We understand your specific requirements and company culture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Matching</h3>
              <p className="text-gray-600 text-sm">Our AI algorithm finds the best candidates from our vetted pool</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">You interview pre-screened candidates that match your criteria</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Onboard</h3>
              <p className="text-gray-600 text-sm">We handle all paperwork and ensure smooth integration</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss which service is right for your company's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary">Contact Us Today</Button>
            </Link>
            <Link href="/download">
              <Button className="btn-secondary">Download Service Overview</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

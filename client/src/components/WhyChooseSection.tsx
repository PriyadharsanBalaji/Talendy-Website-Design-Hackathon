import { Eye, Users, Clock, Brain, HeadphonesIcon, TrendingUp } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Get More Visibility",
      description: "We have a database of more than 12000+ active candidates from the 16+ premier institutes like IITs across India.",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Find Quality Candidates", 
      description: "Get candidates on one platform according to the required skills and be assured that you hire the best candidates.",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Save Time and Effort",
      description: "Finding the best fit made easy. Let us source, screen and suggest you candidates so that you can focus elsewhere.",
      color: "text-orange-500"
    },
    {
      icon: Brain,
      title: "Intelligent Recommendations",
      description: "Get recommendations based on a hybrid approach of AI-powered matching and a touch of our expert consultants.",
      color: "text-orange-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Get Support Throughout",
      description: "Get unwavering support on each and every stage of the hiring process from our team of talented and reliable experts.",
      color: "text-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Broaden Your Horizon",
      description: "Get reports and surveys from our thorough researches so that you can make best hiring decisions based on factual information.",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6">
            <span className="text-orange-500 text-sm font-semibold">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            What Makes Us <span className="text-orange-500">Better?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-black border border-gray-700 rounded-xl p-8 hover:border-orange-500 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors duration-300">
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
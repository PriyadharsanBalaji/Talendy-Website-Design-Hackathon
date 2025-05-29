import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import type { NewsArticle } from "@/lib/types";

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "ログラスが、弊社サービス「Talendy GCC」を活用し、インドで開発体制構築",
      excerpt: "Loglass utilizes our Talendy GCC service to establish development structure in India, showcasing successful global development team expansion through our platform.",
      category: "Press Release",
      date: "2025-05-09",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      slug: "loglass-talendy-gcc-india-development",
    },
    {
      id: 2,
      title: "インド工科大学、通称IITとは？",
      excerpt: "Understanding the Indian Institute of Technology (IIT) - the premier engineering institutions in India that produce world-class talent for global companies.",
      category: "Press Release",
      date: "2025-04-15",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      slug: "what-is-iit-india",
    },
    {
      id: 3,
      title: "在インド日本大使館主催セミナー登壇のお知らせ",
      excerpt: "Announcement of our participation in the seminar hosted by the Embassy of Japan in India, discussing Japan-India business collaboration opportunities.",
      category: "Notice",
      date: "2025-03-21",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      slug: "japan-embassy-india-seminar",
    },
    {
      id: 4,
      title: "IHI、Tech Japan Hubを活用しIIT学生のインターンシップを実施",
      excerpt: "IHI successfully implements internship program for IIT students using Tech Japan Hub, achieving 100% offer acceptance rate from all participants.",
      category: "Press Release",
      date: "2024-11-05",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      slug: "ihi-tech-japan-hub-iit-internship",
    },
    {
      id: 5,
      title: "Talendy Holdingsを設立し東アジアに進出、プラットフォーム名もTalendyに変更",
      excerpt: "Establishing Talendy Holdings and expanding into East Asia, while rebranding our platform name to Talendy to better serve the regional market.",
      category: "Press Release",
      date: "2024-10-17",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      slug: "talendy-holdings-east-asia-expansion",
    },
    {
      id: 6,
      title: "元メルカリGroup CTO若狹建氏がTech Japanの技術アドバイザーに就任",
      excerpt: "Former Mercari Group CTO Ken Wakaasa joins Tech Japan as Technical Advisor, bringing extensive experience in scaling technology organizations.",
      category: "Press Release",
      date: "2024-06-24",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      slug: "ken-wakaasa-tech-advisor",
    },
  ];

  const categories = ["All", "Press Release", "Notice", "Publications", "Announcements"];

  const filteredArticles = activeFilter === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Company News": return "bg-primary";
      case "Industry Insights": return "bg-amber-500";
      case "Hiring Tips": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="py-20 bg-black min-h-screen relative overflow-hidden">
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
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500 rounded-full px-6 py-3 mb-6 pulse-glow">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-500 text-sm font-semibold">WHAT IS HAPPENING</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">
            News: We have a <span className="text-orange-500 relative">
              presence
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto fade-in-up" style={{animationDelay: '0.3s'}}>
            As we continue to make progress, rest assured that we are committed to keeping you informed and involved every step of the way. Your support and collaboration are invaluable to us.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-bold transition-colors ${
                activeFilter === category
                  ? "bg-orange-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-black border border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                <div className="lg:order-2">
                  <img 
                    src={filteredArticles[0].image} 
                    alt={filteredArticles[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 lg:order-1">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className={`${getCategoryColor(filteredArticles[0].category)} text-white px-3 py-1 rounded-full text-xs font-medium mr-4`}>
                      Featured
                    </span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{filteredArticles[0].date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <Button className="btn-primary inline-flex items-center">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles.slice(1).map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className={`${getCategoryColor(article.category)} text-white px-2 py-1 rounded text-xs font-medium mr-3`}>
                    {article.category}
                  </span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on global talent acquisition, 
            industry trends, and Talendy updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button className="btn-primary">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

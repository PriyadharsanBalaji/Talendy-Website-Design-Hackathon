import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/lib/types";

export default function NewsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Talendy Expands Operations to Southeast Asia",
      excerpt: "We're excited to announce our expansion into Singapore and Malaysia, bringing our talent solutions closer to more companies...",
      category: "Company News",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      slug: "talendy-expands-southeast-asia",
    },
    {
      id: 2,
      title: "The Future of Remote Engineering Teams in Asia",
      excerpt: "Exploring how Asian companies are adapting to distributed engineering teams and the role of talent platforms...",
      category: "Industry Insights",
      date: "Dec 10, 2023",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      slug: "future-remote-engineering-teams-asia",
    },
    {
      id: 3,
      title: "5 Key Questions to Ask When Hiring Engineers",
      excerpt: "Learn the essential questions that help identify top engineering talent and ensure cultural fit...",
      category: "Hiring Tips",
      date: "Dec 5, 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      slug: "5-key-questions-hiring-engineers",
    },
  ];

  const categories = ["All", "Company News", "Industry Insights", "Hiring Tips"];

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with industry trends, company announcements, and hiring insights.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
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
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/news">
            <Button className="btn-primary">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

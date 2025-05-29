import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/types";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How long does it take to find suitable engineers?",
      answer: "Typically, we can present qualified candidates within 1-2 weeks and have engineers ready to start within 2-3 weeks of your initial request, depending on specific requirements.",
    },
    {
      id: 2,
      question: "What is the difference between Talendy Hub and EOR?",
      answer: "Talendy Hub focuses on direct recruitment and talent matching, while our EOR (Employer of Record) service handles all legal, compliance, and administrative aspects of international employment.",
    },
    {
      id: 3,
      question: "What regions do you serve?",
      answer: "We primarily serve companies across Asia, including Japan, Singapore, Malaysia, and other key markets in the region, connecting them with top Indian engineering talent.",
    },
    {
      id: 4,
      question: "How do you ensure quality of engineers?",
      answer: "Our rigorous vetting process includes technical assessments, cultural fit evaluation, and thorough background checks. Only the top 5% of candidates make it through our screening process.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services and process.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown 
                    className={`text-gray-500 transform transition-transform h-5 w-5 ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`} 
                  />
                </div>
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

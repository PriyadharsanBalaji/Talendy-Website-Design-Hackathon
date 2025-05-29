import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Takeshi Yamamoto",
      title: "CTO, TechStart Tokyo",
      content: "Talendy helped us find exceptional engineers who integrated seamlessly with our team. The quality of talent and support exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Chen", 
      title: "VP Engineering, FinanceAsia",
      content: "The EOR service made international hiring incredibly simple. We focused on our business while Talendy handled all the complexity.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Kim",
      title: "Founder, InnovateSeoul", 
      content: "Within 3 weeks, we had two senior developers who became key contributors to our product. Talendy's vetting process is exceptional.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from companies that have successfully scaled their teams with Talendy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex text-amber-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="absolute top-6 right-6 text-6xl text-primary opacity-20">
                <Quote className="h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

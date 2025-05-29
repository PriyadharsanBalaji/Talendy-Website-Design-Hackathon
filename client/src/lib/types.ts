export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

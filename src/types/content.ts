export type ServiceCategory = {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
};

export type ServiceDetail = ServiceCategory & {
  hero: {
    headline: string;
    subheadline: string;
  };
  problems: string[];
  symptoms: string[];
  solutions: string[];
  expectations: string[];
  faqs: { question: string; answer: string }[];
};

export type Review = {
  id: string;
  name: string;
  city: string;
  rating: number;
  body: string;
  source?: string;
  date?: string;
};

export type ServiceArea = {
  city: string;
  description: string;
  highlightJobs: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
  slug?: string;
};


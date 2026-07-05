export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  material: string;
  dimensions: string;
  priceRange?: string;
  images: string[];
  features: string[];
  colors: string[];
  customization: string;
  deliveryTime: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
  isGoogleVerified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

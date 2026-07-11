export interface ProductCategory {
  id: string
  name: string
  nameHi: string
  image: string
  description: string
  tags: string[]
}

export interface ProcessStep {
  step: number
  title: string
  titleHi: string
  description: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: 'design' | 'bulk' | 'delivery' | 'scheme' | 'gst' | 'repair'
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  quote: string
  source: 'Google' | 'Instagram' | 'Walk-in'
}

export interface FeedbackFormData {
  name: string
  phone: string
  interest: string
  message: string
}

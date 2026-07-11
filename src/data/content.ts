import type { ProductCategory, ProcessStep, ServiceItem, Testimonial } from '../types'

export const SHOP = {
  name: 'Vishwakarma Furniture',
  nameHi: 'विश्वकर्मा फर्नीचर',
  tagline: 'Handcrafted with skill, finished with trust.',
  taglineHi: 'Haathon Se Bana, Bharose Se Sajaya.',
  proprietor: 'Dhananjay Sharma',
  proprietorHi: 'प्रो. धनंजय शर्मा',
  phone: '9504501234',
  phoneDisplay: '+91 95045 01234',
  address: 'Banshipur (Kahalgaon), Bhagalpur, Bihar 813203',
  addressLine2: 'Near Kahalgaon, Mahesha Munda, Bihar',
  gst: '10DVSPS6817R1ZK',
  scheme: 'Empanelled under Mukhyamantri Pichhड़ा Varg Udyami Yojana',
  schemeShort: 'Govt. Scheme Registered Unit',
  instagram: 'vishwakarma_furniture_world',
  instagramUrl: 'https://instagram.com/vishwakarma_furniture_world',
  mapsQuery: 'Vishwakarma Furniture, Banshipur Kahalgaon, Kahalgaon, Bihar 813203',
  hours: [
    { day: 'Monday – Saturday', time: '8:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 6:00 PM' },
  ],
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'sofa-sets',
    name: 'Wooden Sofa Sets',
    nameHi: 'सोफा सेट',
    image: '/images/sofa-set.jpg',
    description:
      'Solid teak-wood sofa sets with hand-carved floral backrests, turned legs and detailed apron work — built to seat a whole family through the years.',
    tags: ['Hand-carved', 'Solid teak', 'Custom seating'],
  },
  {
    id: 'storage-beds',
    name: 'Beds & Storage Units',
    nameHi: 'पलंग / स्टोरेज बेड',
    image: '/images/storage-bed.jpg',
    description:
      'Hydraulic lift-up storage beds and box-beds finished in laminate and natural wood tones, designed for small rooms that need extra space.',
    tags: ['Hydraulic lift', 'Space-saving', 'Laminate finish'],
  },
  {
    id: 'dining-sets',
    name: 'Dining Table Sets',
    nameHi: 'डाइनिंग सेट',
    image: '/images/dining-set.jpg',
    description:
      'Round and rectangular dining sets with cushioned chairs and a rich walnut polish, made to order in the size your dining room needs.',
    tags: ['4 / 6 seater', 'Cushioned chairs', 'Rich polish'],
  },
  {
    id: 'benches-more',
    name: 'Benches, Almirahs & More',
    nameHi: 'बेंच, अलमारी और अन्य',
    image: '/images/workshop-entrance.jpg',
    description:
      'Benches, wardrobes, study tables, temple units and any other wooden furniture your home or office needs — all made in-house on request.',
    tags: ['Wardrobes', 'Study tables', 'Temple units'],
  },
  {
    id: 'cushioned-beds',
    name: 'Cushioned Beds',
    nameHi: 'कुशन बेड',
    image: '/images/bed-cushioned.jpg',
    description:
      'Upholstered beds with a tufted, button-detailed headboard for a soft, hotel-style finish — built on a solid wood frame underneath.',
    tags: ['Tufted headboard', 'Upholstered', 'Solid frame'],
  },
  {
    id: 'modular-kitchen',
    name: 'Modular Kitchen Cabinets',
    nameHi: 'मॉड्यूलर किचन',
    image: '/images/modular-kitchen.jpg',
    description:
      'Modular kitchen counters and cabinets finished in a rich black-and-gold floral laminate — built to your kitchen\'s exact layout.',
    tags: ['Modular', 'Custom layout', 'Laminate finish'],
  },
  {
    id: 'box-beds',
    name: 'Custom Box Beds',
    nameHi: 'बॉक्स बेड',
    image: '/images/box-bed-workshop.jpg',
    description:
      'Solid wood box beds built and joined in our workshop, made to order with the storage depth and finish you want.',
    tags: ['Made to order', 'Solid wood', 'Storage'],
  },
  {
    id: 'wardrobes-wall-units',
    name: 'Wardrobes & Wall Units',
    nameHi: 'अलमारी / वॉल यूनिट',
    image: '/images/wardrobe-wall-unit.jpg',
    description:
      'Full-wall wardrobes and cabinet units in a matching floral laminate finish, designed to fit your room wall to wall.',
    tags: ['Wall-to-wall', 'Matching finish', 'Custom size'],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Design Discussion',
    titleHi: 'डिज़ाइन चर्चा',
    description: 'Share your room size, style and requirement — in person, by call or on Instagram — and we sketch out the piece with you.',
  },
  {
    step: 2,
    title: 'Timber Selection',
    titleHi: 'लकड़ी चयन',
    description: 'We select seasoned solid wood suited to the piece, so it holds its shape and carving for years.',
  },
  {
    step: 3,
    title: 'Hand Carving & Joinery',
    titleHi: 'नक्काशी और जुड़ाई',
    description: 'Our karigars cut, join and hand-carve every panel in our Kahalgaon workshop — no shortcuts, no press-board carving.',
  },
  {
    step: 4,
    title: 'Sanding & Polish',
    titleHi: 'पॉलिश',
    description: 'Multiple rounds of sanding and polish bring out the grain and give the deep, glossy teak finish you see in our showroom.',
  },
  {
    step: 5,
    title: 'Delivery & Fitting',
    titleHi: 'डिलीवरी',
    description: 'Careful packing and home delivery, with fitting done at your doorstep for beds, wardrobes and modular pieces.',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-design',
    title: 'Custom Design Orders',
    description: 'Bring a photo, a sketch, or just an idea — we build furniture to your exact size, wood and finish.',
    icon: 'design',
  },
  {
    id: 'bulk-orders',
    title: 'Bulk & Wholesale Orders',
    description: 'Hostels, hotels, offices and dealers — bulk orders fulfilled directly from our own workshop.',
    icon: 'bulk',
  },
  {
    id: 'home-delivery',
    title: 'Home Delivery & Fitting',
    description: 'Furniture delivered and fitted at your home across Bhagalpur and nearby districts.',
    icon: 'delivery',
  },
  {
    id: 'scheme',
    title: 'Govt. Scheme Registered',
    description: 'Empanelled under the Mukhyamantri Pichhड़ा Varg Udyami Yojana — a recognised, verified unit.',
    icon: 'scheme',
  },
  {
    id: 'gst',
    title: 'GST Billing',
    description: `GST-registered business (GSTIN ${'10DVSPS6817R1ZK'}) — proper invoicing for every order, retail or bulk.`,
    icon: 'gst',
  },
  {
    id: 'repair',
    title: 'Repair & Repolish',
    description: 'Bring old wooden furniture back to life with our repair, repolish and reupholstery service.',
    icon: 'repair',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh P.',
    rating: 5,
    quote: 'Quality and service went beyond what I expected — the carving detail on my sofa set is beautiful.',
    source: 'Google',
  },
  {
    id: 't2',
    name: 'Rakesh & Vikram',
    rating: 5,
    quote: 'Very good furniture quality for the money — honest pricing and no compromise on wood.',
    source: 'Google',
  },
  {
    id: 't3',
    name: 'Amit K.',
    rating: 5,
    quote: 'Very satisfied with the work — the dining set was delivered on time and fitted perfectly.',
    source: 'Google',
  },
  {
    id: 't4',
    name: 'Pooja S.',
    rating: 5,
    quote: 'Ordered a storage bed after seeing their Instagram page — exactly like the reels, sturdy and well finished.',
    source: 'Instagram',
  },
]

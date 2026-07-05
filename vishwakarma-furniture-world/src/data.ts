import { Product, Service, Review, FAQItem, BeforeAfterItem } from "./types";

export const BRAND_INFO = {
  name: "Vishwakarma Furniture World",
  tagline: "Crafting Beautiful Furniture for Every Home",
  hindiTagline: "जो पीढ़ियों तक साथ निभाए।",
  category: "Furniture Store | Wooden Furniture Manufacturer | Custom Furniture",
  location: "Banshipur Kahalgaon, Mahesha Munda, Bihar – 813203",
  googleRating: 4.9,
  googleReviewsCount: "60+",
  happyCustomersCount: "1000+",
  furnitureDeliveredCount: "500+",
  instagram: "@vishwakarma_furniture_world",
  instagramUrl: "https://www.instagram.com/vishwakarma_furniture_world/?__pwa=1",
  phone: "+91 9504501234",
  phoneFormatted: "+91 95045 01234",
  email: "vishwakarmafurnitureworld@gmail.com",
  googleMapsUrl: "https://www.google.com/maps?sca_esv=d533639772ece46a&biw=1440&bih=778&sxsrf=APpeQntQzXmF5tD-RFqvAl71EYRrLGikCQ:1782643632821&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiJXZpc2h3YWthcm1hIGZ1cm5pdHVyZSBiaWhhciBrYWhhbGdhb24yCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBUjvJFDhBFj-IXABeACQAQKYAZcZoAHUQqoBBzctMS4xLjK4AQPIAQD4AQGYAgGgAgOYAwCIBgGSBwExoAeKDrIHALgHAMIHAzAuMcgHAoAIAQ&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KRsG_YHia_A5Me9KWWb9Zy9r&daddr=Banshipur+kahalgaon,+Kahalgaon,+Mahesha+Munda,+Bihar+813203",
  googleShareUrl: "https://share.google/FHFvffdTtVQs91uIi",
  businessHours: [
    { days: "Monday - Sunday", time: "8:00 AM - 8:00 PM" }
  ],
  usps: [
    "Customized Designs",
    "Solid Wood (Teak & Sheesham)",
    "Direct Factory Pricing",
    "Safe Home Delivery",
    "Lifetime Build Quality",
    "Made in India"
  ]
};

export const CATEGORIES = [
  "All",
  "Beds",
  "Sofas",
  "Dining",
  "Tables",
  "Wardrobes",
  "Temple",
  "Chairs",
  "Office"
];

export const PRODUCTS: Product[] = [
  {
    id: "bed-01",
    name: "Teak Wood Classic Carving Bed",
    category: "Beds",
    shortDescription: "Royal handcrafted king-size bed made from pure A-grade Teak (Sagwan) wood with detailed traditional carving.",
    description: "Experience the epitome of luxury and comfort with our signature Teak Wood Carving Bed. Every detail is painstakingly hand-carved by our master craftsmen in Bihar. It features a grand headboard with elegant floral and scroll motifs and a matching footboard, built with premium joints for lifelong durability.",
    material: "Premium Teak (Sagwan) Wood",
    dimensions: "King Size (72\" x 78\" sleeping area)",
    priceRange: "₹18,999 - ₹28,999",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200"
    ],
    features: [
      "100% Solid Teak Wood",
      "Intricate hand-carved headboard",
      "Termite and borer resistant treatment",
      "Robust hydraulic storage option available",
      "Lifetime wood durability guarantee"
    ],
    colors: ["Honey Oak Finish", "Dark Walnut Polish", "Natural Teak Polish"],
    customization: "Available in Queen/Double sizes, customized back cushioning, and box or hydraulic storage designs.",
    deliveryTime: "12-15 Days"
  },
  {
    id: "sofa-01",
    name: "Royal Sheesham Wood Sofa Set",
    category: "Sofas",
    shortDescription: "Elegant 3+1+1 wooden sofa set with deep wood grain patterns, rich gloss finish, and comfortable cushions.",
    description: "Bring traditional charm and premium luxury into your living room with our Royal Sheesham Wood Sofa Set. This direct-manufacturer piece features thick solid wood frames with curved ergonomic armrests, traditional slatted patterns, and hand-finished gloss polishing that accentuates the organic wood grains of top-tier Sheesham.",
    material: "Premium Sheesham Wood",
    dimensions: "3 Seater (76\" x 30\" x 34\"), Single Seaters (32\" x 30\" x 34\")",
    priceRange: "₹24,999 - ₹39,999",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200"
    ],
    features: [
      "High-density premium foam (40 Density) cushions",
      "Rich Sheesham (Rosewood) solid frame",
      "Water-resistant premium polyurethane coat",
      "Includes premium washable upholstery fabric"
    ],
    colors: ["Classic Sheesham Tint", "Dark Mahogany", "Rich Teak"],
    customization: "Available in 5-seater (3+1+1), 6-seater (3+2+1), L-shape corner layout, and customized fabric selections.",
    deliveryTime: "14-18 Days"
  },
  {
    id: "dining-01",
    name: "Round Royal Dining Table with 4 Chairs",
    category: "Dining",
    shortDescription: "Elegant round pedestal dining table with beautifully carved ladder-back cushioned chairs.",
    description: "Create memorable family meals around this stunning pedestal dining set. Made entirely from seasoned hardwoods, the table features a heavy central support pillar with hand-turned details. The four companion chairs feature comfortable padded cushions and an ergonomic backrest that supports long dinner conversations.",
    material: "Seasoned Hardwood & Teak Elements",
    dimensions: "Table: 42\" Diameter x 30\" Height, Chairs: Standard height",
    priceRange: "₹15,999 - ₹25,999",
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1200"
    ],
    features: [
      "Sturdy heavy pedestal pillar base",
      "Scratch-resistant melamine clear polish coating",
      "Comfortable high-elasticity foam chair seats",
      "Warm wooden grain top surface"
    ],
    colors: ["Honey Oak Finish", "Dark Walnut Polish", "Warm Cherry"],
    customization: "Can be made as 6-seater or 8-seater, optional glass top installation, and choice of square or oval table shapes.",
    deliveryTime: "10-14 Days"
  },
  {
    id: "wardrobe-01",
    name: "Classic Solid Wood Wardrobe",
    category: "Wardrobes",
    shortDescription: "Spacious double-door wooden almirah with bottom drawers, safety locker, and deep clothes hanger rail.",
    description: "Organize your clothing in a heavy-duty, classic wardrobe made from seasoned solid wood. Designed to last generations, this almirah is equipped with secure Godrej-style lock fittings, an inner secret jewelry drawer, heavy wood shelving, and sturdy door hinges that won't sag over time.",
    material: "A-Grade Hardwood & Ply Backing",
    dimensions: "78\" Height x 36\" Width x 22\" Depth",
    priceRange: "₹16,999 - ₹24,999",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
    ],
    features: [
      "Deep hanging space with steel rod",
      "Inner premium safety locker compartment",
      "Durable full-extension drawer channels",
      "Anti-fungal and moisture-treated wood"
    ],
    colors: ["Classic Brown Gloss", "Walnut Matte", "Honey Teak Matte"],
    customization: "Available in 3-door or 4-door layouts, integrated dressing mirror, and customized internal shelf partitions.",
    deliveryTime: "15-20 Days"
  },
  {
    id: "comp-01",
    name: "Ergonomic Wooden Computer Desk",
    category: "Tables",
    shortDescription: "Sturdy wooden table with sliding keyboard tray, dedicated CPU compartment, and side storage drawer.",
    description: "Boost your productivity with a practical, durable home office computer table. Specifically designed for students and professionals in Bihar, it offers a spacious monitor shelf, a smooth-rolling wooden keyboard drawer, a dedicated ventilated bottom tier for the CPU cabinet, and a lockable drawer for files and documents.",
    material: "High-grade Engineered Wood with Solid Wood Trim",
    dimensions: "30\" Height x 36\" Width x 20\" Depth",
    priceRange: "₹5,499 - ₹7,999",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200"
    ],
    features: [
      "Smooth metal rolling channels for keyboard drawer",
      "Wire management grommet pre-installed",
      "Secure drawer lock with duplicate keys",
      "Scratch and spill-resistant polish"
    ],
    colors: ["Teak Finish", "Dark Oak Gloss", "Natural Ashwood"],
    customization: "Can add book rack organizer on top, customize dimensions to fit small corners, or build using pure Sheesham wood.",
    deliveryTime: "6-8 Days"
  },
  {
    id: "temple-01",
    name: "Handcrafted Wooden Pooja Mandir",
    category: "Temple",
    shortDescription: "Traditional home temple with exquisite dome, arched entrance, side pillars, and pull-out Prasad tray.",
    description: "Welcome divine energy into your home with this beautiful, classic wooden temple. Crafted with high devotion, this Mandir features traditional Hindu architectural domes (Shikhara), elegant turned columns, side mesh panels, and a convenient sliding drawer for storing pooja items (diya, incense, prayer books) along with a pull-out Prasad bhog tray.",
    material: "Seasoned Teak Wood & Royal Trim",
    dimensions: "36\" Height x 24\" Width x 15\" Depth",
    priceRange: "₹6,999 - ₹12,999",
    images: [
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
    ],
    features: [
      "Hanging brass bell attachments included",
      "Removable domes for flexible fitting in shelves",
      "Easy-to-clean polished surface (ghee/oil resistant)",
      "LED spot-light mounting ready"
    ],
    colors: ["Divine Golden Yellow Oak", "Classic Walnut Dark", "Teak Polished Gloss"],
    customization: "Wall-mount hooks available, custom LED backing setup, or larger sizing up to 5 feet tall.",
    deliveryTime: "8-12 Days"
  },
  {
    id: "chair-01",
    name: "Solid Wood Hand-Carved Royal Chair",
    category: "Chairs",
    shortDescription: "Premium accent chair with carved backrest, robust legs, and luxurious golden velvet upholstery.",
    description: "Elevate your study or living space with our best-selling royal chair. Merging traditional Bihar craftsmanship with ergonomics, this piece features beautifully turned wooden spindles, an elegant crown design at the top of the backrest, and durable foam seat padding covered in a rich, dirt-repelling velvet fabric.",
    material: "Pure Teak Wood (Sagwan)",
    dimensions: "38\" Height x 22\" Width x 20\" Depth",
    priceRange: "₹2,999 - ₹4,499",
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200",
      "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?q=80&w=1200"
    ],
    features: [
      "Reinforced dowel joints for maximum stability",
      "High density foam cushion seat",
      "Classic hand-rubbed French polish",
      "Lightweight yet heavy load bearing capacity"
    ],
    colors: ["Natural Teak Finish", "Dark Chocolate Walnut", "Mahogany Red"],
    customization: "Choice of upholstery fabric (leatherette, cotton, velvet) and cushion thickness.",
    deliveryTime: "5-7 Days"
  },
  {
    id: "office-01",
    name: "Executive Wooden Office Desk",
    category: "Office",
    shortDescription: "Professional double-pedestal office desk with ample drawer space and executive writing leatherette insert.",
    description: "Command respect in your office with a grand executive table. Handcrafted with dense hardwoods, this desk features two stacks of drawers on either side with central lock systems, modern keyboard slide, and a deep, smooth workspace surface with rounded premium edge profiles.",
    material: "Waterproof Commercial Ply & Hardwood Facings",
    dimensions: "30\" Height x 60\" Width x 30\" Depth",
    priceRange: "₹12,499 - ₹18,999",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200"
    ],
    features: [
      "Spacious double-stack lockable drawers",
      "Inbuilt footrest rail for comfortable working hours",
      "Laminated top surface resistant to tea/coffee stains",
      "Modern wire management grommets"
    ],
    colors: ["Classic Mahogany", "Teak Oak Gloss", "Dark Walnut"],
    customization: "Available with matching wooden side return cabinet, built-in file drawers, or full glass top overlay.",
    deliveryTime: "10-14 Days"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-01",
    title: "Custom Furniture Design",
    description: "Get furniture crafted exactly to your room measurements and favorite designs. Share your photo or ideas with us, and we will turn them into reality.",
    icon: "DraftingCompass"
  },
  {
    id: "srv-02",
    title: "Premium Manufacturing",
    description: "We use only highly seasoned woods like Teak (Sagwan) and Sheesham (Rosewood) with modern precision tools to manufacture solid, squeak-free furniture.",
    icon: "Hammer"
  },
  {
    id: "srv-03",
    title: "Polishing & Maintenance",
    description: "Revive your ancestral wooden assets with our premium PU Polish, Melamine coating, and antique matte finishes for a brand new shiny look.",
    icon: "Sparkles"
  },
  {
    id: "srv-04",
    title: "Interior Consultation",
    description: "Confused about styling? Our workshop owner offers a free furniture layout consultation to match your walls, lighting, and storage requirements perfectly.",
    icon: "Compass"
  },
  {
    id: "srv-05",
    title: "Wholesale & Bulk Orders",
    description: "Reliable, high-volume wooden furniture manufacturing and supply for hotels, schools, offices, wedding ceremonies, and showrooms across Bihar.",
    icon: "Boxes"
  },
  {
    id: "srv-06",
    title: "Home Delivery & Setup",
    description: "We handle secure packing and transport of heavy furniture directly to your home in Kahalgaon, Bhagalpur, and nearby regions, with professional assembly.",
    icon: "Truck"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    author: "Rajeev Kumar",
    rating: 5,
    date: "2 months ago",
    content: "Bahut achha furniture hai. Quality bhi best hai aur delivery bhi time par hua. Highly recommended! I ordered a custom Teak bed, and the carving is extremely neat and premium.",
    isGoogleVerified: true
  },
  {
    id: "rev-02",
    author: "Ananya Sharma",
    rating: 5,
    date: "1 month ago",
    content: "Beautiful hand-carved Mandir. We searched in many physical stores in Bhagalpur but the quality and pricing Vishwakarma Furniture gave is unbeatable. Directly buying from manufacturer makes a huge difference.",
    isGoogleVerified: true
  },
  {
    id: "rev-03",
    author: "Sanjeev Mishra",
    rating: 5,
    date: "3 weeks ago",
    content: "The best furniture shop near Kahalgaon. They manufactured a customized dining table set for my home. The wood used is real thick Teak (Sagwan) wood, verified with weight. Extremely polite staff and owner.",
    isGoogleVerified: true
  },
  {
    id: "rev-04",
    author: "Gopal Prasad",
    rating: 4,
    date: "4 months ago",
    content: "Excellent build quality. Bought double-door wooden wardrobes and computer desks for my children. Durable, sturdy doors, and very honest pricing. Will definitely buy more sofa sets soon.",
    isGoogleVerified: true
  },
  {
    id: "rev-05",
    author: "Rakesh Yadav",
    rating: 5,
    date: "2 weeks ago",
    content: "Genuine wooden furniture manufacturer. No fake laminate or cheap boards, they show the raw wood in their workshop before polishing. Fully satisfied with the custom sofa set.",
    isGoogleVerified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-01",
    question: "Do you make fully custom furniture based on photos?",
    answer: "Yes, absolutely! Customization is our main specialty. You can upload or send us any photo of a bed, sofa, wardrobe, or table from Pinterest, Instagram, or catalogs, specify your room dimensions, and our skilled craftsmen will manufacture it exactly as seen."
  },
  {
    id: "faq-02",
    question: "Which types of wood do you use for your furniture?",
    answer: "We primarily manufacture furniture using 100% seasoned, top-grade Teak Wood (locally known as Sagwan) and Sheesham Wood (Rosewood) for premium look and lifetime durability. For budget options, we also work with high-quality treated Sal wood, mango wood, or premium moisture-proof engineered boards."
  },
  {
    id: "faq-03",
    question: "Do you deliver to nearby cities and districts in Bihar?",
    answer: "Yes, we provide secure home transport and doorstep delivery. Our primary delivery network covers Banshipur, Kahalgaon, Mahesha Munda, Bhagalpur, Colgong, Pirpainti, Ghogha, and surrounding regions. For bulk orders, we can arrange transport across Bihar and Jharkhand."
  },
  {
    id: "faq-04",
    question: "How long does it take to manufacture a custom piece?",
    answer: "Standard products like chairs or simple tables are ready in 5-7 days. Larger hand-carved custom assets like grand Teak beds, luxury sofa sets, and wardrobes take approximately 12-18 days. We ensure the wood is perfectly dried and polished before dispatch, which is why we never rush our process."
  },
  {
    id: "faq-05",
    question: "Do you offer any warranty or after-sales support?",
    answer: "Yes, we offer up to a 5-Year Structural Warranty on all our premium solid Teak and Sheesham wood furniture against woodborers, termites, and joints cracking. Since we are local manufacturers located right in Kahalgaon, any repair, polishing, or service support is resolved very quickly at your home."
  },
  {
    id: "faq-06",
    question: "Do you accept bulk wholesale orders for offices or weddings?",
    answer: "Yes! We specialize in manufacturing complete furniture packages for weddings (such as Bed + Almirah + Dressing Table + Sofa packages at special combo discounts) and contract wooden furniture for offices, schools, and local businesses."
  },
  {
    id: "faq-07",
    question: "What payment methods do you accept?",
    answer: "We accept Cash, UPI payments (Google Pay, PhonePe, Paytm), and direct Bank Transfers. For custom orders, we take a standard 30% advance deposit to purchase raw wood, and the remaining 70% is payable upon successful delivery and setup at your home."
  }
];

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: "ba-01",
    title: "Antique Royal Chair Refinishing",
    description: "A 40-year-old family heirloom chair brought to us with weathered surface and broken joints. We reinforced the dowels and coated it with double-layer premium walnut lacquer.",
    beforeImage: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=600", // simulated weathered wood
    afterImage: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600"  // simulated beautiful polished chair
  },
  {
    id: "ba-02",
    title: "Sofa Frame Assembly to Polish",
    description: "From raw hand-assembled Sheesham wood frames with beautiful wood curves to the ultimate upholstered, deep gloss, luxurious final seating set.",
    beforeImage: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=600", // raw wood tabletop simulated
    afterImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600"  // polished premium sofa setup
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    name: "Wood Selection",
    description: "We source authentic, slow-grown solid Teak (Sagwan) & Sheesham wood and verify moisture content to prevent future warping.",
    icon: "TreePine"
  },
  {
    step: 2,
    name: "Design Planning",
    description: "Exact blueprints and carving plans are sketched manually on the wood logs, customized to your requested dimensions.",
    icon: "FileEdit"
  },
  {
    step: 3,
    name: "Precision Cutting",
    description: "Master sawing and cutting of wooden slabs are done using advanced machinery to secure flat surfaces and straight joints.",
    icon: "Scissors"
  },
  {
    step: 4,
    name: "Handicraft Assembly",
    description: "Bihar's famous Vishwakarma carpenters assemble the components with traditional mortise-and-tenon interlocking joins.",
    icon: "Hammer"
  },
  {
    step: 5,
    name: "Multi-stage Polishing",
    description: "Double sand-rubbing, wood grain pore filling, followed by premium coats of melamine or water-resistant polyurethane polish.",
    icon: "Sparkles"
  },
  {
    step: 6,
    name: "Quality Inspection",
    description: "Every drawer slider, hinge, frame load capacity, and polish consistency are strictly tested for squeaks and defects.",
    icon: "CheckSquare"
  },
  {
    step: 7,
    name: "Secure Delivery",
    description: "Bubble-wrapped securely, loaded into our transport trucks, and assembled inside your home with love.",
    icon: "Truck"
  }
];

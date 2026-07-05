import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, Compass, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_INFO } from "../data";

interface HeroProps {
  isDark: boolean;
  openEnquiryModal: () => void;
  scrollToSection: (id: string) => void;
}

export default function Hero({ isDark, openEnquiryModal, scrollToSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "VISHWAKARMA",
      subtitle: "FURNITURE WORLD",
      slogan: BRAND_INFO.tagline,
      hindiSlogan: BRAND_INFO.hindiTagline,
      subDescription: "Since 1990 - Sourced and handcrafted in Bihar with authentic, premium Teak (Sagwan) & Sheesham wood.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600",
      accentText: "Traditional Carvings & Modern Durability"
    },
    {
      title: "LUXURIOUS",
      subtitle: "LIVING ROOMS",
      slogan: "Where Wood Meets Elegance",
      hindiSlogan: "मजबूती और सुंदरता, दोनों का संगम।",
      subDescription: "Heavy-duty sofa sets and coffee tables carved from robust wood frames to capture your living room's prestige.",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1600",
      accentText: "4.9★ Google Rated Masterpieces"
    },
    {
      title: "EXCLUSIVE",
      subtitle: "DINING EXPERIENCES",
      slogan: "Designing Comfort for Every Family",
      hindiSlogan: "परिवार के साथ हर भोजन बने ख़ास।",
      subDescription: "Round pedestal and traditional rectangular dining sets with hand-turned details and comfortable cushioned chairs.",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1600",
      accentText: "100% Customized Sizes & Finishes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative w-full h-[95vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Slide Images Background Layer with Crossfade */}
      <div className="absolute inset-0 z-0 bg-[#2F1B12]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            {/* Rich gradient overlay for premium readability */}
            <div className="absolute inset-0 bg-linear-to-r from-[#2F1B12]/90 via-[#2F1B12]/70 to-[#FAF7F2]/10" />
            <div className="absolute inset-0 bg-linear-to-t from-[#2F1B12] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Wood-Texture Overlay for warm touch */}
      <div 
        className="absolute inset-0 opacity-4 mix-blend-overlay pointer-events-none z-1" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1000')" 
        }} 
      />

      {/* Interactive Main Carousel Contents */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center h-full pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Floating Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4A373]/20 border border-[#D4A373]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#D4A373] uppercase mb-6 backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#D4A373] animate-pulse"></span>
              {slides[currentSlide].accentText}
            </div>

            {/* Main Brand Title */}
            <h1 className="font-serif leading-none uppercase mb-2">
              <span className="block text-sm sm:text-lg md:text-xl font-sans font-bold tracking-widest text-[#FAF7F2]/70">
                Welcome to
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl font-black text-[#D4A373] tracking-tight drop-shadow-md">
                {slides[currentSlide].title}
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl font-light text-[#FAF7F2] tracking-wide mt-1">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Hindi emotional Slogan (Sourced in Prompt) */}
            <div className="my-6 border-l-4 border-[#8B5E3C] pl-4 sm:pl-6 bg-black/15 py-3 rounded-r-xl">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] italic tracking-wide">
                "{slides[currentSlide].hindiSlogan}"
              </p>
              <p className="text-xs sm:text-sm text-[#D4A373] font-medium tracking-wide mt-1 uppercase">
                {slides[currentSlide].slogan}
              </p>
            </div>

            {/* Paragraph Details */}
            <p className="text-sm sm:text-base md:text-lg text-[#FAF7F2]/80 font-normal leading-relaxed mb-8 max-w-xl">
              {slides[currentSlide].subDescription}
            </p>

            {/* Action Buttons Matrix */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-[#8B5E3C] hover:bg-[#5A3925] text-[#FAF7F2] font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Compass size={18} />
                <span>View Collection</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={openEnquiryModal}
                className="bg-transparent hover:bg-[#FAF7F2]/10 border-2 border-[#D4A373] text-[#FAF7F2] font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </button>

              {/* Direct Instant Action Buttons */}
              <a
                href={`https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=Hello%20Vishwakarma%20Furniture%20World!%20I%20visited%20your%20website%20and%20want%20to%20enquire%20about%20wooden%20furniture.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                title="Chat with owner on WhatsApp"
              >
                <MessageSquare size={18} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                title="Call Shop Now"
              >
                <Phone size={18} />
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#2F1B12]/40 hover:bg-[#8B5E3C] text-[#FAF7F2] hover:scale-110 transition-all border border-[#FAF7F2]/10"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#2F1B12]/40 hover:bg-[#8B5E3C] text-[#FAF7F2] hover:scale-110 transition-all border border-[#FAF7F2]/10"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "w-8 bg-[#8B5E3C]" : "w-2 bg-[#FAF7F2]/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-12 ${isDark ? "fill-[#2F1B12]" : "fill-[#FAF7F2]"} transition-colors duration-300`}>
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.5,107.5,1051.15,110.19,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}

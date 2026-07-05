import { useState, useEffect } from "react";
import { 
  Phone, 
  MessageSquare, 
  ArrowUp, 
  Heart, 
  Sparkles, 
  X, 
  Instagram, 
  MapPin, 
  Check, 
  Printer, 
  AlertCircle,
  Clock,
  Mail,
  Compass
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { BRAND_INFO, PRODUCTS } from "./data";
import { Product } from "./types";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import ProcessTimeline from "./components/ProcessTimeline";
import QuoteCalculator from "./components/QuoteCalculator";
import EnquiryForm from "./components/EnquiryForm";
import MapAndContact from "./components/MapAndContact";
import GallerySection from "./components/GallerySection";
import FAQAndReviews from "./components/FAQAndReviews";
import ProductCard from "./components/ProductCard";
import ProductPopup from "./components/ProductPopup";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync scroll detection for floating scroll-to-top buttons
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Sync effect (Optional body sync class if desired)
  useEffect(() => {
    const savedTheme = localStorage.getItem("vf-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const targetState = !isDark;
    setIsDark(targetState);
    localStorage.setItem("vf-theme", targetState ? "dark" : "light");
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Wishlist handler
  const handleToggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      const product = PRODUCTS.find((p) => p.id === id);
      const productName = product ? product.name : "Item";
      
      if (exists) {
        showToast(`Removed "${productName}" from Wishlist.`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`Saved "${productName}" to Wishlist! ❤️`);
        return [...prev, id];
      }
    });
  };

  // Launch pre-filled WhatsApp click trigger
  const handleQuickEnquire = (product: Product) => {
    const message = `Hello Vishwakarma Furniture World! I am interested in getting a custom quote for the following item shown on your website:

- Item Name: ${product.name}
- Sourced Wood: ${product.material}
- Dimensions: ${product.dimensions}
- Base/Target Budget: ${product.priceRange || 'Direct Quote'}

Please provide more details on available finish polish types and delivery timelines.`;

    const url = `https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Back to top scrolling
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Filtering products for the search state logic
  const searchedProducts = searchQuery.trim() === ""
    ? []
    : PRODUCTS.filter((p) => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
      isDark ? "bg-[#1C100B] text-[#FAF7F2]" : "bg-[#FAF7F2] text-[#2C1810]"
    }`}>
      
      {/* 1. TOP STICKY NAVIGATION HEADER */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlistCount={wishlist.length}
        openEnquiryModal={() => setIsQuoteModalOpen(true)}
      />

      {/* SEARCH RESULTS DISPLAY BAR */}
      <AnimatePresence>
        {searchQuery.trim() !== "" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`py-12 border-b relative z-30 ${isDark ? "bg-[#2F1B12] border-[#FAF7F2]/10" : "bg-[#FAF7F2] border-[#E5D7C9]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Search Results</span>
                  <h2 className="text-xl sm:text-2xl font-serif font-black">Showing items matching "{searchQuery}"</h2>
                </div>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-500/10 rounded-xl border border-red-500/20"
                >
                  Clear Search ✕
                </button>
              </div>

              {searchedProducts.length === 0 ? (
                <div className="text-center py-12 bg-black/5 rounded-2xl">
                  <AlertCircle size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm font-semibold text-gray-500">No products found matching your search. Try "Bed", "Sofa", or "Teak".</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isDark={isDark}
                      isWishlisted={wishlist.includes(product.id)}
                      toggleWishlist={handleToggleWishlist}
                      onViewDetails={setSelectedProduct}
                      onQuickEnquire={handleQuickEnquire}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO IMAGE ROTATION CAROUSEL */}
      <Hero 
        isDark={isDark} 
        openEnquiryModal={() => setIsQuoteModalOpen(true)} 
        scrollToSection={scrollToSection} 
      />

      {/* 3. CORE STATISTICS & SOCIAL TRUST STRIP */}
      <Stats isDark={isDark} />

      {/* 4. CHRONICLED FAMILY HISTORIC STORY */}
      <AboutUs isDark={isDark} />

      {/* 5. SEVEN STAGE MANUFACTURING PIPELINE TIMELINE */}
      <ProcessTimeline isDark={isDark} />

      {/* 6. EXPANDABLE CHAT REEL SERVICES */}
      <Services isDark={isDark} />

      {/* 7. RESTORATION BEFORE-AFTER HORIZONTAL DIVIDER SLIDER */}
      <BeforeAfter isDark={isDark} />

      {/* 8. BUDGET RANGE CALCULATOR WITH DIRECT MOCK CTAs */}
      <QuoteCalculator isDark={isDark} />

      {/* 9. FILTERABLE MASONRY PICTURES SHOWCASE */}
      <GallerySection 
        isDark={isDark} 
        onQuickEnquire={handleQuickEnquire} 
      />

      {/* 10. TESTIMONIES, FAQs, AND INSTAGRAM VIDEO CAROUSEL */}
      <FAQAndReviews isDark={isDark} />

      {/* 11. CENTRAL BOOKING ENQUIRY SUBMISSION FORM */}
      <EnquiryForm isDark={isDark} />

      {/* 12. ADDRESS TIMETABLE AND COORDINATE IFRAME EMBEDS */}
      <MapAndContact isDark={isDark} />

      {/* 13. GLOBAL CONVERSATION FOOTER DETAILS */}
      <footer className={`py-12 border-t text-xs sm:text-sm ${
        isDark ? "bg-[#1C100B] border-[#FAF7F2]/10 text-gray-400" : "bg-[#FAF7F2] border-[#E5D7C9] text-gray-500"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <h4 className={`font-serif text-lg font-black tracking-wider uppercase ${isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"}`}>
              VISHWAKARMA FURNITURE WORLD
            </h4>
            <p className="max-w-sm leading-relaxed">
              Premium Solid Wooden Furniture direct from our Banshipur Kahalgaon workshop. We use certified A-grade seasoned logs of Teak (Sagwan) and Sheesham wood to construct heirlooms.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase">
              <span>Google 4.9 ★ Rated</span>
              <span>•</span>
              <span>7 Days Open</span>
            </div>
          </div>

          {/* Location Links */}
          <div className="space-y-3">
            <h5 className={`font-bold uppercase tracking-wider text-xs ${isDark ? "text-white" : "text-[#2C1810]"}`}>
              Workshop Hub
            </h5>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <MapPin size={14} className="shrink-0 text-[#8B5E3C]" />
                <span>Banshipur Kahalgaon, Mahesha Munda, Bihar 813203</span>
              </li>
              <li className="flex gap-2 items-start">
                <Clock size={14} className="shrink-0 text-[#8B5E3C]" />
                <span>Open Everyday: 8 AM - 8 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <h5 className={`font-bold uppercase tracking-wider text-xs ${isDark ? "text-white" : "text-[#2C1810]"}`}>
              Connect Online
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/vishwakarma_furniture_world/?__pwa=1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 items-center hover:text-[#8B5E3C] transition-colors"
                >
                  <Instagram size={14} className="text-[#8B5E3C]" />
                  <span>@vishwakarma_furniture_world</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex gap-2 items-center hover:text-[#8B5E3C] transition-colors"
                >
                  <Phone size={14} className="text-[#8B5E3C]" />
                  <span>{BRAND_INFO.phoneFormatted}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* copyright strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#A66A3F]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} Vishwakarma Furniture World. Handcrafted with precision in Bihar, India. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs font-semibold">
            <a href="#about" className="hover:underline">About Story</a>
            <a href="#services" className="hover:underline">Workshop Services</a>
            <a href="#faq" className="hover:underline">FAQs</a>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING GLOBAL CALL & WHATSAPP SOCIAL BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        
        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className={`p-3 rounded-full shadow-2xl transition-all cursor-pointer ${
                isDark ? "bg-[#FAF7F2] text-[#2C1810]" : "bg-[#2C1810] text-[#FAF7F2]"
              }`}
              title="Scroll to Top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Phone Call trigger */}
        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="p-3.5 bg-[#8B5E3C] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center border-2 border-white"
          title="Call Direct Workshop"
        >
          <Phone size={22} className="animate-pulse" />
        </a>

        {/* Floating WhatsApp chat trigger */}
        <a
          href={`https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=Hello%20Vishwakarma%20Furniture!%20I%20visited%20your%20website%20and%20want%20to%20consult%20on%20custom%20wooden%20furniture.`}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center border-2 border-white"
          title="Chat on WhatsApp"
        >
          <MessageSquare size={22} />
        </a>
      </div>

      {/* 15. DYNAMIC FULLSCREEN DETAILED MODALS */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductPopup
            product={selectedProduct}
            isDark={isDark}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      {/* FLOATING OVERLAY QUOTE DIALOG MODAL (Launched by Navbar and Hero CTAs) */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div 
              onClick={() => setIsQuoteModalOpen(false)}
              className="fixed inset-0 bg-[#2F1B12]/80 backdrop-blur-sm" 
            />
            
            <div className={`relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border z-10 max-h-[90vh] overflow-y-auto ${
              isDark ? "bg-[#2F1B12] border-[#FAF7F2]/10" : "bg-white border-[#E5D7C9]"
            }`}>
              {/* Close Button */}
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full z-20 bg-white/10 text-white hover:bg-red-500 hover:text-white border border-[#E5D7C9] transition-transform hover:rotate-90 duration-300"
              >
                <X size={18} className="text-gray-700 hover:text-white" />
              </button>
              
              <EnquiryForm isDark={isDark} />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* 16. TOAST NOTIFICATION CORNER PANEL */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#2F1B12]/95 text-[#FAF7F2] px-6 py-3.5 rounded-2xl shadow-2xl border border-[#D4A373]/30 flex items-center gap-2 text-xs sm:text-sm font-bold z-50 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-amber-400 animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

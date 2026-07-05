import { useState, useEffect } from "react";
import { Search, Heart, Sun, Moon, Menu, X, PhoneCall, Gift, FileDown } from "lucide-react";
import ThreeDLogo from "./ThreeDLogo";
import { BRAND_INFO } from "../data";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  wishlistCount: number;
  openEnquiryModal: () => void;
}

export default function Navbar({
  isDark,
  setIsDark,
  searchQuery,
  setSearchQuery,
  wishlistCount,
  openEnquiryModal
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Monitor scroll for glassmorphism navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  const downloadCatalogue = () => {
    // Generate a print-friendly view or trigger dynamic mock PDF download
    window.print();
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-[#2F1B12]/90 backdrop-blur-md shadow-xl border-b border-[#FAF7F2]/10 py-2"
            : "bg-[#FAF7F2]/90 backdrop-blur-md shadow-lg border-b border-[#6B3E26]/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top micro-bar for direct contact info and trust alerts */}
      <div className={`hidden md:flex justify-between items-center px-6 max-w-7xl mx-auto mb-2 text-xs font-mono tracking-wider transition-colors duration-300 ${isDark ? "text-[#FAF7F2]/60" : "text-[#2C1810]/70"}`}>
        <div className="flex items-center gap-4">
          <span>📍 {BRAND_INFO.location}</span>
          <span>📞 {BRAND_INFO.phoneFormatted}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 animate-pulse">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Direct Factory Rates
          </span>
          <span>⭐ 4.9 Rating (60+ Reviews)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Dynamic 3D Logo & Shop Name */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ThreeDLogo size={56} showText={true} />
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3 py-2 text-sm font-semibold rounded-md tracking-wide transition-all duration-300 hover:bg-[#8B5E3C]/10 ${
                isDark 
                  ? "text-[#FAF7F2] hover:text-[#D4A373]" 
                  : "text-[#2C1810] hover:text-[#8B5E3C]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Navbar Toolset */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Dynamic Search Box */}
          <div className="relative flex items-center">
            {searchOpen && (
              <input
                type="text"
                placeholder="Search bed, sofa, dining..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className={`w-40 sm:w-56 px-3 py-1 text-sm rounded-lg border focus:outline-hidden transition-all duration-300 mr-2 ${
                  isDark
                    ? "bg-[#FAF7F2]/10 border-[#FAF7F2]/20 text-[#FAF7F2] focus:border-[#D4A373]/50"
                    : "bg-[#FFFFFF] border-[#E5D7C9] text-[#2C1810] focus:border-[#8B5E3C]"
                }`}
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark ? "text-[#FAF7F2] hover:bg-[#FAF7F2]/10" : "text-[#2C1810] hover:bg-[#6B3E26]/10"
              }`}
              title="Search Products"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          {/* Wishlist UI Counter */}
          <div className="relative">
            <button
              onClick={() => {
                const prodSec = document.getElementById("products");
                if (prodSec) prodSec.scrollIntoView({ behavior: "smooth" });
              }}
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDark ? "text-[#FAF7F2] hover:bg-[#FAF7F2]/10" : "text-[#2C1810] hover:bg-[#6B3E26]/10"
              }`}
              title="My Wishlist"
            >
              <Heart size={20} className={wishlistCount > 0 ? "fill-red-500 text-red-500" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>
          </div>

          {/* Catalog Download Trigger */}
          <button
            onClick={downloadCatalogue}
            className={`hidden sm:flex p-2 rounded-full transition-colors duration-300 ${
              isDark ? "text-[#FAF7F2] hover:bg-[#FAF7F2]/10" : "text-[#2C1810] hover:bg-[#6B3E26]/10"
            }`}
            title="Print Catalog / Save PDF"
          >
            <FileDown size={20} />
          </button>

          {/* Dark / Light Warm Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDark ? "text-[#FAF7F2] hover:bg-[#FAF7F2]/10" : "text-[#2C1810] hover:bg-[#6B3E26]/10"
            }`}
            title={isDark ? "Switch to Light Warm Mode" : "Switch to Luxurious Dark Mode"}
          >
            {isDark ? <Sun size={20} className="text-amber-300" /> : <Moon size={20} />}
          </button>

          {/* Call-to-Action Ripple Button */}
          <button
            onClick={openEnquiryModal}
            className="hidden sm:flex relative overflow-hidden group items-center gap-2 bg-[#8B5E3C] hover:bg-[#5A3925] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Gift size={16} className="animate-wiggle" />
            <span>Get Free Quote</span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-xl" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full"
          >
            {mobileMenuOpen ? (
              <X size={24} className={isDark ? "text-white" : "text-black"} />
            ) : (
              <Menu size={24} className={isDark ? "text-white" : "text-black"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-2 pb-6 shadow-2xl transition-all duration-300 border-t ${
            isDark
              ? "bg-[#2F1B12] border-[#FAF7F2]/10 text-[#FAF7F2]"
              : "bg-[#FAF7F2] border-[#6B3E26]/10 text-[#2C1810]"
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 font-semibold tracking-wide border-b border-dashed border-[#A66A3F]/20 hover:text-[#8B5E3C] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-3 mt-4 pt-2">
              <button
                onClick={openEnquiryModal}
                className="flex-1 flex justify-center items-center gap-2 bg-[#8B5E3C] text-white py-3 rounded-xl font-bold"
              >
                <Gift size={18} />
                Get Free Quote
              </button>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center justify-center p-3 rounded-xl bg-emerald-600 text-white"
              >
                <PhoneCall size={20} />
              </a>
            </div>
            {/* Download catalog button on mobile */}
            <button
              onClick={downloadCatalogue}
              className="flex justify-center items-center gap-2 border border-[#A66A3F]/30 py-2.5 rounded-xl text-sm font-semibold mt-2"
            >
              <FileDown size={18} />
              Save Catalog PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

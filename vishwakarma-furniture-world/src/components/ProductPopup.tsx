import { useState, useEffect } from "react";
import { X, Phone, MessageSquare, Share2, Printer, Check, Copy, Calendar, Shield, Truck, Settings } from "lucide-react";
import { Product } from "../types";
import { BRAND_INFO } from "../data";

interface ProductPopupProps {
  product: Product;
  isDark: boolean;
  onClose: () => void;
}

export default function ProductPopup({ product, isDark, onClose }: ProductPopupProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  // Esc key down handler to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleShare = async () => {
    const shareText = `Check out this gorgeous ${product.name} from Vishwakarma Furniture World! Material: ${product.material}. Pricing: ${product.priceRange || 'Direct Quote'}. Contact: ${BRAND_INFO.phoneFormatted}. Details at Banshipur Kahalgaon, Bihar.`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        // Fallback copy to clipboard
        copyTextToClipboard(shareText);
      }
    } else {
      copyTextToClipboard(shareText);
    }
  };

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = `Hello Vishwakarma Furniture World! I am interested in the following product from your website:
  
- Name: ${product.name}
- Category: ${product.category}
- Material: ${product.material}
- Dimensions: ${product.dimensions}
- Price range: ${product.priceRange || "Direct Quote"}

Please provide more details and a final quotation for delivery to my location.`;

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark overlay backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#2F1B12]/80 backdrop-blur-sm transition-opacity" 
      />

      {/* Main modal card content */}
      <div 
        className={`relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border transition-all duration-300 max-h-[90vh] overflow-y-auto ${
          isDark 
            ? "bg-[#2F1B12] border-[#FAF7F2]/10 text-[#FAF7F2]" 
            : "bg-white border-[#E5D7C9] text-[#2C1810]"
        }`}
      >
        {/* Close Button top corner */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2.5 rounded-full z-25 hover:rotate-90 transition-transform duration-300 shadow-md ${
            isDark ? "bg-[#FAF7F2]/10 text-[#FAF7F2] hover:bg-red-500" : "bg-white text-gray-700 hover:bg-red-500 hover:text-white border border-[#E5D7C9]"
          }`}
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        {/* Column 1: Multi-Image Gallery Area */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between border-r border-[#A66A3F]/10">
          <div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-50 mb-4 shadow-inner border border-dashed border-[#A66A3F]/25">
              <img
                src={product.images[activeImageIdx]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-[#2F1B12]/70 text-[#FAF7F2] text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                Image {activeImageIdx + 1} of {product.images.length}
              </span>
            </div>

            {/* Thumbnail selector strips */}
            <div className="flex gap-2.5">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-16 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIdx === idx ? "border-[#8B5E3C] scale-105 shadow-sm" : "border-[#E5D7C9] hover:border-gray-400"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick specs alerts columns */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[#A66A3F]/10">
            <div className="flex flex-col items-center text-center">
              <Shield size={20} className="text-emerald-500 mb-1" />
              <span className="text-[9px] uppercase font-bold text-gray-500">Quality</span>
              <span className="text-[10px] font-bold">5-Yr Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck size={20} className="text-amber-500 mb-1" />
              <span className="text-[9px] uppercase font-bold text-gray-500">Delivery</span>
              <span className="text-[10px] font-bold">Home Setup</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar size={20} className="text-[#8B5E3C] mb-1" />
              <span className="text-[9px] uppercase font-bold text-gray-500">Ready In</span>
              <span className="text-[10px] font-bold">{product.deliveryTime}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Specs & Details Content Area */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Category and share strip */}
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#8B5E3C] bg-[#8B5E3C]/15 px-3 py-1 rounded-md">
                {product.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  title="Share product specs"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Share2 size={16} />}
                </button>
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  title="Print specifications sheet"
                >
                  <Printer size={16} />
                </button>
              </div>
            </div>

            {/* Title & Slogan */}
            <div>
              <h2 className="text-2xl font-serif font-black tracking-tight">{product.name}</h2>
              <p className="text-sm font-semibold text-[#A66A3F] italic mt-0.5">"{BRAND_INFO.hindiTagline}"</p>
            </div>

            {/* Solid wood specifications layout list */}
            <div className="space-y-1.5 bg-[#8B5E3C]/5 p-3 rounded-2xl border border-[#A66A3F]/10 text-xs">
              <div className="grid grid-cols-12">
                <span className="col-span-4 text-gray-500 font-semibold uppercase tracking-wider text-[10px]">Material:</span>
                <span className="col-span-8 font-bold">{product.material}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="col-span-4 text-gray-500 font-semibold uppercase tracking-wider text-[10px]">Dimensions:</span>
                <span className="col-span-8 font-bold">{product.dimensions}</span>
              </div>
              <div className="grid grid-cols-12">
                <span className="col-span-4 text-gray-500 font-semibold uppercase tracking-wider text-[10px]">Pricing:</span>
                <span className="col-span-8 font-extrabold text-emerald-600 font-sans">{product.priceRange || "Contact for Quote"}</span>
              </div>
            </div>

            {/* Description Paragraph */}
            <div>
              <span className="text-[10px] font-bold uppercase text-gray-500 block mb-1">Product Description</span>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{product.description}</p>
            </div>

            {/* Key Handcrafted features checklist */}
            <div>
              <span className="text-[10px] font-bold uppercase text-gray-500 block mb-2">Key Features</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="h-4 w-4 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colors Swatches row */}
            <div>
              <span className="text-[10px] font-bold uppercase text-gray-500 block mb-1.5">Available Polish Polishes</span>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                      isDark ? "bg-[#FAF7F2]/5 border-[#FAF7F2]/15" : "bg-[#FAF7F2] border-[#E5D7C9]"
                    }`}
                  >
                    🎨 {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Customization Details notes */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-start gap-2.5">
              <Settings size={18} className="text-amber-600 shrink-0 mt-0.5 animate-spin" style={{ animationDuration: "12s" }} />
              <div>
                <span className="text-[10px] font-extrabold uppercase text-amber-800 block">Custom Design Support</span>
                <p className="text-[11px] text-amber-700/90 leading-normal">{product.customization}</p>
              </div>
            </div>
          </div>

          {/* Action CTAs Bottom Area */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-[#A66A3F]/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="px-4 bg-[#8B5E3C] hover:bg-[#5A3925] text-white rounded-xl flex items-center justify-center transition-transform hover:scale-102"
              title="Call Workshop Owner"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

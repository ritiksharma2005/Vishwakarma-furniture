import { useState } from "react";
import { Search, Eye, X, ZoomIn, Heart, MessageSquare } from "lucide-react";
import { CATEGORIES, PRODUCTS, BRAND_INFO } from "../data";

export default function GallerySection({ isDark, onQuickEnquire }: { isDark: boolean; onQuickEnquire: (p: any) => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filter gallery items by category
  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]" : "bg-[#FAF7F2]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Woodcraft Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Workshop & Showroom Gallery
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Browse real photos from our Kahalgaon factory. Filter by categories to explore intricate hand carvings and finished wood grain polishes.
          </p>
        </div>

        {/* Filter Badges slider */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-[#8B5E3C] text-white shadow-md scale-102"
                  : isDark
                    ? "bg-[#FAF7F2]/5 hover:bg-[#FAF7F2]/10 text-gray-300"
                    : "bg-white border border-[#E5D7C9] text-gray-700 hover:bg-gray-50"
              }`}
            >
              {cat === "All" ? "🏡 Show All" : cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`break-inside-avoid rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl border transition-all duration-500 hover:-translate-y-1.5 relative group ${
                isDark 
                  ? "bg-[#2F1B12] border-[#FAF7F2]/10" 
                  : "bg-white border-[#E5D7C9]"
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden cursor-zoom-in" onClick={() => setLightboxImage(p.images[0])}>
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-105"
                  style={{ maxHeight: "400px" }}
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-[#2F1B12]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>

              {/* Detail Footer panel */}
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase text-[#A66A3F] block mb-1">
                  {p.material}
                </span>
                
                <h3 className={`font-serif text-base sm:text-lg font-bold tracking-tight mb-3 ${isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"}`}>
                  {p.name}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-[#A66A3F]/10 text-xs">
                  <span className="font-sans font-bold text-emerald-600">{p.priceRange || "Direct Quote"}</span>
                  
                  <button
                    onClick={() => onQuickEnquire(p)}
                    className="text-[#8B5E3C] hover:text-[#5A3925] font-bold flex items-center gap-1 uppercase tracking-wider text-[11px]"
                  >
                    <span>Enquire</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Frame */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setLightboxImage(null)} />
            
            <div className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col items-center">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 text-white hover:bg-red-500 transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              <img
                src={lightboxImage}
                alt="Woodcraft zoom lightbox"
                className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              
              <div className="mt-4 text-xs font-mono tracking-widest text-[#FAF7F2]/60 uppercase">
                🔍 Pinch or Scroll to Zoom • Vishwakarma Handcrafted Bihar Wood
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

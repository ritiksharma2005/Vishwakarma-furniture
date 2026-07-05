import { Heart, Search, MessageSquare, ShoppingCart, Info } from "lucide-react";
import { Product } from "../types";
import { BRAND_INFO } from "../data";

interface ProductCardProps {
  key?: string;
  product: Product;
  isDark: boolean;
  isWishlisted: boolean;
  toggleWishlist: (id: string) => void;
  onViewDetails: (product: Product) => void;
  onQuickEnquire: (product: Product) => void;
}

export default function ProductCard({
  product,
  isDark,
  isWishlisted,
  toggleWishlist,
  onViewDetails,
  onQuickEnquire
}: ProductCardProps) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full ${
        isDark
          ? "bg-[#2F1B12]/80 border-[#FAF7F2]/10"
          : "bg-white border-[#E5D7C9]"
      }`}
    >
      {/* Product Image Area */}
      <div className="relative overflow-hidden aspect-4/3 bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Pill Tag */}
        <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-[#8B5E3C] text-white rounded-full shadow-md z-10">
          {product.category}
        </span>

        {/* Dynamic Action Overlay Buttons on Desktop Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => onViewDetails(product)}
            className="p-3 rounded-full bg-[#FAF7F2] text-[#2C1810] hover:bg-[#8B5E3C] hover:text-white transition-colors duration-300 shadow-lg hover:scale-110"
            title="View Full Product Details"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => onQuickEnquire(product)}
            className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:scale-110"
            title="Enquire on WhatsApp"
          >
            <MessageSquare size={18} />
          </button>
        </div>

        {/* Wishlist Interactive Heart Overlay */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md shadow-md hover:scale-110 transition-all z-10 ${
            isWishlisted
              ? "bg-red-500/10 text-red-500"
              : "bg-black/35 text-white/90 hover:bg-red-500/20 hover:text-red-500"
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
        >
          <Heart size={16} className={isWishlisted ? "fill-red-500" : ""} />
        </button>
      </div>

      {/* Info Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Sizing/Wood Specs Line */}
          <div className="flex items-center justify-between text-xs font-mono text-[#A66A3F] mb-1">
            <span className="font-semibold">{product.material}</span>
            <span>{product.deliveryTime} delivery</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onViewDetails(product)}
            className={`font-serif text-lg sm:text-xl font-bold tracking-tight hover:text-[#8B5E3C] cursor-pointer mb-2 transition-colors line-clamp-1 ${
              isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"
            }`}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>
        </div>

        <div>
          {/* Pricing & CTA buttons row */}
          <div className="flex items-center justify-between border-t border-[#A66A3F]/10 pt-4 mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                Direct Price
              </span>
              <span className="text-sm sm:text-base font-extrabold text-emerald-600 font-sans">
                {product.priceRange || "Contact for Quote"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onViewDetails(product)}
                className={`p-2.5 rounded-xl border border-[#A66A3F]/30 hover:bg-[#8B5E3C]/10 transition-colors ${
                  isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"
                }`}
                title="View Details"
              >
                <Info size={16} />
              </button>

              <button
                onClick={() => onQuickEnquire(product)}
                className="bg-[#8B5E3C] hover:bg-[#5A3925] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <MessageSquare size={14} />
                <span>Enquire</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

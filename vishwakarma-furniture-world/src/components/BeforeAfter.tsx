import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ArrowLeftRight, Paintbrush, Hammer } from "lucide-react";
import { BEFORE_AFTER } from "../data";

export default function BeforeAfter({ isDark }: { isDark: boolean }) {
  const [activeItem, setActiveItem] = useState(BEFORE_AFTER[0]);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Drag handlers for the split slider
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
    return () => {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]" : "bg-[#FAF7F2]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Before & After</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            The Magic of Wood Polishing & Restoration
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Drag the wooden slider handle left and right to see weathered, antique furniture pieces beautifully restored to a luxury premium gloss finish by our craftsmen.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-3 mb-10">
          {BEFORE_AFTER.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                setSliderPosition(50); // reset position
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeItem.id === item.id
                  ? "bg-[#8B5E3C] text-white shadow-md scale-102"
                  : isDark
                    ? "bg-[#FAF7F2]/5 hover:bg-[#FAF7F2]/10 text-gray-300"
                    : "bg-white border border-[#E5D7C9] text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Frame */}
        <div className="max-w-3xl mx-auto">
          
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-16/10 sm:aspect-16/9 rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#A66A3F]/20 select-none bg-[#2F1B12]"
          >
            {/* Before Image (Shows underneath on the left side) */}
            <div className="absolute inset-0">
              <img 
                src={activeItem.beforeImage} 
                alt="Before wooden furniture restoration" 
                className="w-full h-full object-cover pointer-events-none filter sepia-25 brightness-90 grayscale-15"
              />
              {/* Badge text */}
              <div className="absolute bottom-4 left-4 bg-red-600/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                ⚠️ Raw Wood / Unpolished
              </div>
            </div>

            {/* After Image (Overlays on top on the right side) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Ensure image has same width as container, not the clipped wrapper */}
              <div className="absolute top-0 left-0 h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
                <img 
                  src={activeItem.afterImage} 
                  alt="After wooden furniture restoration" 
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              
              {/* Badge text */}
              <div className="absolute bottom-4 right-4 bg-emerald-600/95 backdrop-blur-xs text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md whitespace-nowrap z-10">
                ✨ Handcrafted PU Gloss Finish
              </div>
            </div>

            {/* Drag Bar Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#D4A373] cursor-ew-resize flex items-center justify-center z-20"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                e.preventDefault();
                isDragging.current = true;
              }}
              onTouchStart={(e) => {
                isDragging.current = true;
              }}
            >
              <div className="h-10 w-10 rounded-full bg-[#8B5E3C] border-2 border-[#D4A373] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight size={14} className="animate-pulse" />
              </div>
            </div>

          </div>

          {/* Subtext description of active restoration */}
          <div className="mt-8 text-center px-4 max-w-2xl mx-auto">
            <h4 className="text-sm font-bold text-[#8B5E3C] flex items-center justify-center gap-1.5 mb-2 uppercase tracking-wide">
              <Paintbrush size={16} />
              <span>Restoration Craft Description</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {activeItem.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

import * as LucideIcons from "lucide-react";
import { SERVICES } from "../data";

// Helper to resolve string icon name to Lucide components safely
function IconRenderer({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.Hammer className={className} />;
  return <IconComponent className={className} />;
}

export default function Services({ isDark }: { isDark: boolean }) {
  return (
    <section id="services" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]/40" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Our Capabilities</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Professional Carpentry Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            From styling consultancy to multi-stage polishing, we provide a complete, robust, direct-from-manufacturer furniture experience.
          </p>
        </div>

        {/* Services Matrix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between ${
                isDark
                  ? "bg-[#2F1B12] border-[#FAF7F2]/10 hover:border-[#FAF7F2]/20"
                  : "bg-white border-[#E5D7C9] hover:bg-[#FAF7F2]/40"
              }`}
            >
              <div>
                {/* Floating Wood-Themed Circle Container with Icon */}
                <div className="w-14 h-14 bg-[#8B5E3C]/10 text-[#8B5E3C] rounded-2xl flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform">
                  <IconRenderer name={srv.icon} className="w-7 h-7" />
                </div>

                <h3 className={`text-lg sm:text-xl font-serif font-black mb-3 ${isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"}`}>
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              {/* Little detail bullet tag */}
              <div className="mt-6 flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-[#A66A3F]">
                <span>✓ Factory Direct Pricing Included</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

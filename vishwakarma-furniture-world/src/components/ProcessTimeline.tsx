import * as LucideIcons from "lucide-react";
import { PROCESS_STEPS } from "../data";

function IconRenderer({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.Settings className={className} />;
  return <IconComponent className={className} />;
}

export default function ProcessTimeline({ isDark }: { isDark: boolean }) {
  return (
    <section id="process" className={`py-20 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#2F1B12]/40" : "bg-white"}`}>
      
      {/* Decorative wood slice graphic behind layout */}
      <div className="absolute right-0 top-1/4 opacity-3 pointer-events-none w-96 h-96 rounded-full bg-radial from-[#8B5E3C] to-transparent blur-2xl" />
      <div className="absolute left-0 bottom-1/4 opacity-3 pointer-events-none w-96 h-96 rounded-full bg-radial from-[#D4A373] to-transparent blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Artisanal Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            How We Craft Your Furniture
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Our furniture undergoes 7 meticulous stages of wood carving, seasoning, joint assembly, and premium polishing to ensure lifelong perfection.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical layout */}
        <div className="relative">
          {/* Central vertical track line on large screens, side line on mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#8B5E3C] via-[#D4A373]/50 to-[#8B5E3C]/10 -translate-x-1/2" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.step} 
                  className={`flex flex-col md:flex-row relative ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline circular node marker */}
                  <div className="absolute left-6 md:left-1/2 top-4 w-10 h-10 rounded-full bg-[#8B5E3C] border-4 border-white shadow-md -translate-x-1/2 flex items-center justify-center text-white font-extrabold text-xs z-20">
                    {step.step}
                  </div>

                  {/* Empty spacer block to align grids beautifully */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Narrative bubble block */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <div 
                      className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group ${
                        isDark
                          ? "bg-[#2F1B12] border-[#FAF7F2]/10 hover:border-[#FAF7F2]/20"
                          : "bg-[#FAF7F2] border-[#E5D7C9] hover:bg-white"
                      }`}
                    >
                      {/* Decorative background step count */}
                      <span className="absolute right-6 top-4 font-serif text-6xl sm:text-7xl font-extrabold text-[#8B5E3C]/5 select-none tracking-tight group-hover:text-[#8B5E3C]/10 transition-colors">
                        0{step.step}
                      </span>

                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="p-3 bg-[#8B5E3C]/10 text-[#8B5E3C] rounded-2xl">
                          <IconRenderer name={step.icon} className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#A66A3F]">Stage {step.step}</span>
                          <h3 className={`text-base sm:text-lg font-serif font-black ${isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"}`}>
                            {step.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

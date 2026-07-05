import { Hammer, Sparkles, Trophy, Heart } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_INFO } from "../data";

export default function AboutUs({ isDark }: { isDark: boolean }) {
  const milestones = [
    { year: "1990", title: "Local Workshop", desc: "Started by local wood artisans with a humble single-shed workshop in Banshipur Kahalgaon." },
    { year: "2002", title: "Wedding Combo Pioneers", desc: "Introduced Bihar's first customized 'Wedding Shubh Vivaah Combo Packages' (Bed, Almirah, Sofa) at heavy manufacturer discounts." },
    { year: "2012", title: "Modern Wood Drying", desc: "Imported industrial vacuum seasoning kilns, ensuring every log of Teak & Sheesham is dried perfectly to survive Bihar's humid summers and cold winters." },
    { year: "2020", title: "Next-Gen Designs", desc: "The third generation of owners joined, introducing computer-guided precision machinery combined with intricate hand carvings." },
    { year: "Today", title: "Bihar's Premium Icon", desc: "Catering to over 1000+ happy homes with direct workshop sales, online WhatsApp consultations, and home delivery support." }
  ];

  const values = [
    { icon: <Hammer className="w-6 h-6 text-[#8B5E3C]" />, title: "Craftsmanship", desc: "No MDF, particleboard, or cheap veneer. We deal strictly in seasoned solid Teak (Sagwan) and Sheesham wood." },
    { icon: <Sparkles className="w-6 h-6 text-[#D4A373]" />, title: "Lifetime Polish", desc: "We use triple-sanding and premium water-resistant polyurethane (PU) polish for a mirror-like shine." },
    { icon: <Trophy className="w-6 h-6 text-amber-500" />, title: "Honest Pricing", desc: "By manufacturing directly, we eliminate middleman showroom margins of 40-50%, saving you thousands." },
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Family Trust", desc: "Our slogan 'जो पीढ़ियों तक साथ निभाए।' represents our commitment to building furniture that survives multiple generations." }
  ];

  return (
    <section id="about" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12] text-white" : "bg-[#FAF7F2] text-[#2C1810]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Our Heritage & Story</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Legacy of Wooden Perfection
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Combining traditional hand carvings with modern durability to shape timeless furniture for Bihari households.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Photos Block (12-column span: 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#E5D7C9]/40 group">
              {/* Main Workshop image */}
              <img 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" 
                alt="Wooden bed carving workshop" 
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2F1B12]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#D4A373] tracking-widest block mb-1">Our Active Workshop</span>
                  <p className="text-sm font-semibold text-[#FAF7F2]">Master craftsman detailing an intricate floral bed panel in Kahalgaon.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] overflow-hidden shadow-lg border border-[#E5D7C9]/40 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=600" 
                  alt="Raw solid wood seasoning" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-3 text-center">
                  <span className="text-xs font-bold text-[#FAF7F2]">Seasoned Timber Logs</span>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-lg border border-[#E5D7C9]/40 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=600" 
                  alt="Finished furniture polishing" 
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-3 text-center">
                  <span className="text-xs font-bold text-[#FAF7F2]">Multi-layer PU Polish</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story Block (12-column span: 7) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-[#8B5E3C]">
              "जो पीढ़ियों तक साथ निभाए।" <br />
              <span className="text-sm sm:text-base font-sans font-semibold tracking-wider text-gray-500 block mt-2 uppercase">
                Crafted with Passion. Built for Life.
              </span>
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-gray-500 mb-6">
              Welcome to <strong>Vishwakarma Furniture World</strong>. For over three decades, we have been the benchmark of premium wooden furniture in Bihar. Founded in <strong>Banshipur Kahalgaon</strong>, we are a family-owned direct manufacturing store specializing in hand-carved bed boards, luxury sofas, heavy cabinets, and customized prayer mandirs.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-500 mb-8">
              Our business is built on a simple, uncompromising promise: <strong>Authenticity</strong>. Every item leaving our factory floor has been seasoned to perfection, hand-sanded multiple times, and treated against pests, ensuring it becomes a valuable family heirloom that you pass down to your children.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`p-2.5 h-fit rounded-xl ${isDark ? "bg-[#FAF7F2]/5" : "bg-[#8B5E3C]/10"}`}>
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold tracking-tight mb-1">{val.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Interactive Timeline */}
        <div className="pt-10 border-t border-[#A66A3F]/20">
          <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-center mb-10 text-[#8B5E3C]">
            Our Journey Over the Years
          </h4>

          <div className="relative border-l-2 border-[#8B5E3C]/30 ml-4 md:ml-32 md:mr-12 space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative pl-6 md:pl-12"
              >
                {/* Year Marker badge */}
                <div className="absolute -left-[45px] md:-left-[120px] top-0.5 w-[36px] md:w-[100px] text-right">
                  <span className="inline-block bg-[#8B5E3C] text-[#FAF7F2] font-bold text-xs sm:text-sm px-2.5 py-1 rounded-full shadow-md">
                    {milestone.year}
                  </span>
                </div>

                {/* Ring node */}
                <div className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-[#D4A373] border-2 border-white shadow-sm" />

                <div className={`p-6 rounded-[2rem] border ${
                  isDark 
                    ? "bg-[#FAF7F2]/5 hover:bg-[#FAF7F2]/10 border-[#FAF7F2]/10" 
                    : "bg-white hover:bg-[#FAF7F2]/40 shadow-xs hover:shadow-md border-[#E5D7C9]"
                } transition-all duration-300`}>
                  <h5 className="text-sm sm:text-base font-bold tracking-tight text-[#8B5E3C] mb-1">
                    {milestone.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

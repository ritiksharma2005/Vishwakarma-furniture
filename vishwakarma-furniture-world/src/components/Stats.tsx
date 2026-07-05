import { useEffect, useState } from "react";
import { Star, Users, Truck, Sparkles, ShieldCheck, HeartHandshake, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_INFO } from "../data";

function CountUp({ end, suffix = "", duration = 1.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats({ isDark }: { isDark: boolean }) {
  const badges = [
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, text: "Premium Seasoned Woods" },
    { icon: <HeartHandshake className="w-5 h-5 text-[#8B5E3C]" />, text: "Direct Workshop Prices" },
    { icon: <MapPin className="w-5 h-5 text-[#D4A373]" />, text: "Made in Bihar, India" },
    { icon: <Sparkles className="w-5 h-5 text-amber-500" />, text: "Lifetime Joins Warranty" }
  ];

  return (
    <section className={`py-16 relative transition-colors duration-300 ${isDark ? "bg-[#1C100B]" : "bg-[#FAF7F2]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated USP Badges strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 border-b border-[#A66A3F]/20 pb-10">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-xs ${
                isDark 
                  ? "bg-[#FAF7F2]/5 text-[#FAF7F2] border border-[#FAF7F2]/10" 
                  : "bg-white text-[#2C1810] border border-[#E5D7C9]"
              }`}
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid layout representing key highlights of the brand */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Main Heritage Block (col-span-6 row-span-4 style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 bg-[#6B3E26] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-h-[320px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A66A3F]/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="z-10 flex flex-col justify-between h-full">
              <div>
                <span className="text-[#D4A373] uppercase tracking-[0.25em] font-semibold text-xs mb-4 block">
                  Premium Bihar Craftsmanship
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
                  Crafting Beautiful <br/>Furniture for <br/>
                  <span className="italic text-[#D4A373]">Every Family Home.</span>
                </h3>
              </div>
              <div className="mt-6 border-l-2 border-[#D4A373] pl-4">
                <p className="text-white/90 text-lg font-serif italic leading-relaxed">
                  "जो पीढ़ियों तक साथ निभाए।"
                </p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">
                  Est. 1990 — Handcarved Heirloom Quality
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Google Rating Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`md:col-span-3 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 min-h-[220px] ${
              isDark 
                ? "bg-[#2F1B12] border-2 border-[#D4A373]/40 text-[#FAF7F2]" 
                : "bg-white border-2 border-[#D4A373] text-[#2C1810]"
            }`}
          >
            <div className="text-[#6B3E26] dark:text-[#FAF7F2] font-serif text-5xl font-black mb-2 flex items-center justify-center gap-1">
              <span>4.9</span>
              <span className="text-amber-400">★</span>
            </div>
            <div className={`font-sans font-extrabold text-xs uppercase tracking-widest ${isDark ? "text-[#FAF7F2]/80" : "text-[#2C1810]"}`}>
              Google Rating
            </div>
            <div className="mt-4 text-xs font-semibold text-gray-500 leading-relaxed">
              {BRAND_INFO.googleReviewsCount}+ Verified Reviews from <br/>Happy Customers
            </div>
          </motion.div>

          {/* Card 3: Happy Customers Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3 bg-[#2F1B12] rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[220px] relative group"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-serif text-2xl text-white">
                Happy<br/>Customers
              </h4>
              <div className="p-2.5 bg-white/10 rounded-full text-[#D4A373] font-bold group-hover:rotate-12 transition-transform duration-300">
                <Users size={20} />
              </div>
            </div>
            
            <div className="mt-6">
              <div className="text-[#D4A373] font-serif text-4xl font-extrabold mb-1">
                <CountUp end={1000} suffix="+" />
              </div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                Across Bihar & Jharkhand
              </div>
            </div>
          </motion.div>

          {/* Card 4: Safe Delivered Items */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`md:col-span-4 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px] ${
              isDark 
                ? "bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white" 
                : "bg-white border border-[#E5D7C9] text-[#2C1810]"
            }`}
          >
            <div className="flex justify-between items-start">
              <span className="text-[#8B5E3C] text-[10px] uppercase font-bold tracking-widest">
                Safe Home Shipping
              </span>
              <span className="text-[#D4A373] font-bold text-xs font-mono">03</span>
            </div>
            
            <div>
              <div className="text-3xl font-serif font-bold text-[#8B5E3C] mb-1">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="font-semibold text-sm mb-1">Items Delivered</div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct damage-free wooden furniture home delivery.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Physical Workshop & Live Clock Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`md:col-span-4 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px] ${
              isDark 
                ? "bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-white" 
                : "bg-white border border-[#E5D7C9] text-[#2C1810]"
            }`}
          >
            <div>
              <div className="text-[#6B3E26] font-bold text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <MapPin size={12} className="text-[#D4A373]" />
                <span>Our Kahalgaon Hub</span>
              </div>
              <p className="text-sm font-semibold leading-relaxed">
                Banshipur Kahalgaon,<br/>
                Mahesha Munda, Bihar — 813203
              </p>
            </div>
            
            <div className="flex items-center gap-2 mt-4 text-emerald-500 font-bold">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider font-mono">Open Now: 8AM - 8PM</span>
            </div>
          </motion.div>

          {/* Card 6: Direct Manufacturing USP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:col-span-4 bg-[#D4A373] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#6B3E26] rounded-xl flex items-center justify-center text-white text-xl shrink-0">
                ⚒️
              </div>
              <div>
                <h4 className="font-serif text-[#2C1810] text-lg font-bold">Direct Manufacturer</h4>
                <p className="text-[#2C1810]/70 text-xs">No middleman showroom commissions</p>
              </div>
            </div>

            <p className="text-[#2C1810] text-xs font-semibold leading-relaxed mt-4">
              Premium materials, authentic Teak wood logs and transparent local handcrafted pricing.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

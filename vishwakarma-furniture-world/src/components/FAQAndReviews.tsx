import React, { useState } from "react";
import { Star, MessageSquare, CheckCircle, ChevronDown, ChevronUp, Play, Sparkles, Mail, Send } from "lucide-react";
import { REVIEWS, FAQS, BRAND_INFO } from "../data";

export default function FAQAndReviews({ isDark }: { isDark: boolean }) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>("faq-01");
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const googleReviewLink = "https://www.google.com/maps/place/Vishwakarma+Furniture/@25.0445431,87.2185244,17z/data=!4m8!3m7!1s0x39f1068801fd062d:0x392f6b3b28f7311b!8m2!3d25.0445383!4d87.2207131!9m1!1b1!16s%2Fg%2F11v5pf8z4f?entry=ttu";

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSubscribed(true);
      setEmail("");
    }
  };

  const videoItems = [
    {
      id: "v-01",
      title: "Wood carving demonstration on solid Teak (Sagwan)",
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600",
      videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0543547468ec4e1f744e21a2a4b8df2&profile_id=139&oauth2_token_id=57447761"
    },
    {
      id: "v-02",
      title: "Precision wood cutting & carpentry layout process",
      duration: "1:15",
      thumbnail: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=600",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-carpenter-measuring-a-wooden-plank-40142-large.mp4"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. TESTIMONIALS SECTION */}
      <section id="reviews" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]/40" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Customer Reviews</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
              Loved by 1000+ Bihari Families
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Read real verified Google Business reviews of Vishwakarma Furniture World directly from Kahalgaon, Bhagalpur, and nearby locations.
            </p>
          </div>

          {/* Google Ratings Dashboard panel */}
          <div className={`max-w-4xl mx-auto p-6 sm:p-8 rounded-[2.5rem] border mb-12 flex flex-col md:flex-row items-center justify-between gap-8 ${
            isDark 
              ? "bg-[#2F1B12] border-[#FAF7F2]/10" 
              : "bg-[#FAF7F2] border-[#E5D7C9]"
          }`}>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <span className="text-[10px] uppercase font-black text-gray-500 tracking-wider">Overall Google Rating</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-5xl font-black font-serif text-[#8B5E3C]">{BRAND_INFO.googleRating}</span>
                <span className="text-sm text-gray-500 font-bold">/ 5.0</span>
              </div>
              <div className="flex gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                Based on {BRAND_INFO.googleReviewsCount} Direct Customer reviews
              </p>
            </div>

            {/* Google Rating Breakdown bars */}
            <div className="w-full max-w-xs space-y-1 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-10 font-bold text-[#8B5E3C]">5 Star</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400" style={{ width: "98%" }} />
                </div>
                <span className="w-8 text-right font-semibold">98%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 font-bold text-[#8B5E3C]">4 Star</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400" style={{ width: "2%" }} />
                </div>
                <span className="w-8 text-right font-semibold">2%</span>
              </div>
              <div className="flex items-center gap-3 opacity-30">
                <span className="w-10 font-bold">3 Star</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400" style={{ width: "0%" }} />
                </div>
                <span className="w-8 text-right">0%</span>
              </div>
            </div>

            {/* Direct Google Review Button link */}
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#8B5E3C] hover:bg-[#5A3925] text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Write Google Review</span>
              <span>✏️</span>
            </a>
          </div>

          {/* Testimonial Cards Slider/Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className={`p-6 sm:p-8 rounded-[2rem] border flex flex-col justify-between ${
                  isDark
                    ? "bg-[#2F1B12] border-[#FAF7F2]/10"
                    : "bg-white border-[#E5D7C9]"
                }`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-gray-500 italic leading-relaxed mb-6">
                    "{rev.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-[#A66A3F]/10 pt-4 text-xs font-semibold">
                  <div className="flex items-center gap-2.5">
                    {/* Placeholder initial-avatar */}
                    <div className="w-10 h-10 bg-[#8B5E3C]/10 text-[#8B5E3C] font-black rounded-full flex items-center justify-center text-sm border border-[#A66A3F]/25 uppercase">
                      {rev.author[0]}
                    </div>
                    <div>
                      <span className={`block font-bold ${isDark ? "text-white" : "text-[#2C1810]"}`}>{rev.author}</span>
                      <span className="block text-[10px] text-gray-400 font-medium">{rev.date}</span>
                    </div>
                  </div>

                  {rev.isGoogleVerified && (
                    <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                      Google Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. INSTAGRAM REELS VIDEO SHOWCASE */}
      <section className={`py-16 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]" : "bg-[#FAF7F2]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Live Wood Carving</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight mb-2">
              See Our Artisans in Action
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
              Watch how our carpenters hand-carve solid woods and apply double-gloss finishes in our Kahalgaon factory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoItems.map((video) => (
              <div 
                key={video.id}
                className={`rounded-[2rem] overflow-hidden border p-4 shadow-lg ${
                  isDark ? "bg-[#2F1B12]/80 border-[#FAF7F2]/10" : "bg-white border-[#E5D7C9]"
                }`}
              >
                {/* Video player box */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-black mb-4 group">
                  {playingVideo === video.id ? (
                    <video 
                      src={video.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button
                          onClick={() => setPlayingVideo(video.id)}
                          className="h-14 w-14 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center shadow-2xl scale-100 hover:scale-110 active:scale-95 transition-transform"
                          aria-label="Play video"
                        >
                          <Play size={20} className="fill-white ml-0.5" />
                        </button>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-md font-bold tracking-wide">
                        🕒 {video.duration} min
                      </span>
                    </>
                  )}
                </div>
                <h4 className={`text-xs sm:text-sm font-bold tracking-tight mb-1 ${isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"}`}>
                  {video.title}
                </h4>
                <p className="text-[10px] text-[#A66A3F] font-bold uppercase tracking-widest">
                  🎥 Live Workshop Recording
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section id="faq" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]/40" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Help Center</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Have doubts about custom wood sizes, shipping, deposits, or warranty? Find answer details here or chat directly with the owner on WhatsApp.
            </p>
          </div>

          {/* Accordion List wrapper */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isExpanded = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? isDark
                        ? "bg-[#FAF7F2]/5 border-[#8B5E3C]/50 shadow-md"
                        : "bg-[#FAF7F2] border-[#8B5E3C]/40 shadow-sm"
                      : isDark
                        ? "bg-[#2F1B12] border-[#FAF7F2]/10 hover:bg-[#FAF7F2]/5"
                        : "bg-white border-[#E5D7C9] hover:bg-gray-50"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-sm sm:text-base tracking-tight"
                  >
                    <span className={isDark ? "text-white" : "text-[#2C1810]"}>{faq.question}</span>
                    {isExpanded ? <ChevronUp size={18} className="text-[#8B5E3C] shrink-0 ml-4" /> : <ChevronDown size={18} className="text-gray-400 shrink-0 ml-4" />}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-[#A66A3F]/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. NEWSLETTER SUBSCRIPTION CARD */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#2F1B12] border border-[#D4A373]/30 rounded-[2.5rem] p-8 sm:p-12 text-[#FAF7F2] text-center relative shadow-2xl">
            {/* Background blur decorative blobs */}
            <div className="absolute left-[-20px] top-[-20px] w-48 h-48 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
            <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 rounded-full bg-[#8B5E3C]/25 blur-xl pointer-events-none" />

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4A373] bg-[#8B5E3C]/40 px-3.5 py-1.5 rounded-full border border-[#D4A373]/20 mb-4 inline-block">
              Subscribe to Newsletter
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif font-black mb-3">
              Unlock Direct catalog updates & wedding sales combo alerts
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto mb-8">
              Subscribe to get seasonal wooden furniture catalogs, design lookbooks, and wedding festival combo coupon codes directly in your inbox. No spam, we promise.
            </p>

            {emailSubscribed ? (
              <div className="max-w-md mx-auto bg-emerald-600/20 border border-emerald-500/50 rounded-2xl p-4 flex items-center justify-center gap-2.5">
                <CheckCircle size={20} className="text-emerald-500" />
                <span className="text-xs sm:text-sm font-bold text-emerald-400">
                  Awesome! You are successfully subscribed. Check your inbox soon.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#D4A373]"
                />
                <button
                  type="submit"
                  className="bg-[#8B5E3C] hover:bg-[#5A3925] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  <Mail size={16} />
                  <span>Subscribe</span>
                </button>
              </form>
            )}

            <span className="text-[10px] text-gray-500 mt-4 block">
              *You can unsubscribe at any time. We protect your privacy as our own family.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

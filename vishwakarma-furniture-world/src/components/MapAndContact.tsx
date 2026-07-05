import { MapPin, Phone, MessageSquare, Mail, Instagram, Clock, Compass, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function MapAndContact({ isDark }: { isDark: boolean }) {
  const contactsList = [
    {
      icon: <MapPin className="text-[#8B5E3C]" />,
      title: "Our Factory & Store Address",
      desc: BRAND_INFO.location,
      actionText: "Get Google Directions",
      actionUrl: BRAND_INFO.googleMapsUrl
    },
    {
      icon: <Phone className="text-amber-600" />,
      title: "Direct Phone Calls",
      desc: BRAND_INFO.phoneFormatted,
      actionText: "Click to Call Now",
      actionUrl: `tel:${BRAND_INFO.phone}`
    },
    {
      icon: <MessageSquare className="text-emerald-500" />,
      title: "WhatsApp Consultations",
      desc: "Live Chat with Workshop Owner",
      actionText: "Open WhatsApp Chat",
      actionUrl: `https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=Hello%20Vishwakarma%20Furniture!%20I%20want%20to%20discuss%20custom%20designs.`
    },
    {
      icon: <Mail className="text-sky-500" />,
      title: "Email Correspondence",
      desc: BRAND_INFO.email,
      actionText: "Send email",
      actionUrl: `mailto:${BRAND_INFO.email}`
    }
  ];

  return (
    <section id="contact" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Locate Our Workshop</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Visit Us or Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Direct orders bypass expensive showroom rentals. Visit our manufacturing unit in Banshipur Kahalgaon to see the raw wood before your custom orders are polished.
          </p>
        </div>

        {/* Dual Grid Map + Info details */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Info & Details (5-col) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {contactsList.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border flex gap-4 items-start hover:shadow-md transition-shadow ${
                    isDark 
                      ? "bg-[#2F1B12] border-[#FAF7F2]/10" 
                      : "bg-[#FAF7F2] border-[#E5D7C9]"
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isDark ? "bg-[#FAF7F2]/5" : "bg-white shadow-xs"} shrink-0`}>
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm sm:text-base font-bold tracking-tight mb-1 ${isDark ? "text-[#FAF7F2]" : "text-[#2C1810]"}`}>
                      {c.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-2 leading-normal break-words">
                      {c.desc}
                    </p>
                    <a
                      href={c.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#8B5E3C] uppercase tracking-wider hover:text-[#5A3925] transition-colors"
                    >
                      <span>{c.actionText}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours & Trust notes */}
            <div className={`p-6 rounded-2xl border flex gap-4 items-start ${
              isDark 
                ? "bg-[#FAF7F2]/5 border-[#FAF7F2]/10" 
                : "bg-[#FAF7F2] border-[#E5D7C9]"
            }`}>
              <div className="p-3 bg-amber-500/15 text-amber-600 rounded-xl shrink-0">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] mb-1">
                  Business Hours
                </h4>
                <p className="text-sm font-bold">Monday - Sunday (7 Days Open)</p>
                <p className="text-xs text-gray-500 font-medium">8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2: Google Maps Embed (7-col) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[2.5rem] overflow-hidden shadow-xl border border-[#A66A3F]/20 relative min-h-[400px]">
            
            {/* Embedded Google Maps responsive iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.176432104523!2d87.2185244!3d25.0445431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1068801fd062d%3A0x392f6b3b28f7311b!2sVishwakarma%20Furniture!5e0!3m2!1sen!2sin!4v1782643632821!5m2!1sen!2sin"
              title="Vishwakarma Furniture World Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />

            {/* Overlay map floating header directions button */}
            <div className="absolute top-4 left-4 right-4 bg-linear-to-r from-[#2F1B12]/95 to-[#2F1B12]/80 text-[#FAF7F2] p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-xs border border-[#FAF7F2]/10 z-10">
              <div className="flex gap-2.5">
                <MapPin className="text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                    Vishwakarma Furniture
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-normal max-w-sm font-medium">
                    Banshipur Kahalgaon, Mahesha Munda, Bihar 813203
                  </p>
                </div>
              </div>

              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#8B5E3C] hover:bg-[#5A3925] text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shrink-0 transition-transform active:scale-95 whitespace-nowrap"
              >
                <Compass size={14} className="animate-spin" style={{ animationDuration: "15s" }} />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

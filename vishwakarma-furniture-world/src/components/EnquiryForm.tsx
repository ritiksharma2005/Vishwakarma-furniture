import React, { useState } from "react";
import { MessageSquare, Calendar, Wallet, Landmark, CheckSquare, Sparkles, UploadCloud } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function EnquiryForm({ isDark }: { isDark: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Kahalgaon",
    product: "Wooden Beds",
    woodType: "Teak Wood",
    budget: "₹20,000 - ₹35,000",
    deliveryDate: "",
    message: "",
    referenceImageName: ""
  });

  const products = [
    "Wooden Beds",
    "Luxury Sofa Sets",
    "Dining Tables",
    "Computer Tables",
    "Study Tables",
    "Office Furniture",
    "Wardrobes / Almirah",
    "TV Entertainment Units",
    "Pooja Mandir / Temple",
    "Custom Wooden Furniture"
  ];

  const woodTypes = [
    "Teak Wood (Sagwan)",
    "Sheesham Wood (Rosewood)",
    "Sal Wood",
    "Mango Hardwood",
    "Laminated Engineered Wood"
  ];

  const budgets = [
    "Under ₹15,000",
    "₹15,000 - ₹30,000",
    "₹30,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "Over ₹1,00,000 (Wedding packages)"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, referenceImageName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please provide at least your Full Name and Phone Number.");
      return;
    }

    const whatsappText = `Hello Vishwakarma Furniture World! I am submitting a custom enquiry from your website:
    
- Full Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || "Not Provided"}
- Location/City: ${formData.city}
- Preferred Product: ${formData.product}
- Sourced Wood: ${formData.woodType}
- Target Budget: ${formData.budget}
- Delivery Date: ${formData.deliveryDate || "Flexible"}
- Selected Reference: ${formData.referenceImageName || "No reference attached"}
- Custom Message: ${formData.message || "Hi, I want to discuss custom sizing."}`;

    const url = `https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="enquiry" className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]/40" : "bg-[#FAF7F2]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Instant Booking</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Send Us an Enquiry / Get a Free Quote
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Our slogan "<span className="font-bold text-[#8B5E3C]">{BRAND_INFO.hindiTagline}</span>" stands for eternal trust. Fill out the form, click submit, and discuss your design directly on WhatsApp.
          </p>
        </div>

        {/* Dual-column block split */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Col 1: Decorative trust cards list (5-col) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-[#8B5E3C]/10 rounded-[2.5rem] p-6 sm:p-8 border border-[#A66A3F]/20 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-[#8B5E3C] mb-4">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                  <span className="text-sm font-extrabold uppercase tracking-widest">Why Book Direct?</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-black mb-4">
                  No Showroom Middlemen, Just Authentic Wood
                </h3>
                
                <ul className="space-y-4 text-xs sm:text-sm text-gray-500 font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>100% Seasoned Wood:</strong> We offer a 5-Year Termite & borer structural guarantee on premium Teak and Sheesham.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>Save 40% Commission:</strong> Direct workshop orders bypass high commercial rent markups of big retail showrooms.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>Tailored to measurements:</strong> Custom back cushioning, hydraulic lifting beds, and specific closet shelves.</span>
                  </li>
                </ul>
              </div>

              {/* Verified badge */}
              <div className="mt-8 pt-6 border-t border-[#A66A3F]/20 flex items-center gap-3">
                <div className="h-10 w-10 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 block">Trust Guarantee</span>
                  <span className="text-xs font-bold text-emerald-600">4.9★ Google Business Verified</span>
                </div>
              </div>
            </div>

            {/* Wedding combos banner ad */}
            <div className="bg-[#2F1B12] rounded-[2rem] p-6 border border-[#D4A373]/30 text-[#FAF7F2]">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4A373] bg-[#8B5E3C]/40 px-2.5 py-1 rounded-full border border-[#D4A373]/20 mb-3 inline-block">
                Wedding Season Special
              </span>
              <h4 className="text-lg font-serif font-bold mb-1.5">Vivaah Furniture Combos</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Need a full house setup for wedding gifting? Get Bed + Almirah + Dressing Table + Sofa set at a bundled combo discount. Select "Wedding Package" in the form.
              </p>
            </div>

          </div>

          {/* Col 2: The actual Form (7-col) */}
          <div 
            className={`lg:col-span-7 p-6 sm:p-8 rounded-[2.5rem] border ${
              isDark 
                ? "bg-[#2F1B12] border-[#FAF7F2]/10" 
                : "bg-white border-[#E5D7C9]"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                    }`}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 95045 01234"
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                    }`}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                    }`}
                  />
                </div>

                {/* City / Location */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Your City / Town *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Kahalgaon, Bhagalpur, etc."
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                    }`}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Select Product Category */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Select Furniture Product
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-black"
                    }`}
                  >
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sourced Wood Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Preferred Sourced Wood
                  </label>
                  <select
                    name="woodType"
                    value={formData.woodType}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-black"
                    }`}
                  >
                    {woodTypes.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Target Budget */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Your Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-black"
                    }`}
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Delivery Date */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                    Preferred Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-black"
                    }`}
                  />
                </div>
              </div>

              {/* Reference Image Upload (Mock UI) */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                  Upload Reference Image (Pinterest/Instagram screenshot)
                </label>
                <div className="relative border-2 border-dashed border-[#A66A3F]/30 rounded-xl p-4 text-center hover:bg-[#8B5E3C]/5 transition-all">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageMock}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-1.5">
                    <UploadCloud size={24} className="text-[#8B5E3C]" />
                    <span className="text-xs font-bold text-gray-500">
                      {formData.referenceImageName ? `Attached: ${formData.referenceImageName}` : "Click or drag reference image here"}
                    </span>
                    <span className="text-[10px] text-gray-400">Supports JPG, PNG (Max 5MB)</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-1">
                  Your Requirements / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about specific sizes, back cushions, storage boxes, or paint colors..."
                  className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                    isDark
                      ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                      : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                  }`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-101 cursor-pointer mt-4"
              >
                <MessageSquare size={18} />
                <span>Submit and Open WhatsApp chat</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

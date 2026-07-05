import { useState, useEffect } from "react";
import { MessageSquare, Calculator, Settings, HelpCircle, ShieldAlert, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function QuoteCalculator({ isDark }: { isDark: boolean }) {
  const [furnitureType, setFurnitureType] = useState("Bed");
  const [material, setMaterial] = useState("Teak");
  const [size, setSize] = useState("Medium");
  const [finish, setFinish] = useState("Melamine");
  const [quantity, setQuantity] = useState(1);
  const [estimate, setEstimate] = useState({ min: 18000, max: 24000 });

  const furnitureTypes = [
    { value: "Bed", label: "Classic Carving Bed", basePrice: 15000 },
    { value: "Sofa", label: "Living Room Sofa (per seat)", basePrice: 6500 },
    { value: "Dining", label: "Dining Table Set", basePrice: 14000 },
    { value: "Wardrobe", label: "Almirah / Wardrobe", basePrice: 16000 },
    { value: "Temple", label: "Handcrafted Temple", basePrice: 6000 },
    { value: "Table", label: "Study / Computer Table", basePrice: 5000 },
    { value: "Office", label: "Executive Desk", basePrice: 11000 },
    { value: "Chair", label: "Royal Accent Chair", basePrice: 2800 }
  ];

  const materials = [
    { value: "Teak", label: "A-Grade Teak (Sagwan)", multiplier: 1.5, desc: "Ultra premium, water & termite proof, lifetime heritage" },
    { value: "Sheesham", label: "Solid Sheesham (Rosewood)", multiplier: 1.3, desc: "High density grains, elegant patterns, highly strong" },
    { value: "Sal", label: "Treated Sal Wood", multiplier: 1.1, desc: "Extremely heavy, cost-efficient, great structural frames" },
    { value: "Mango", label: "Mango Hardwood", multiplier: 0.95, desc: "Sustainable wood, warm look, highly affordable" },
    { value: "Engineered", label: "Engineered Wood Laminate", multiplier: 0.75, desc: "Modern light weight board with waterproof seal" }
  ];

  const sizes = [
    { value: "Compact", label: "Compact / Custom Small", multiplier: 0.85 },
    { value: "Medium", label: "Medium / Standard Family Size", multiplier: 1.0 },
    { value: "Luxury", label: "Grand Premium / Double King Size", multiplier: 1.25 }
  ];

  const finishes = [
    { value: "PU", label: "Premium PU Gloss (Luxury coat)", priceAdded: 3000 },
    { value: "Melamine", label: "Clear Melamine (Durable shine)", priceAdded: 1500 },
    { value: "Antique", label: "Antique Matte Wood Wax", priceAdded: 1000 },
    { value: "Natural", label: "Natural Hand Polish", priceAdded: 500 }
  ];

  // Dynamically compute estimated pricing ranges whenever variables shift
  useEffect(() => {
    const selectedType = furnitureTypes.find((f) => f.value === furnitureType) || furnitureTypes[0];
    const selectedMat = materials.find((m) => m.value === material) || materials[0];
    const selectedSize = sizes.find((s) => s.value === size) || sizes[0];
    const selectedFinish = finishes.find((f) => f.value === finish) || finishes[0];

    const baseCost = selectedType.basePrice;
    const materialCost = baseCost * selectedMat.multiplier;
    const finalSizeCost = materialCost * selectedSize.multiplier;
    const finalPolishedCost = (finalSizeCost + selectedFinish.priceAdded) * quantity;

    // Build a min/max budget range around calculated value (e.g., -10% and +15%)
    const minEstimate = Math.round(finalPolishedCost * 0.9);
    const maxEstimate = Math.round(finalPolishedCost * 1.15);

    setEstimate({ min: minEstimate, max: maxEstimate });
  }, [furnitureType, material, size, finish, quantity]);

  // Construct instant prefilled WhatsApp text block
  const handleWhatsappQuote = () => {
    const selectedType = furnitureTypes.find((f) => f.value === furnitureType)?.label;
    const selectedMat = materials.find((m) => m.value === material)?.label;
    const selectedSize = sizes.find((s) => s.value === size)?.label;
    const selectedFinish = finishes.find((f) => f.value === finish)?.label;

    const message = `Hello Vishwakarma Furniture World! I calculated an estimate on your website and want to request a final quote for:
    
- Furniture Type: ${selectedType}
- Sourced Wood: ${selectedMat}
- Selected Size: ${selectedSize}
- Finish / Polish: ${selectedFinish}
- Quantity: ${quantity} item(s)
- Website Estimate: ₹${estimate.min.toLocaleString("en-IN")} - ₹${estimate.max.toLocaleString("en-IN")}

Please confirm if this is available for delivery to Banshipur/Kahalgaon region and when it can be ready!`;

    const url = `https://wa.me/${BRAND_INFO.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-[#2F1B12]" : "bg-[#FAF7F2]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8B5E3C] uppercase block mb-2">Estimate Generator</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Quick Furniture Quote Calculator
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Choose your wood specifications below to generate an instant budget range. Directly send details to our WhatsApp workshop for final custom pricing.
          </p>
        </div>

        {/* Form panel block */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Column 1: Config Selection (8-col) */}
          <div 
            className={`lg:col-span-7 p-6 sm:p-8 rounded-[2.5rem] border ${
              isDark 
                ? "bg-[#2F1B12] border-[#FAF7F2]/10" 
                : "bg-white border-[#E5D7C9]"
            }`}
          >
            <div className="space-y-6">
              
              {/* Row 1: Furniture type selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-2">
                  1. Select Furniture Item
                </label>
                <select
                  value={furnitureType}
                  onChange={(e) => setFurnitureType(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                    isDark
                      ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                      : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                  }`}
                >
                  {furnitureTypes.map((t) => (
                    <option key={t.value} value={t.value} className="text-black">
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 2: Solid wood Sourced Material selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-2">
                  2. Sourced Wood Type
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {materials.map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setMaterial(m.value)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-4 ${
                        material === m.value
                          ? "bg-[#8B5E3C]/10 border-[#8B5E3C] font-bold"
                          : "bg-transparent border-gray-300/30 hover:border-gray-400"
                      }`}
                    >
                      <div>
                        <span className="block font-bold">{m.label}</span>
                        <span className="block text-[11px] text-gray-500 font-medium">{m.desc}</span>
                      </div>
                      <span className="text-[10px] bg-[#8B5E3C] text-white px-2 py-0.5 rounded-md font-bold shrink-0">
                        x{m.multiplier} Cost
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Dimensions grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-2">
                    3. Dimensions / Size
                  </label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                    }`}
                  >
                    {sizes.map((s) => (
                      <option key={s.value} value={s.value} className="text-black">
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Polish Finish type selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-2">
                    4. Polish / Finish Type
                  </label>
                  <select
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-sm font-semibold focus:outline-hidden ${
                      isDark
                        ? "bg-[#FAF7F2]/15 border-[#FAF7F2]/15 text-[#FAF7F2]"
                        : "bg-[#FAF7F2] border-[#E5D7C9] text-[#2C1810]"
                    }`}
                  >
                    {finishes.map((f) => (
                      <option key={f.value} value={f.value} className="text-black">
                        {f.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Quantity stepper */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C] block mb-2">
                  5. Quantity (Units)
                </label>
                <div className="flex items-center gap-3">
                  <button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(quantity - 1)}
                    className={`w-11 h-11 rounded-lg border flex items-center justify-center font-bold transition-all ${
                      quantity <= 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#8B5E3C] hover:text-white"
                    }`}
                  >
                    -
                  </button>
                  <span className="text-lg font-extrabold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 rounded-lg border flex items-center justify-center font-bold hover:bg-[#8B5E3C] hover:text-white transition-all"
                  >
                    +
                  </button>
                  <span className="text-xs text-gray-500 font-semibold ml-2">
                    *Wedding comb packages get additional 10% off
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Estimate Display Box (5-col) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-[#2F1B12] rounded-[2.5rem] text-[#FAF7F2] relative overflow-hidden border border-[#D4A373]/30 shadow-2xl">
            {/* Background watermarked Calculator layout */}
            <div className="absolute right-[-40px] bottom-[-20px] opacity-5 text-white pointer-events-none">
              <Calculator size={220} />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8B5E3C]/30 border border-[#D4A373]/40 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#D4A373] mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                Instant Calculation
              </div>

              <span className="text-xs font-bold uppercase text-gray-400 block mb-1">
                Estimated Price Range
              </span>
              
              {/* Price bracket numbers */}
              <div className="flex flex-col mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold font-sans text-emerald-400 drop-shadow-sm tracking-tight animate-pulse">
                  ₹{estimate.min.toLocaleString("en-IN")} - ₹{estimate.max.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                  *Direct Workshop Pricing (No Showroom Commission)
                </span>
              </div>

              {/* Hindi slogan banner */}
              <div className="bg-[#FAF7F2]/5 rounded-xl p-3 border border-dashed border-[#D4A373]/20 mb-6 text-xs text-[#FAF7F2]/80 italic">
                <span className="block font-bold text-[#D4A373] not-italic mb-0.5">"{BRAND_INFO.hindiTagline}"</span>
                Our pricing reflects honest wood weights and certified craftsmanship that remains durable for generations.
              </div>

              <div className="space-y-2 text-xs text-gray-400 font-medium">
                <p className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Free door delivery in Kahalgaon region
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> 5-Year Solid Wood structural warranty
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Advanced anti-pest moisture seasoned
                </p>
              </div>
            </div>

            <button
              onClick={handleWhatsappQuote}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-900/35 hover:scale-102 transition-all mt-8 relative z-10"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Final Quote</span>
              <ArrowRight size={14} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

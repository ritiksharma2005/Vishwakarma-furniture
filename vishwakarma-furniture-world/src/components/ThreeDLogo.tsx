import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function ThreeDLogo({ size = 50, showText = true }: { size?: number; showText?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt effect on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hoverVal = useMotionValue(0);

  useEffect(() => {
    hoverVal.set(isHovered ? 1 : 0);
  }, [isHovered, hoverVal]);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 15 });
  
  // Depth translation for holographic effect
  const translateZ = useSpring(useTransform(hoverVal, [0, 1], [0, 20]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (normalized from -0.5 to 0.5)
    const relativeX = (event.clientX - rect.left) / width - 0.5;
    const relativeY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* 3D Perspective Container */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer flex items-center justify-center relative"
        style={{ 
          perspective: 800,
          width: size + 16,
          height: size + 16
        }}
      >
        <motion.div
          animate={{
            rotateY: isHovered ? rotateY.get() : [0, 5, -5, 0],
          }}
          transition={isHovered ? {} : {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
          className="relative flex items-center justify-center rounded-full bg-linear-to-br from-[#FAF7F2] to-[#E5D7C9] border border-[#A66A3F]/30 p-2 shadow-md hover:shadow-xl transition-shadow duration-300"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
            width: size + 10,
            height: size + 10,
          }}
        >
          {/* Wood grain ring effect */}
          <div className="absolute inset-[3px] rounded-full border border-dashed border-[#6B3E26]/20 animate-spin" style={{ animationDuration: "60s" }} />
          
          <motion.div 
            style={{ translateZ: translateZ }}
            className="w-full h-full relative"
          >
            {/* SVG Logo Graphic */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_2px_4px_rgba(107,62,38,0.2)]"
            >
              {/* Top Crescent with Furniture silhouettes */}
              <g>
                {/* Dark Crescent Base */}
                <path
                  d="M 15 35
                     A 39 39 0 0 1 85 35
                     A 33 33 0 0 0 15 35
                     Z"
                  fill="#1C1A17"
                />

                {/* Furniture Silhouettes inside crescent, styled with wood grain */}
                <g fill="url(#woodPattern)" stroke="url(#woodPattern)" strokeWidth="0.2" strokeLinejoin="round">
                  {/* Sofa / armchair (far left, rotated to follow arc) */}
                  <g transform="translate(19, 29) rotate(-22)">
                    <path d="M 1 4 L 7 4 L 7 1 L 6 1 L 6 3 L 2 3 L 2 1 L 1 1 Z" />
                    <rect x="2" y="2.2" width="4" height="1.8" rx="0.5" />
                  </g>

                  {/* Dresser/chest of drawers (left, rotated) */}
                  <g transform="translate(27, 21) rotate(-14)">
                    <rect x="0" y="0" width="6" height="4" rx="0.5" />
                    <line x1="0" y1="1.3" x2="6" y2="1.3" stroke="#2C1810" strokeWidth="0.3" />
                    <line x1="0" y1="2.6" x2="6" y2="2.6" stroke="#2C1810" strokeWidth="0.3" />
                  </g>

                  {/* Armchair (middle left, rotated) */}
                  <g transform="translate(36, 15) rotate(-6)">
                    <path d="M 0 3.5 H 5 V 2.5 C 5 1.5, 4 1, 3.5 1 H 1.5 C 1 1, 0 1.5, 0 2.5 Z" />
                    <rect x="1" y="2.2" width="3" height="1.3" rx="0.3" />
                  </g>

                  {/* Tall Wardrobe / Cabinet (center) */}
                  <g transform="translate(47, 11)">
                    <rect x="0" y="0" width="6" height="5" rx="0.5" />
                    <line x1="3" y1="0" x2="3" y2="5" stroke="#2C1810" strokeWidth="0.4" />
                    <circle cx="2.2" cy="2.5" r="0.4" fill="#2C1810" />
                    <circle cx="3.8" cy="2.5" r="0.4" fill="#2C1810" />
                  </g>

                  {/* Dining Table and Chair (middle right, rotated) */}
                  <g transform="translate(57, 14) rotate(6)">
                    {/* Table */}
                    <path d="M 2 3.5 H 7 V 1 H 2 Z" />
                    <line x1="3" y1="3.5" x2="3" y2="5" strokeWidth="0.6" />
                    <line x1="6" y1="3.5" x2="6" y2="5" strokeWidth="0.6" />
                    {/* Chair */}
                    <path d="M 0 5 V 1 H 1.2 V 3 H 2 V 5 Z" />
                  </g>

                  {/* Bed (right, rotated) */}
                  <g transform="translate(67, 19) rotate(14)">
                    {/* Headboard */}
                    <rect x="0" y="0" width="1.2" height="4.5" rx="0.2" />
                    {/* Bed base */}
                    <rect x="1.2" y="1.5" width="5.5" height="3" rx="0.4" />
                    {/* Pillows */}
                    <rect x="1.5" y="2" width="1.2" height="1" rx="0.2" />
                  </g>

                  {/* Small Sideboard / TV Cabinet (far right, rotated) */}
                  <g transform="translate(76, 27) rotate(22)">
                    <rect x="0" y="1" width="6" height="3" rx="0.5" />
                    <rect x="1.5" y="0" width="3" height="1" rx="0.2" />
                  </g>
                </g>
              </g>

              {/* Main Calligraphy VF Monogram */}
              <g>
                {/* Elegant V Left loop & down stroke */}
                <path
                  d="M 28 38 
                     C 20 38, 9 46, 9 55 
                     C 9 66, 17 84, 30 85 
                     C 33 85, 36 78, 41 68 
                     C 43 64, 41 62, 38 65
                     C 33 73, 29 80, 27 80
                     C 24 80, 14 65, 14 55
                     C 14 47, 21 42, 28 42
                     C 31 42, 33 45, 34 48
                     C 35 51, 33 53, 31 51
                     C 30 50, 29 47, 28 47
                     C 27 47, 26 48, 26 49
                     Z"
                  fill="url(#woodPattern)"
                />

                {/* Main Calligraphic stem of V / F */}
                <path
                  d="M 30 85
                     C 30 85, 42 62, 54 40
                     C 56 36, 59 31, 62 31
                     C 66 31, 74 34, 78 34
                     C 80 34, 79 38, 77 37
                     C 73 36, 68 35, 64 35
                     C 61 35, 58 39, 56 42
                     L 31 85
                     Z"
                  fill="url(#woodPattern)"
                />

                {/* F Middle Crossbar */}
                <path
                  d="M 48 53
                     C 53 53, 58 53, 62 53
                     C 64 53, 65 55, 63 55
                     C 58 55, 52 55, 46 55
                     C 45 55, 45 53, 48 53
                     Z"
                  fill="url(#woodPattern)"
                />

                {/* Drawer / Box silhouette sitting on F Crossbar */}
                <g transform="translate(56, 46)">
                  {/* Box frame */}
                  <rect x="0" y="0" width="8" height="7" rx="1" fill="url(#woodPattern)" stroke="#2C1810" strokeWidth="0.5" />
                  {/* Drawer line */}
                  <line x1="0" y1="3.5" x2="8" y2="3.5" stroke="#2C1810" strokeWidth="0.5" />
                  {/* Small knobs */}
                  <circle cx="4" cy="1.7" r="0.5" fill="#FAF7F2" />
                  <circle cx="4" cy="5.2" r="0.5" fill="#FAF7F2" />
                </g>
              </g>

              {/* Bottom Sweeping Swooshes */}
              <g>
                {/* Upper thicker black swoosh */}
                <path
                  d="M 12 76
                     C 22 88, 52 94, 76 82
                     C 86 77, 91 66, 91 50
                     C 91 52, 88 74, 74 81
                     C 52 91, 24 86, 12 76
                     Z"
                  fill="#1C1A17"
                />
                {/* Lower thinner black swoosh */}
                <path
                  d="M 37 92
                     C 52 95, 78 91, 89 62
                     C 90 59, 91 58, 91 60
                     C 89 87, 62 94, 37 92
                     Z"
                  fill="#1C1A17"
                />
              </g>

              {/* Multi-stop wood grain pattern gradient */}
              <defs>
                <linearGradient id="woodPattern" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2C1810" />
                  <stop offset="15%" stopColor="#4A2B1B" />
                  <stop offset="30%" stopColor="#6B3E26" />
                  <stop offset="45%" stopColor="#8B5E3C" />
                  <stop offset="60%" stopColor="#6B3E26" />
                  <stop offset="75%" stopColor="#4A2B1B" />
                  <stop offset="90%" stopColor="#8B5E3C" />
                  <stop offset="100%" stopColor="#2C1810" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {showText && (
        <div className="flex flex-col select-none">
          {/* Shop name on top in beautiful walnut brown */}
          <motion.h1 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif font-extrabold tracking-widest text-[#2C1810] text-lg sm:text-xl md:text-2xl leading-none uppercase"
          >
            Vishwakarma
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#A66A3F] uppercase leading-normal"
          >
            Furniture World
          </motion.span>
        </div>
      )}
    </div>
  );
}

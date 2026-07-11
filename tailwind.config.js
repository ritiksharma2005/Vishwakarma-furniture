/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        walnut: {
          950: '#1c110a',
          900: '#2b1b12',
          800: '#3e2417',
          700: '#54301f',
        },
        teak: {
          600: '#8b5a2b',
          500: '#a66a3d',
          400: '#c08a5b',
        },
        sawdust: {
          100: '#faf5ea',
          200: '#f3e9d2',
          300: '#e9d9b8',
        },
        workshop: {
          green: '#1f4d36',
          greendark: '#123425',
        },
        brass: {
          DEFAULT: '#c08a28',
          light: '#e0ad4d',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'plank-in': {
          '0%': { transform: 'translateY(24px) rotateX(-8deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotateX(0)', opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbit: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(-360deg)' },
        },
        'sawdust-rise': {
          '0%': { transform: 'translateY(10px) translateX(0) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-160px) translateX(var(--drift, 20px)) rotate(220deg)', opacity: '0' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'flash-pulse': {
          '0%,100%': { opacity: '0' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        'plank-in': 'plank-in 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'spin-slow': 'spin-slow 6s linear infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        orbit: 'orbit 5s linear infinite',
        'sawdust-rise': 'sawdust-rise 2.8s ease-out infinite',
        'progress-fill': 'progress-fill 2.3s cubic-bezier(0.4,0,0.2,1) forwards',
        'flash-pulse': 'flash-pulse 1.1s ease-out 1',
      },
    },
  },
  plugins: [],
}

import { useEffect, useRef, useState } from 'react'
import VFLogo3D from './VFLogo3D'
import { SHOP } from '../data/content'

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({ x, y })
    }
    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-walnut-950 pt-20"
    >
      {/* background workshop image */}
      <div className="absolute inset-0">
        <img
          src="/images/workshop-entrance.jpg"
          alt="Vishwakarma Furniture workshop, Kahalgaon"
          className="w-full h-full object-cover opacity-25 scale-110"
          style={{
            transform: `scale(1.1) translate(${tilt.x * -10}px, ${tilt.y * -10}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-walnut-950/60 via-walnut-950/85 to-walnut-950" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
        <div>
          <div className="flex items-center gap-3 mb-6 reveal is-visible">
            <span className="h-px w-10 bg-brass-light/60" />
            <span className="text-brass-light text-xs tracking-[0.3em] uppercase font-medium">
              Banshipur · Kahalgaon · Bhagalpur
            </span>
          </div>

          <h1 className="font-display font-black text-sawdust-100 leading-[1.02] text-[clamp(2.5rem,6vw,4.75rem)] reveal is-visible" style={{ transitionDelay: '80ms' }}>
            Furniture carved by
            <br />
            <span className="shimmer-text italic">hand, not habit</span>
          </h1>

          <p className="devanagari mt-5 text-xl text-sawdust-200/80 reveal is-visible" style={{ transitionDelay: '160ms' }}>
            {SHOP.taglineHi}
          </p>

          <p className="mt-4 max-w-xl text-sawdust-300/80 leading-relaxed reveal is-visible" style={{ transitionDelay: '220ms' }}>
            Every home holds a few pieces that quietly become part of the family — the sofa
            where evenings are spent, the bed where dreams are made, the table where
            everyone gathers at the end of the day. That's what {SHOP.proprietorHi}'s hands
            build for you, one plank at a time, in our own Kahalgaon workshop — furniture
            made to be lived in, not just looked at, and to stay with your family for years
            to come.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 reveal is-visible" style={{ transitionDelay: '300ms' }}>
            <a
              href="#products"
              className="rounded-full bg-brass hover:bg-brass-light text-walnut-950 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all hover:scale-105 hover:shadow-lg hover:shadow-brass/30"
            >
              View Our Furniture
            </a>
            <a
              href={`tel:+91${SHOP.phone}`}
              className="rounded-full border border-sawdust-100/25 hover:border-brass-light/70 text-sawdust-100 px-7 py-3.5 text-sm font-medium transition-all hover:text-brass-light"
            >
              Call {SHOP.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-sawdust-300/60 reveal is-visible" style={{ transitionDelay: '360ms' }}>
            <span>GSTIN: {SHOP.gst}</span>
            <span className="hidden sm:inline">·</span>
            <span>{SHOP.schemeShort}</span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end reveal is-visible" style={{ transitionDelay: '200ms' }}>
          <div
            className="animate-float"
            style={{
              transform: `rotateX(${tilt.y * -10}deg) rotateY(${tilt.x * 14}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <VFLogo3D size={280} spinning={false} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-3 molding" />
    </section>
  )
}

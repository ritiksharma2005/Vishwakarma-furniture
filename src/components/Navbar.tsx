import { useEffect, useState } from 'react'
import { SHOP } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Craft' },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-walnut-950/95 shadow-lg shadow-black/20 backdrop-blur' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <img src="/images/vf-logo.jpg" alt="Vishwakarma Furniture logo" className="w-9 h-9 md:w-11 md:h-11 rounded-full ring-2 ring-brass/60 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <div className="leading-tight">
              <p className="font-display font-semibold text-sawdust-100 text-sm md:text-base tracking-wide">Vishwakarma <span className="text-brass-light">Furniture</span></p>
              <p className="devanagari text-[10px] md:text-xs text-sawdust-300/70">विश्वकर्मा फर्नीचर, कहलगाँव</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-sawdust-200/85 hover:text-brass-light transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brass-light after:transition-all hover:after:w-full">{l.label}</a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:+91${SHOP.phone}`} className="inline-flex items-center gap-2 rounded-full border border-brass/50 px-4 py-2 text-xs font-medium text-brass-light hover:bg-brass/10 transition-colors"><PhoneIcon />{SHOP.phoneDisplay}</a>
            <a href="#feedback" className="rounded-full bg-brass hover:bg-brass-light text-walnut-950 px-5 py-2 text-xs font-semibold tracking-wide transition-colors">Get a Quote</a>
          </div>
             {/* 👇 THIS is the hamburger/close button — goes right here */}
        <button onClick={() => setOpen((o) => !o)} className="lg:hidden relative z-[80] text-sawdust-100 p-2" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

          <button onClick={() => setOpen((o) => !o)} className="lg:hidden relative z-[80] text-sawdust-100 p-2" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      {/* Menu lives OUTSIDE <header> on purpose — header uses backdrop-blur,
          which creates a containing block for fixed children and would trap
          this overlay inside the header's small box instead of the full screen. */}
      <div className={`lg:hidden fixed inset-0 z-[70] transition-opacity duration-300 overflow-y-auto ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-walnut-950" />
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(224,173,77,0.12), transparent 55%)' }} />
        <div className="absolute top-0 inset-x-0 h-2 molding" />

        <div className="relative min-h-full flex flex-col justify-center px-8 py-28">
          <div className="flex flex-col items-center mb-8">
            <img src="/images/vf-logo.jpg" alt="Vishwakarma Furniture" className="w-14 h-14 rounded-full ring-2 ring-brass/50 mb-3" />
            <p className="devanagari text-xs text-sawdust-300/60">विश्वकर्मा फर्नीचर</p>
          </div>

          <div className="flex flex-col gap-1">
            {LINKS.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-4 text-2xl font-display text-sawdust-100 border-b border-brass/15 transition-all hover:text-brass-light" style={{ transitionDelay: open ? `${i * 40}ms` : '0ms', opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(8px)' }}>{l.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-8 shrink-0">
            <div className="flex gap-3">
              <a href={`tel:+91${SHOP.phone}`} onClick={() => setOpen(false)} className="flex-1 text-center rounded-full border border-brass/50 py-3 text-sm font-medium text-brass-light">Call Now</a>
              <a href="#feedback" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full bg-brass text-walnut-950 py-3 text-sm font-semibold">Get a Quote</a>
            </div>

            <a href={`https://wa.me/91${SHOP.phone}`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="text-center rounded-full border border-white/10 py-3 text-sm font-medium text-sawdust-200/85 hover:border-brass/40 hover:text-brass-light transition-colors">WhatsApp Us</a>

            <p className="text-center text-xs text-sawdust-300/50 mt-2">GSTIN: {SHOP.gst} · {SHOP.schemeShort}</p>
          </div>
        </div>
      </div>
    </>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.4 20.6 3.4 13.6 3.4 4.9c0-.6.4-1 1-1H7.8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2 2z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

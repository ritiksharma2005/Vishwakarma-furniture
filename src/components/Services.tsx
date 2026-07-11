import Reveal from './Reveal'
import { SERVICES } from '../data/content'
import type { ServiceItem } from '../types'

export default function Services() {
  return (
    <section id="services" className="relative bg-workshop-greendark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-brass-light text-xs tracking-[0.3em] uppercase font-semibold">
            Beyond the Showroom
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-sawdust-100">
            Services we offer
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="h-full rounded-2xl bg-workshop-green/40 border border-brass/20 p-6 hover:border-brass/50 hover:bg-workshop-green/60 transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-brass/15 flex items-center justify-center mb-5 text-brass-light">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="font-display font-semibold text-lg text-sawdust-100 mb-2">{service.title}</h3>
      <p className="text-sm text-sawdust-300/75 leading-relaxed">{service.description}</p>
    </div>
  )
}

function ServiceIcon({ icon }: { icon: ServiceItem['icon'] }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' as const }
  switch (icon) {
    case 'design':
      return (
        <svg {...common}>
          <path d="M4 20l4.5-1.2L19.8 7.5a1.5 1.5 0 000-2.1l-1.2-1.2a1.5 1.5 0 00-2.1 0L5.2 15.5 4 20z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'bulk':
      return (
        <svg {...common}>
          <path d="M3 8l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M3 8v8l9 4 9-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    case 'delivery':
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="7" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'scheme':
      return (
        <svg {...common}>
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'gst':
      return (
        <svg {...common}>
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'repair':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
  }
}

import Reveal from './Reveal'
import { SHOP } from '../data/content'

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.mapsQuery)}&z=15&output=embed`

  return (
    <section id="contact" className="relative bg-walnut-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">Visit / Call</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-8 text-sawdust-100">
            Come see the workshop
          </h2>

          <div className="space-y-5">
            <ContactRow icon="pin" label="Address">
              {SHOP.address}
            </ContactRow>
            <ContactRow icon="phone" label="Phone">
              <a href={`tel:+91${SHOP.phone}`} className="hover:text-brass-light transition-colors">
                {SHOP.phoneDisplay}
              </a>
            </ContactRow>
            <ContactRow icon="clock" label="Hours">
              {SHOP.hours.map((h) => (
                <span key={h.day} className="block">
                  {h.day}: {h.time}
                </span>
              ))}
            </ContactRow>
            <ContactRow icon="insta" label="Instagram">
              <a href={SHOP.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-brass-light transition-colors">
                @{SHOP.instagram}
              </a>
            </ContactRow>
            <ContactRow icon="gst" label="GSTIN">
              <span className="font-mono text-sm">{SHOP.gst}</span>
            </ContactRow>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:+91${SHOP.phone}`}
              className="rounded-full bg-brass hover:bg-brass-light text-walnut-950 px-6 py-3 text-sm font-semibold transition-colors"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/91${SHOP.phone}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sawdust-100/25 hover:border-brass-light/60 text-sawdust-100 px-6 py-3 text-sm font-medium transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={SHOP.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sawdust-100/25 hover:border-brass-light/60 text-sawdust-100 px-6 py-3 text-sm font-medium transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl overflow-hidden carved-panel h-[420px] lg:h-full min-h-[380px]">
            <iframe
              title="Vishwakarma Furniture location map"
              src={mapSrc}
              className="w-full h-full grayscale-[15%] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: 'pin' | 'phone' | 'clock' | 'insta' | 'gst'
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-10 h-10 rounded-full bg-brass/10 border border-brass/30 flex items-center justify-center text-brass-light">
        <RowIcon icon={icon} />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-sawdust-300/50 mb-1">{label}</p>
        <div className="text-sawdust-100 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function RowIcon({ icon }: { icon: 'pin' | 'phone' | 'clock' | 'insta' | 'gst' }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' as const }
  switch (icon) {
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-11.5A7 7 0 105 9.5C5 14.6 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.4 20.6 3.4 13.6 3.4 4.9c0-.6.4-1 1-1H7.8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2 2z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'insta':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      )
    case 'gst':
      return (
        <svg {...common}>
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}

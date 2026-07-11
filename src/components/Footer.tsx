import { SHOP } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative bg-walnut-950 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-3 molding" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/vf-logo.jpg" alt="Vishwakarma Furniture" className="w-10 h-10 rounded-full ring-2 ring-brass/50" />
              <p className="font-display font-semibold text-sawdust-100">Vishwakarma Furniture</p>
            </div>
            <p className="text-sm text-sawdust-300/60 leading-relaxed">{SHOP.tagline}</p>
          </div>

          <FooterCol title="Explore">
            <FooterLink href="#products">Products</FooterLink>
            <FooterLink href="#process">Our Craft</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#reviews">Reviews</FooterLink>
          </FooterCol>

          <FooterCol title="Get in touch">
            <FooterLink href={`tel:+91${SHOP.phone}`}>{SHOP.phoneDisplay}</FooterLink>
            <FooterLink href={SHOP.instagramUrl}>@{SHOP.instagram}</FooterLink>
            <FooterLink href="#feedback">Send an enquiry</FooterLink>
          </FooterCol>

          <FooterCol title="Visit">
            <p className="text-sm text-sawdust-300/60 leading-relaxed">{SHOP.address}</p>
            <p className="text-xs text-sawdust-300/45 mt-3 font-mono">GSTIN {SHOP.gst}</p>
          </FooterCol>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-sawdust-300/40">
          <p>© {new Date().getFullYear()} Vishwakarma Furniture, Banshipur, Kahalgaon. All rights reserved.</p>
          <p className="devanagari">विश्वकर्मा फर्नीचर — निष्ठा से निर्मित</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-brass-light/80 mb-4">{title}</p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="text-sm text-sawdust-300/65 hover:text-brass-light transition-colors w-fit"
    >
      {children}
    </a>
  )
}

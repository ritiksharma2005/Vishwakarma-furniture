import Reveal from './Reveal'
import { SHOP } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative bg-sawdust-200 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative carved-panel rounded-2xl p-2">
            <div className="relative rounded-xl overflow-hidden">
              <img src="/images/workshop-entrance.jpg" alt="Inside the Vishwakarma Furniture workshop" className="w-full h-[420px] object-cover" />
              <div className="absolute bottom-4 right-4 bg-walnut-950/95 text-sawdust-100 rounded-2xl px-5 py-4 shadow-xl border border-brass/30 max-w-[200px] backdrop-blur-sm">
                <p className="font-display text-lg font-bold text-brass-light leading-tight">100% Solid Wood</p>
                <p className="text-[10px] uppercase tracking-wider text-sawdust-300/70 mt-1">Hand-carved in-house</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">Our Story</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-walnut-900">A workshop, not a warehouse</h2>
          <p className="text-walnut-800/85 leading-relaxed mb-4">
            {SHOP.name} sits right on the ground in Banshipur, Kahalgaon — every sofa, bed and dining set you see on our shop board and Instagram page is built inside that same workshop, plank by plank. There's no factory line here; there's a saw, a lathe, a carving chisel, and a team that has spent years learning where a grain runs and where a joint needs to be cut by hand.
          </p>
          <p className="text-walnut-800/85 leading-relaxed mb-8">
            Run by {SHOP.proprietorHi} and empanelled under the <span className="devanagari">Mukhyamantri Pichhड़ा Varg Udyami Yojana</span>, the unit is registered, GST-billed, and open for everything from a single hand-carved chair to a bulk order for an entire hostel.
          </p>

          <div className="grid grid-cols-2 gap-5">
            <FactCard label="Workshop" value="Banshipur, Kahalgaon" />
            <FactCard label="GSTIN" value={SHOP.gst} mono />
            <FactCard label="Proprietor" value={SHOP.proprietorHi} devanagari />
            <FactCard label="Status" value="Govt. Scheme Registered" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FactCard({ label, value, mono, devanagari }: { label: string; value: string; mono?: boolean; devanagari?: boolean }) {
  return (
    <div className="rounded-xl bg-white/60 border border-walnut-900/10 p-4">
      <p className="text-[10px] uppercase tracking-widest text-walnut-800/50 mb-1">{label}</p>
      <p className={`text-sm font-medium text-walnut-900 ${mono ? 'font-mono text-xs' : ''} ${devanagari ? 'devanagari' : ''}`}>{value}</p>
    </div>
  )
}

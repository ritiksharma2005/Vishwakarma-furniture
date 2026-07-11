import Reveal from './Reveal'
import { SHOP } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative bg-sawdust-200 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden carved-panel p-2">
            <img
              src="/images/workshop-entrance.jpg"
              alt="Inside the Vishwakarma Furniture workshop"
              className="rounded-xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-walnut-950 text-sawdust-100 rounded-2xl px-6 py-5 shadow-xl border border-brass/30 hidden sm:block">
              <p className="font-display text-xl font-bold text-brass-light">100% Solid Wood</p>
              <p className="text-[11px] uppercase tracking-wider text-sawdust-300/70 mt-1">
                Hand-carved in-house
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">Our Story</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-walnut-900">
            A workshop, not a warehouse
          </h2>
          <p className="text-walnut-800/85 leading-relaxed mb-4">
            {SHOP.name} : Step into Vishwakarma Furniture, and you'll discover more than a showroom—you'll find the workshop where every piece comes to life. Located in Banshipur, Kahalgaon, our skilled artisans craft each sofa, bed, dining set, and wardrobe by hand, carefully shaping every plank, carving every detail, and strengthening every joint. With no assembly-line production, each piece is built with precision, passion, and a commitment to quality that lasts for generations.
          </p>
          <p className="text-walnut-800/85 leading-relaxed mb-8">
            Run by {SHOP.proprietorHi} and his family, the workshop has been in operation for over 20 years. Every piece of furniture is a testament to their dedication to quality and craftsmanship.
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

function FactCard({
  label,
  value,
  mono,
  devanagari,
}: {
  label: string
  value: string
  mono?: boolean
  devanagari?: boolean
}) {
  return (
    <div className="rounded-xl bg-white/60 border border-walnut-900/10 p-4">
      <p className="text-[10px] uppercase tracking-widest text-walnut-800/50 mb-1">{label}</p>
      <p
        className={`text-sm font-medium text-walnut-900 ${mono ? 'font-mono text-xs' : ''} ${
          devanagari ? 'devanagari' : ''
        }`}
      >
        {value}
      </p>
    </div>
  )
}

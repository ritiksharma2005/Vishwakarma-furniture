import { useRef, useState } from 'react'
import Reveal from './Reveal'
import { PRODUCT_CATEGORIES } from '../data/content'
import type { ProductCategory } from '../types'

export default function Products() {
  return (
    <section id="products" className="relative bg-walnut-950 py-24 md:py-32">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">
            What We Make
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-sawdust-100">
            Every room, in solid wood
          </h2>
          <p className="text-sawdust-300/70 mt-4 leading-relaxed">
            A look at what leaves our workshop most often. Don't see what you need? Every
            piece here started as a custom request — tell us yours below.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-7">
          {PRODUCT_CATEGORIES.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: ProductCategory }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 10}deg) scale3d(1.02,1.02,1.02)`,
    })
  }
  const handleLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)' })

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ ...style, transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }}
      className="group relative rounded-2xl overflow-hidden carved-panel"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/95 via-walnut-950/10 to-transparent" />
      </div>

      <div className="p-6 -mt-16 relative">
        <h3 className="font-display font-semibold text-2xl text-sawdust-100">{product.name}</h3>
        <p className="devanagari text-sm text-brass-light/80 mb-3">{product.nameHi}</p>
        <p className="text-sm text-sawdust-300/75 leading-relaxed mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-3 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass-light"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href="#feedback"
          className="inline-flex items-center gap-2 text-sm font-medium text-sawdust-100 hover:text-brass-light transition-colors"
        >
          Enquire about this
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  )
}

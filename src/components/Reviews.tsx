import Reveal from './Reveal'
import { TESTIMONIALS, SHOP } from '../data/content'
import type { Testimonial } from '../types'

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-sawdust-200 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-14 flex flex-col">
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">
            What Customers Say
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-walnut-900">
            Reviews from real orders
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <ReviewCard t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <a
            href={SHOP.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-teak-600 hover:text-brass underline underline-offset-4"
          >
            View all reviews on Google & Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <div className="h-full flex flex-col rounded-2xl bg-white/70 border border-walnut-900/10 p-6 hover:shadow-xl hover:shadow-walnut-900/5 transition-shadow">
      <div className="flex gap-0.5 mb-4 text-brass">
        {Array.from({ length: t.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-sm text-walnut-800/85 leading-relaxed flex-1">"{t.quote}"</p>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-walnut-900">{t.name}</p>
        <span className="text-[10px] uppercase tracking-wider text-walnut-800/45">{t.source}</span>
      </div>
    </div>
  )
}

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.7z" />
    </svg>
  )
}

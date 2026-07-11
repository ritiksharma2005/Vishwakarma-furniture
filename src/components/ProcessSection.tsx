import Reveal from './Reveal'
import { PROCESS_STEPS } from '../data/content'

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-sawdust-200 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">
            From Timber to Table
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-walnut-900">
            How a piece gets made
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-1 molding rounded-full" />
          <div className="grid lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:text-center">
                  <div className="shrink-0 relative z-10 w-[72px] h-[72px] rounded-full carved-panel flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-sawdust-100">
                      {String(s.step).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:mt-2">
                    <h3 className="font-display font-semibold text-lg text-walnut-900">{s.title}</h3>
                    <p className="devanagari text-xs text-teak-600 mb-2">{s.titleHi}</p>
                    <p className="text-sm text-walnut-800/75 leading-relaxed lg:max-w-[220px] lg:mx-auto">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

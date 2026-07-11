import { FormEvent, useState } from 'react'
import Reveal from './Reveal'
import { SHOP, PRODUCT_CATEGORIES } from '../data/content'
import type { FeedbackFormData } from '../types'

const EMPTY: FeedbackFormData = { name: '', phone: '', interest: '', message: '' }

// 1. Sign up at https://formspree.io using dh9504501234@gmail.com
// 2. Create a new form there, copy the endpoint it gives you
// 3. Paste it in place of the placeholder below
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const OWNER_EMAIL = 'dh9504501234@gmail.com'

export default function FeedbackForm() {
  const [form, setForm] = useState<FeedbackFormData>(EMPTY)
  const [errors, setErrors] = useState<Partial<FeedbackFormData>>({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const validate = (): boolean => {
    const next: Partial<FeedbackFormData> = {}
    if (!form.name.trim()) next.name = 'Please tell us your name'
    if (!/^\d{10}$/.test(form.phone.trim())) next.phone = 'Enter a valid 10-digit number'
    if (!form.message.trim()) next.message = 'Add a short message about what you need'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildWhatsAppLink = () => {
    const text = `Hi Vishwakarma Furniture, my name is ${form.name} (${form.phone}).%0AInterested in: ${
      form.interest || 'General enquiry'
    }%0A${form.message}`
    return `https://wa.me/91${SHOP.phone}?text=${text}`
  }

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a customer'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest || 'General enquiry'}\n\nMessage:\n${form.message}`
    )
    return `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    setSendError(false)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setSendError(true)
      }
    } catch {
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  const handleWhatsApp = () => {
    if (!validate()) return
    window.open(buildWhatsAppLink(), '_blank')
    setSent(true)
  }

  return (
    <section id="feedback" className="relative bg-sawdust-100 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-brass text-xs tracking-[0.3em] uppercase font-semibold">Query · Feedback · Enquiry</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-walnut-900">Tell us what you need</h2>
          <p className="text-walnut-800/70 mt-4 max-w-xl mx-auto">Product enquiry, bulk order, feedback on a past order, or just a question — send it here and we'll get back to you on call, WhatsApp or email.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl carved-panel p-1.5">
            <div className="rounded-[1.3rem] bg-sawdust-100 p-6 md:p-10">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-workshop-green/10 border border-workshop-green/30 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5l4.5 4.5L19 7" stroke="#1F4D36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-walnut-900 mb-2">Thank you, {form.name.split(' ')[0]}!</h3>
                  <p className="text-walnut-800/70 max-w-sm mx-auto">Your message has been sent. Our team will reach out to you on {form.phone} shortly — or call us directly at {SHOP.phoneDisplay}.</p>
                  <button onClick={() => { setForm(EMPTY); setSent(false); setSendError(false) }} className="mt-6 text-sm font-medium text-teak-600 hover:text-brass underline underline-offset-4">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6" noValidate>
                  <Field label="Your Name" error={errors.name}>
                    <input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Ramesh Kumar" className={inputClass(!!errors.name)} />
                  </Field>

                  <Field label="Phone Number" error={errors.phone}>
                    <input type="tel" name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })} placeholder="10-digit mobile number" className={inputClass(!!errors.phone)} />
                  </Field>

                  <Field label="What are you interested in?" className="sm:col-span-2">
                    <select name="interest" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={inputClass(false)}>
                      <option value="">Select a category (optional)</option>
                      {PRODUCT_CATEGORIES.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
                      <option value="Repair / Repolish">Repair / Repolish</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </Field>

                  <Field label="Message" error={errors.message} className="sm:col-span-2">
                    <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us the size, wood, colour or anything else you have in mind…" rows={4} className={inputClass(!!errors.message)} />
                  </Field>

                  {sendError && (
                    <p className="sm:col-span-2 text-sm text-red-700/80 -mt-2">Something went wrong sending that. Please try WhatsApp or email below instead.</p>
                  )}

                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                    <button type="submit" disabled={sending} className="flex-1 rounded-full bg-brass hover:bg-brass-light text-walnut-950 px-6 py-3.5 text-sm font-semibold transition-colors disabled:opacity-60">
                      {sending ? 'Sending…' : 'Send Message'}
                    </button>
                    <button type="button" onClick={handleWhatsApp} className="flex-1 rounded-full border border-workshop-green/40 hover:bg-workshop-green/5 text-workshop-green px-6 py-3.5 text-sm font-semibold transition-colors">
                      Send via WhatsApp
                    </button>
                  </div>

                  <a href={buildMailtoLink()} className="sm:col-span-2 text-center text-xs text-walnut-800/50 hover:text-brass underline underline-offset-4">
                    Or email us directly at {OWNER_EMAIL}
                  </a>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, error, children, className = '' }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium text-walnut-800/70 mb-2 block">{label}</span>
      {children}
      {error && <span className="text-xs text-red-700/80 mt-1 block">{error}</span>}
    </label>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border ${hasError ? 'border-red-400' : 'border-walnut-900/15'} bg-white/70 px-4 py-3 text-sm text-walnut-900 placeholder:text-walnut-800/35 focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass/50 transition-shadow`
}
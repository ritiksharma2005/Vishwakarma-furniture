import { useEffect, useRef } from 'react'

/**
 * Adds `.reveal` to the element and toggles `.is-visible` when it enters
 * the viewport, using IntersectionObserver. Respects prefers-reduced-motion
 * implicitly via the CSS override in index.css.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

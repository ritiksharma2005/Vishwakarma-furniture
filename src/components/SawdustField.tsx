import { useMemo } from 'react'

interface SawdustFieldProps {
  count?: number
}

export default function SawdustField({ count = 16 }: SawdustFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: 30 + Math.random() * 40,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 2800,
        duration: 2200 + Math.random() * 1400,
        drift: `${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 60}px`,
        rotate: Math.random() > 0.5,
      })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="sawdust-chip"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * (p.rotate ? 1.6 : 1),
              '--sd-delay': `${p.delay}ms`,
              '--drift': p.drift,
              animationDuration: `${p.duration}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

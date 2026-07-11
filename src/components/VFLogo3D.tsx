interface VFLogo3DProps {
  size?: number
  spinning?: boolean
  assembling?: boolean
  className?: string
}

// Each wood layer + the ring + the monogram flies in from a different
// direction when `assembling` is true, so the medallion looks like it's
// being clapped together out of loose planks rather than just fading in.
const ENTRY_VECTORS = [
  { fx: '-140px', fy: '-40px', frot: '-35deg' },
  { fx: '140px', fy: '-60px', frot: '30deg' },
  { fx: '-120px', fy: '80px', frot: '25deg' },
  { fx: '130px', fy: '90px', frot: '-28deg' },
  { fx: '0px', fy: '-140px', frot: '15deg' },
  { fx: '0px', fy: '140px', frot: '-15deg' },
]

export default function VFLogo3D({ size = 220, spinning = true, assembling = false, className = '' }: VFLogo3DProps) {
  const layers = 6
  const pieceStyle = (i: number, extra: React.CSSProperties = {}): React.CSSProperties => {
    if (!assembling) return extra
    const v = ENTRY_VECTORS[i % ENTRY_VECTORS.length]
    return {
      ...extra,
      ['--fx' as any]: v.fx,
      ['--fy' as any]: v.fy,
      ['--frot' as any]: v.frot,
      ['--delay' as any]: `${i * 70}ms`,
    }
  }

  return (
    <div className={`perspective-1200 ${className}`} style={{ width: size, height: size }}>
      <div className={`relative w-full h-full preserve-3d ${spinning ? 'animate-spin-slow' : ''}`}>
        {Array.from({ length: layers }).map((_, i) => {
          const z = (i - (layers - 1) / 2) * 6
          const scale = 1 - Math.abs(i - (layers - 1) / 2) * 0.012
          return (
            <div
              key={i}
              className={`absolute inset-0 rounded-full backface-hidden ${assembling ? 'assemble-piece' : ''}`}
              style={pieceStyle(i, {
                transform: `translateZ(${z}px) scale(${scale})`,
                background:
                  i === layers - 1
                    ? 'radial-gradient(circle at 32% 28%, #e0ad4d, #a66a3d 55%, #54301f 100%)'
                    : 'linear-gradient(160deg, #8b5a2b, #3e2417)',
                boxShadow:
                  i === layers - 1
                    ? 'inset 0 3px 6px rgba(255,255,255,0.35), inset 0 -8px 16px rgba(0,0,0,0.5), 0 12px 30px -6px rgba(0,0,0,0.6)'
                    : 'inset 0 2px 3px rgba(255,255,255,0.12)',
              })}
            />
          )
        })}

        {/* carved ring */}
        <div
          className={`absolute inset-[8%] rounded-full backface-hidden ${assembling ? 'assemble-piece' : ''}`}
          style={pieceStyle(4, {
            transform: 'translateZ(26px)',
            border: '2px solid rgba(224,173,77,0.55)',
            boxShadow: 'inset 0 0 0 6px rgba(28,17,10,0.35)',
          })}
        />

        {/* VF monogram */}
        <div
          className={`absolute inset-0 flex items-center justify-center backface-hidden ${assembling ? 'assemble-piece' : ''}`}
          style={pieceStyle(5, { transform: 'translateZ(30px)' })}
        >
          <span
            className="font-display font-black italic select-none text-carve"
            style={{ fontSize: size * 0.34, color: '#f3e9d2', letterSpacing: '-0.03em' }}
          >
            VF
          </span>
        </div>

        {/* impact flash when pieces land */}
        {assembling && (
          <div
            className="absolute inset-[-20%] rounded-full pointer-events-none animate-flash-pulse"
            style={{
              transform: 'translateZ(32px)',
              background: 'radial-gradient(circle, rgba(224,173,77,0.9), transparent 65%)',
              animationDelay: '650ms',
            }}
          />
        )}
      </div>
    </div>
  )
}
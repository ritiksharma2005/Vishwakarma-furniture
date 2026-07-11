interface OrbitingToolsProps {
  radius?: number
  size?: number
}

export default function OrbitingTools({ radius = 150, size = 220 }: OrbitingToolsProps) {
  const tools: { icon: JSX.Element; angle: number }[] = [
    { icon: <HammerIcon />, angle: 0 },
    { icon: <SawIcon />, angle: 90 },
    { icon: <ChiselIcon />, angle: 180 },
    { icon: <TapeIcon />, angle: 270 },
  ]

  return (
    <div
      className="absolute inset-0 preserve-3d perspective-1200 animate-orbit"
      style={{ width: size, height: size, animationDuration: '9s' }}
    >
      {tools.map((t, i) => (
        <div
          key={i}
          className="orbit-item"
          style={{ transform: `translate(-50%, -50%) rotateY(${t.angle}deg) translateZ(${radius}px)` }}
        >
          <div
            className="w-9 h-9 rounded-full bg-walnut-900/80 border border-brass/40 flex items-center justify-center text-brass-light shadow-lg"
            style={{ transform: `rotateY(${-t.angle}deg)` }}
          >
            {t.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

function HammerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M14.5 3.5l6 6-2.6 2.6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 8l-9 9a2 2 0 002.8 2.8l9-9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}
function SawIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M3 15l3-2 2 2 2-2 2 2 2-2 2 2 2-2 3 2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 15v4h16v-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 15V6l9 9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}
function ChiselIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 19l4-4 9-9 2 2-9 9-4 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 21l3-1.5-1.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}
function TapeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.2 13.2L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

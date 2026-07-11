import { useEffect, useState } from 'react'
import VFLogo3D from './VFLogo3D'
import OrbitingTools from './OrbitingTools'
import SawdustField from './SawdustField'

interface LoaderProps {
  onDone: () => void
}

const MESSAGES = ['Sharpening the chisels…', 'Sanding the grain…', 'Applying the polish…']

export default function Loader({ onDone }: LoaderProps) {
  const [leaving, setLeaving] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 2000)
    const doneTimer = setTimeout(onDone, 2600)
    const msgTimer = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length)
    }, 800)
    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
      clearInterval(msgTimer)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-walnut-950 transition-opacity duration-700 overflow-hidden ${
        leaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 grain opacity-40" />
      <SawdustField />

      <div className="relative w-[280px] h-[280px] flex items-center justify-center">
        <OrbitingTools radius={150} size={280} />
        <VFLogo3D size={140} assembling spinning />
      </div>

      <p className="mt-8 font-body text-sawdust-200/75 text-sm h-5 transition-opacity">
        {MESSAGES[msgIndex]}
      </p>
      <p className="mt-1 font-display italic text-[11px] uppercase tracking-[0.35em] text-brass-light/80">
        Vishwakarma Furniture
      </p>

      <div className="mt-6 w-40 h-[3px] rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-teak-600 via-brass-light to-teak-600 animate-progress-fill" />
      </div>
    </div>
  )
}

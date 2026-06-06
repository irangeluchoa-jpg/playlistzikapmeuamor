interface Props {
  currentTime: number
  duration: number
  accentColor: string
  onSeek: (t: number) => void
}

function fmt(s: number) {
  if (!s || isNaN(s)) return '0:00'
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

export function ProgressBar({ currentTime, duration, accentColor, onSeek }: Props) {
  const pct = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="w-full group">
      {/* Track */}
      <div className="relative h-1 rounded-full" style={{ background: 'var(--surface-3)' }}>
        {/* Filled portion */}
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-100"
          style={{ width: `${pct}%`, background: accentColor }}
        />
        {/* Hover thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full
                     opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none"
          style={{
            left: `${pct}%`,
            background: '#fff',
            boxShadow: `0 0 0 2.5px ${accentColor}, 0 0 10px ${accentColor}55`,
          }}
        />
        {/* Invisible range input on top */}
        <input
          type="range"
          className="absolute inset-0 w-full opacity-0 h-full"
          min={0} max={duration || 100} value={currentTime} step={0.1}
          onChange={e => onSeek(parseFloat(e.target.value))}
          style={{ margin: 0 }}
        />
      </div>

      {/* Times */}
      <div className="flex justify-between mt-2">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.06em' }}>
          {fmt(currentTime)}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)', letterSpacing: '0.06em' }}>
          {fmt(duration)}
        </span>
      </div>
    </div>
  )
}

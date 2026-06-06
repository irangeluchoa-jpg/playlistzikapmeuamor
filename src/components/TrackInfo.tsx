import { Track } from '../data/tracklist'

interface Props { track: Track; isPlaying: boolean }

export function TrackInfo({ track, isPlaying }: Props) {
  return (
    <div className="flex items-start gap-3">
      {/* Live sound bars */}
      <div
        className="flex items-end gap-[2.5px] shrink-0 mt-2 transition-opacity duration-300"
        style={{ height: 18, opacity: isPlaying ? 1 : 0 }}
      >
        {[12, 18, 10].map((h, i) => (
          <div
            key={i}
            className="sound-bar rounded-full"
            style={{ width: 2.5, height: h, background: track.color }}
          />
        ))}
      </div>

      <div className="flex-1 min-w-0">
        {/* Title */}
        <h2
          className="leading-none truncate"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 38px)',
            letterSpacing: '0.04em',
            color: '#fff',
          }}
        >
          {track.title}
        </h2>

        {/* Artist row */}
        <div className="flex items-center gap-2 mt-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: track.color }}
          />
          <p
            className="truncate"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-dim)',
              letterSpacing: '0.08em',
            }}
          >
            {track.artist}
          </p>
        </div>
      </div>
    </div>
  )
}

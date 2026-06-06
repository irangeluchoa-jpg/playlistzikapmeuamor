import { Track } from '../data/tracklist'

interface Props {
  tracks: Track[]
  currentIndex: number
  isPlaying: boolean
  onSelect: (i: number) => void
}

export function Playlist({ tracks, currentIndex, isPlaying, onSelect }: Props) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5 shrink-0"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.18em', color: 'var(--fg-faint)' }}>
          TRACKLIST
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-faint)' }}>
          {tracks.length} FAIXAS
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {tracks.map((track, i) => {
          const isActive = i === currentIndex
          return (
            <button
              key={track.id}
              onClick={() => onSelect(i)}
              className={`group w-full text-left flex items-center gap-3 px-4 py-2.5 transition-all duration-200
                          ${isActive ? 'track-active-bar' : ''}`}
              style={{
                borderBottom: '1px solid var(--border)',
                background: isActive ? `${track.color}0c` : 'transparent',
                color: isActive ? track.color : 'inherit',
              }}
            >
              {/* Number / bars */}
              <div className="w-6 shrink-0 flex items-center justify-center">
                {isActive && isPlaying ? (
                  <div className="flex items-end gap-[2px]" style={{ height: 14 }}>
                    {[10, 14, 8].map((h, j) => (
                      <div
                        key={j}
                        className="sound-bar rounded-full"
                        style={{ width: 2.5, height: h, background: track.color }}
                      />
                    ))}
                  </div>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: isActive ? track.color : 'var(--fg-faint)',
                    letterSpacing: '0.05em',
                  }}>
                    {String(track.id).padStart(2, '0')}
                  </span>
                )}
              </div>

              {/* Thumbnail */}
              <div
                className="shrink-0 rounded overflow-hidden transition-all duration-300"
                style={{
                  width: 38, height: 38,
                  border: `1px solid ${isActive ? track.color + '55' : 'var(--border-bright)'}`,
                  filter: isActive ? 'none' : 'brightness(0.65) saturate(0.7)',
                }}
              >
                <img src={track.imageUrl} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div
                  className="truncate leading-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    letterSpacing: '0.05em',
                    color: isActive ? track.color : 'var(--fg)',
                  }}
                >
                  {track.title}
                </div>
                <div
                  className="truncate mt-0.5"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.05em' }}
                >
                  {track.artist}
                </div>
              </div>

              {/* Hover color dot */}
              <div
                className="shrink-0 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: track.color, opacity: isActive ? 1 : undefined }}
              />
            </button>
          )
        })}

        {/* Bottom pad */}
        <div style={{ height: 24 }} />
      </div>
    </div>
  )
}

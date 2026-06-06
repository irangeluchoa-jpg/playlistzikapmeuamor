import { Track } from '../data/tracklist'

interface Props { track: Track; isPlaying: boolean }

export function AlbumArt({ track, isPlaying }: Props) {
  return (
    <div className="relative select-none">
      {/* Ambient glow behind art */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl transition-all duration-[1500ms] pointer-events-none"
        style={{ background: `${track.color}18`, opacity: isPlaying ? 1 : 0.4 }}
      />

      {/* Art frame */}
      <div
        className={`relative overflow-hidden rounded-xl album-shadow transition-all duration-700 ${isPlaying ? 'playing-pulse' : ''}`}
        style={{
          aspectRatio: '1/1',
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
      >
        {/* Photo */}
        <img
          src={track.imageUrl}
          alt={track.title}
          draggable={false}
          className="w-full h-full object-cover transition-all duration-700"
          style={{
            filter: isPlaying
              ? `brightness(1) saturate(1.05)`
              : `brightness(0.72) saturate(0.8) grayscale(0.15)`,
            transform: isPlaying ? 'scale(1.01)' : 'scale(1)',
          }}
        />

        {/* Dark vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* Track number badge — top left */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded"
          style={{
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: track.color,
              letterSpacing: '0.12em',
            }}
          >
            {String(track.id).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#555', letterSpacing: '0.08em' }}>
            / 12
          </span>
        </div>

        {/* Sound bars — bottom right, only when playing */}
        <div
          className="absolute bottom-3 right-3 flex items-end gap-[3px] transition-opacity duration-500"
          style={{ opacity: isPlaying ? 1 : 0 }}
        >
          {[14, 22, 16, 20, 12].map((h, i) => (
            <div
              key={i}
              className="sound-bar rounded-full"
              style={{ width: 3, height: h, background: track.color }}
            />
          ))}
        </div>

        {/* Paused overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
          style={{ opacity: isPlaying ? 0 : 0 }}
        />
      </div>
    </div>
  )
}

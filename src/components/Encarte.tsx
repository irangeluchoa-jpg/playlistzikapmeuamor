import { Track } from '../data/tracklist'
import { X, Heart, Disc3 } from 'lucide-react'

interface Props { track: Track; onClose: () => void }

export function Encarte({ track, onClose }: Props) {
  const paragraphs = track.letter.split('\n')
  return (
    <div
      className="anim-slide-right h-full flex flex-col overflow-hidden rounded-xl"
      style={{ border: '1px solid var(--border-bright)', background: 'var(--surface)' }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ borderBottom: `1px solid ${track.color}22` }}
      >
        <div className="flex items-center gap-2">
          <Heart size={11} fill={track.color} style={{ color: track.color }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 13, letterSpacing: '0.2em',
            color: track.color,
          }}>
            ENCARTE
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 9,
            color: 'var(--fg-faint)', letterSpacing: '0.06em',
          }}>
            {String(track.id).padStart(2,'0')} · {track.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="btn-icon w-7 h-7 transition-colors"
          style={{ color: 'var(--fg-faint)' }}
        >
          <X size={14} />
        </button>
      </div>

      {/* Paper area */}
      <div className="flex-1 overflow-y-auto ruled-paper relative">
        {/* Margin line */}
        <div
          className="absolute left-12 top-0 bottom-0 w-px pointer-events-none"
          style={{ background: `${track.color}18` }}
        />

        <div className="px-5 py-5 pl-14 relative">
          {paragraphs.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                lineHeight: '28px',
                minHeight: '28px',
                color: line === '' ? 'transparent' : line.startsWith('  ') ? 'var(--fg-dim)' : '#d4d4d4',
                fontStyle: (line.startsWith('Seu') || line.startsWith('Com') || line.startsWith('Sempre') || line.startsWith('Ardente') || line.startsWith('Escrevendo') || line.startsWith('Beijos') || line.startsWith('Completamente') || line.startsWith('Amando')) ? 'italic' : 'normal',
              }}
            >
              {line || '\u00A0'}
            </p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-2.5 shrink-0"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-1.5">
          <Disc3 size={10} style={{ color: 'var(--fg-faint)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.12em' }}>
            ℗ NOSSA PLAYLIST · PRODUZIDO COM AMOR
          </span>
        </div>
        <div className="flex gap-1.5">
          {[track.color, 'var(--border-bright)', 'var(--border-bright)'].map((c, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}

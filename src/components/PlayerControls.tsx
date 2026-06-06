import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat } from 'lucide-react'

interface Props {
  isPlaying: boolean
  isMuted: boolean
  isRepeat: boolean
  accentColor: string
  onTogglePlay: () => void
  onToggleMute: () => void
  onToggleRepeat: () => void
  onNext: () => void
  onPrev: () => void
}

export function PlayerControls({
  isPlaying, isMuted, isRepeat, accentColor,
  onTogglePlay, onToggleMute, onToggleRepeat, onNext, onPrev,
}: Props) {

  const iconBtn = (
    onClick: () => void,
    children: React.ReactNode,
    opts: { active?: boolean; size?: 'sm' | 'md'; tip?: string } = {}
  ) => {
    const { active = false, size = 'md', tip } = opts
    return (
      <button
        onClick={onClick}
        data-tip={tip}
        className="btn-icon transition-all duration-200"
        style={{
          width: size === 'md' ? 40 : 34,
          height: size === 'md' ? 40 : 34,
          color: active ? accentColor : 'var(--fg-faint)',
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <div className="flex items-center justify-between w-full px-1">
      {/* Mute */}
      {iconBtn(onToggleMute, isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />, {
        active: isMuted, size: 'sm', tip: isMuted ? 'Desmutar' : 'Mutar'
      })}

      {/* Prev */}
      {iconBtn(onPrev, <SkipBack size={20} />, { size: 'md', tip: 'Anterior' })}

      {/* Play / Pause — main button */}
      <button
        onClick={onTogglePlay}
        className="relative flex items-center justify-center rounded-full transition-all duration-200
                   hover:scale-105 active:scale-95"
        style={{
          width: 56, height: 56,
          background: accentColor,
          boxShadow: `0 0 0 0 ${accentColor}44`,
          color: '#000',
        }}
      >
        {/* Ripple ring when playing */}
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: accentColor, opacity: 0.18 }}
          />
        )}
        {isPlaying
          ? <Pause size={22} fill="currentColor" />
          : <Play  size={22} fill="currentColor" className="translate-x-0.5" />
        }
      </button>

      {/* Next */}
      {iconBtn(onNext, <SkipForward size={20} />, { size: 'md', tip: 'Próxima' })}

      {/* Repeat */}
      <div className="relative">
        {iconBtn(onToggleRepeat, <Repeat size={17} />, {
          active: isRepeat, size: 'sm', tip: isRepeat ? 'Desativar loop' : 'Loop'
        })}
        {isRepeat && (
          <span
            className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border border-[#0a0a0a]"
            style={{ background: accentColor }}
          />
        )}
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { BookOpen, List, Heart, Disc3 } from 'lucide-react'
import { tracklist } from './data/tracklist'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { useCursor } from './hooks/useCursor'
import { AlbumArt } from './components/AlbumArt'
import { TrackInfo } from './components/TrackInfo'
import { PlayerControls } from './components/PlayerControls'
import { ProgressBar } from './components/ProgressBar'
import { Playlist } from './components/Playlist'
import { Encarte } from './components/Encarte'

type MobileTab  = 'player' | 'playlist'
type RightPanel = 'encarte' | 'playlist'

function App() {
  const [rightPanel,      setRightPanel]      = useState<RightPanel>('playlist')
  const [mobileTab,       setMobileTab]       = useState<MobileTab>('player')
  const [showRepeatBadge, setShowRepeatBadge] = useState(false)
  const [trackKey,        setTrackKey]        = useState(0)

  useCursor()

  const {
    currentTrack, currentTrackIndex,
    isPlaying, isMuted, isRepeat,
    currentTime, duration,
    togglePlay, toggleMute, toggleRepeat,
    nextTrack, prevTrack, setTrack, seek, audioRef,
  } = useAudioPlayer({ tracks: tracklist })

  useEffect(() => { setTrackKey(k => k + 1) }, [currentTrackIndex])

  const handleToggleRepeat = () => {
    toggleRepeat()
    if (!isRepeat) {
      setShowRepeatBadge(true)
      setTimeout(() => setShowRepeatBadge(false), 4500)
    } else {
      setShowRepeatBadge(false)
    }
  }

  return (
    <>
      {/* Custom cursor elements */}
      <div id="cursor-dot"  />
      <div id="cursor-ring" />

      {/* Noise texture */}
      <div className="noise-layer" />

      {/* Hidden audio */}
      <audio ref={audioRef} preload="metadata" />

      {/* ── Full-page wrapper ── */}
      <div className="min-h-screen flex flex-col relative" style={{ background: 'var(--bg)' }}>

        {/* Ambient background blob that shifts per track */}
        <div
          className="fixed pointer-events-none transition-all duration-[2500ms] ease-in-out"
          style={{
            inset: 0,
            background: `
              radial-gradient(ellipse 50% 50% at 20% 70%, ${currentTrack.color}12 0%, transparent 65%),
              radial-gradient(ellipse 40% 40% at 80% 20%, ${currentTrack.color}08 0%, transparent 65%)
            `,
          }}
        />

        {/* ══ HEADER ══ */}
        <header
          className="glass sticky top-0 z-40 flex items-center justify-between px-5 sm:px-7"
          style={{
            height: 52,
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Left: logo */}
          <div className="flex items-center gap-2.5">
            <Disc3
              size={16}
              style={{
                color: currentTrack.color,
                animation: isPlaying ? 'vinyl-spin 8s linear infinite' : 'none',
                transition: 'color 0.5s',
              }}
            />
            <span className="shimmer-text" style={{ fontFamily: 'var(--font-display)', fontSize: 17, letterSpacing: '0.22em' }}>
              NOSSA PLAYLIST
            </span>
          </div>

          {/* Right: pill badge */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ border: '1px solid var(--border-bright)', background: 'var(--surface-2)' }}
          >
            <Heart size={9} fill={currentTrack.color} style={{ color: currentTrack.color }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.1em' }}>
              PARA SEMPRE
            </span>
          </div>
        </header>

        {/* ══ MAIN ══ */}
        <div className="flex-1 flex flex-col lg:flex-row max-w-[1100px] w-full mx-auto">

          {/* ── LEFT: PLAYER ── */}
          <div
            className={`flex flex-col lg:w-[400px] xl:w-[440px] shrink-0 p-5 sm:p-7 lg:py-8
                        ${mobileTab === 'player' ? 'flex' : 'hidden lg:flex'}`}
          >
            {/* Album art */}
            <div key={`art-${trackKey}`} className="anim-fade-up mb-6" style={{ animationDelay: '0ms' }}>
              <AlbumArt track={currentTrack} isPlaying={isPlaying} />
            </div>

            {/* Track info */}
            <div key={`info-${trackKey}`} className="anim-fade-up mb-5" style={{ animationDelay: '40ms' }}>
              <TrackInfo track={currentTrack} isPlaying={isPlaying} />
            </div>

            {/* Divider */}
            <div className="mb-5" style={{ height: 1, background: 'var(--border)' }} />

            {/* Progress */}
            <div className="anim-fade-up mb-6" style={{ animationDelay: '80ms' }}>
              <ProgressBar
                currentTime={currentTime}
                duration={duration}
                accentColor={currentTrack.color}
                onSeek={seek}
              />
            </div>

            {/* Controls */}
            <div className="anim-fade-up mb-6" style={{ animationDelay: '120ms' }}>
              <PlayerControls
                isPlaying={isPlaying}
                isMuted={isMuted}
                isRepeat={isRepeat}
                accentColor={currentTrack.color}
                onTogglePlay={togglePlay}
                onToggleMute={toggleMute}
                onToggleRepeat={handleToggleRepeat}
                onNext={nextTrack}
                onPrev={prevTrack}
              />
            </div>

            {/* Encarte button */}
            <button
              onClick={() => setRightPanel(p => p === 'encarte' ? 'playlist' : 'encarte')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg w-full
                         transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                border: `1px solid ${rightPanel === 'encarte' ? currentTrack.color + '66' : 'var(--border-bright)'}`,
                background: rightPanel === 'encarte' ? `${currentTrack.color}0f` : 'var(--surface-2)',
                color: rightPanel === 'encarte' ? currentTrack.color : 'var(--fg-dim)',
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                letterSpacing: '0.15em',
              }}
            >
              <BookOpen size={13} />
              {rightPanel === 'encarte' ? 'FECHAR ENCARTE' : 'VER ENCARTE'}
            </button>

            {/* Repeat easter egg */}
            {showRepeatBadge && (
              <div
                className="anim-badge-pop mt-4 px-4 py-3 rounded-lg flex items-start gap-2.5"
                style={{
                  border: `1px solid ${currentTrack.color}33`,
                  background: `${currentTrack.color}0a`,
                }}
              >
                <Heart size={13} fill={currentTrack.color} style={{ color: currentTrack.color, shrink: 0, marginTop: 1 }} />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-dim)', lineHeight: 1.6 }}>
                  Assim como essa música, meu amor por você também não tem fim.
                </p>
              </div>
            )}
          </div>

          {/* ── RIGHT PANEL ── */}
          <div
            className={`flex-1 flex flex-col min-h-0 ${mobileTab === 'playlist' ? 'flex' : 'hidden lg:flex'}`}
            style={{ borderLeft: '1px solid var(--border)' }}
          >
            {/* Tab bar */}
            <div
              className="hidden lg:flex items-center shrink-0"
              style={{ borderBottom: '1px solid var(--border)', height: 44 }}
            >
              {(['playlist', 'encarte'] as const).map(panel => (
                <button
                  key={panel}
                  onClick={() => setRightPanel(panel)}
                  className="h-full px-5 flex items-center gap-2 transition-all duration-200 relative"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: rightPanel === panel ? currentTrack.color : 'var(--fg-faint)',
                  }}
                >
                  {panel === 'playlist' ? <List size={12} /> : <BookOpen size={12} />}
                  {panel.toUpperCase()}
                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0 right-0 transition-all duration-300"
                    style={{
                      height: 2,
                      background: rightPanel === panel ? currentTrack.color : 'transparent',
                      borderRadius: '2px 2px 0 0',
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Panel content */}
            <div className="flex-1 overflow-hidden">
              {rightPanel === 'encarte' ? (
                <div className="h-full p-4">
                  <Encarte
                    key={`encarte-${currentTrackIndex}`}
                    track={currentTrack}
                    onClose={() => setRightPanel('playlist')}
                  />
                </div>
              ) : (
                <Playlist
                  tracks={tracklist}
                  currentIndex={currentTrackIndex}
                  isPlaying={isPlaying}
                  onSelect={i => { setTrack(i); setMobileTab('player') }}
                />
              )}
            </div>
          </div>
        </div>

        {/* ══ MOBILE BOTTOM NAV ══ */}
        <nav
          className="lg:hidden glass sticky bottom-0 z-40 flex"
          style={{ borderTop: '1px solid var(--border)', height: 56 }}
        >
          {([
            { id: 'player'   as MobileTab, label: 'PLAYER', Icon: Disc3 },
            { id: 'playlist' as MobileTab, label: 'FAIXAS', Icon: List  },
          ]).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setMobileTab(id)}
              className="flex-1 flex flex-col items-center justify-center gap-1 transition-all"
              style={{
                color: mobileTab === id ? currentTrack.color : 'var(--fg-faint)',
                fontFamily: 'var(--font-display)',
                fontSize: 9,
                letterSpacing: '0.16em',
              }}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default App

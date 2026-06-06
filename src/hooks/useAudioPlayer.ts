import { useState, useRef, useEffect, useCallback } from 'react'
import { Track } from '../data/tracklist'

interface UseAudioPlayerProps {
  tracks: Track[]
}

export function useAudioPlayer({ tracks }: UseAudioPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isPlayingRef = useRef(false)

  const currentTrack = tracks[currentTrackIndex]

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
  }, [tracks.length])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoading(false)
    }
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0
        audio.play()
      } else {
        nextTrack()
      }
    }
    const handleWaiting = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('waiting', handleWaiting)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('waiting', handleWaiting)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [isRepeat, nextTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    setIsLoading(true)
    audio.src = currentTrack.audioUrl
    audio.load()
    if (isPlayingRef.current) {
      audio.play().catch(console.error)
    }
  }, [currentTrackIndex])

  const play = useCallback(() => {
    audioRef.current?.play().catch(console.error)
    setIsPlaying(true)
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }, [])

  const togglePlay = useCallback(() => {
    if (isPlayingRef.current) pause()
    else play()
  }, [play, pause])

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const toggleRepeat = useCallback(() => setIsRepeat((r) => !r), [])

  const prevTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
  }, [tracks.length])

  const setTrack = useCallback((index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
    isPlayingRef.current = true
  }, [])

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }, [])

  return {
    currentTrack,
    currentTrackIndex,
    isPlaying,
    isMuted,
    isRepeat,
    currentTime,
    duration,
    isLoading,
    play,
    pause,
    togglePlay,
    toggleMute,
    toggleRepeat,
    nextTrack,
    prevTrack,
    setTrack,
    seek,
    audioRef,
  }
}

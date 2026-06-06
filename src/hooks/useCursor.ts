import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let ringX = 0, ringY = 0
    let dotX  = 0, dotY  = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
    }

    const onDown = () => document.body.classList.add('cursor-click')
    const onUp   = () => document.body.classList.remove('cursor-click')

    const addHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest('button, a, [role="button"], input[type="range"]'))
        document.body.classList.add('cursor-hover')
    }
    const removeHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (!el.closest('button, a, [role="button"], input[type="range"]'))
        document.body.classList.remove('cursor-hover')
    }

    const animate = () => {
      // dot follows mouse exactly
      dot.style.left = dotX + 'px'
      dot.style.top  = dotY + 'px'

      // ring lerps behind with lag
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top  = ringY + 'px'

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    window.addEventListener('mouseover', addHover)
    window.addEventListener('mouseout',  removeHover)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      window.removeEventListener('mouseover', addHover)
      window.removeEventListener('mouseout',  removeHover)
      cancelAnimationFrame(raf)
    }
  }, [])
}

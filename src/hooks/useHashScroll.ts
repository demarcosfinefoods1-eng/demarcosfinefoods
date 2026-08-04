import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const section = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!section) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [hash])
}

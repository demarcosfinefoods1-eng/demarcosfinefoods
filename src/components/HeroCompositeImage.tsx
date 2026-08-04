import { activeHero } from '../data/hero'

export function HeroCompositeImage() {
  const base = `${import.meta.env.BASE_URL}images/store/${activeHero.image}`

  return <picture className="hero-image">
    <source srcSet={`${base}-800.webp 800w, ${base}-1200.webp 1200w, ${base}-1600.webp 1600w`} sizes="100vw" type="image/webp" />
    <img
      src={`${base}-1600.jpg`}
      srcSet={`${base}-800.jpg 800w, ${base}-1200.jpg 1200w, ${base}-1600.jpg 1600w`}
      sizes="100vw"
      width="1600"
      height="1067"
      alt={activeHero.alt}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  </picture>
}

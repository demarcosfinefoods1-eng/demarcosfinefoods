export function HeroCompositeImage() {
  const base = `${import.meta.env.BASE_URL}images/hero/produce-gift-basket-hero`

  return <picture className="hero-image">
    <source srcSet={`${base}-800.jpg 800w, ${base}-1200.jpg 1200w, ${base}-1600.jpg 1600w`} sizes="100vw" type="image/jpeg" />
    <img
      src={`${base}-1600.jpg`}
      width="1600"
      height="900"
      alt="Fresh green pepper display with a DeMarco's signature gourmet gift basket inside the Windsor market"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  </picture>
}

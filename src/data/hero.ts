export type HeroSeason = 'default' | 'summer' | 'fall' | 'christmas' | 'spring'

type HeroImage = {
  image: string
  alt: string
}

/**
 * Change only this value when a seasonal hero is ready.
 * The hero component, responsive image behavior and homepage layout stay unchanged.
 */
export const activeHeroSeason: HeroSeason = 'default'

/**
 * Seasonal filenames are ready for future photography. Until those files are added,
 * each season intentionally falls back to the approved real-store hero.
 */
export const heroImages: Record<HeroSeason, HeroImage> = {
  default: {
    image: 'hero-store',
    alt: "The real DeMarco's Fine Foods market interior with fresh produce and Italian pantry staples in Windsor",
  },
  summer: {
    image: 'hero-store',
    alt: "Fresh summer produce and market favourites inside DeMarco's Fine Foods in Windsor",
  },
  fall: {
    image: 'hero-store',
    alt: "Fresh fall produce and pantry favourites inside DeMarco's Fine Foods in Windsor",
  },
  christmas: {
    image: 'hero-store',
    alt: "Holiday foods and seasonal favourites inside DeMarco's Fine Foods in Windsor",
  },
  spring: {
    image: 'hero-store',
    alt: "Fresh spring produce and local market favourites inside DeMarco's Fine Foods in Windsor",
  },
}

export const activeHero = heroImages[activeHeroSeason]

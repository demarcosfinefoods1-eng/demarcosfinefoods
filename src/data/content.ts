export type FreshItem = {
  name: string
  category: string
  description: string
  image: string
  alt: string
  badge: 'Seasonal favourite' | 'Fresh pick' | 'Store favourite'
}

export const freshContentLastUpdated = 'November 2026'

export const freshItems: FreshItem[] = [
  { name: 'Seasonal Produce', category: 'Produce', description: 'Explore colourful produce for everyday meals and seasonal cooking.', image: 'produce-display', alt: "Seasonal produce displayed on DeMarco's wood market tables", badge: 'Seasonal favourite' },
  { name: 'Fresh Bread', category: 'Bakery', description: 'Find fresh loaves and bakery favourites on the in-store bread display.', image: 'bread-display', alt: "Lakeside fruit and cinnamon apple breads on the shelf at DeMarco's", badge: 'Store favourite' },
  { name: 'Italian Pantry Favourites', category: 'Italian Foods', description: 'Discover pasta, sauces, olives and preserved foods for your table.', image: 'italian-pantry-weekly', alt: "Jars of Italian olives and preserved vegetables on display at DeMarco's", badge: 'Store favourite' },
  { name: 'Specialty Finds', category: 'Pantry', description: 'Browse distinctive pantry items and imported specialty foods in store.', image: 'italian-pantry-gallery', alt: "Imported and specialty pantry foods displayed at DeMarco's Fine Foods", badge: 'Store favourite' },
]

export type LocalBrand = {
  name: string
  location: string
  category: string
  description: string
  image: string
  website?: string
}

// Add a brand only after its supplier relationship and details are verified.
export const localBrands: LocalBrand[] = []

export const specialtyCategories = [
  {
    name: 'Italian Specialties',
    description: 'Explore Italian pantry favourites, pasta, sauces, olives and preserved foods.',
    image: 'italian-pantry-department',
    alt: "Italian pantry foods displayed inside DeMarco's Fine Foods",
  },
  {
    name: 'Imported & Specialty Foods',
    description: 'Find distinctive pantry items and specialty foods beyond the everyday basics.',
    image: 'italian-pantry-gallery',
    alt: "Imported and specialty pantry foods at DeMarco's Fine Foods in Windsor",
  },
]

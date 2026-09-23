export type FreshItem = {
  name: string
  category: string
  description: string
  image: string
  alt: string
  badge: 'Seasonal favourite' | 'Fresh pick' | 'Store favourite'
}

export const freshContentLastUpdated = 'September 2026'

export const freshItems: FreshItem[] = [
  { name: 'Ontario Sweet Corn', category: 'Produce', description: 'A seasonal favourite photographed in store at DeMarco’s.', image: 'weekly-corn', alt: "Carts filled with Ontario sweet corn inside DeMarco's Fine Foods", badge: 'Seasonal favourite' },
  { name: 'Colourful Bell Peppers', category: 'Produce', description: 'Crisp red, orange and yellow peppers from our produce selection.', image: 'weekly-peppers', alt: "Fresh red, orange and yellow bell peppers at DeMarco's Fine Foods", badge: 'Fresh pick' },
  { name: 'Fresh Bread', category: 'Bakery', description: 'Fresh loaves photographed on DeMarco’s bread display.', image: 'bread-display', alt: "Lakeside fruit and cinnamon apple breads on the shelf at DeMarco's", badge: 'Store favourite' },
  { name: 'Market Tomatoes', category: 'Produce', description: 'Bright tomatoes for salads, sandwiches and sauces.', image: 'weekly-tomatoes', alt: "Fresh red tomatoes displayed at DeMarco's Fine Foods in Windsor", badge: 'Fresh pick' },
  { name: 'Italian Pantry Picks', category: 'Italian Foods', description: 'Discover pantry favourites among our Italian and specialty foods.', image: 'italian-pantry-weekly', alt: "Jars of Italian olives and preserved vegetables on display at DeMarco's", badge: 'Store favourite' },
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

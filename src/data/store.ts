export type DailyHours = {
  opens: string
  closes: string
}

export type WeekdayKey = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'

const weekdayHours: Record<WeekdayKey, DailyHours> = {
  sunday: { opens: '11:00', closes: '16:00' },
  monday: { opens: '10:00', closes: '20:00' },
  tuesday: { opens: '10:00', closes: '20:00' },
  wednesday: { opens: '10:00', closes: '20:00' },
  thursday: { opens: '10:00', closes: '20:00' },
  friday: { opens: '10:00', closes: '20:00' },
  saturday: { opens: '10:00', closes: '20:00' },
}

export const store = {
  name: "DeMarco's Fine Foods",
  legalType: ['LocalBusiness', 'GroceryStore'],
  siteUrl: 'https://demarcosfinefoods.ca/',
  domain: 'demarcosfinefoods.ca',
  phoneDisplay: '(519) 969-7887',
  phoneInternational: '+1-519-969-7887',
  phoneHref: 'tel:+15199697887',
  streetAddress: '1349 Grand Marais Rd W',
  city: 'Windsor',
  province: 'ON',
  postalCode: 'N9E 1E2',
  country: 'CA',
  address: '1349 Grand Marais Rd W, Windsor, ON N9E 1E2',
  coordinates: { latitude: 42.2678366, longitude: -83.0265929 },
  timeZone: 'America/Toronto',
  hours: {
    weekly: weekdayHours,
    display: [
      { label: 'Monday–Saturday', value: '10 AM–8 PM' },
      { label: 'Sunday', value: '11 AM–4 PM' },
    ],
    // Add verified YYYY-MM-DD overrides here. Use null for a full-day closure.
    special: {} as Record<string, DailyHours | null>,
  },
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=1349+Grand+Marais+Rd+W,+Windsor,+ON+N9E+1E2',
  googleBusinessUrl: 'https://www.google.com/maps/place/DeMarco%27s+Fine+Foods/',
  googleReviewsUrl: 'https://www.google.com/maps/place/DeMarco%27s+Fine+Foods/',
  mapEmbedUrl: 'https://www.google.com/maps?q=DeMarco%27s+Fine+Foods,+1349+Grand+Marais+Rd+W,+Windsor,+ON&output=embed',
  instagram: 'https://www.instagram.com/demarcosfinefoods/',
  facebook: 'https://www.facebook.com/demarcosfinefoods/',
  logoUrl: 'https://demarcosfinefoods.ca/brand/logo.svg',
  imageUrl: 'https://demarcosfinefoods.ca/brand/open-graph.png',
} as const

export const giftBaskets = [
  { name: 'Italian Gourmet Basket', image: 'italian-gourmet.jpg', alt: "Italian gourmet gift basket with taralli, Kalamata olives, bruschetta and chocolates from DeMarco's Fine Foods" },
  { name: 'Celebration Basket', image: 'celebration.jpg', alt: "Custom celebration gift basket with preserves, chocolates and Italian specialties from DeMarco's Fine Foods" },
  { name: 'Coffee & Comfort Basket', image: 'coffee-comfort.jpg', alt: "Coffee and comfort gift basket prepared in store at DeMarco's Fine Foods in Windsor" },
  { name: "DeMarco's Signature Basket", image: 'demarcos-signature.jpg', alt: "DeMarco's signature gourmet gift basket with coffee, chocolates, olives and Italian foods" },
]

export const giftBasketOccasions = [
  'Birthdays',
  'Anniversaries',
  'Thank You Gifts',
  'Corporate & Client Gifts',
  'Housewarming',
  'Holidays',
  'Italian Gourmet Gift Baskets',
  'Made to your budget',
]

export const departments = [
  { title: 'Fresh Produce', text: 'Crisp, colourful choices for your table.', photoKey: 'produce-display', alt: "Fresh tomatoes, carrots, celery and vegetables on DeMarco's wood produce display" },
  { title: 'Beer & Wine', text: 'A convenient local selection for dinner and gatherings.', photoKey: 'beer-wine', alt: "Locally crafted beer and wine selection inside DeMarco's Fine Foods in Windsor" },
  { title: 'Italian Foods', text: 'Pantry favourites and authentic flavours close to home.', photoKey: 'italian-pantry-department', alt: "Italian pasta and tomato sauces on DeMarco's wooden pantry display" },
]

export type GoogleReview = {
  author: string
  rating: number
  text: string
  relativeTime?: string
}

// Publish only reviews returned by a verified Google Business Profile integration.
export const googleReviews: GoogleReview[] = []

export const gallery = [
  ['store-interior', "The welcoming aisle and fresh bread display inside DeMarco's Fine Foods"],
  ['produce-display', "Fresh produce on DeMarco's wood market displays in Windsor"],
  ['bread-sourdough', "A fresh Lakeside San Francisco sourdough loaf at DeMarco's"],
  ['italian-pantry-gallery', "Italian tuna, artichokes, peppers and preserved vegetables inside DeMarco's"],
  ['beer-wine', "Locally crafted beer and wine selection at DeMarco's Fine Foods"],
]

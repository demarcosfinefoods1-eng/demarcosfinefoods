export const store = {
  name: "DeMarco's Fine Foods",
  phoneDisplay: '(519) 969-7887',
  phoneHref: 'tel:+15199697887',
  address: '1349 Grand Marais Rd W, Windsor, ON N9E 1E2',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=1349+Grand+Marais+Rd+W,+Windsor,+ON+N9E+1E2',
  instagram: 'https://www.instagram.com/demarcosfinefoods/',
  facebook: 'https://www.facebook.com/demarcosfinefoods/',
}

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
  'Corporate Gifts',
  'Housewarming',
  'Holidays',
  'Italian Gourmet Gift Baskets',
  'Made to your budget',
]

export const departments = [
  { title: 'Fresh Produce', text: 'Crisp, colourful and ready for tonight’s table.', photoKey: 'departments-produce', alt: "DeMarco's fresh produce display — store photo coming soon" },
  { title: 'Beer & Wine', text: 'A convenient local selection for dinner and gatherings.', photoKey: 'departments-beer-wine', alt: "DeMarco's beer and wine selection — store photo coming soon" },
  { title: 'Italian Foods', text: 'Pantry favourites and authentic flavours close to home.', photoKey: 'departments-italian', alt: "DeMarco's Italian foods selection — store photo coming soon" },
]

export type GoogleReview = {
  author: string
  rating: number
  text: string
  relativeTime?: string
}

// Replace this array with verified reviews returned by your Google Business Profile integration.
export const googleReviews: GoogleReview[] = []

export const freshThisWeek = [
  { name: 'Ontario Sweet Corn', note: 'Sweet, local and ready for the grill.', category: 'Ontario grown', photoKey: 'weekly-corn' },
  { name: 'Ontario Peaches', note: 'Juicy seasonal favourites while supplies last.', category: 'In season', photoKey: 'weekly-peaches' },
  { name: 'Fresh Bread', note: 'Fresh loaves for tonight’s dinner table.', category: 'Fresh today', photoKey: 'weekly-bread' },
  { name: 'Seasonal Produce', note: 'See what is freshest when you visit today.', category: 'Market picks', photoKey: 'weekly-produce' },
  { name: 'Italian Specials', note: 'Discover a new pantry favourite this week.', category: 'DeMarco’s pick', photoKey: 'weekly-italian' },
]

export const gallery = [
  ['gallery-storefront', "DeMarco's Fine Foods storefront — real photo coming soon"],
  ['gallery-produce', "Fresh produce at DeMarco's — real photo coming soon"],
  ['gallery-bread', "Fresh bread at DeMarco's — real photo coming soon"],
  ['gallery-italian', "Italian specialties at DeMarco's — real photo coming soon"],
  ['gallery-beer-wine', "Beer and wine selection at DeMarco's — real photo coming soon"],
]

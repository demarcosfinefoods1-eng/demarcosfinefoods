export const store = {
  name: "DeMarco's Fine Foods",
  siteUrl: 'https://demarcosfinefoods.ca/',
  phoneDisplay: '(519) 969-7887',
  phoneHref: 'tel:+15199697887',
  address: '1349 Grand Marais Rd W, Windsor, ON N9E 1E2',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=1349+Grand+Marais+Rd+W,+Windsor,+ON+N9E+1E2',
  googleReviewsUrl: 'https://www.google.com/maps/place/DeMarco%27s+Fine+Foods/',
  mapEmbedUrl: 'https://www.google.com/maps?q=DeMarco%27s+Fine+Foods,+1349+Grand+Marais+Rd+W,+Windsor,+ON&output=embed',
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
  { title: 'Fresh Produce', text: 'Crisp, colourful and ready for tonight’s table.', photoKey: 'produce-display', alt: "Fresh tomatoes, carrots, celery and vegetables on DeMarco's wood produce display" },
  { title: 'Beer & Wine', text: 'A convenient local selection for dinner and gatherings.', photoKey: 'beer-wine', alt: "Locally crafted beer and wine selection inside DeMarco's Fine Foods in Windsor" },
  { title: 'Italian Foods', text: 'Pantry favourites and authentic flavours close to home.', photoKey: 'italian-pantry-department', alt: "Italian pasta and tomato sauces on DeMarco's wooden pantry display" },
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
  { name: 'Ontario Sweet Corn', note: 'Sweet, local and ready for the grill.', category: 'Ontario grown', photoKey: 'weekly-corn', alt: "Carts filled with fresh Ontario sweet corn inside DeMarco's Fine Foods" },
  { name: 'Colourful Bell Peppers', note: 'Crisp red, orange and yellow peppers for tonight.', category: 'Fresh produce', photoKey: 'weekly-peppers', alt: "Fresh red, orange and yellow bell peppers at DeMarco's Fine Foods" },
  { name: 'Fresh Bread', note: 'Fresh loaves photographed on the bread display.', category: 'Bakery pick', photoKey: 'bread-display', alt: "Lakeside fruit and cinnamon apple breads on the shelf at DeMarco's" },
  { name: 'Market Tomatoes', note: 'Bright, ripe tomatoes ready for salads and sauces.', category: 'Market picks', photoKey: 'weekly-tomatoes', alt: "Fresh red tomatoes displayed at DeMarco's Fine Foods in Windsor" },
  { name: 'Italian Pantry Picks', note: 'Discover a new Italian pantry favourite this week.', category: 'DeMarco’s pick', photoKey: 'italian-pantry-weekly', alt: "Jars of Italian olives and preserved vegetables on display at DeMarco's" },
]

export const gallery = [
  ['store-interior', "The welcoming aisle and fresh bread display inside DeMarco's Fine Foods"],
  ['produce-display', "Fresh produce on DeMarco's wood market displays in Windsor"],
  ['bread-sourdough', "A fresh Lakeside San Francisco sourdough loaf at DeMarco's"],
  ['italian-pantry-gallery', "Italian tuna, artichokes, peppers and preserved vegetables inside DeMarco's"],
  ['beer-wine', "Locally crafted beer and wine selection at DeMarco's Fine Foods"],
]

import { ArrowLeft, Check, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { GiftBasketImage } from '../components/GiftBasketImage'
import { MobileActions } from '../components/MobileActions'
import { MotionReveal } from '../components/MotionReveal'
import { giftBasketOccasions, giftBaskets, store } from '../data/store'
import { usePageSeo } from '../hooks/usePageSeo'

const canonical = 'https://demarcosfinefoods1-eng.github.io/demarcosfinefoods/gift-baskets/'

export default function GiftBasketsPage() {
  usePageSeo({
    title: "Custom Gift Baskets Windsor | DeMarco's Fine Foods",
    description: "Order custom gourmet gift baskets in Windsor from DeMarco's Fine Foods. Corporate, holiday, birthday and Italian gourmet gift baskets made to your budget.",
    canonical,
  })

  return <><Header /><main className="gift-page" id="main-content" tabIndex={-1}><section className="gift-page-hero"><div className="shell gift-page-hero-grid"><MotionReveal className="gift-page-intro"><Link className="back-link" to="/"><ArrowLeft size={17} /> Back to DeMarco's</Link><p className="eyebrow">Handmade in Windsor</p><h1>Custom Gift Baskets<br /><em>Made to be remembered.</em></h1><p>From corporate thank-yous to holiday celebrations, DeMarco's creates custom gourmet gift baskets in Windsor with thoughtful foods and a beautiful presentation.</p><div className="gift-page-actions"><a className="button" href={store.phoneHref}><Phone size={20} /> Call to Order</a><a className="button button-outline" href={store.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={20} /> Visit the Store</a></div></MotionReveal><MotionReveal className="gift-page-feature"><GiftBasketImage image={giftBaskets[0].image} alt={giftBaskets[0].alt} sizes="(max-width: 900px) calc(100vw - 40px), 52vw" priority /><span>Made to your occasion and budget</span></MotionReveal></div></section>

    <section className="section gift-page-gallery"><div className="shell"><div className="gift-page-heading"><div><p className="eyebrow">Four featured baskets</p><h2>Gifts with a personal touch</h2></div><p>Every basket can be customized. Product selection, presentation and final pricing vary based on your occasion, preferences and budget.</p></div><div className="gift-page-grid">{giftBaskets.map((basket) => <MotionReveal className="gift-page-card" key={basket.name}><GiftBasketImage image={basket.image} alt={basket.alt} sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 900px) 50vw, 25vw" /><div><p>Custom gourmet gift basket</p><h3>{basket.name}</h3><a href={store.phoneHref}>Call to customize <Phone size={16} /></a></div></MotionReveal>)}</div></div></section>

    <section className="section gift-page-occasions"><div className="shell gift-occasion-grid"><MotionReveal><p className="eyebrow">Made for every occasion</p><h2>Tell us who it's for. We'll help create the gift.</h2><p>Choose Italian gourmet favourites, chocolates, coffee, preserves and specialty foods. We will help tailor the basket to the recipient and your budget.</p></MotionReveal><MotionReveal><ul>{giftBasketOccasions.map((occasion) => <li key={occasion}><Check />{occasion}</li>)}</ul></MotionReveal></div></section>

    <section className="section gift-order-section"><div className="shell gift-order-card"><div><p className="eyebrow">Order from DeMarco's</p><h2>Call us to start your custom basket</h2><p>For corporate gift baskets in Windsor, holiday orders or a one-of-a-kind gourmet gift, call the store and tell us what you have in mind.</p></div><div className="gift-order-details"><a href={store.phoneHref}><Phone /><span><small>Call to order</small>{store.phoneDisplay}</span></a><a href={store.directionsUrl} target="_blank" rel="noreferrer"><MapPin /><span><small>Visit us</small>1349 Grand Marais Rd W, Windsor</span></a><div><Clock3 /><span><small>Store hours</small>Mon–Sat 10 AM–8 PM · Sun 11 AM–4 PM</span></div><a className="button" href={store.phoneHref}><Phone size={19} /> Call to Order</a></div></div></section>
  </main><footer><div className="shell footer-bottom gift-page-footer"><span>© {new Date().getFullYear()} DeMarco's Fine Foods</span><Link to="/">Return to the homepage</Link></div></footer><MobileActions /></>
}

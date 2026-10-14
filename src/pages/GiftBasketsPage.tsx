import { ArrowLeft, Check, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { GiftBasketImage } from '../components/GiftBasketImage'
import { MobileActions } from '../components/MobileActions'
import { MotionReveal } from '../components/MotionReveal'
import { giftBasketOccasions, giftBaskets, store } from '../data/store'
import { usePageSeo } from '../hooks/usePageSeo'
import { trackCta } from '../lib/analytics'

const canonical = `${store.siteUrl}gift-baskets/`

export default function GiftBasketsPage() {
  usePageSeo({
    title: "Custom Gift Baskets Windsor | DeMarco's Fine Foods",
    description: "Order custom gourmet gift baskets in Windsor from DeMarco's Fine Foods. Corporate, holiday, birthday and Italian gourmet gift baskets made to your budget.",
    canonical,
    image: `${store.siteUrl}images/gift-baskets/italian-gourmet.jpg`,
  })

  return <><Header /><main className="gift-page" id="main-content" tabIndex={-1}><section className="gift-page-hero"><div className="shell gift-page-hero-grid"><MotionReveal className="gift-page-intro"><Link className="back-link" to="/"><ArrowLeft size={17} aria-hidden="true" /> Back to DeMarco's</Link><p className="eyebrow">Handmade in Windsor</p><h1>Custom Gift Baskets<br /><em>Made to be remembered.</em></h1><p>From corporate and client gifts to birthdays, anniversaries, thank-yous and holiday celebrations, DeMarco's creates custom gourmet gift baskets with thoughtful foods and a beautiful presentation.</p><div className="gift-page-actions"><a className="button" href={store.phoneHref} onClick={() => trackCta('gift_basket_call', 'gift_page_hero')}><Phone size={20} aria-hidden="true" /> Call to Order</a><a className="button button-outline" href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'gift_page_hero')}><MapPin size={20} aria-hidden="true" /> Visit the Store</a></div></MotionReveal><MotionReveal className="gift-page-feature"><GiftBasketImage image={giftBaskets[0].image} alt={giftBaskets[0].alt} sizes="(max-width: 900px) calc(100vw - 40px), 52vw" priority /><span>Made to your occasion and budget</span></MotionReveal></div></section>

    <section className="section gift-page-gallery"><div className="shell"><div className="gift-page-heading"><div><p className="eyebrow">Four featured baskets</p><h2>Gifts with a personal touch</h2></div><p>Every basket can be customized. Product selection, presentation and final pricing vary based on your occasion, preferences and budget.</p></div><div className="gift-page-grid">{giftBaskets.map((basket) => <MotionReveal className="gift-page-card" key={basket.name}><GiftBasketImage image={basket.image} alt={basket.alt} sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 900px) 50vw, 25vw" /><div><p>Custom gourmet gift basket</p><h3>{basket.name}</h3><a href={store.phoneHref} onClick={() => trackCta('gift_basket_call', 'gift_page_card', { basket_name: basket.name })}>Call to customize <Phone size={16} aria-hidden="true" /></a></div></MotionReveal>)}</div></div></section>

    <section className="section gift-page-occasions"><div className="shell gift-occasion-grid"><MotionReveal><p className="eyebrow">Made for every occasion</p><h2>Tell us who it's for. We'll help create the gift.</h2><p>Choose Italian gourmet favourites, chocolates, coffee, preserves and specialty foods. We will help tailor the basket to the recipient and your budget.</p></MotionReveal><MotionReveal><ul>{giftBasketOccasions.map((occasion) => <li key={occasion}><Check aria-hidden="true" />{occasion}</li>)}</ul></MotionReveal></div></section>

    <section className="section gift-order-section"><div className="shell gift-order-card"><div><p className="eyebrow">How to order</p><h2>Call us to start your custom basket</h2><ol className="gift-order-steps"><li><strong>Call the store.</strong><span>Tell us the occasion and who the basket is for.</span></li><li><strong>Share your preferences and budget.</strong><span>We’ll discuss current basket and product options.</span></li><li><strong>Confirm pickup timing.</strong><span>We’ll help you plan pickup based on current availability.</span></li></ol><p>Call us to discuss current basket options, budget and pickup timing. Exact contents and pricing vary.</p></div><div className="gift-order-details"><a href={store.phoneHref} onClick={() => trackCta('gift_basket_call', 'gift_order_details')}><Phone aria-hidden="true" /><span><small>Call to order</small>{store.phoneDisplay}</span></a><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'gift_order_details')}><MapPin aria-hidden="true" /><span><small>Visit us</small>{store.streetAddress}, {store.city}</span></a><div><Clock3 aria-hidden="true" /><span><small>Store hours</small>{store.hours.display.map((hours) => `${hours.label} ${hours.value}`).join(' · ')}</span></div><a className="button" href={store.phoneHref} onClick={() => trackCta('gift_basket_call', 'gift_order_primary')}><Phone size={19} aria-hidden="true" /> Call to Order</a></div></div></section>
  </main><footer><div className="shell footer-bottom gift-page-footer"><Link to="/" className="gift-page-footer-logo" aria-label="DeMarco's Fine Foods home"><img src={`${import.meta.env.BASE_URL}brand/logo-dark.svg`} alt="DeMarco's Fine Foods" width="1100" height="700" /></Link><span>© {new Date().getFullYear()} DeMarco's Fine Foods</span><Link to="/">Return to the homepage</Link></div></footer><MobileActions /></>
}

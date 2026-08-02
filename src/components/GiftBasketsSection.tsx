import { ArrowRight, Check, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { giftBasketOccasions, giftBaskets, store } from '../data/store'
import { GiftBasketImage } from './GiftBasketImage'
import { MotionReveal } from './MotionReveal'

export function GiftBasketsSection() {
  return <section id="gift-baskets" className="section gift-baskets-section" aria-labelledby="gift-baskets-title"><div className="shell gift-baskets-layout">
    <MotionReveal className="gift-baskets-copy"><p className="eyebrow">Custom Gift Baskets</p><h2 id="gift-baskets-title">Made for every occasion</h2><p>Thoughtfully arranged in Windsor with gourmet foods, Italian favourites and personal touches chosen for the person—and budget—you have in mind.</p><ul>{giftBasketOccasions.map((occasion) => <li key={occasion}><Check aria-hidden="true" />{occasion}</li>)}</ul><div className="gift-basket-actions"><a className="button" href={store.phoneHref}><Phone size={19} /> Call to Order</a><Link className="text-link" to="/gift-baskets">Explore Gift Baskets <ArrowRight size={18} /></Link></div></MotionReveal>
    <div className="gift-basket-grid">{giftBaskets.map((basket, index) => <MotionReveal className={`gift-basket-card gift-basket-${index + 1}`} key={basket.name}><GiftBasketImage image={basket.image} alt={basket.alt} sizes="(max-width: 640px) 82vw, (max-width: 900px) 50vw, 31vw" priority={index === 0} /><div><span>Custom made</span><h3>{basket.name}</h3></div></MotionReveal>)}</div>
  </div></section>
}

import { ExternalLink, Star } from 'lucide-react'
import type { GoogleReview } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { SectionHeading } from './SectionHeading'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/DeMarco%27s+Fine+Foods/'

export function GoogleReviews({ reviews }: { reviews: GoogleReview[] }) {
  return <section id="reviews" className="section reviews-section"><div className="shell"><SectionHeading eyebrow="Local confidence before you stop" title="See why Windsor shoppers choose DeMarco's" body="Check verified Google reviews, then make DeMarco's your easy neighbourhood stop today." />
    {reviews.length ? <div className="review-grid">{reviews.map((review) => <MotionReveal className="review-card" key={`${review.author}-${review.text}`}><div className="stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} fill={i < review.rating ? 'currentColor' : 'none'} />)}</div><blockquote>“{review.text}”</blockquote><p>{review.author}{review.relativeTime ? ` · ${review.relativeTime}` : ''}</p></MotionReveal>)}</div> : <div className="reviews-empty"><div className="stars" aria-label="Google reviews"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div><h3>Wondering if DeMarco's is worth the stop?</h3><p>See what verified Google reviewers say about this Windsor neighbourhood store.</p><a className="button" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Check Google Reviews <ExternalLink size={17} /></a></div>}
  </div></section>
}

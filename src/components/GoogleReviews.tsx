import { ExternalLink, Star } from 'lucide-react'
import { store, type GoogleReview } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { SectionHeading } from './SectionHeading'
import { trackCta } from '../lib/analytics'

export function GoogleReviews({ reviews }: { reviews: GoogleReview[] }) {
  return <section id="reviews" className="section reviews-section"><div className="shell"><SectionHeading eyebrow="Customer feedback" title="See What Our Customers Say" body="Read customer feedback on DeMarco's verified Google Business profile." />
    {reviews.length ? <div className="review-grid">{reviews.map((review) => <MotionReveal className="review-card" key={`${review.author}-${review.text}`}><div className="stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} fill={i < review.rating ? 'currentColor' : 'none'} aria-hidden="true" />)}</div><blockquote>“{review.text}”</blockquote><p>{review.author}{review.relativeTime ? ` · ${review.relativeTime}` : ''}</p></MotionReveal>)}</div> : <div className="reviews-empty"><h3>See What Our Customers Say</h3><p>Visit our Google profile to read customer feedback. We only publish ratings or review excerpts here when they come from verified review data.</p><a className="button" href={store.googleReviewsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('google_reviews_click', 'reviews_section')}>Read Our Google Reviews <ExternalLink size={17} aria-hidden="true" /></a></div>}
  </div></section>
}

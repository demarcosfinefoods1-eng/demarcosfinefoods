import { ExternalLink, Star } from 'lucide-react'
import { store, type GoogleReview } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { SectionHeading } from './SectionHeading'

export function GoogleReviews({ reviews }: { reviews: GoogleReview[] }) {
  return <section id="reviews" className="section reviews-section"><div className="shell"><SectionHeading eyebrow="Customer feedback" title="Read our Google Reviews" body="See what Google reviewers have shared about their experiences at DeMarco's." />
    {reviews.length ? <div className="review-grid">{reviews.map((review) => <MotionReveal className="review-card" key={`${review.author}-${review.text}`}><div className="stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} fill={i < review.rating ? 'currentColor' : 'none'} />)}</div><blockquote>“{review.text}”</blockquote><p>{review.author}{review.relativeTime ? ` · ${review.relativeTime}` : ''}</p></MotionReveal>)}</div> : <div className="reviews-empty"><h3>Read our Google Reviews</h3><p>Visit our Google profile to read customer feedback. A rating will appear here only when verified review data is available.</p><a className="button" href={store.googleReviewsUrl} target="_blank" rel="noreferrer">Read our Google Reviews <ExternalLink size={17} /></a></div>}
  </div></section>
}

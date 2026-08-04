import { Home, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { MobileActions } from '../components/MobileActions'
import { store } from '../data/store'
import { usePageSeo } from '../hooks/usePageSeo'

export default function NotFoundPage() {
  usePageSeo({
    title: "Page Not Found | DeMarco's Fine Foods",
    description: "Return to DeMarco's Fine Foods or get directions to our Windsor neighbourhood market.",
    canonical: store.siteUrl,
    robots: 'noindex, follow',
  })

  return <>
    <Header />
    <main id="main-content" tabIndex={-1} className="not-found">
      <div className="shell not-found-card">
        <p className="eyebrow">That page has moved</p>
        <h1>Let’s get you back to DeMarco’s.</h1>
        <p>Visit the homepage to see what’s fresh, or get directions straight to our Windsor store.</p>
        <div className="not-found-actions">
          <Link className="button" to="/"><Home size={19} /> Return Home</Link>
          <a className="button button-secondary" href={store.directionsUrl} target="_blank" rel="noreferrer"><Navigation size={19} /> Get Directions</a>
        </div>
      </div>
    </main>
    <MobileActions />
  </>
}

import { ArrowRight, MapPin } from 'lucide-react'
import { localBrands } from '../data/content'
import { store } from '../data/store'
import { trackCta } from '../lib/analytics'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function LocalFavourites() {
  return <section className="section local-section" aria-labelledby="local-title"><div className="shell">
    <SectionHeading eyebrow="Windsor neighbourhood market" title="Local & Ontario Favourites" titleId="local-title" body="Local and regional finds change with the seasons. Ask us what Windsor, Essex County and Ontario favourites are available when you visit." />
    {localBrands.length ? <div className="local-brand-grid">{localBrands.map((brand) => <MotionReveal className="local-brand-card" key={brand.name}><PhotoPlaceholder photoKey={brand.image} alt={`${brand.name}, a ${brand.category} from ${brand.location}`} /><div><span>{brand.location}</span><h3>{brand.name}</h3><p>{brand.description}</p>{brand.website && <a href={brand.website} target="_blank" rel="noreferrer" onClick={() => trackCta('local_discovery_click', 'local_brand', { brand_name: brand.name })}>Learn more <ArrowRight aria-hidden="true" size={16} /></a>}</div></MotionReveal>)}</div> : <MotionReveal className="local-message"><PhotoPlaceholder photoKey="produce-display" alt="Fresh produce displayed inside DeMarco's neighbourhood market in Windsor" /><div><span className="local-icon"><MapPin aria-hidden="true" /></span><p className="eyebrow">Close to home</p><h3>Ask what’s local when you stop in.</h3><p>DeMarco’s is proud to be part of the Windsor community. Our local and Ontario selection changes, so the best way to discover current favourites is to visit or call the store.</p><a className="text-link" href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => { trackCta('local_discovery_click', 'local_section'); trackCta('directions_click', 'local_section') }}>Visit DeMarco’s <ArrowRight aria-hidden="true" size={18} /></a></div></MotionReveal>}
  </div></section>
}

import { ArrowRight } from 'lucide-react'
import { specialtyCategories } from '../data/content'
import { store } from '../data/store'
import { trackCta } from '../lib/analytics'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function SpecialtyDiscovery() {
  return <section className="section specialty-section" aria-labelledby="specialty-title"><div className="shell">
    <SectionHeading eyebrow="Specialty food discovery" title="Find What Fits Your Table" titleId="specialty-title" body="Explore the Italian and specialty foods that make a neighbourhood market worth discovering. Looking for something specific? Ask our team in store." />
    <div className="specialty-grid">{specialtyCategories.map((category) => <MotionReveal className="specialty-card" key={category.name}><PhotoPlaceholder photoKey={category.image} alt={category.alt} /><div><h3>{category.name}</h3><p>{category.description}</p><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'specialty_card', { category: category.name })}>Visit DeMarco’s <ArrowRight aria-hidden="true" size={17} /></a></div></MotionReveal>)}<MotionReveal className="specialty-help"><p className="eyebrow">Need help finding something?</p><h3>Ask us in store.</h3><p>Product selection changes. Our team can help you find current pantry and specialty options without making unsupported dietary or certification claims.</p><a className="button" href={store.phoneHref} onClick={() => trackCta('call_click', 'specialty_help')}>Call the Store</a></MotionReveal></div>
  </div></section>
}

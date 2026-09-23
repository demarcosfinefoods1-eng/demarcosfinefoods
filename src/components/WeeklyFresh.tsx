import { ArrowRight } from 'lucide-react'
import { freshContentLastUpdated, freshItems } from '../data/content'
import { store } from '../data/store'
import { trackCta } from '../lib/analytics'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function WeeklyFresh() {
  return <section id="fresh" className="section weekly-section" aria-labelledby="weekly-title"><div className="shell">
    <div className="weekly-heading"><SectionHeading eyebrow={`Fresh picks updated ${freshContentLastUpdated}`} title="Fresh at DeMarco's" titleId="weekly-title" body="A look at recent and seasonal favourites photographed in store. Selection changes—check in store for current availability." /><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'fresh_section')}>Get Directions <ArrowRight size={18} aria-hidden="true" /></a></div>
    <div className="weekly-grid">{freshItems.map((item) => <MotionReveal className="weekly-card" key={item.name}><PhotoPlaceholder photoKey={item.image} alt={item.alt} /><div><span>{item.badge} · {item.category}</span><h3>{item.name}</h3><p>{item.description}</p><a href={store.phoneHref} onClick={() => { trackCta('fresh_item_click', 'fresh_card', { item_name: item.name }); trackCta('call_click', 'fresh_card', { item_name: item.name }) }}>Ask about this fresh pick <ArrowRight size={16} aria-hidden="true" /></a></div></MotionReveal>)}</div>
  </div></section>
}

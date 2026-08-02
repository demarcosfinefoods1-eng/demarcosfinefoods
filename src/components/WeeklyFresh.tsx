import { ArrowRight } from 'lucide-react'
import { freshThisWeek, store } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function WeeklyFresh() {
  return <section className="section weekly-section" aria-labelledby="weekly-title"><div className="shell">
    <div className="weekly-heading"><SectionHeading eyebrow="In store now" title="What's Fresh This Week" body="Seasonal favourites change quickly. Stop in today for the best selection." /><a href={store.directionsUrl}>Visit DeMarco's today <ArrowRight size={18} /></a></div>
    <div className="weekly-grid">{freshThisWeek.map((item) => <MotionReveal className="weekly-card" key={item.name}><PhotoPlaceholder photoKey={item.photoKey} alt={`${item.name} at DeMarco's Fine Foods — product photo coming soon`} /><div><span>{item.category}</span><h3>{item.name}</h3><p>{item.note}</p><a href={store.directionsUrl}>Find it in store today <ArrowRight size={16} /></a></div></MotionReveal>)}</div>
  </div></section>
}

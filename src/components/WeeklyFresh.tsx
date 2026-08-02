import { ArrowRight } from 'lucide-react'
import { freshThisWeek, store } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function WeeklyFresh() {
  return <section id="fresh" className="section weekly-section" aria-labelledby="weekly-title"><div className="shell">
    <div className="weekly-heading"><SectionHeading eyebrow="Worth stopping for today" title="What's Fresh This Week" body="Fresh seasonal picks, bread, Italian favourites, beer and wine—ready for one quick stop on your way home." /><a href={store.directionsUrl} target="_blank" rel="noreferrer">Get directions before today's picks are gone <ArrowRight size={18} /></a></div>
    <div className="weekly-grid">{freshThisWeek.map((item) => <MotionReveal className="weekly-card" key={item.name}><PhotoPlaceholder photoKey={item.photoKey} alt={`${item.name} at DeMarco's Fine Foods — product photo coming soon`} /><div><span>{item.category}</span><h3>{item.name}</h3><p>{item.note}</p><a href={store.directionsUrl} target="_blank" rel="noreferrer">Stop in for it today <ArrowRight size={16} /></a></div></MotionReveal>)}</div>
  </div></section>
}

import { ArrowRight } from 'lucide-react'
import { freshThisWeek, store } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function WeeklyFresh() {
  return <section id="fresh" className="section weekly-section" aria-labelledby="weekly-title"><div className="shell">
    <div className="weekly-heading"><SectionHeading eyebrow="Last Updated August 3" title="Recent Fresh Picks" titleId="weekly-title" body="Recently photographed at DeMarco's. Selection changes daily—call ahead for current availability." /><a href={store.directionsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowRight size={18} /></a></div>
    <div className="weekly-grid">{freshThisWeek.map((item) => <MotionReveal className="weekly-card" key={item.name}><PhotoPlaceholder photoKey={item.photoKey} alt={item.alt} /><div><span>{item.category}</span><h3>{item.name}</h3><p>{item.note}</p><a href={store.phoneHref}>Call to check availability <ArrowRight size={16} /></a></div></MotionReveal>)}</div>
  </div></section>
}

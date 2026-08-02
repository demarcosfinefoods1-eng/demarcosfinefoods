import { ArrowRight } from 'lucide-react'
import { freshThisWeek, store } from '../data/store'
import { MotionReveal } from './MotionReveal'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { SectionHeading } from './SectionHeading'

export function WeeklyFresh() {
  return <section id="fresh" className="section weekly-section" aria-labelledby="weekly-title"><div className="shell">
    <div className="weekly-heading"><SectionHeading eyebrow="An easy stop for tonight" title="What's Fresh This Week" body="Pick up dinner, fresh seasonal favourites, bread, beer and wine without making the big-box trip." /><a href={store.directionsUrl} target="_blank" rel="noreferrer">Stop in while today's picks last <ArrowRight size={18} /></a></div>
    <div className="weekly-grid">{freshThisWeek.map((item) => <MotionReveal className="weekly-card" key={item.name}><PhotoPlaceholder photoKey={item.photoKey} alt={`${item.name} at DeMarco's Fine Foods — product photo coming soon`} /><div><span>{item.category}</span><h3>{item.name}</h3><p>{item.note}</p><a href={store.directionsUrl} target="_blank" rel="noreferrer">Find it in store today <ArrowRight size={16} /></a></div></MotionReveal>)}</div>
  </div></section>
}

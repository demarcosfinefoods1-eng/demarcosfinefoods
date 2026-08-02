import { Clock3, Facebook, Heart, Instagram, MapPin, Navigation, Phone, ShoppingBasket, Sparkles } from 'lucide-react'
import { GoogleReviews } from '../components/GoogleReviews'
import { Header } from '../components/Header'
import { MobileActions } from '../components/MobileActions'
import { MotionReveal } from '../components/MotionReveal'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { SectionHeading } from '../components/SectionHeading'
import { WeeklyFresh } from '../components/WeeklyFresh'
import { departments, gallery, googleReviews, store } from '../data/store'
import { useStoreStatus } from '../hooks/useStoreStatus'

export default function HomePage() {
  const status = useStoreStatus()
  return <><Header /><main id="top">
    <section className="hero"><PhotoPlaceholder photoKey="hero-storefront" alt="DeMarco's Fine Foods storefront in Windsor — hero photo coming soon" className="hero-image" priority /><div className="hero-overlay" /><div className="shell hero-content">
      <MotionReveal><div className="status-pill"><span className={status.open ? 'status-dot' : 'status-dot closed'} />{status.label}</div><p className="hero-kicker">Windsor neighbourhood grocery · Open 7 days</p><h1>Fresh. Local.<br /><em>Convenient.</em></h1><p className="hero-sub">Fresh Produce <span>•</span> Beer & Wine <span>•</span> Italian Foods <span>•</span> Fresh Bread</p><p className="hero-copy">Everything for tonight's table—fresh, close to home, and waiting at 1349 Grand Marais Rd W.</p><div className="hero-actions"><a className="button" href={store.directionsUrl} target="_blank" rel="noreferrer"><Navigation size={20} /> Visit DeMarco's Today</a><a className="button button-light" href={store.phoneHref}><Phone size={20} /> Call the Store</a></div></MotionReveal>
    </div></section>

    <WeeklyFresh />

    <section className="trust-strip" aria-label="Store highlights"><div className="shell trust-grid"><div><MapPin />1349 Grand Marais Rd W</div><div><Clock3 />Open 7 days a week</div><div><ShoppingBasket />One quick stop for tonight's meal</div></div></section>

    <section id="departments" className="section"><div className="shell"><SectionHeading eyebrow="What you'll find" title="Make DeMarco's your stop for tonight" body="Fresh produce, Italian favourites, beer and wine, and everyday essentials—all nearby in Windsor." />
      <div className="department-grid">{departments.map((item, index) => <MotionReveal key={item.title} className={index === 0 ? 'department-card featured' : 'department-card'}><PhotoPlaceholder photoKey={item.photoKey} alt={item.alt} /><div className="card-shade" /><div className="card-content"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a href={store.directionsUrl} target="_blank" rel="noreferrer">Find it at DeMarco's today <span aria-hidden="true">→</span></a></div></MotionReveal>)}</div>
    </div></section>

    <GoogleReviews reviews={googleReviews} />

    <section id="about" className="section about-section"><div className="shell about-grid"><MotionReveal className="about-image-wrap"><PhotoPlaceholder photoKey="about-team-store" alt="The DeMarco's Fine Foods team and store interior — real photo coming soon" /><div className="local-badge"><strong>Local</strong><span>Windsor, Ontario</span></div></MotionReveal><MotionReveal className="about-copy"><SectionHeading eyebrow="Your local market" title="A neighbourhood store worth knowing" /><p>DeMarco's Fine Foods is Windsor's convenient stop for families, Italian food lovers, and anyone who wants fresh choices without the big-box trip.</p><p>Come in today for the ingredients you need tonight, discover something delicious, and enjoy friendly local service close to home.</p><a className="text-link" href={store.directionsUrl} target="_blank" rel="noreferrer">See how close DeMarco's is <Navigation size={18} /></a></MotionReveal></div></section>

    <section className="section why-section"><div className="shell"><SectionHeading eyebrow="Why DeMarco's" title="Why Windsor neighbours shop here" centered /><div className="why-grid">{[[Sparkles,'Fresh choices','Quality produce and foods for tonight’s dinner and the week ahead.'],[Heart,'Friendly local service','A welcoming neighbourhood store where shopping still feels personal.'],[ShoppingBasket,'Quick and convenient','Produce, Italian foods, beer and wine in one easy stop.']].map(([Icon,title,text]) => { const C = Icon as typeof Sparkles; return <MotionReveal className="why-card" key={title as string}><span><C /></span><h3>{title as string}</h3><p>{text as string}</p></MotionReveal>})}</div></div></section>

    <section className="section gallery-section"><div className="shell"><SectionHeading eyebrow="Inside DeMarco's" title="See what's waiting in store" body="The best way to discover today's fresh finds is to stop in and explore DeMarco's for yourself." /><div className="gallery-grid">{gallery.map(([photoKey, alt], index) => <MotionReveal className={`gallery-item gallery-${index + 1}`} key={photoKey}><PhotoPlaceholder photoKey={photoKey} alt={alt} /></MotionReveal>)}</div></div></section>

    <section id="visit" className="section visit-section"><div className="shell"><div className="visit-card"><div className="visit-details"><p className="eyebrow">Visit today</p><h2>Tonight's fresh ingredients are closer than you think.</h2><div className="visit-list"><a href={store.directionsUrl} target="_blank" rel="noreferrer"><MapPin /><span><small>Address</small>{store.address}</span></a><a href={store.phoneHref}><Phone /><span><small>Phone</small>{store.phoneDisplay}</span></a><div><Clock3 /><span><small>Hours</small>Mon–Sat: 10 AM–8 PM<br />Sunday: 11 AM–4 PM</span></div></div><div className="visit-actions"><a className="button" href={store.directionsUrl} target="_blank" rel="noreferrer"><Navigation size={19} /> Start Directions</a><a className="social" href={store.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a className="social" href={store.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a></div></div><div className="map-wrap"><iframe title="Map to DeMarco's Fine Foods" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=DeMarco%27s+Fine+Foods,+1349+Grand+Marais+Rd+W,+Windsor,+ON&output=embed" /></div></div></div></section>
  </main><footer><div className="shell footer-grid"><div><a href="#top" className="brand footer-brand"><span className="brand-mark">D</span><span>DeMarco's<small>Fine Foods</small></span></a><p>Fresh food and friendly service, right in your Windsor neighbourhood.</p></div><div><h3>Visit</h3><a href={store.directionsUrl} target="_blank" rel="noreferrer">1349 Grand Marais Rd W<br />Windsor, ON N9E 1E2</a><a href={store.phoneHref}>{store.phoneDisplay}</a></div><div><h3>Hours</h3><p>Monday–Saturday<br />10 AM–8 PM</p><p>Sunday<br />11 AM–4 PM</p></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} DeMarco's Fine Foods</span><span>Proudly serving Windsor, Ontario</span></div></footer><MobileActions /></>
}

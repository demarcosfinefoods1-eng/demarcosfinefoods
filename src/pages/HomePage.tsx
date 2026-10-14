import { Clock3, Facebook, Heart, Instagram, MapPin, Navigation, Phone, ShoppingBasket, Sparkles } from 'lucide-react'
import { GiftBasketsSection } from '../components/GiftBasketsSection'
import { GoogleReviews } from '../components/GoogleReviews'
import { Header } from '../components/Header'
import { HeroCompositeImage } from '../components/HeroCompositeImage'
import { LocalFavourites } from '../components/LocalFavourites'
import { MobileActions } from '../components/MobileActions'
import { MotionReveal } from '../components/MotionReveal'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { SectionHeading } from '../components/SectionHeading'
import { SpecialtyDiscovery } from '../components/SpecialtyDiscovery'
import { WeeklyFresh } from '../components/WeeklyFresh'
import { departments, gallery, googleReviews, store } from '../data/store'
import { useHashScroll } from '../hooks/useHashScroll'
import { usePageSeo } from '../hooks/usePageSeo'
import { useStoreStatus } from '../hooks/useStoreStatus'
import { trackCta } from '../lib/analytics'

export default function HomePage() {
  useHashScroll()
  usePageSeo({
    title: "DeMarco's Fine Foods | Windsor Neighbourhood Grocery",
    description: "Visit DeMarco's Fine Foods in Windsor for fresh produce, fresh bread, Italian and specialty foods, beer, wine and custom gift baskets.",
    canonical: store.siteUrl,
  })
  const status = useStoreStatus()

  return <><Header /><main id="main-content" tabIndex={-1}>
    <section className="hero"><HeroCompositeImage /><div className="hero-overlay" /><div className="shell hero-content">
      <MotionReveal><div className="status-pill"><span className={status.open ? 'status-dot' : 'status-dot closed'} />{status.label}</div><p className="hero-kicker">{status.heroKicker}</p><h1>Fresh. Local.<br /><em>Convenient.</em></h1><p className="hero-sub">Fresh Produce <span>•</span> Beer & Wine <span>•</span> Italian Foods <span>•</span> Fresh Bread</p><p className="hero-copy">Everything for dinner and drinks in one easy neighbourhood stop—without the big-box detour.</p><div className="hero-proof" aria-label="Store visit details"><span><Clock3 aria-hidden="true" />{status.label}</span><span><MapPin aria-hidden="true" />{store.streetAddress}</span><span><ShoppingBasket aria-hidden="true" />Dinner and drinks in one stop</span></div><div className="hero-actions"><a className="button" href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'homepage_hero')}><Navigation size={20} aria-hidden="true" /> {status.directionsLabel}</a><a className="button button-light" href="#fresh"><ShoppingBasket size={20} aria-hidden="true" /> See Fresh Picks</a></div></MotionReveal>
    </div></section>

    <section className="trust-strip" aria-label="Store highlights"><div className="shell trust-grid"><div><Clock3 aria-hidden="true" />{status.label}</div><div><MapPin aria-hidden="true" />Right here in South Windsor</div><div><ShoppingBasket aria-hidden="true" />Fresh food, Italian favourites, beer & wine</div></div></section>

    <WeeklyFresh />

    <section id="departments" className="section"><div className="shell"><SectionHeading eyebrow="Everything in one stop" title="A neighbourhood market with more to discover" body="Fresh produce, Italian favourites, fresh bread, beer and wine—all together in one convenient Windsor stop." />
      <div className="department-grid">{departments.map((item, index) => <MotionReveal key={item.title} className={index === 0 ? 'department-card featured' : 'department-card'}><PhotoPlaceholder photoKey={item.photoKey} alt={item.alt} /><div className="card-shade" /><div className="card-content"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'department_card', { department: item.title })}>Find it at DeMarco's <span aria-hidden="true">→</span></a></div></MotionReveal>)}</div>
    </div></section>

    <LocalFavourites />
    <SpecialtyDiscovery />
    <GiftBasketsSection />
    <GoogleReviews reviews={googleReviews} />

    <section id="about" className="section about-section"><div className="shell about-grid"><MotionReveal className="about-image-wrap"><PhotoPlaceholder photoKey="store-interior" alt="The real interior of DeMarco's Fine Foods with its bread display and welcoming market aisle" /><div className="local-badge"><strong>Local</strong><span>Windsor, Ontario</span></div></MotionReveal><MotionReveal className="about-copy"><SectionHeading eyebrow="Your local market" title="A neighbourhood store worth knowing" /><p>DeMarco's Fine Foods is Windsor's convenient stop for families, Italian food lovers, and anyone who wants fresh choices without the big-box trip.</p><p>Come in for the ingredients you need, discover something delicious, and enjoy friendly local service close to home.</p><a className="text-link" href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'about_section')}>See how close DeMarco's is <Navigation size={18} aria-hidden="true" /></a></MotionReveal></div></section>

    <section className="section why-section"><div className="shell"><SectionHeading eyebrow="Why DeMarco's" title="Why Windsor neighbours shop here" centered /><div className="why-grid">{[[Sparkles,'Fresh choices','Quality produce and foods for your next meal and the week ahead.'],[Heart,'Friendly local service','A welcoming neighbourhood store where shopping still feels personal.'],[ShoppingBasket,'Quick and convenient','Produce, Italian foods, beer and wine in one easy stop.']].map(([Icon,title,text]) => { const C = Icon as typeof Sparkles; return <MotionReveal className="why-card" key={title as string}><span><C aria-hidden="true" /></span><h3>{title as string}</h3><p>{text as string}</p></MotionReveal>})}</div></div></section>

    <section className="section gallery-section"><div className="shell"><SectionHeading eyebrow="Inside DeMarco's" title="See what's waiting in store" body="The best way to discover current fresh finds is to stop in and explore DeMarco's for yourself." /><div className="gallery-grid">{gallery.map(([photoKey, alt], index) => <MotionReveal className={`gallery-item gallery-${index + 1}`} key={photoKey}><PhotoPlaceholder photoKey={photoKey} alt={alt} /></MotionReveal>)}</div></div></section>

    <section id="visit" className="section visit-section"><div className="shell"><div className="visit-card"><div className="visit-details"><p className="eyebrow">{status.visitEyebrow}</p><h2>{status.visitTitle}</h2><p>{status.label}. Tap directions and we'll route you straight to the store.</p><div className="visit-list"><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'visit_address')}><MapPin aria-hidden="true" /><span><small>Address</small>{store.address}</span></a><a href={store.phoneHref} onClick={() => trackCta('call_click', 'visit_section')}><Phone aria-hidden="true" /><span><small>Phone</small>{store.phoneDisplay}</span></a><div><Clock3 aria-hidden="true" /><span><small>Hours</small>{store.hours.display.map((hours) => <span className="hours-line" key={hours.label}>{hours.label}: {hours.value}</span>)}</span></div></div><div className="visit-actions"><a className="button" href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'visit_section')}><Navigation size={19} aria-hidden="true" /> {status.directionsLabel}</a><a className="social" href={store.instagram} target="_blank" rel="noreferrer" aria-label="Visit DeMarco's on Instagram"><Instagram aria-hidden="true" /></a><a className="social" href={store.facebook} target="_blank" rel="noreferrer" aria-label="Visit DeMarco's on Facebook"><Facebook aria-hidden="true" /></a></div></div><div className="map-wrap"><iframe title="Map to DeMarco's Fine Foods" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={store.mapEmbedUrl} /></div></div></div></section>
  </main><footer><div className="shell footer-grid"><div><a href="#main-content" className="footer-brand" aria-label="DeMarco's Fine Foods home"><img className="footer-logo" src={`${import.meta.env.BASE_URL}brand/logo-dark.svg`} alt="DeMarco's Fine Foods" width="1100" height="700" /></a><p>Fresh food and friendly service, right in your Windsor neighbourhood.</p></div><div><h3>Visit</h3><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'footer')}>{store.streetAddress}<br />{store.city}, {store.province} {store.postalCode}</a><a href={store.phoneHref} onClick={() => trackCta('call_click', 'footer')}>{store.phoneDisplay}</a></div><div><h3>Hours</h3>{store.hours.display.map((hours) => <p key={hours.label}>{hours.label}<br />{hours.value}</p>)}</div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {store.name}</span><span>Proudly serving Windsor, Ontario</span></div></footer><MobileActions /></>
}

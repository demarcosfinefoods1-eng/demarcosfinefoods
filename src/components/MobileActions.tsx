import { MapPin, Phone } from 'lucide-react'
import { store } from '../data/store'
import { trackCta } from '../lib/analytics'
export function MobileActions() { return <div className="mobile-actions" aria-label="Quick store actions"><a href={store.phoneHref} onClick={() => trackCta('call_click', 'mobile_sticky')}><Phone size={20} aria-hidden="true" />Call Store</a><a href={store.directionsUrl} target="_blank" rel="noreferrer" onClick={() => trackCta('directions_click', 'mobile_sticky')}><MapPin size={20} aria-hidden="true" />Get Directions</a></div> }

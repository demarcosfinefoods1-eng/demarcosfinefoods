import { MapPin, Phone } from 'lucide-react'
import { store } from '../data/store'
export function MobileActions() { return <div className="mobile-actions"><a href={store.phoneHref}><Phone size={20} />Call Store</a><a href={store.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={20} />Directions</a></div> }

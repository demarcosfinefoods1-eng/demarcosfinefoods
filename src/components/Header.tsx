import { Menu, Navigation, X } from 'lucide-react'
import { useState } from 'react'
import { store } from '../data/store'

const links = [['Departments', '#departments'], ['Our Store', '#about'], ['Reviews', '#reviews'], ['Visit Us', '#visit']]
export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="shell header-inner">
    <a href="#top" className="brand" aria-label="DeMarco's Fine Foods home"><span className="brand-mark">D</span><span>DeMarco's<small>Fine Foods</small></span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a href={store.directionsUrl} target="_blank" rel="noreferrer" className="button button-small desktop-call"><Navigation size={17} /> Get Directions</a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</header>
}

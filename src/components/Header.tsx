import { Menu, Navigation, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../data/store'

const links = [['Gift Baskets', '/gift-baskets'], ['Departments', '/#departments'], ['Our Store', '/#about'], ['Reviews', '/#reviews'], ['Visit Us', '/#visit']]
export function Header() {
  const [open, setOpen] = useState(false)
  return <><a className="skip-link" href="#main-content">Skip to Main Content</a><header className="site-header"><div className="shell header-inner">
    <Link to="/" className="brand" aria-label="DeMarco's Fine Foods home"><img className="brand-logo" src="/demarcosfinefoods/brand/logo-nav.svg" alt="DeMarco's Fine Foods" width="860" height="560" /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</nav>
    <a href={store.directionsUrl} target="_blank" rel="noreferrer" className="button button-small desktop-call"><Navigation size={17} /> Get Directions</a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}</header></>
}

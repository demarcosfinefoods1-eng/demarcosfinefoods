import { Camera, Store } from 'lucide-react'

export function PhotoPlaceholder({ photoKey, alt, className = '', priority = false }: { photoKey: string; alt: string; className?: string; priority?: boolean }) {
  return <div className={`photo-placeholder ${className}`} role="img" aria-label={alt} data-photo-key={photoKey} data-priority={priority || undefined}>
    <div className="photo-pattern" aria-hidden="true" />
    <div className="photo-label"><span>{photoKey.includes('storefront') || photoKey === 'hero-storefront' ? <Store /> : <Camera />}</span><strong>DeMarco's photo</strong><small>{photoKey.replaceAll('-', ' ')}</small></div>
  </div>
}

export function PhotoPlaceholder({ photoKey, alt, className = '', priority = false }: { photoKey: string; alt: string; className?: string; priority?: boolean }) {
  const base = `${import.meta.env.BASE_URL}images/store/${photoKey}`
  return <picture className={`photo-placeholder ${className}`} data-photo-key={photoKey}>
    <source srcSet={`${base}-480.webp 480w, ${base}-800.webp 800w`} sizes="(max-width: 640px) 100vw, 50vw" type="image/webp" />
    <img src={`${base}-800.jpg`} srcSet={`${base}-480.jpg 480w, ${base}-800.jpg 800w`} sizes="(max-width: 640px) 100vw, 50vw" width="800" height="600" alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
  </picture>
}

type GiftBasketImageProps = {
  image: string
  alt: string
  sizes: string
  priority?: boolean
}

export function GiftBasketImage({ image, alt, sizes, priority = false }: GiftBasketImageProps) {
  const base = `${import.meta.env.BASE_URL}images/gift-baskets/`
  const name = image.replace(/\.jpg$/, '')
  return <img
    src={`${base}${image}`}
    srcSet={`${base}${name}-480.jpg 480w, ${base}${name}-800.jpg 800w, ${base}${image} 1200w`}
    sizes={sizes}
    width="900"
    height="1200"
    alt={alt}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
  />
}

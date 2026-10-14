type AnalyticsValue = string | number | boolean

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export type CtaEvent =
  | 'call_click'
  | 'directions_click'
  | 'gift_basket_call'
  | 'google_reviews_click'
  | 'fresh_item_click'
  | 'local_discovery_click'

export function trackCta(event: CtaEvent, location: string, details: Record<string, AnalyticsValue> = {}) {
  if (typeof window === 'undefined') return

  const parameters = { cta_location: location, ...details }
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, parameters)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...parameters })
}

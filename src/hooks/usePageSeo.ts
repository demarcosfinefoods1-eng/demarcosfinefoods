import { useEffect } from 'react'

type PageSeo = { title: string; description: string; canonical: string; robots?: string; image?: string }

export function usePageSeo({ title, description, canonical, robots, image }: PageSeo) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const previousDescription = descriptionTag?.content
    const previousCanonical = canonicalTag?.href
    const previousRobots = robotsTag?.content
    const metadata = [
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', canonical],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
      ...(image ? [['meta[property="og:image"]', image], ['meta[name="twitter:image"]', image]] : []),
    ] as const
    const previousMetadata = metadata.map(([selector]) => document.querySelector<HTMLMetaElement>(selector)?.content)
    document.title = title
    if (descriptionTag) descriptionTag.content = description
    if (canonicalTag) canonicalTag.href = canonical
    if (robotsTag && robots) robotsTag.content = robots
    metadata.forEach(([selector, value]) => {
      const tag = document.querySelector<HTMLMetaElement>(selector)
      if (tag) tag.content = value
    })
    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription
      if (canonicalTag && previousCanonical) canonicalTag.href = previousCanonical
      if (robotsTag && previousRobots) robotsTag.content = previousRobots
      metadata.forEach(([selector], index) => {
        const tag = document.querySelector<HTMLMetaElement>(selector)
        if (tag && previousMetadata[index]) tag.content = previousMetadata[index]!
      })
    }
  }, [title, description, canonical, robots, image])
}

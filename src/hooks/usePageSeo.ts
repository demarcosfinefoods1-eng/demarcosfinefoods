import { useEffect } from 'react'

type PageSeo = { title: string; description: string; canonical: string; robots?: string }

export function usePageSeo({ title, description, canonical, robots }: PageSeo) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const previousDescription = descriptionTag?.content
    const previousCanonical = canonicalTag?.href
    const previousRobots = robotsTag?.content
    document.title = title
    if (descriptionTag) descriptionTag.content = description
    if (canonicalTag) canonicalTag.href = canonical
    if (robotsTag && robots) robotsTag.content = robots
    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription
      if (canonicalTag && previousCanonical) canonicalTag.href = previousCanonical
      if (robotsTag && previousRobots) robotsTag.content = previousRobots
    }
  }, [title, description, canonical, robots])
}

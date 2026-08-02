import { useEffect } from 'react'

type PageSeo = { title: string; description: string; canonical: string }

export function usePageSeo({ title, description, canonical }: PageSeo) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousDescription = descriptionTag?.content
    const previousCanonical = canonicalTag?.href
    document.title = title
    if (descriptionTag) descriptionTag.content = description
    if (canonicalTag) canonicalTag.href = canonical
    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription
      if (canonicalTag && previousCanonical) canonicalTag.href = previousCanonical
    }
  }, [title, description, canonical])
}

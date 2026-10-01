import { useHead } from '@unhead/react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  author?: string
  tags?: string[]
}

export function SEO({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  publishedTime,
  author,
  tags 
}: SEOProps) {
  const siteTitle = 'BB AI Tech Solutions'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const defaultDescription = 'Building Reliable AI Technology Solutions for Schools, Businesses & Rehabilitation Centres'
  const siteUrl = 'https://bbaitechsolutions.com'
  const defaultImage = `${siteUrl}/og-image.jpg`

  useHead({
    title: fullTitle,
    meta: [
      // Basic SEO
      { name: 'description', content: description || defaultDescription },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      
      // Open Graph (Facebook, LinkedIn)
      { property: 'og:title', content: title || siteTitle },
      { property: 'og:description', content: description || defaultDescription },
      { property: 'og:image', content: image || defaultImage },
      { property: 'og:url', content: url ? `${siteUrl}${url}` : siteUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteTitle },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title || siteTitle },
      { name: 'twitter:description', content: description || defaultDescription },
      { name: 'twitter:image', content: image || defaultImage },
      
      // Article specific meta tags
      ...(type === 'article' && publishedTime ? [
        { property: 'article:published_time', content: publishedTime },
        { property: 'article:author', content: author || 'BB AI Tech Solutions' },
        ...(tags || []).map(tag => ({ property: 'article:tag', content: tag }))
      ] : []),
    ],
    link: [
      { rel: 'canonical', href: `${siteUrl}${url || ''}` },
    ],
  })

  return null // This component doesn't render anything
}
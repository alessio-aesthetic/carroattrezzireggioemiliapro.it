import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://carroattrezzireggioemiliapro.it/', priority: 1, changeFrequency: 'weekly' },
    { url: 'https://carroattrezzireggioemiliapro.it/#servizi', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://carroattrezzireggioemiliapro.it/#zone', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://carroattrezzireggioemiliapro.it/#contatti', priority: 0.8, changeFrequency: 'monthly' },
  ]
}

import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', 
    },
    {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: '/private/', 
    },
    {
      userAgent: 'Bingbot',
      allow: '/',
      disallow: '/private/', 
    },
    {
      userAgent: 'GPTBot',
      allow: '/',
      disallow: '/private/', 
    },
    {
      userAgent: 'CCBot',
      allow: '/',
      disallow: '/private/', 
    },
    {
      userAgent: 'DuckDuckBot',
      allow: '/',
      disallow: '/private/', 
    },

  ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  }
}

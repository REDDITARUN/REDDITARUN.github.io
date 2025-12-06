import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'
import { BLOG_POSTS } from './data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = WEBSITE_URL

  // 1. Static routes
  const routes = ['', '/blog'].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))

  // 2. Blog posts
  const posts = BLOG_POSTS.map((post) => ({
    url: `${base}${post.link}`,
    lastModified: new Date(),
  }))

  return [...routes, ...posts]
}
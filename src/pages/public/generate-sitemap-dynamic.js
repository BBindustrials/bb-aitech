import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import { Readable } from 'stream'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Static routes
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/solutions', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/industries', changefreq: 'monthly', priority: 0.7 },
  { url: '/training', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/request-demo', changefreq: 'monthly', priority: 0.7 },
  { url: '/taiwo-bright-ajayi', changefreq: 'monthly', priority: 0.6 },
  { url: '/hackathon-2026', changefreq: 'weekly', priority: 0.9 },
]

async function fetchDynamicRoutes() {
  const dynamicRoutes = []
  
  // Fetch blog posts
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('slug, published_at')
    .eq('status', 'published')
  
  if (blogPosts) {
    blogPosts.forEach(post => {
      dynamicRoutes.push({
        url: `/blog/${post.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: post.published_at,
      })
    })
  }
  
  // Fetch products
  const { data: products } = await supabase
    .from('products')
    .select('slug, updated_at')
  
  if (products) {
    products.forEach(product => {
      dynamicRoutes.push({
        url: `/solutions/${product.slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: product.updated_at,
      })
    })
  }
  
  return dynamicRoutes
}

async function generateSitemap() {
  try {
    const dynamicRoutes = await fetchDynamicRoutes()
    const allRoutes = [...staticRoutes, ...dynamicRoutes]
    
    console.log(`Generating sitemap with ${allRoutes.length} URLs...`)
    
    const sitemapStream = new SitemapStream({
      hostname: 'https://bbaitech.com', // Replace with your actual domain
    })
    
    const pipeline = Readable.from(allRoutes).pipe(sitemapStream)
    const sitemap = await streamToPromise(pipeline)
    
    // Write sitemap to the public directory
    const writeStream = createWriteStream('./public/sitemap.xml')
    writeStream.write(sitemap)
    writeStream.end()
    
    console.log('✅ Sitemap generated successfully!')
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
  }
}

generateSitemap()
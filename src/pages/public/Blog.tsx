/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../utils/supabaseClient';
import type { BlogPost } from '../../types';
import './Blog.css';

// =========================================================
// FALLBACK IMAGES (Unsplash — themed per category)
// =========================================================
const FALLBACK_IMAGES: Record<string, string> = {
  Events:
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=80&auto=format',
  'Product Updates':
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&q=80&auto=format',
  'Industry Insights':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80&auto=format',
  News:
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop&q=80&auto=format',
  Tutorials:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&q=80&auto=format',
  default:
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&q=80&auto=format',
};

// =========================================================
// COMPONENT
// =========================================================
export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ---- Sample posts (used if Supabase is empty) ----------------------
  const samplePosts = [
    {
      id: '1',
      title: 'JustCBT AI Launches — Revolutionizing Exam Preparation',
      slug: 'justcbt-ai-launch',
      excerpt:
        'Our AI-powered CBT platform is now live, helping schools conduct and evaluate theory-based exams without the printing cost or marking stress.',
      featured_image_url: null,
      category: 'Product Updates',
      tags: ['Product Launch', 'AI in Education', 'Exams'],
      published_at: '2026-05-15',
      author: 'Ajayi Taiwo Bright',
      content: {},
    },
    {
      id: '2',
      title: 'The Future of AI in Nigerian Education',
      slug: 'future-of-ai-nigerian-education',
      excerpt:
        'Exploring how artificial intelligence is transforming the educational landscape in Nigeria and across Africa.',
      featured_image_url: null,
      category: 'Industry Insights',
      tags: ['AI Education', 'Future of Learning', 'EdTech'],
      published_at: '2026-05-10',
      author: 'Ajayi Taiwo Bright',
      content: {},
    },
    {
      id: '3',
      title: 'Partnership: BB AI Tech + The Broadoak Schools',
      slug: 'partnership-broadoak-schools',
      excerpt:
        'Our ongoing work with The Broadoak Schools shows what digital transformation looks like in practice.',
      featured_image_url: null,
      category: 'News',
      tags: ['Partnership', 'Digital Transformation', 'Education'],
      published_at: '2026-05-05',
      author: 'BB AI Tech Solutions',
      content: {},
    },
    {
      id: '4',
      title: 'Understanding Prompt Engineering for Business Success',
      slug: 'prompt-engineering-business',
      excerpt:
        'Learn how mastering prompt engineering can transform your business operations and boost productivity.',
      featured_image_url: null,
      category: 'Tutorials',
      tags: ['Prompt Engineering', 'AI Tools', 'Business'],
      published_at: '2026-04-28',
      author: 'Ajayi Taiwo Bright',
      content: {},
    },
    {
      id: '5',
      title: 'Teach IDD: Supporting Students with Intellectual Disabilities',
      slug: 'teach-idd-supporting-students',
      excerpt:
        'How our AI assistant helps teachers provide personalized learning for students with special needs.',
      featured_image_url: null,
      category: 'Product Updates',
      tags: ['Special Education', 'IDD', 'AI Assistant'],
      published_at: '2026-04-20',
      author: 'Ajayi Kehinde Best',
      content: {},
    },
    {
      id: '6',
      title: 'From Statistics to Product: Building AI for Education',
      slug: 'from-statistics-to-product',
      excerpt:
        'A short reflection on the path from a statistics degree to building real AI products for schools.',
      featured_image_url: null,
      category: 'Industry Insights',
      tags: ['Founder Story', 'AI', 'Education'],
      published_at: '2026-04-12',
      author: 'Ajayi Taiwo Bright',
      content: {},
    },
  ];

  useEffect(() => {
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setPosts(data as BlogPost[]);
      } else {
        setPosts(samplePosts as any);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts(samplePosts as any);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'all',
    'Product Updates',
    'Industry Insights',
    'News',
    'Tutorials',
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const getImage = (post: BlogPost) => {
    const url = (post as any).featured_image_url;
    if (url && typeof url === 'string' && url.trim().length > 0) {
      return url;
    }
    return FALLBACK_IMAGES[post.category] || FALLBACK_IMAGES.default;
  };

  return (
    <>
      <Navigation />

      <main>
        {/* ================= HERO ================= */}
        <section className="blg-hero">
          <div className="blg-hero-bg" aria-hidden="true" />
          <div className="blg-hero-blob blg-hero-blob--1" aria-hidden="true" />
          <div className="blg-hero-blob blg-hero-blob--2" aria-hidden="true" />

          <div className="container blg-hero-content">
            <div className="blg-eyebrow">
              <span className="blg-eyebrow-dot" />
              Insights &amp; Updates
            </div>

            <h1 className="blg-hero-title">
              Stories from{' '}
              <span className="blg-gold">building AI for Africa</span>
            </h1>

            <p className="blg-hero-sub">
              Product updates, industry insights, and lessons from shipping AI
              solutions for schools, businesses, and institutions.
            </p>
          </div>
        </section>

        {/* ================= CATEGORY FILTER ================= */}
        <section className="blg-filter-wrap">
          <div className="container">
            <div className="blg-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`blg-filter-btn ${
                    selectedCategory === category ? 'is-active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= POSTS GRID ================= */}
        <section className="section blg-posts">
          <div className="container">
            {loading ? (
              <div className="blg-loading">
                <p>Loading insights…</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="blg-empty">
                <p>No posts found in this category.</p>
              </div>
            ) : (
              <div className="blg-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blg-card">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="blg-card-image"
                      aria-label={post.title}
                    >
                      <img
                        src={getImage(post)}
                        alt={post.title}
                        loading="lazy"
                        onError={(e) => {
                          // If the actual image fails, fall back to category default
                          const img = e.currentTarget;
                          img.onerror = null;
                          img.src =
                            FALLBACK_IMAGES[post.category] ||
                            FALLBACK_IMAGES.default;
                        }}
                      />
                      <span className="blg-card-cat">{post.category}</span>
                    </Link>

                    <div className="blg-card-body">
                      <h3 className="blg-card-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <div className="blg-card-meta">
                        <span className="blg-meta-item">
                          <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                          {post.published_at
                            ? new Date(post.published_at).toLocaleDateString(
                                'en-US',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                }
                              )
                            : 'Unknown date'}
                        </span>
                        <span className="blg-meta-item">
                          <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                          </svg>
                          {post.author || 'BB AI Tech'}
                        </span>
                      </div>

                      <p className="blg-card-excerpt">{post.excerpt}</p>

                      {post.tags && post.tags.length > 0 && (
                        <div className="blg-card-tags">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="blg-tag">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <Link
                        to={`/blog/${post.slug}`}
                        className="blg-card-link"
                      >
                        Read More <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="section blg-newsletter-wrap">
          <div className="container">
            <div className="blg-newsletter">
              <h2>
                Subscribe to our <span className="blg-gold">newsletter</span>
              </h2>
              <p>
                Get the latest updates on AI trends, product launches, and
                training opportunities.
              </p>

              <form
                className="blg-newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  required
                />
                <button type="submit">
                  Subscribe <span aria-hidden="true">→</span>
                </button>
              </form>

              <p className="blg-newsletter-note">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
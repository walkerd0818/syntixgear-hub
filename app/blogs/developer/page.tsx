import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/blogs/developer',
  },
  title: 'Developer Blog | SyntixGear',
  description:
    'Engineering posts from the SyntixGear team — architecture decisions, debugging deep dives, open-source tooling, and real-world software patterns.',
};

// ---------------------------------------------------------------------------
// Post registry — add new posts here. Newest first.
// ---------------------------------------------------------------------------
const POSTS = [
  {
    slug: 'intro',
    tag: 'introduction',
    tagColor: 'cyan' as const,
    date: '2026-04-01',
    readTime: '6 min',
    title: 'Initial Commit: The Syntix Gear Manifesto',
    excerpt:
      'In a world of bloated software and generic fast-fashion, SyntixGear was born from a simple realization: the tools we use and the gear we wear should reflect the logic we live by.',
    topics: ['Coding Tips', 'Performance', 'Architecture'],
  },
//   {
//     slug: 'request-modal-formsubmit',
//     tag: 'tooling',
//     tagColor: 'orange' as const,
//     date: '2026-03-10',
//     readTime: '6 min',
//     title: 'Self-Contained Modal Modules Without a Framework',
//     excerpt:
//       'A pattern for building fully isolated UI modules that inject their own CSS, HTML, and event listeners — no React, no bundler, no conflicts.',
//     topics: ['Vanilla JS', 'Patterns', 'UI'],
//   },
//   {
//     slug: 'seo-for-static-calculators',
//     tag: 'seo',
//     tagColor: 'cyan' as const,
//     date: '2026-02-28',
//     readTime: '9 min',
//     title: 'SEO at Scale for Static Pages: Lessons from 87 Calculator URLs',
//     excerpt:
//       'Structured data, canonical URLs, sitemap generation, and the one meta-description mistake that cost three weeks of organic traffic.',
//     topics: ['SEO', 'Static Sites', 'Search'],
//   },
//   {
//     slug: 'adsense-local-dev-trick',
//     tag: 'dev-ops',
//     tagColor: 'orange' as const,
//     date: '2026-02-15',
//     readTime: '4 min',
//     title: 'Auto-Hiding AdSense in Local Dev Without Environment Variables',
//     excerpt:
//       "A two-line trick using window.location to suppress ads on localhost and file:// without touching .env files or build configs.",
//     topics: ['AdSense', 'Developer UX', 'Tricks'],
//   },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const TAG_STYLES: Record<string, string> = {
  cyan: 'text-cyan-400 border-cyan-900 bg-cyan-950/40',
  orange: 'text-orange-400 border-orange-900 bg-orange-950/40',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function DeveloperBlogPage() {
  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <div className="hex-deco hex-deco-1">
        {`64 65 76 3a 3a 62\n6c 6f 67 3a 3a 6c\n6f 61 64 3a 3a 5b\n4f 4b 5d 3a 3a 72`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`65 61 64 79 3a 3a\n70 6f 73 74 73 3a\n3a 74 72 75 65 3a\n5b 45 4f 46 5d 3a`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/blogs">
          <span className="back-arrow">←</span> Blogs
        </a>
      </nav>

      <main className="page">
        {/* ---------------------------------------------------------------- */}
        {/* PAGE HEADER                                                       */}
        {/* ---------------------------------------------------------------- */}
        <header className="site-header">
          <p className="section-tag">// blog_01 //</p>
          <h1>Developer Blog</h1>
          <p className="tagline">
            <span>//</span> engineering decisions, documented <span>//</span>
          </p>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* STATS BAR                                                         */}
        {/* ---------------------------------------------------------------- */}
        <div className="max-w-3xl mx-auto px-4 mt-8 mb-12">
          <div className="flex flex-wrap gap-6 font-mono text-xs text-slate-500 border border-slate-800 bg-slate-900/40 rounded px-5 py-3">
            <span>
              <span className="text-cyan-500">{POSTS.length}</span> posts
            </span>
            <span>
              <span className="text-cyan-500">∞</span> drafts
            </span>
            <span>
              <span className="text-orange-400">active</span> :: last_updated{' '}
              {formatDate(POSTS[0].date)}
            </span>
          </div>
        </div>

        <div className="ad-slot ad-slot-top">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="5555555555"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* POST LIST                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="max-w-3xl mx-auto px-4 mb-16 space-y-5">
          {POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blogs/developer/${post.slug}`}
              className="group block border border-slate-800 bg-slate-900/30 rounded p-5 hover:border-slate-600 hover:bg-slate-900/60 transition-all duration-200 relative overflow-hidden"
            >
              {/* index marker */}
              <span className="absolute top-5 right-5 font-mono text-xs text-slate-700 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* tag + meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded border ${
                    TAG_STYLES[post.tagColor]
                  }`}
                >
                  {post.tag}
                </span>
                <span className="font-mono text-xs text-slate-600">
                  {formatDate(post.date)}
                </span>
                <span className="font-mono text-xs text-slate-600">{post.readTime} read</span>
              </div>

              {/* title */}
              <h2 className="text-slate-200 font-semibold text-base leading-snug mb-2 group-hover:text-white transition-colors">
                {post.title}
              </h2>

              {/* excerpt */}
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>

              {/* topics */}
              <div className="flex flex-wrap gap-2">
                {post.topics.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-slate-600 border border-slate-800 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* hover CTA */}
              <div className="mt-4 font-mono text-xs text-cyan-600 group-hover:text-cyan-400 transition-colors">
                read_post →
              </div>
            </Link>
          ))}
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* EMPTY STATE / COMING SOON                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <div className="border border-dashed border-slate-800 rounded p-8 text-center">
            <p className="font-mono text-xs text-slate-700 mb-2">// pending_posts //</p>
            <p className="text-slate-600 text-sm">
              More posts are being written. Check back soon — or{' '}
              <a href="/" className="text-cyan-700 hover:text-cyan-500 transition-colors">
                follow SyntixGear
              </a>{' '}
              for updates.
            </p>
          </div>
        </section>

        <div className="ad-slot ad-slot-bottom">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="6666666666"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <footer>
          <p className="footer-line">
            <a href="/">← Back to SyntixGear</a>
            &nbsp;·&nbsp; © 2026 SyntixGear
            &nbsp;·&nbsp; <a href="/about">About</a>
            &nbsp;·&nbsp; <a href="/cookies">Cookies</a>
            &nbsp;·&nbsp; <a href="/legal">Legal</a>
            &nbsp;·&nbsp; <a href="/privacy">Privacy</a>
            &nbsp;·&nbsp; <a href="/terms-of-service">Terms of Service</a>
          </p>
        </footer>
      </main>
    </>
  );
}

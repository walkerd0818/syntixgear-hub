import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/blogs',
  },
  title: 'Blogs | SyntixGear Insights',
  description:
    'Deep dives into developer tools, engineering patterns, and technical insights from the SyntixGear team.',
};

export default function BlogPage() {
  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <div className="hex-deco hex-deco-1">
        {`62 6c 6f 67 3a 3a\n69 6e 69 74 3a 3a\n73 74 61 72 74 3a\n74 72 75 65 3a 3a`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 70 6f 73 74\n73 3a 3a 6c 6f 61\n64 65 64 3a 3a 5b\n4f 4b 5d 3a 3a 45 4f 46`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page">
        <header className="site-header">
          <p className="section-tag">// section_01 //</p>
          <h1>Blogs</h1>
          <p className="tagline">
            <span>//</span> technical writing from the trenches <span>//</span>
          </p>
        </header>

        {/* OVERVIEW SECTION */}
        <section className="tools-overview max-w-3xl mx-auto my-12 px-4 text-slate-400">
          <h2 className="text-xl font-bold text-slate-200 mb-4 font-mono tracking-tight underline decoration-cyan-500/50 underline-offset-8">
            What We Write About
          </h2>
          <p className="mb-4 leading-relaxed">
            Long-form technical writing from engineers who build things. No fluff, no padding —
            just documented problem-solving, pattern analysis, and the kind of insights that
            come from shipping real software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-slate-800 p-4 bg-slate-900/40 rounded">
              <h3 className="text-cyan-400 font-mono text-sm mb-2 uppercase tracking-tighter">
                01. Signal Over Noise
              </h3>
              <p className="text-xs italic">
                Every post earns its length. If it can be a comment, it is. If it needs depth,
                it gets depth.
              </p>
            </div>
            <div className="border border-slate-800 p-4 bg-slate-900/40 rounded">
              <h3 className="text-orange-400 font-mono text-sm mb-2 uppercase tracking-tighter">
                02. Reproducible Thinking
              </h3>
              <p className="text-xs italic">
                Code samples, architecture diagrams, and decision logs — not just conclusions,
                but the reasoning that got there.
              </p>
            </div>
          </div>
        </section>

        <div className="ad-slot ad-slot-top">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="3333333333"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* BLOG CATEGORY CARDS */}
        <div className="cards cards-tools">
          <a className="card card-cyan" href="/blogs/developer">
            <span className="card-status">
              <span className="status-dot" />
              active
            </span>
            <span className="card-icon">{'</>'}</span>
            <div className="card-label">blog_01</div>
            <div className="card-title">Developer Blog</div>
            <p className="card-desc">
              Architecture decisions, debugging war stories,{' '}
              <strong>open-source tooling</strong>, and{' '}
              <strong>engineering patterns</strong> from the SyntixGear build log.
            </p>
            <div className="card-tags">
              <span className="tag">Engineering</span>
              <span className="tag">Architecture</span>
              <span className="tag">Open Source</span>
              <span className="tag">Tooling</span>
            </div>
            <div className="card-cta">Read Developer Posts →</div>
          </a>

          <div className="card-placeholder">
            <div className="placeholder-icon">⊕</div>
            <p className="placeholder-text">More categories incoming...</p>
          </div>
        </div>

        {/* BLOG DOMAINS SECTION */}
        <section className="tools-details max-w-3xl mx-auto my-16 px-4 py-8 border-t border-slate-800/50">
          <h2 className="text-slate-300 font-mono text-lg mb-6">// writing_domains //</h2>
          <div className="space-y-6 text-sm text-slate-500">
            <p>
              <strong>Developer Insights:</strong> From system design trade-offs to the
              unglamorous reality of debugging production issues — posts written by engineers
              who have been in the thick of it.
            </p>
            <p>
              <strong>Tooling & Workflow:</strong> The tools we build, adopt, or discard —
              documented honestly, with enough context to help you decide for yourself.
            </p>
          </div>
        </section>

        <div className="ad-slot ad-slot-bottom">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="4444444444"
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

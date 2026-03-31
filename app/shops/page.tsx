import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/shops',
  },
  title: 'SyntixGear Shops | Apparel & Graphic Design for Creators',
  description: 'Original technical apparel and industrial graphic design. Browse the SyntixGear collections across TeePublic and RedBubble.',
};

export default function ShopsPage() {
  return (
    <>
      {/* Ambient blobs */}
      <div className="ambient ambient-1 ambient-shops-1" />
      <div className="ambient ambient-2 ambient-shops-2" />
      <div className="ambient ambient-3" />

      {/* Hex decorations */}
      <div className="hex-deco hex-deco-1">
        {`73 68 6f 70 73 3a\n3a 73 74 6f 72 65\n73 3a 3a 6c 6f 61\n64 65 64 3a 3a 33`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 72 65 61 64\n79 3a 3a 74 72 75\n65 3a 3a 5b 4f 4b\n5d 3a 3a 5b 45 4f 46 5d`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page">
        <header className="site-header">
          <p className="section-tag shop-tag">// section_02 //</p>
          <h1 className="h1-shops">Shops</h1>
          <p className="tagline">
            <span>//</span> original designs &nbsp;·&nbsp; ships worldwide <span>//</span>
          </p>
        </header>

         {/* BRAND PHILOSOPHY: Essential for AdSense Value */}
        <section className="home-intro text-center max-w-2xl mx-auto my-12 px-4">
          <h2 className="text-orange-500 font-mono text-sm mb-4 uppercase tracking-widest">// Design_Aesthetic //</h2>
          <p className="text-slate-300 leading-relaxed italic">
            SyntixGear is an independent design house specializing in <strong>retro-futurism</strong>, 
            <strong> terminal-inspired aesthetics</strong>, and <strong>technical blueprints</strong>. 
            We create gear for builders, coders, and engineers.
          </p>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Every artwork is produced in-house, focusing on high-resolution vector lines and industrial 
            palettes. We partner with global leaders in <strong>print-on-demand</strong> to ensure 
            sustainable production and reliable worldwide fulfillment.
          </p>
        </section>

       {/* AD SLOT TOP */}
        <div className="ad-slot ad-slot-top ad-slot-shops">
          <p className="ad-label ad-label-shops">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="5555555555"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* CENTERED CARDS: Using the same 'cards' class as Home page */}
        <div className="cards">
          {/* TeePublic */}
          <a
            className="card card-orange"
            href="https://www.teepublic.com/user/syntixgear"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              online
            </span>
            <span className="card-icon">◈</span>
            <div className="card-label">shop_01</div>
            <div className="card-title">TeePublic</div>
            <p className="card-desc">
              Premium apparel for developers and tech visionaries. 
              Minimalist design with maximum industrial impact.
            </p>
            <p className="card-meta">Apparel &middot; Stickers &middot; Cases</p>
            <div className="card-cta">Visit Shop →</div>
          </a>

          {/* RedBubble */}
          <a
            className="card card-redbubble"
            href="https://www.redbubble.com/people/SyntixGear/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              online
            </span>
            <span className="card-icon">◉</span>
            <div className="card-label">shop_02</div>
            <div className="card-title">RedBubble</div>
            <p className="card-desc">
              Expanded collections spanning high-quality wall art, 
              home decor, and creative tech accessories.
            </p>
            <p className="card-meta">Wall Art &middot; Decor &middot; Tech</p>
            <div className="card-cta">Explore Designs →</div>
          </a>
          <p>&nbsp;&nbsp;</p>
        </div>

        {/* QUALITY PROTOCOL: Adds Expertise and Trust (E-E-A-T) */}
        <div className="legal-divider my-16 opacity-20" />
        
        <section className="features-grid grid md:grid-cols-3 gap-8 px-4 max-w-4xl mx-auto text-sm text-slate-400 font-mono">
          <div className="feature-item border border-slate-800 p-4 rounded bg-slate-900/50">
            <h3 className="text-orange-500 mb-2">01. Print_Quality</h3>
            <p>Our partners use DTG (Direct to Garment) and high-density printing to ensure long-lasting design clarity.</p>
          </div>
          <div className="feature-item border border-slate-800 p-4 rounded bg-slate-900/50">
            <h3 className="text-cyan-500 mb-2">02. Global_Logistics</h3>
            <p>Orders are routed to the nearest regional fulfillment center to minimize shipping times and carbon footprint.</p>
          </div>
          <div className="feature-item border border-slate-800 p-4 rounded bg-slate-900/50">
            <h3 className="text-slate-200 mb-2">03. Support</h3>
            <p>Fulfillment, returns, and tracking are managed through each platform's dedicated customer service protocols.</p>
          </div>
        </section>

        {/* AD SLOT BOTTOM */}
        <div className="ad-slot ad-slot-bottom ad-slot-shops mt-16">
          <p className="ad-label ad-label-shops">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
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

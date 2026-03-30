import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/shops',
  },
  title: 'SyntixGear Shops | Apparel & Graphic Design for Creators',
  description: 'Original technical apparel and industrial graphic design. Browse the SyntixGear collections across TeePublic, Amazon, and RedBubble.',
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

         {/* NEW CONTENT: BRAND PHILOSOPHY SECTION */}
        <section className="shops-intro max-w-3xl mx-auto my-12 px-4 text-slate-400">
          <h2 className="text-xl font-bold text-orange-500 mb-4 font-mono tracking-tight underline decoration-orange-500/30 underline-offset-8">
            The Design Aesthetic
          </h2>
          <p className="mb-4 leading-relaxed italic text-slate-300">
            SyntixGear is an independent design house specializing in <strong>retro-futurism</strong>, 
            <strong> terminal-inspired aesthetics</strong>, and <strong>technical blueprints</strong>. 
            We create gear for the builders, the coders, and the late-night engineers.
          </p>
          <p className="text-sm leading-relaxed">
            Every piece of artwork is created in-house with a focus on clean vector lines and industrial 
            color palettes. To ensure global availability and high-quality printing, we partner with 
            established fulfillment leaders. When you purchase through the links below, your gear is 
            printed-on-demand and shipped directly from their professional facilities.&nbsp;
          </p>
           <p>&nbsp;</p>
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


        <div className="cards cards-shops">

          {/* TeePublic */}
          <a
            className="card card-orange"
            href="https://www.teepublic.com/user/syntixgear"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              Shop is live
            </span>
            <span className="card-icon">◈</span>
            <div className="card-label">shop_01</div>
            <div className="card-title">TeePublic</div>
            <p className="card-desc">
              Premium apparel for developers, engineers, and tech visionaries. 
              Syntix Gear blends minimalist design with maximum impact. 
              Clean lines, technical themes, and essential graphics for your daily rotation. 
            </p>
            <div className="card-cta">Visit Shop →</div>
          </a>

          {/* Amazon Merch */}
          <a
            className="card card-amazon"
            href="https://www.amazon.com/s?rh=p_4%3AYOUR-BRAND"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              coming soon
            </span>
            <span className="card-icon">⬢</span>
            <div className="card-label">shop_02</div>
            <div className="card-title">Amazon Merch</div>
            <p className="card-desc">
              Direct access via Amazon Merch on Demand. Premium cotton tees and 
              hoodies featuring our technical blueprints with Prime-eligible 
              logistics and trusted global fulfillment.
            </p>
            <div className="card-cta">Shop on Amazon →</div>
          </a>

          {/* RedBubble */}
          <a
            className="card card-redbubble"
            href="https://www.redbubble.com/people/syntixgear/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              Shop is live
            </span>
            <span className="card-icon">◉</span>
            <div className="card-label">shop_03</div>
            <div className="card-title">RedBubble</div>
            <p className="card-desc">
              Expanded collections spanning home decor, high-quality stickers, 
              phone cases, and wall art. Technical designs applied to 
              virtually any surface for your workspace setup.
            </p>
            <div className="card-cta">Explore Designs →</div>
          </a>

        </div>

        {/* NEW CONTENT: COMMITMENT TO QUALITY */}
        <section className="shops-details max-w-3xl mx-auto my-16 px-4 py-8 border-t border-slate-800/50">
          <h2 className="text-slate-300 font-mono text-lg mb-6 tracking-widest text-center uppercase">// quality_protocol //</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-500 font-mono">
            <div className="p-4 border border-slate-800 bg-slate-900/20">
              <span className="text-orange-500 font-bold block mb-2">[ VECTOR_PRECISION ]</span>
              All designs are exported as high-resolution vectors to ensure crisp print lines, 
              regardless of product size—from a laptop sticker to a large canvas print.
            </div>
            <div className="p-4 border border-slate-800 bg-slate-900/20">
              <span className="text-cyan-500 font-bold block mb-2">[ GLOBAL_SHIPPING ]</span>
              Through our partners, we offer worldwide shipping with local fulfillment centers 
              in the US, Europe, and Australia to minimize transit times and carbon footprint.
            </div>
          </div>
        </section>

        {/* AD SLOT BOTTOM */}
        <div className="ad-slot ad-slot-bottom ad-slot-shops">
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

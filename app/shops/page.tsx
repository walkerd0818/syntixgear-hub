import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/shops',
  },
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

      {/* Back nav */}
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

        {/* AD SLOT TOP — replace data-ad-slot value with your slot ID */}
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
            href="https://www.teepublic.com/user/YOUR-STORE-NAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              coming soon
            </span>
            <span className="card-icon">◈</span>
            <div className="card-label">shop_01</div>
            <div className="card-title">TeePublic</div>
            <p className="card-desc">
              Original SyntixGear designs on tees, hoodies, stickers, and more.
              Printed on demand, shipped worldwide.
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
              SyntixGear on Amazon Merch on Demand. Prime-eligible apparel with
              Amazon's trusted fulfillment network.
            </p>
            <div className="card-cta">Shop on Amazon →</div>
          </a>

          {/* RedBubble */}
          <a
            className="card card-redbubble"
            href="https://www.redbubble.com/people/YOUR-STORE-NAME/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-status">
              <span className="status-dot" />
              coming soon
            </span>
            <span className="card-icon">◉</span>
            <div className="card-label">shop_03</div>
            <div className="card-title">RedBubble</div>
            <p className="card-desc">
              Artwork and designs on 70+ products — from phone cases to wall
              art. Independent, creative, and one-of-a-kind.
            </p>
            <div className="card-cta">Explore Designs →</div>
          </a>

        </div>

        {/* AD SLOT BOTTOM — replace data-ad-slot value with your slot ID */}
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
          </p>
        </footer>
      </main>
    </>
  );
}
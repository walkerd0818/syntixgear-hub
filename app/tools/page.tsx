export default function ToolsPage() {
  return (
    <>
      {/* Ambient blobs */}
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      {/* Hex decorations */}
      <div className="hex-deco hex-deco-1">
        {`74 6f 6f 6c 73 3a\n3a 6d 6f 64 75 6c\n65 73 3a 3a 6c 6f\n61 64 65 64 3a 3a`}
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
          <p className="section-tag">// section_01 //</p>
          <h1>Tools</h1>
          <p className="tagline">
            <span>//</span> precision utilities for every calculation <span>//</span>
          </p>
        </header>

        {/* AD SLOT TOP — replace data-ad-slot value with your slot ID */}
        <div className="ad-slot ad-slot-top">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="3333333333"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <div className="cards cards-tools">

          {/* CalcVault */}
          <a className="card card-cyan" href="/calc-vault">
            <span className="card-status">
              <span className="status-dot" />
              online
            </span>
            <span className="card-icon">⬡</span>
            <div className="card-label">tool_01</div>
            <div className="card-title">CalcVault</div>
            <p className="card-desc">
              Professional-grade calculators for finance, engineering, health,
              and unit conversion. Fast, accurate, built for real work.
            </p>
            <div className="card-tags">
              <span className="tag">Finance</span>
              <span className="tag">Engineering</span>
              <span className="tag">Health</span>
              <span className="tag">Units</span>
            </div>
            <div className="card-cta">Launch CalcVault →</div>
          </a>

          {/* Placeholder */}
          <div className="card-placeholder">
            <div className="placeholder-icon">⊕</div>
            <p className="placeholder-text">More tools coming soon</p>
          </div>

        </div>

        {/* AD SLOT BOTTOM — replace data-ad-slot value with your slot ID */}
        <div className="ad-slot ad-slot-bottom">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
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
          </p>
        </footer>
      </main>
    </>
  );
}

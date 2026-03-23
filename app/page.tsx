import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Ambient blobs */}
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      {/* Hex decorations */}
      <div className="hex-deco hex-deco-1">
        {`53 59 4e 54 49 58\n47 45 41 52 20 2f\n2f 20 76 31 2e 30\n73 79 73 3a 3a 72\n65 61 64 79 3a 3a`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 6f 6e 6c 69\n6e 65 3a 3a 74 72\n75 65 3a 3a 5b 4f\n4b 5d 3a 3a 65 6e\n64 3a 3a 5b 45 4f\n46 5d`}
      </div>

      <main className="page">
        <header className="site-header">
          <div className="logo-line">
            <span className="logo-bracket">[</span>
            <h1>SyntixGear</h1>
            <span className="logo-bracket">]</span>
          </div>
          <p className="tagline">
            <span>//</span> select your destination <span>//</span>
          </p>
        </header>

        {/* AD SLOT TOP — replace data-ad-slot value with your slot ID */}
        <div className="ad-slot ad-slot-top">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="1111111111"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <div className="cards">
          <a className="card card-cyan" href="/tools">
            <span className="card-icon">⬡</span>
            <div className="card-label">section_01</div>
            <div className="card-title">Tools</div>
            <p className="card-desc">
              Professional-grade calculators and utilities for finance,
              engineering, health, and more.
            </p>
            <p className="card-meta">1 active tool &nbsp;·&nbsp; more coming</p>
            <div className="card-cta">Enter Tools →</div>
          </a>

          <a className="card card-orange" href="/shops">
            <span className="card-icon">◈</span>
            <div className="card-label">section_02</div>
            <div className="card-title">Shops</div>
            <p className="card-desc">
              Original SyntixGear designs across TeePublic, Amazon Merch, and
              RedBubble. Gear up.
            </p>
            <p className="card-meta">
              3 storefronts &nbsp;·&nbsp; ships worldwide
            </p>
            <div className="card-cta">Browse Shops →</div>
          </a>
        </div>

        {/* AD SLOT BOTTOM — replace data-ad-slot value with your slot ID */}
        <div className="ad-slot ad-slot-bottom">
          <p className="ad-label">advertisement</p>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
            data-ad-slot="2222222222"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <footer>
          <p className="footer-line">
            © 2026 SyntixGear &nbsp;·&nbsp;{" "}
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

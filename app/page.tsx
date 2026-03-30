import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: 'SyntixGear | Professional Tools & Original Design',
  description: 'SyntixGear provides professional-grade calculators via CalcVault and original apparel designs for engineers, creators, and enthusiasts.',
};

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
            <span>//</span> engineered for utility // designed for aesthetic <span>//</span>
          </p>
        </header>

        {/* SECTION 01: MISSION STATEMENT (Critical for SEO/AdSense) */}
        <section className="home-intro text-center max-w-2xl mx-auto my-12 px-4">
          <h2 className="text-cyan-400 font-mono text-sm mb-4 uppercase tracking-widest">// Mission_Protocol //</h2>
          <p className="text-slate-300 leading-relaxed italic">
            SyntixGear is a digital hub dedicated to the intersection of <strong>functional logic</strong> and 
            <strong> industrial design</strong>. We provide professional-grade utilities through the CalcVault 
            ecosystem and original apparel for the modern builder.&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;</p>
        </section>

        {/* AD SLOT TOP */}
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
            <div className="card-title">CalcVault Tools</div>
            <p className="card-desc">
              High-precision calculators for finance, engineering, and health. 
              Built for speed with zero server-side data tracking.
            </p>
            <p className="card-meta">Active: Finance &middot; Engineering &middot; Unit Conv.</p>
            <div className="card-cta">Access Terminal →</div>
          </a>

          <a className="card card-orange" href="/shops">
            <span className="card-icon">◈</span>
            <div className="card-label">section_02</div>
            <div className="card-title">Design Shops</div>
            <p className="card-desc">
              Original SyntixGear blueprints and graphic artwork applied to 
              premium gear. Fulfilled via Amazon, TeePublic, and RedBubble.
            </p>
            <p className="card-meta">Global Shipping &middot; 3 Primary Hubs</p>
            <div className="card-cta">View Collections →</div>
          </a>
        </div>

        {/* SECTION 02: FEATURES BREAKDOWN (Adds keyword richness) */}
        <div className="legal-divider my-16 opacity-20" />
        
        <section className="features-grid grid md:grid-cols-3 gap-8 px-4 max-w-4xl mx-auto text-sm text-slate-400 font-mono">
          <div className="feature-item border border-slate-800 p-4 rounded bg-slate-900/50">
            <h3 className="text-cyan-500 mb-2">01. Privacy_First</h3>
            <p>Our tools process all data client-side. Your financial and personal inputs never touch a server.</p>
          </div>
          <div className="feature-item border border-slate-800 p-4 rounded bg-slate-900/50">
            <h3 className="text-orange-500 mb-2">02. Original_Art</h3>
            <p>Every design in our shop is created in-house. No AI generation, no stock-flips. Pure syntax.</p>
          </div>
          <div className="feature-item border border-slate-800 p-4 rounded bg-slate-900/50">
            <h3 className="text-slate-200 mb-2">03. Global_Access</h3>
            <p>Calculators are free to use worldwide, supported by non-intrusive advertisements.</p>
          </div>
        </section>

        {/* AD SLOT BOTTOM */}
        <div className="ad-slot ad-slot-bottom mt-16">
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
            <a href="/about">About</a>
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

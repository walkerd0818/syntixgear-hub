import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/tools',
  },
  title: 'Precision Tools & Calculators | SyntixGear CalcVault',
  description: 'Access professional-grade calculators for finance, engineering, health, and unit conversion. Fast, private, and browser-based utilities.',
};

export default function ToolsPage() {
  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <div className="hex-deco hex-deco-1">
        {`74 6f 6f 6c 73 3a\n3a 6d 6f 64 75 6c\n65 73 3a 3a 6c 6f\n61 64 65 64 3a 3a`}
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
          <p className="section-tag">// section_01 //</p>
          <h1>Tools</h1>
          <p className="tagline">
            <span>//</span> precision utilities for complex calculations <span>//</span>
          </p>
        </header>

        {/* NEW CONTENT: OVERVIEW SECTION */}
        <section className="tools-overview max-w-3xl mx-auto my-12 px-4 text-slate-400">
          <h2 className="text-xl font-bold text-slate-200 mb-4 font-mono tracking-tight underline decoration-cyan-500/50 underline-offset-8">
            The CalcVault Ecosystem
          </h2>
          <p className="mb-4 leading-relaxed">
            Welcome to the primary utility hub of SyntixGear. Our tools are designed for professionals 
            and enthusiasts who require accuracy without the clutter of modern web interfaces. 
            <strong> CalcVault</strong> serves as our flagship multi-tool, unifying several 
            computational domains into a single, high-performance terminal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-slate-800 p-4 bg-slate-900/40 rounded">
              <h3 className="text-cyan-400 font-mono text-sm mb-2 uppercase tracking-tighter">01. Efficiency</h3>
              <p className="text-xs italic">Minimalistic design optimized for quick inputs and immediate results. No unnecessary animations or distractions.</p>
            </div>
            <div className="border border-slate-800 p-4 bg-slate-900/40 rounded">
              <h3 className="text-orange-400 font-mono text-sm mb-2 uppercase tracking-tighter">02. Local Execution</h3>
              <p className="text-xs italic">All logic runs client-side. Your financial data, measurements, and health metrics never leave your browser.&nbsp;</p>
            </div>
            <p>&nbsp;</p>
          </div>
        </section>


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
          <a className="card card-cyan" href="/calc-vault">
            <span className="card-status">
              <span className="status-dot" />
              online
            </span>
            <span className="card-icon">⬡</span>
            <div className="card-label">tool_01</div>
            <div className="card-title">CalcVault</div>
            <p className="card-desc">
              A comprehensive suite of tools covering <strong>compound interest</strong>, 
              <strong> mortgage planning</strong>, <strong>structural engineering</strong>, 
              <strong>legal settlement estimates</strong>, and <strong>advanced unit conversions</strong>.
            </p>
            <div className="card-tags">
              <span className="tag">Finance</span>
              <span className="tag">Engineering</span>
              <span className="tag">Legal</span>
              <span className="tag">Health</span>
              <span className="tag">Units</span>
            </div>
            <div className="card-cta">Launch CalcVault →</div>
          </a>

          <div className="card-placeholder">
            <div className="placeholder-icon">⊕</div>
            <p className="placeholder-text">Module expansion in progress...</p>
          </div>
        </div>

        {/* NEW CONTENT: DOMAIN DETAILS */}
        <section className="tools-details max-w-3xl mx-auto my-16 px-4 py-8 border-t border-slate-800/50">
          <h2 className="text-slate-300 font-mono text-lg mb-6">// calculation_domains //</h2>
          <div className="space-y-6 text-sm text-slate-500">
            <p>
              <strong>Financial Logic:</strong> From loan amortization to ROI forecasting, our finance modules 
              allow you to visualize debt reduction and wealth accumulation using standard mathematical models.
            </p>
            <p>
              <strong>Engineering & Health:</strong> Calculate structural loads or manage personal wellness with 
              BMR and TDEE formulas. We simplify the physics and biology into usable, actionable data.
            </p>
            <p>
              <strong>Unit Conversion and Measurement:</strong> Bridge the gap between global standards with 
              high-precision conversion tools. From metric-to-imperial shifts to specialized engineering constants, 
              we ensure your data remains accurate across every system of measurement.
            </p>
            <p>
              <strong>Legal and Compliance:</strong> Navigate complex timelines and statutory requirements with ease. 
              Our legal modules help you calculate settlement distributions for wrongful termination, and personal injury
              using logic-driven frameworks.
            </p>
          </div>
        </section>

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
            &nbsp;·&nbsp; <a href="/terms-of-service">Terms of Service</a>
          </p>
        </footer>
      </main>
    </>
  );
}

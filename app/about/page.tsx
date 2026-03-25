import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="hex-deco hex-deco-1">
        {`61 62 6f 75 74 3a\n3a 73 79 6e 74 69\n78 3a 3a 67 65 61\n72 3a 3a 76 31 2e`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 62 75 69 6c\n74 3a 3a 77 69 74\n68 3a 3a 70 75 72\n70 6f 73 65 3a 3a`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page legal-page">
        <header className="site-header legal-header">
          <p className="section-tag">// about //</p>
          <h1 className="h1-sub">About SyntixGear</h1>
          <p className="tagline">
            <span>//</span> last updated: March 2026 <span>//</span>
          </p>
        </header>

        <div className="legal-body">

          <section className="legal-section">
            <div className="legal-section-tag">01 &mdash; Origin</div>
            <h2 className="legal-h2">What is SyntixGear?</h2>
            <p className="legal-p">
              SyntixGear is an independent digital brand built around two core ideas: useful tools and original design.
              The name blends <em>syntax</em> — the structured logic of code and systems — with <em>gear</em>, the
              physical and functional objects people rely on. Together they describe something engineered to work,
              and designed to look like it means it.
            </p>
            <p className="legal-p">
              Everything under the SyntixGear umbrella is built and maintained independently. There are no venture
              funds, no investors, no corporate parent. Just one operator making things that are worth making.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">02 &mdash; The Hub</div>
            <h2 className="legal-h2">Two Sections, One Brand</h2>
            <p className="legal-p">
              The SyntixGear hub currently houses two sections, each with a distinct purpose.
            </p>
            <div className="about-pillars">
              <div className="about-pillar pillar-cyan">
                <span className="pillar-icon">⬡</span>
                <div className="pillar-name">Tools</div>
                <p className="pillar-desc">
                  Professional-grade calculators and utilities spanning finance, engineering, health,
                  and unit conversion. CalcVault is the flagship tool — fast, accurate, and built for
                  real work rather than toy demos. More tools are actively in development.
                </p>
              </div>
              <div className="about-pillar pillar-orange">
                <span className="pillar-icon">◈</span>
                <div className="pillar-name">Shops</div>
                <p className="pillar-desc">
                  Original SyntixGear artwork and graphic designs available across TeePublic,
                  Amazon Merch on Demand, and RedBubble. Every design is created in-house.
                  Products ship worldwide through each platform's fulfilment network.
                </p>
              </div>
            </div>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">03 &mdash; Tools</div>
            <h2 className="legal-h2">CalcVault</h2>
            <p className="legal-p">
              CalcVault is SyntixGear's primary utility — a suite of professional-grade calculators
              covering four major domains: <strong>Finance</strong> (compound interest, loan repayments,
              currency conversion), <strong>Engineering</strong> (structural, electrical, and fluid
              calculations), <strong>Health</strong> (BMI, TDEE, macro planning), and <strong>Unit
              Conversion</strong> (length, mass, temperature, pressure, and more).
            </p>
            <p className="legal-p">
              CalcVault is designed to be fast and distraction-free. Every calculation runs client-side —
              no data leaves your device. The tool is free to use and ad-supported to keep it that way.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">04 &mdash; Design</div>
            <h2 className="legal-h2">The Aesthetic</h2>
            <p className="legal-p">
              SyntixGear's visual language is deliberately retro-futuristic: dark surfaces, cyan and
              amber accents, monospace type, and a grid that feels like it was rendered on hardware
              that predates you. It borrows from terminal interfaces, early CRT displays, and the
              industrial aesthetics of scientific instrumentation.
            </p>
            <p className="legal-p">
              The same design system runs across every page — tools and shops alike. Consistency is
              intentional. When you see the clipped corners, the hex decorations, and the Orbitron
              wordmark, you know where you are.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">05 &mdash; Contact</div>
            <h2 className="legal-h2">Get in Touch</h2>
            <p className="legal-p">
              SyntixGear is a solo operation. Response times may vary, but every message is read.
              For questions about tools, bug reports, design enquiries, or anything else, reach out
              directly.
            </p>
            <p className="legal-p">
              <span className="legal-mono">contact</span> &mdash; use the contact form or reach out
              through the relevant storefront for order and product enquiries.
            </p>
          </section>

        </div>

        <footer>
          <p className="footer-line">
            <a href="/">← Back to SyntixGear</a>
            &nbsp;·&nbsp; © 2026 SyntixGear
            &nbsp;·&nbsp; <a href="/cookies">Cookies</a>
            &nbsp;·&nbsp; <a href="/legal">Legal</a>
            &nbsp;·&nbsp; <a href="/privacy">Privacy</a>
            </p>
        </footer>
      </main>
    </>
  );
}

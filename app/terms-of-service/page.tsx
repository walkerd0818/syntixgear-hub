import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/terms-of-service',
  },
  title: 'Terms of Service | SyntixGear',
};

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <div className="hex-deco hex-deco-1">
        {`74 65 72 6d 73 3a\n3a 73 79 6e 74 69\n78 3a 3a 67 65 61\n72 3a 3a 76 31 2e`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 6c 65 67 61\n6c 3a 3a 61 67 72\n65 65 6d 65 6e 74\n3a 3a 76 32 2e 30`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page legal-page">
        <header className="site-header legal-header">
          <p className="section-tag">// legal //</p>
          <h1 className="h1-sub">Terms of Service</h1>
          <p className="tagline">
            <span>//</span> last updated: {lastUpdated} <span>//</span>
          </p>
        </header>

        <div className="legal-body">

          <section className="legal-section">
            <div className="legal-section-tag">01 &mdash; Agreement</div>
            <h2 className="legal-h2">Acceptance of Terms</h2>
            <p className="legal-p">
              By accessing and using <strong>syntixgear.com</strong> (the "Site"), you agree to be bound by these 
              Terms of Service. These terms constitute a legally binding agreement between you and SyntixGear. 
              If you do not agree with any part of these terms, you must discontinue use of our tools, 
              calculators, and services immediately.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">02 &mdash; Disclaimer</div>
            <h2 className="legal-h2">Financial Disclaimer (CalcVault)</h2>
            <p className="legal-p">
              The tools provided under the <strong>CalcVault</strong> brand are for informational and educational 
              purposes only. They do not constitute professional investment, tax, legal, or financial advice.
            </p>
            <div className="about-pillars">
              <div className="about-pillar pillar-cyan">
                <span className="pillar-icon">⬡</span>
                <div className="pillar-name">Estimates Only</div>
                <p className="pillar-desc">
                  Calculations are based on user-provided data and general formulas. Results are estimates 
                  and may not reflect actual financial outcomes or market conditions.
                </p>
              </div>
              <div className="about-pillar pillar-orange">
                <span className="pillar-icon">◈</span>
                <div className="pillar-name">User Risk</div>
                <p className="pillar-desc">
                  You assume sole responsibility for the risks associated with your financial decisions. 
                  Always consult a qualified professional before making significant financial commitments.
                </p>
              </div>
            </div>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">03 &mdash; Usage</div>
            <h2 className="legal-h2">Intellectual Property</h2>
            <p className="legal-p">
              All content on this Site—including calculator logic, source code, graphic designs, hex 
              decorations, and the unique retro-futuristic aesthetic—is the exclusive property of 
              SyntixGear. 
            </p>
            <p className="legal-p italic">
              Unauthorized reproduction, modification, or commercial exploitation of any Site elements 
              is strictly prohibited without express written consent.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">04 &mdash; Liability</div>
            <h2 className="legal-h2">Limitation of Liability</h2>
            <p className="legal-p">
              SyntixGear provides this Site on an "as is" and "as available" basis. To the maximum extent 
              permitted by law, SyntixGear shall not be liable for any direct, indirect, or incidental 
              damages (including loss of data or profit) arising from your use or inability to use 
              our tools.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">05 &mdash; External</div>
            <h2 className="legal-h2">Ads & Third-Party Links</h2>
            <p className="legal-p">
              This Site displays advertisements via Google AdSense and contains links to external 
              storefronts (TeePublic, Amazon, RedBubble). SyntixGear does not control and is not 
              responsible for the content, privacy policies, or practices of these third-party platforms.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">06 &mdash; Law</div>
            <h2 className="legal-h2">Governing Law</h2>
            <p className="legal-p">
              These Terms shall be governed by and construed in accordance with the laws of your 
              operating jurisdiction, without regard to its conflict of law provisions.
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

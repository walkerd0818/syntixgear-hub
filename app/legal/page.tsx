import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://syntixgear.com/legal',
  },
};
export default function DisclaimerPage() {
  return (
    <>
      <div className="hex-deco hex-deco-1">
        {`64 69 73 63 6c 61\n69 6d 65 72 3a 3a\n76 31 3a 3a 72 65\n61 64 3a 3a 61 63`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 6e 6f 74 3a\n3a 61 64 76 69 63\n65 3a 3a 5b 4f 4b\n5d 3a 3a 5b 45 4f`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page legal-page">
        <header className="site-header legal-header">
          <p className="section-tag">// legal //</p>
          <h1 className="h1-sub">Disclaimer</h1>
          <p className="tagline">
            <span>//</span> last updated: March 2026 <span>//</span>
          </p>
        </header>

        <div className="legal-body">

          <section className="legal-section">
            <div className="legal-section-tag">01 &mdash; General</div>
            <h2 className="legal-h2">No Professional Advice</h2>
            <p className="legal-p">
              All content on SyntixGear — including tool outputs, written copy, and any other information
              — is provided for general informational and convenience purposes only. Nothing on this site
              constitutes professional financial, legal, engineering, medical, or any other specialist advice.
            </p>
            <p className="legal-p">
              You should not act or refrain from acting on the basis of any content on SyntixGear without
              first seeking appropriate professional advice tailored to your specific circumstances.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">02 &mdash; CalcVault Tools</div>
            <h2 className="legal-h2">Calculator Output Disclaimer</h2>
            <p className="legal-p">
              CalcVault provides calculators covering finance, engineering, health, and unit conversion.
              While we work to ensure these tools produce accurate results, we make no guarantee of accuracy,
              completeness, or fitness for any particular purpose.
            </p>

            <div className="disclaimer-domain-grid">
              <div className="disclaimer-domain">
                <div className="disclaimer-domain-label">Finance</div>
                <p className="legal-p">
                  Financial calculations (compound interest, loan repayments, etc.) are illustrative only.
                  They do not constitute financial advice and should not be used as the sole basis for any
                  financial decision. Consult a qualified financial adviser.
                </p>
              </div>
              <div className="disclaimer-domain">
                <div className="disclaimer-domain-label">Engineering</div>
                <p className="legal-p">
                  Engineering calculations are provided as reference tools only. They are not a substitute
                  for certified structural, electrical, or mechanical engineering analysis. Never use
                  calculator outputs for safety-critical design without qualified professional review.
                </p>
              </div>
              <div className="disclaimer-domain">
                <div className="disclaimer-domain-label">Legal</div>
                <p className="legal-p">
                  Legal-related calculations are provided as reference tools only. They are not a substitute
                  for certified legal analysis. Never use calculator outputs for legal advise without 
                  qualified professional review.
                </p>
              </div>
              <div className="disclaimer-domain">
                <div className="disclaimer-domain-label">Health</div>
                <p className="legal-p">
                  Health-related calculations (BMI, TDEE, macros, etc.) are generalised estimates and do
                  not account for individual medical conditions or clinical factors. They are not medical
                  advice. Consult a qualified healthcare professional before making health decisions.
                </p>
              </div>
              <div className="disclaimer-domain">
                <div className="disclaimer-domain-label">Unit Conversion</div>
                <p className="legal-p">
                  Unit conversions are provided for general use. For scientific, legal, or commercial
                  applications requiring certified accuracy, verify results against authoritative sources
                  or measurement standards bodies.
                </p>
              </div>
            </div>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">03 &mdash; External Links</div>
            <h2 className="legal-h2">Third-Party Sites</h2>
            <p className="legal-p">
              SyntixGear contains links to external websites including third-party storefronts and advertising
              destinations. These links are provided for convenience only. SyntixGear has no control over the
              content, availability, or practices of any linked site, and accepts no responsibility for them.
            </p>
            <p className="legal-p">
              The inclusion of any link does not imply endorsement of the linked site or its content.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">04 &mdash; Advertising</div>
            <h2 className="legal-h2">Advertisement Disclaimer</h2>
            <p className="legal-p">
              Advertisements displayed on SyntixGear are served by Google AdSense. SyntixGear does not
              endorse, verify, or take responsibility for the products, services, or claims made in any
              advertisement. Any transaction you enter into with an advertiser is solely between you and
              that advertiser.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">05 &mdash; Availability</div>
            <h2 className="legal-h2">Service Availability</h2>
            <p className="legal-p">
              SyntixGear is provided on an &ldquo;as available&rdquo; basis. We do not guarantee that the
              site or any tool will be available at all times, error-free, or uninterrupted. We reserve the
              right to modify, suspend, or discontinue any part of the service at any time without notice.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">06 &mdash; Accuracy</div>
            <h2 className="legal-h2">Content Accuracy</h2>
            <p className="legal-p">
              We aim to keep all content on SyntixGear accurate and up to date. However, we make no
              representations or warranties regarding the accuracy or completeness of any content. Information
              may become outdated, and we are under no obligation to update it unless required by law.
            </p>
          </section>

        </div>

        <footer>
          <p className="footer-line">
            <a href="/">← Back to SyntixGear</a>
            &nbsp;·&nbsp; © 2026 SyntixGear
            &nbsp;·&nbsp; <a href="/about">About</a>
            &nbsp;·&nbsp; <a href="/cookies">Cookies</a>
            &nbsp;·&nbsp; <a href="/privacy">Privacy</a>
            &nbsp;·&nbsp; <a href="/terms-of-service">Terms of Service</a>
           </p>
        </footer>
      </main>
    </>
  );
}

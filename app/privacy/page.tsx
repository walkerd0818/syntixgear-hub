import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
};

export default function TermsPage() {
  return (
    <>
      <div className="hex-deco hex-deco-1">
        {`74 65 72 6d 73 3a\n3a 6f 66 3a 3a 75\n73 65 3a 3a 76 31\n3a 3a 61 63 74 69`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 61 67 72 65\n65 64 3a 3a 74 72\n75 65 3a 3a 5b 4f\n4b 5d 3a 3a 5b 45`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page legal-page">
        <header className="site-header legal-header">
          <p className="section-tag">// legal //</p>
          <h1 className="h1-sub">Privacy / Terms of Use</h1>
          <p className="tagline">
            <span>//</span> last updated: March 2026 <span>//</span>
          </p>
        </header>

        <div className="legal-body">

          <section className="legal-section">
            <div className="legal-section-tag">01 &mdash; Acceptance</div>
            <h2 className="legal-h2">Agreement to Terms</h2>
            <p className="legal-p">
              By accessing or using any part of syntixgear.com, including the CalcVault tool suite and any
              linked shop pages, you agree to be bound by these Terms of Use. If you do not agree, do not
              use the site. These terms apply to all visitors, users, and anyone who accesses or uses the service.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">02 &mdash; The Service</div>
            <h2 className="legal-h2">What SyntixGear Provides</h2>
            <p className="legal-p">
              SyntixGear provides a free-to-use web application comprising informational and calculational tools
              (CalcVault) and links to third-party storefronts (TeePublic, Amazon Merch on Demand, RedBubble)
              where SyntixGear-branded merchandise is sold.
            </p>
            <p className="legal-p">
              The tools are provided for general informational and convenience purposes only. Results produced by
              any calculator are not a substitute for professional financial, engineering, medical, or other
              specialist advice. Always verify critical calculations independently and consult a qualified
              professional before making decisions based on tool output.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">03 &mdash; Use of the Site</div>
            <h2 className="legal-h2">Permitted and Prohibited Use</h2>
            <p className="legal-p">
              You may use SyntixGear for lawful, personal, and non-commercial purposes. You agree not to:
            </p>
            <ul className="legal-list">
              <li>Scrape, crawl, or systematically extract content from the site without written permission</li>
              <li>Attempt to interfere with, disrupt, or gain unauthorised access to any part of the service</li>
              <li>Use the site to distribute malware, spam, or any harmful content</li>
              <li>Reproduce or redistribute SyntixGear designs or content without permission</li>
              <li>Misrepresent your identity or affiliation with SyntixGear</li>
              <li>Use the service in any way that violates applicable local, national, or international law</li>
            </ul>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">04 &mdash; Intellectual Property</div>
            <h2 className="legal-h2">Ownership of Content</h2>
            <p className="legal-p">
              All original content on SyntixGear — including but not limited to the visual design, graphic artwork,
              tool interfaces, written copy, and the SyntixGear name and brand identity — is the sole property of
              SyntixGear and protected under applicable intellectual property law.
            </p>
            <p className="legal-p">
              You may not copy, reproduce, modify, distribute, or create derivative works from any SyntixGear
              content without explicit written permission. Linking to SyntixGear pages for non-commercial purposes
              is permitted provided it is not done in a misleading or defamatory manner.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">05 &mdash; Third-Party Shops</div>
            <h2 className="legal-h2">External Storefronts</h2>
            <p className="legal-p">
              SyntixGear links to third-party storefronts (TeePublic, Amazon Merch on Demand, RedBubble) where
              SyntixGear-branded products are available for purchase. These storefronts are independently operated.
              All transactions, fulfilment, returns, and customer service for purchases made through these
              platforms are governed solely by their respective terms and policies.
            </p>
            <p className="legal-p">
              SyntixGear is not a party to any transaction made through a third-party storefront and accepts no
              liability for issues arising from those purchases.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">06 &mdash; Advertising</div>
            <h2 className="legal-h2">Ads on SyntixGear</h2>
            <p className="legal-p">
              SyntixGear displays advertisements served by Google AdSense. These ads help fund the free operation
              of the site and tools. SyntixGear does not control the content of third-party advertisements and is
              not responsible for any products, services, or claims made in them. Ad content is governed by
              Google&apos;s advertising policies.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">07 &mdash; Disclaimers</div>
            <h2 className="legal-h2">No Warranties</h2>
            <p className="legal-p">
              SyntixGear is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
              warranties of any kind, either express or implied. We make no warranty that the service will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
            <p className="legal-p">
              Calculator results are provided for convenience only. SyntixGear makes no representations regarding
              the accuracy, completeness, or fitness for purpose of any calculation output.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">08 &mdash; Liability</div>
            <h2 className="legal-h2">Limitation of Liability</h2>
            <p className="legal-p">
              To the fullest extent permitted by applicable law, SyntixGear shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of, or
              inability to use, the service — including any reliance on calculator outputs for financial,
              engineering, health, or other decisions.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">09 &mdash; Changes</div>
            <h2 className="legal-h2">Updates to These Terms</h2>
            <p className="legal-p">
              We reserve the right to modify these Terms of Use at any time. Changes take effect when posted to
              this page, with the &ldquo;last updated&rdquo; date revised accordingly. Continued use of
              SyntixGear after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">10 &mdash; Governing Law</div>
            <h2 className="legal-h2">Jurisdiction</h2>
            <p className="legal-p">
              These Terms are governed by and construed in accordance with applicable law. Any disputes arising
              under these Terms shall be subject to the exclusive jurisdiction of the courts of the relevant
              territory. If any provision of these Terms is found to be unenforceable, the remaining provisions
              continue in full force and effect.
            </p>
          </section>

        </div>

        <footer>
          <p className="footer-line">
            <a href="/">← Back to SyntixGear</a>
            &nbsp;·&nbsp; © 2026 SyntixGear
            &nbsp;·&nbsp; <a href="/about">About</a>
            &nbsp;·&nbsp; <a href="/cookies">Cookies</a>
            &nbsp;·&nbsp; <a href="/legal">Legal</a>
          </p>
        </footer>
      </main>
    </>
  );
}

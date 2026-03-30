import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
  title: 'Privacy Policy | SyntixGear',
};

export default function PrivacyPage() {
  return (
    <>
      <div className="hex-deco hex-deco-1">
        {`70 72 69 76 61 63\n79 3a 3a 73 79 6e\n74 69 78 3a 3a 67\n65 61 72 3a 3a 76`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 64 61 74 61\n3a 3a 73 61 66 65\n3a 3a 74 72 75 65\n3a 3a 5b 4f 4b 5d`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page legal-page">
        <header className="site-header legal-header">
          <p className="section-tag">// legal //</p>
          <h1 className="h1-sub">Privacy Policy</h1>
          <p className="tagline">
            <span>//</span> last updated: March 2026 <span>//</span>
          </p>
        </header>

        <div className="legal-body">

          <section className="legal-section">
            <div className="legal-section-tag">01 &mdash; Philosophy</div>
            <h2 className="legal-h2">Privacy by Design</h2>
            <p className="legal-p">
              SyntixGear is built on the principle that your data belongs to you. We do not 
              collect, store, or sell your personal financial information. Our tools are 
              engineered to be functional without requiring user registration or data 
              harvesting.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">02 &mdash; Tools</div>
            <h2 className="legal-h2">Local Processing (CalcVault)</h2>
            <p className="legal-p">
              When you use <strong>CalcVault</strong>, all calculations are performed 
              locally within your web browser. The numeric data you input—whether for 
              mortgage rates, engineering tolerances, or health metrics—never leaves 
              your device and is never sent to our servers.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">03 &mdash; Advertising</div>
            <h2 className="legal-h2">Google AdSense & Cookies</h2>
            <p className="legal-p">
              We use Google AdSense to serve advertisements on syntixgear.com to fund 
              the maintenance of our free tools. These third-party vendors use cookies 
              to serve ads based on your prior visits to this or other websites.
            </p>
            <ul className="legal-list">
              <li>Google uses advertising cookies to enable it and its partners to serve ads based on your visit to this site.</li>
              <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="legal-link text-cyan-500 underline">Google Ad Settings</a>.</li>
              <li>Alternatively, you can opt out of third-party vendor use of cookies for personalized advertising at <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="legal-link text-cyan-500 underline">www.aboutads.info</a>.</li>
            </ul>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">04 &mdash; Infrastructure</div>
            <h2 className="legal-h2">Log Files</h2>
            <p className="legal-p">
              Like most standard website servers, SyntixGear uses log files. This includes 
              internet protocol (IP) addresses, browser type, internet service provider (ISP), 
              referring/exit pages, and date/time stamps. This data is used solely for 
              analyzing trends, administering the site, and preventing malicious activity.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">05 &mdash; External</div>
            <h2 className="legal-h2">Third-Party Links</h2>
            <p className="legal-p">
              Our site contains links to external storefronts and resources. Please be 
              aware that SyntixGear is not responsible for the privacy practices of 
              such other sites. We encourage our users to read the privacy statements 
              of any website that collects personally identifiable information.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">06 &mdash; Contact</div>
            <h2 className="legal-h2">Privacy Inquiries</h2>
            <p className="legal-p">
              If you have questions regarding this policy or our data practices, you 
              can reach out via the contact form on the main hub.
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
            &nbsp;·&nbsp; <a href="/terms-of-service">Terms of Service</a>
          </p>
        </footer>
      </main>
    </>
  );
}

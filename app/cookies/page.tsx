export default function CookiesPage() {
  return (
    <>
      <div className="hex-deco hex-deco-1">
        {`63 6f 6f 6b 69 65\n73 3a 3a 70 6f 6c\n69 63 79 3a 3a 76\n31 3a 3a 61 63 74`}
      </div>
      <div className="hex-deco hex-deco-2">
        {`3a 3a 74 72 61 63\n6b 69 6e 67 3a 3a\n6d 69 6e 69 6d 61\n6c 3a 3a 5b 4f 4b`}
      </div>

      <nav className="back-nav">
        <a className="back-btn" href="/">
          <span className="back-arrow">←</span> SyntixGear
        </a>
      </nav>

      <main className="page legal-page">
        <header className="site-header legal-header">
          <p className="section-tag">// legal //</p>
          <h1 className="h1-sub">Cookie Policy</h1>
          <p className="tagline">
            <span>//</span> last updated: March 2026 <span>//</span>
          </p>
        </header>

        <div className="legal-body">

          <section className="legal-section">
            <div className="legal-section-tag">01 &mdash; What Are Cookies</div>
            <h2 className="legal-h2">Cookies Explained</h2>
            <p className="legal-p">
              Cookies are small text files placed on your device when you visit a website. They are widely
              used to make sites work efficiently, remember your preferences, and provide information to
              the site owner. SyntixGear uses cookies sparingly and only where necessary to operate the
              service and serve advertising.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">02 &mdash; Types We Use</div>
            <h2 className="legal-h2">Cookie Categories</h2>

            <div className="legal-cookie-row">
              <div className="cookie-badge cookie-essential">Essential</div>
              <div>
                <p className="legal-p">
                  These cookies are required for the site to function. They do not collect personal
                  information and cannot be disabled without breaking core functionality. SyntixGear
                  uses minimal essential cookies — primarily for session integrity and security.
                </p>
              </div>
            </div>

            <div className="legal-cookie-row">
              <div className="cookie-badge cookie-analytics">Analytics</div>
              <div>
                <p className="legal-p">
                  We use Google Analytics to understand aggregate usage patterns — which pages are
                  visited, how long users stay, and where traffic comes from. This data is anonymised
                  and used solely to improve the site. Analytics cookies can be blocked via your
                  browser settings or a browser extension without affecting core functionality.
                </p>
              </div>
            </div>

            <div className="legal-cookie-row">
              <div className="cookie-badge cookie-advertising">Advertising</div>
              <div>
                <p className="legal-p">
                  Google AdSense places advertising cookies on your device to serve relevant ads based
                  on your browsing behaviour. These cookies are set by Google, not SyntixGear directly.
                  They help fund the free availability of the tools and site. You can manage or opt out
                  of advertising cookies via{" "}
                  <a className="legal-link" href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                    Google Ads Settings
                  </a>.
                </p>
              </div>
            </div>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">03 &mdash; Third-Party Cookies</div>
            <h2 className="legal-h2">Cookies Set by Others</h2>
            <p className="legal-p">
              Third-party services embedded on or linked from SyntixGear may set their own cookies.
              These include:
            </p>
            <ul className="legal-list">
              <li><span className="legal-mono">google.com</span> — Analytics and AdSense advertising</li>
              <li><span className="legal-mono">googlesyndication.com</span> — Ad delivery</li>
              <li><span className="legal-mono">doubleclick.net</span> — Ad targeting and measurement</li>
            </ul>
            <p className="legal-p">
              SyntixGear does not control cookies set by third parties. Their policies govern how those
              cookies are used. Links to third-party storefronts (TeePublic, Amazon, RedBubble) are
              external sites and their own cookie policies apply once you visit them.
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">04 &mdash; Your Control</div>
            <h2 className="legal-h2">Managing Cookies</h2>
            <p className="legal-p">
              You can control and delete cookies through your browser settings. Most browsers allow you
              to block all cookies, block third-party cookies only, or clear cookies on exit. Note that
              blocking essential cookies may affect site functionality.
            </p>
            <p className="legal-p">
              Common browser cookie settings:
            </p>
            <ul className="legal-list">
              <li><span className="legal-mono">Chrome</span> — Settings → Privacy and Security → Cookies</li>
              <li><span className="legal-mono">Firefox</span> — Settings → Privacy & Security → Cookies</li>
              <li><span className="legal-mono">Safari</span> — Preferences → Privacy → Manage Website Data</li>
              <li><span className="legal-mono">Edge</span> — Settings → Privacy, Search and Services → Cookies</li>
            </ul>
            <p className="legal-p">
              For opting out of interest-based advertising across participating companies, visit{" "}
              <a className="legal-link" href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
                youronlinechoices.com
              </a>{" "}
              (EU) or{" "}
              <a className="legal-link" href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
                aboutads.info/choices
              </a>{" "}
              (US).
            </p>
          </section>

          <div className="legal-divider" />

          <section className="legal-section">
            <div className="legal-section-tag">05 &mdash; Changes</div>
            <h2 className="legal-h2">Policy Updates</h2>
            <p className="legal-p">
              This Cookie Policy may be updated to reflect changes in the cookies we use or applicable
              regulations. Check this page periodically. The &ldquo;last updated&rdquo; date at the top
              indicates when changes were last made.
            </p>
          </section>

        </div>

        <footer>
          <p className="footer-line">
            <a href="/">← Back to SyntixGear</a>
            &nbsp;·&nbsp; © 2026 SyntixGear
            &nbsp;·&nbsp; <a href="/about">About</a>
            &nbsp;·&nbsp; <a href="/legal">Legal</a>
            &nbsp;·&nbsp; <a href="/privacy">Privacy</a>
            </p>
        </footer>
      </main>
    </>
  );
}

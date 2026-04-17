import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';
import "./globals.css";
import { UnitProvider } from '../lib/unit-context';

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400"] });
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  weight: ["400", "600", "900"], 
  variable: '--font-orbitron' 
});
const shareTech = Share_Tech_Mono({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: '--font-share-tech' 
});

export const metadata: Metadata = {
  title: "SyntixGear",
  description: "Neural Interface Hub",
  metadataBase: new URL('https://syntixgear.com'),
  openGraph: {
    title: 'SyntixGear',
    description: 'Neural Interface Hub — tools, design, and technical apparel for builders and creators.',
    url: 'https://syntixgear.com',
    siteName: 'SyntixGear',
    images: [
      {
        url: 'https://syntixgear.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SyntixGear',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyntixGear',
    description: 'Neural Interface Hub — tools, design, and technical apparel',
    images: ['https://syntixgear.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${shareTech.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;900&family=Share+Tech+Mono&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet" />
        {/* AdSense — plain <script> avoids Next.js data-nscript injection */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SyntixGear",
          "url": "https://syntixgear.com",
          "logo": "https://syntixgear.com/og-image.png",
          "sameAs": ["https://twitter.com/syntixgear", "https://www.instagram.com/syntixgear"]
        }) }} />
      </head>
      <body className={dmSans.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EEEEHM2K2Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EEEEHM2K2Q');
          `}
        </Script>
        <div className="ambient ambient-1" />
        <div className="ambient ambient-2" />
        <div
          className="ambient ambient-3"
          style={{ width: '350px', height: '350px', background: 'rgba(255,170,0,0.03)', top: '40%', left: '50%', transform: 'translateX(-50%)' }}
        />
        <div className="hex-deco hex-deco-1">
          {`53 59 4e 54 49 58\n47 45 41 52 20 2f\n2f 20 76 31 2e 30`}
        </div>
        <UnitProvider>
          {children}
        </UnitProvider>
        <Analytics />
        <Script id="ads-iframe-label-fix" strategy="afterInteractive">
          {`(function(){
            function normalizeAdIframes(){
              document.querySelectorAll('.ad-slot iframe').forEach(function(iframe){
                try{
                  if(!iframe) return;
                  var hasTitle = iframe.hasAttribute('title');
                  var hasAria = iframe.hasAttribute('aria-label') || iframe.hasAttribute('aria-labelledby');
                  if(hasTitle && hasAria){
                    iframe.removeAttribute('aria-label');
                    iframe.removeAttribute('aria-labelledby');
                  }
                }catch(e){/* ignore cross-origin/frame access errors */}
              });
            }

            // Run once after interactive load
            try{ normalizeAdIframes(); }catch(e){}

            // Observe for dynamically injected ad iframes
            try{
              var mo = new MutationObserver(function(m){
                m.forEach(function(rec){
                  if(rec.addedNodes && rec.addedNodes.length){
                    normalizeAdIframes();
                  }
                });
              });
              mo.observe(document.body, { childList: true, subtree: true });
            }catch(e){}
          })();`}
        </Script>
      </body>
    </html>
  );
}

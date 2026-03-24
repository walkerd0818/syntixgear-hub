import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
      </head>
      <body className={dmSans.className}>
        <div className="ambient ambient-1" />
        <div className="ambient ambient-2" />
        <div
          className="ambient ambient-3"
          style={{ width: '350px', height: '350px', background: 'rgba(255,170,0,0.03)', top: '40%', left: '50%', transform: 'translateX(-50%)' }}
        />
        <div className="hex-deco hex-deco-1">
          {`53 59 4e 54 49 58\n47 45 41 52 20 2f\n2f 20 76 31 2e 30`}
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

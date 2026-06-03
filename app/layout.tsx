import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DomovniGuru",
  "url": "https://www.domovniguru.cz",
  "description": "Kalkulačky na materiál, návody krok za krokem a sezónní checklisty pro domácí kutily.",
  "inLanguage": "cs",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.domovniguru.cz/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  title: {
    default: "DomovniGuru – Praktický průvodce domácností",
    template: "%s | DomovniGuru",
  },
  description:
    "Kalkulačky na materiál, návody krok za krokem a sezónní checklisty. Zjisti, co koupit, kolik potřebuješ a jak to vyřešit.",
  metadataBase: new URL("https://www.domovniguru.cz"),
  openGraph: {
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "DomovniGuru – praktický průvodce domácností",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@domovniguru",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        {/* Google Consent Mode v2 – musí být před GA */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
            var stored = typeof localStorage !== 'undefined' && localStorage.getItem('dg_cookie_consent');
            if (stored === 'granted') {
              gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
              });
            }
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JVG0QCQ4PK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JVG0QCQ4PK');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_LD) }}
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐼</text></svg>" />
      </head>
      <body>
        <nav className="main-nav">
          <div className="wrap">
            <div className="nav-inner">
              <Link href="/" className="nav-brand">
                🐼 Domovni<strong>Guru</strong>
              </Link>
              <div className="nav-links">
                <Link href="/kalkulacky">Kalkulačky</Link>
                <Link href="/navody">Návody</Link>
                <Link href="/checklisty">Checklisty</Link>
                <Link href="/sablony">3D šablony</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/chyby-ostatnich">Časté chyby</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="wrap">{children}</main>

        <footer className="site-footer">
          <div className="wrap">
            <div className="footer-grid">
              <div>
                <Link href="/" className="footer-brand">🐼 DomovniGuru</Link>
                <p className="footer-tagline">
                  Praktický průvodce domácností. Kalkulačky, návody krok za krokem
                  a checklisty — bez zbytečné teorie.
                </p>
              </div>
              <div>
                <div className="footer-col-title">Nástroje</div>
                <div className="footer-links">
                  <Link href="/kalkulacky">Kalkulačky</Link>
                  <Link href="/navody">Návody</Link>
                  <Link href="/checklisty">Checklisty</Link>
                  <Link href="/sablony">3D šablony</Link>
                </div>
              </div>
              <div>
                <div className="footer-col-title">Témata</div>
                <div className="footer-links">
                  <Link href="/blog/kategorie/malovani">Malování</Link>
                  <Link href="/blog/kategorie/elektrika">Elektrika</Link>
                  <Link href="/blog/kategorie/zahrada">Zahrada</Link>
                  <Link href="/blog/kategorie/stehovani">Stěhování</Link>
                  <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link>
                </div>
              </div>
              <div>
                <div className="footer-col-title">Web</div>
                <div className="footer-links">
                  <Link href="/o-webu">O webu</Link>
                  <Link href="/kontakt">Kontakt</Link>
                  <Link href="/chyby-ostatnich">Časté chyby</Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} DomovniGuru.cz</span>
              <div className="footer-bottom-links">
                <Link href="/soukromi">Ochrana soukromí</Link>
                <Link href="/podminky">Podmínky použití</Link>
                <Link href="/cookies">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}

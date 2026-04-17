import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script"; // 1. Přidán import pro Script
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DomovniGuru – Praktický průvodce domácností",
    template: "%s | DomovniGuru",
  },
  description:
    "Kalkulačky na materiál, návody krok za krokem a sezónní checklisty. Zjisti, co koupit, kolik potřebuješ a jak to vyřešit.",
  metadataBase: new URL("https://domovniguru.cz"),
  openGraph: {
    siteName: "DomovniGuru",
    locale: "cs_CZ",
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
        {/* --- Google Analytics --- */}
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

        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐼</text></svg>" />
      </head>
      <body>
        {/* ── Navigation ── */}
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
                <Link href="/o-webu">O webu</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* ── Page content ── */}
        <main className="wrap">{children}</main>

        {/* ── Footer (zkráceno pro přehlednost, v souboru ho nechej celý) ── */}
        <footer className="site-footer">
           {/* ... tvůj stávající footer kód ... */}
        </footer>

        {/* ... tvůj stávající style tag ... */}
      </body>
    </html>
  );
}

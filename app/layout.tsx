import type { Metadata } from "next";
import Link from "next/link";
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
      <body>
        {/* ── Navigation ── */}
        <nav className="main-nav">
          <div className="wrap">
            <div className="nav-inner">
              <Link href="/" className="nav-brand">
                DomovniGuru
              </Link>
              <div className="nav-links">
                <Link href="/kalkulacky">Kalkulačky</Link>
                <Link href="/navody">Návody</Link>
                <Link href="/checklisty">Checklisty</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/o-webu">O webu</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* ── Page content ── */}
        <main>{children}</main>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <div className="wrap">
            <div className="footer-grid">
              {/* Brand */}
              <div>
                <Link href="/" className="footer-brand">
                  DomovniGuru
                </Link>
                <p className="footer-tagline">
                  Praktické kalkulačky, návody a checklisty
                  <br />
                  pro každého majitele domu nebo bytu.
                </p>
              </div>

              {/* Kalkulačky */}
              <div>
                <div className="footer-col-title">Kalkulačky</div>
                <div className="footer-links">
                  <Link href="/kalkulacky/kolik-barvy">Barva</Link>
                  <Link href="/kalkulacky/kolik-laminatu">Laminát</Link>
                  <Link href="/kalkulacky/kolik-dlazby">Dlažba</Link>
                  <Link href="/kalkulacky/kolik-betonu">Beton</Link>
                  <Link href="/kalkulacky/kolik-tapet">Tapety</Link>
                </div>
              </div>

              {/* Blog */}
              <div>
                <div className="footer-col-title">Blog</div>
                <div className="footer-links">
                  <Link href="/blog/kategorie/malovani">Malování</Link>
                  <Link href="/blog/kategorie/elektrika">Elektrika</Link>
                  <Link href="/blog/kategorie/zahrada">Zahrada</Link>
                  <Link href="/blog/kategorie/stehovani">Stěhování</Link>
                  <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link>
                </div>
              </div>

              {/* Web */}
              <div>
                <div className="footer-col-title">Web</div>
                <div className="footer-links">
                  <Link href="/navody">Návody</Link>
                  <Link href="/checklisty">Checklisty</Link>
                  <Link href="/o-webu">O webu</Link>
                  <Link href="/kontakt">Kontakt</Link>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} DomovniGuru</span>
              <div className="footer-bottom-links">
                <Link href="/soukromi">Soukromí</Link>
                <Link href="/podminky">Podmínky</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

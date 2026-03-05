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
      <head>
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

            {/* Horní blok — tagline + stats */}
            <div className="footer-top">
              <div className="footer-hero">
                <Link href="/" className="footer-brand">
                  🐼 Domovni<strong>Guru</strong>
                </Link>
                <p className="footer-tagline">
                  Méně přemýšlení, <em>rovnou na věc.</em>
                </p>
                <p className="footer-sub">
                  Kalkulačky, návody a checklisty pro každého kdo chce mít doma pořádek — bez zbytečného guglení.
                </p>
              </div>

              <div className="footer-stats">
                <div className="footer-stat">
                  <span className="footer-stat-num">100+</span>
                  <span className="footer-stat-label">článků zdarma</span>
                </div>
                <div className="footer-stat">
                  <span className="footer-stat-num">10+</span>
                  <span className="footer-stat-label">kalkulaček pro každý projekt</span>
                </div>
                <div className="footer-stat">
                  <span className="footer-stat-num">✓</span>
                  <span className="footer-stat-label">praktické návody</span>
                </div>
              </div>
            </div>

            <div className="footer-divider" />

            {/* Navigační sloupce */}
            <div className="footer-grid">
              <div>
                <div className="footer-col-title">Kalkulačky</div>
                <div className="footer-links">
                  <Link href="/kalkulacky/kolik-barvy">🎨 Kolik barvy?</Link>
                  <Link href="/kalkulacky/kolik-laminatu">🪵 Kolik laminátu?</Link>
                  <Link href="/kalkulacky/kolik-dlazby">⬛ Kolik dlažby?</Link>
                  <Link href="/kalkulacky/kolik-betonu">🪨 Kolik betonu?</Link>
                  <Link href="/kalkulacky/kolik-tapet">🖼 Kolik tapet?</Link>
                </div>
              </div>

              <div>
                <div className="footer-col-title">Témata blogu</div>
                <div className="footer-links">
                  <Link href="/blog/kategorie/malovani">🖌 Malování & barvy</Link>
                  <Link href="/blog/kategorie/elektrika">⚡ Elektrika & osvětlení</Link>
                  <Link href="/blog/kategorie/zahrada">🌿 Zahrada & terasa</Link>
                  <Link href="/blog/kategorie/stehovani">📦 Stěhování & rekonstrukce</Link>
                  <Link href="/blog/kategorie/sezonni-udrzba">🍂 Sezónní údržba</Link>
                </div>
              </div>

              <div>
                <div className="footer-col-title">Oblíbené návody</div>
                <div className="footer-links">
                  <Link href="/navody/jak-utesnit-vanu-silikonem">🚿 Utěsnit vanu silikonem</Link>
                  <Link href="/navody/jak-odvzdusnit-radiator">🌡️ Odvzdušnit radiátor</Link>
                  <Link href="/navody/jak-nastavit-okna-na-zimu">🪟 Nastavit okna na zimu</Link>
                  <Link href="/navody/jak-vycistit-spary-v-dlazbe">🧹 Vyčistit spáry v dlažbě</Link>
                  <Link href="/navody/jak-vymenit-zasuvku">💡 Vyměnit zásuvku</Link>
                </div>
              </div>

              <div>
                <div className="footer-col-title">O projektu</div>
                <div className="footer-links">
                  <Link href="/o-webu">O webu</Link>
                  <Link href="/navody">Všechny návody</Link>
                  <Link href="/checklisty">Checklisty</Link>
                  <Link href="/sablony">🖨️ 3D šablony</Link>
                  <Link href="/blog">Blog</Link>
                </div>
              </div>
            </div>

            {/* Dolní pruh */}
            <div className="footer-bottom">
              <span className="footer-copy">
                © {new Date().getFullYear()} DomovniGuru &mdash; děláno s láskou k domovu 🏠
              </span>
              <div className="footer-bottom-links">
                <Link href="/soukromi">Soukromí</Link>
                <Link href="/podminky">Podmínky</Link>
              </div>
            </div>

          </div>
        </footer>

        <style>{`
          .site-footer {
            background: #1a1916;
            color: #a09890;
            margin-top: 80px;
            padding: 56px 0 0;
          }
          .footer-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 40px;
            margin-bottom: 40px;
          }
          .footer-hero { max-width: 380px; }
          .footer-brand {
            font-family: var(--font-sans, sans-serif);
            font-size: 20px;
            font-weight: 700;
            color: #f5f0e8;
            text-decoration: none;
            letter-spacing: -0.02em;
            display: inline-block;
            margin-bottom: 14px;
          }
          .footer-brand strong { font-weight: 900; }
          .footer-tagline {
            font-family: var(--font-serif, serif);
            font-size: 22px;
            color: #f5f0e8;
            font-weight: 400;
            line-height: 1.3;
            margin: 0 0 10px;
          }
          .footer-tagline em { color: #c8a97a; font-style: italic; }
          .footer-sub {
            font-size: 13px;
            line-height: 1.65;
            color: #9a8a7a;
            margin: 0;
            font-weight: 300;
          }
          .footer-stats {
            display: flex;
            gap: 40px;
            flex-shrink: 0;
            align-items: center;
          }
          .footer-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-stat-num {
            font-family: var(--font-serif, serif);
            font-size: 30px;
            font-weight: 400;
            color: #f5f0e8;
            line-height: 1;
            margin-bottom: 6px;
          }
          .footer-stat-label {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #706050;
          }
          .footer-divider {
            height: 1px;
            background: #252220;
            margin-bottom: 40px;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            margin-bottom: 48px;
          }
          .footer-col-title {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #484038;
            margin-bottom: 14px;
          }
          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 9px;
          }
          .footer-links a {
            font-size: 13px;
            color: #706860;
            text-decoration: none;
            font-weight: 400;
            transition: color 150ms;
            line-height: 1.4;
          }
          .footer-links a:hover { color: #c8a97a; }
          
          .footer-bottom {
            border-top: 1px solid #201e1b;
            padding: 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
          }
          .footer-copy { font-size: 12px; color: #383028; }
          .footer-bottom-links { display: flex; gap: 20px; }
          .footer-bottom-links a {
            font-size: 12px;
            color: #383028;
            text-decoration: none;
            transition: color 150ms;
          }
          .footer-bottom-links a:hover { color: #706860; }

          @media (max-width: 960px) {
            .footer-top { flex-direction: column; gap: 32px; }
            .footer-stats { justify-content: flex-start; }
            .footer-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 600px) {
            .footer-grid { grid-template-columns: 1fr; }
            .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
          }
        `}</style>
      </body>
    </html>
  );
}

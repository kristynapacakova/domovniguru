import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O webu – DomovniGuru",
  description: "Kdo stojí za DomovniGuru, proč web vznikl a jak ho používat.",
  alternates: { canonical: "https://domovniguru.cz/o-webu" },
};

export default function OWebuPage() {
  return (
    <div className="wrap">
      <div className="simple-page">
        <header className="simple-header">
          <p className="hero-eyebrow">O webu</p>
          <h1 className="hero-h1" style={{ fontSize: "clamp(28px,4vw,44px)" }}>🐼 DomovniGuru</h1>
          <p className="simple-lead">Praktický průvodce domácností pro každého kdo chce věci vyřešit rychle a bez zbytečného stresu.</p>
        </header>

        <div className="simple-body">
          <h2>Proč DomovniGuru vznikl</h2>
          <p>Každý kdo někdy řešil opravu v bytě, stěhování nebo jarní úklid zahrady ví, jak těžké je najít spolehlivou a srozumitelnou odpověď. Většina informací na internetu je buď příliš obecná, nebo naopak přeplněná odbornými termíny.</p>
          <p>DomovniGuru vznikl s jednoduchým cílem: dát lidem přesně to co potřebují vědět — bez zbytečného omáčení, s konkrétními čísly a kroky.</p>

          <h2>Co na webu najdeš</h2>
          <ul>
            <li><strong>Kalkulačky materiálu</strong> — spočítej kolik barvy, laminátu, dlažby nebo betonu potřebuješ. Žádné dohady, jen přesný výsledek.</li>
            <li><strong>Návody krok za krokem</strong> — od odvzdušnění radiátoru po výměnu zásuvky. Popsané tak aby to zvládl každý.</li>
            <li><strong>Sezónní checklisty</strong> — co udělat na jaře, před zimou nebo při stěhování do nového.</li>
            <li><strong>Blog</strong> — přes 100 článků o malování, elektrice, zahradě, stěhování a sezónní údržbě.</li>
          </ul>

          <h2>Jak web používat</h2>
          <p>Nejrychlejší způsob je použít vyhledávání na hlavní stránce — napiš co řešíš a web tě přesměruje na relevantní obsah. Nebo prochází jednotlivé sekce přes horní menu.</p>

          <div className="owebu-links">
            <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
            <Link href="/blog" className="btn btn-outline">Blog</Link>
            <Link href="/navody" className="btn btn-outline">Návody</Link>
          </div>
        </div>
      </div>
      <style>{`
        .simple-page{max-width:680px;margin:0 auto;padding:60px 0 100px}
        .simple-header{margin-bottom:48px;padding-bottom:40px;border-bottom:1px solid var(--border)}
        .simple-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-top:16px}
        .simple-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;margin-bottom:14px;margin-top:40px;padding-top:32px;border-top:1px solid var(--border)}
        .simple-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .simple-body ul{padding-left:22px;display:flex;flex-direction:column;gap:10px;margin-bottom:16px}
        .simple-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .simple-body strong{font-weight:600;color:var(--text)}
        .owebu-links{display:flex;gap:12px;flex-wrap:wrap;margin-top:40px}
      `}</style>
    </div>
  );
}

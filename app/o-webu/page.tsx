import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O webu DomovniGuru – jak vzniká obsah a proč mu můžeš věřit",
  description: "DomovniGuru je český průvodce domácností. Zjisti, jak ověřujeme informace, kdo tvoří obsah a proč jsou naše rady důvěryhodné.",
  alternates: { canonical: "https://www.domovniguru.cz/o-webu" },
  openGraph: {
    title: "O webu DomovniGuru – jak vzniká obsah a proč mu můžeš věřit",
    description: "DomovniGuru je český průvodce domácností. Zjisti, jak ověřujeme informace, kdo tvoří obsah a proč jsou naše rady důvěryhodné.",
    url: "https://www.domovniguru.cz/o-webu",
    type: "website",
    images: [{ url: "/api/og?title=O%20webu%20DomovniGuru&cat=default", width: 1200, height: 630, alt: "O webu DomovniGuru" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DomovniGuru",
  "url": "https://www.domovniguru.cz",
  "logo": "https://www.domovniguru.cz/icon.png",
  "description": "Praktický průvodce domácností – kalkulačky materiálu, návody krok za krokem a sezónní checklisty pro každého.",
  "foundingDate": "2024",
  "areaServed": "CZ",
  "inLanguage": "cs",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "editorial",
    "email": "redakce@domovniguru.cz"
  },
  "sameAs": []
};

export default function OWebuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap">
        <div className="simple-page">
          <header className="simple-header">
            <p className="hero-eyebrow">O webu</p>
            <h1 className="hero-h1" style={{ fontSize: "clamp(28px,4vw,44px)" }}>🐼 DomovniGuru</h1>
            <p className="simple-lead">Praktický průvodce domácností — pro každého, kdo chce věci vyřešit rychle, bezpečně a bez zbytečného stresu.</p>
          </header>

          <div className="simple-body">

            <h2>Proč DomovniGuru vznikl</h2>
            <p>Každý, kdo někdy řešil opravu v bytě, stěhování nebo přípravu zahrady na zimu, ví, jak těžké je najít spolehlivou a srozumitelnou odpověď. Většina informací na internetu je buď příliš obecná, nebo přeplněná odbornými termíny, které laika odradí.</p>
            <p>DomovniGuru vznikl s jediným cílem: dát lidem přesně to, co potřebují vědět — bez zbytečného omáčení, s konkrétními čísly, kroky a varováními, která skutečně zachrání čas i peníze.</p>

            <h2>Co na webu najdeš</h2>
            <ul>
              <li><strong>Kalkulačky materiálu</strong> — spočítej kolik barvy, laminátu, dlažby, betonu nebo trávníkového osiva potřebuješ. Výsledek ihned, bez dohad.</li>
              <li><strong>Návody krok za krokem</strong> — od odvzdušnění radiátoru po výměnu zásuvky. Popsané tak, aby to zvládl každý.</li>
              <li><strong>Sezónní checklisty</strong> — co udělat na jaře, před zimou nebo při stěhování do nového.</li>
              <li><strong>Blog</strong> — přes 130 článků o malování, elektrice, zahradě, stěhování a sezónní údržbě.</li>
            </ul>

            <h2>Jak ověřujeme informace</h2>
            <p>Každý článek vychází z kombinace praktických zkušeností, technických norem a aktuálně platných předpisů. Před publikací každý návod:</p>
            <ul>
              <li>prochází kontrolou věcné správnosti (čísla, postup, bezpečnostní rizika),</li>
              <li>je porovnán s doporučeními výrobců a českými normami (ČSN),</li>
              <li>obsahuje jasné upozornění všude tam, kde je nutný odborník nebo certifikát.</li>
            </ul>
            <p>Obsah pravidelně aktualizujeme — u každého článku najdeš datum poslední revize. Pokud najdeš chybu nebo zastaralou informaci, napiš nám.</p>

            <h2>Důležité upozornění</h2>
            <p style={{ background: "#fff5f0", border: "1px solid #fad5c4", borderLeft: "4px solid #e8612a", borderRadius: "0 8px 8px 0", padding: "14px 18px", fontSize: "14px", color: "#7c2d12", lineHeight: 1.65 }}>
              Obsah DomovniGuru má <strong>informativní charakter</strong> — nejde o odborné poradenství. Před zahájením prací v oblasti elektroinstalace, plynu nebo stavebních úprav si vždy ověř platné předpisy, případně práce svěř certifikované osobě. Za škody vzniklé použitím informací z webu nenese redakce odpovědnost.
            </p>

            <h2>Kontakt a zpětná vazba</h2>
            <p>Máš připomínku k obsahu, našel jsi chybu nebo chceš navrhnout téma? Ozvi se na <strong>redakce@domovniguru.cz</strong>. Na všechny zprávy odpovídáme do 3 pracovních dnů.</p>

            <div className="owebu-links">
              <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
              <Link href="/blog" className="btn btn-outline">Blog</Link>
              <Link href="/navody" className="btn btn-outline">Návody</Link>
            </div>
          </div>

          <div style={{ marginTop: "56px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "16px" }}>
              {[
                { num: "130+", label: "článků a návodů" },
                { num: "13",   label: "kalkulaček" },
                { num: "5",    label: "tematických sekcí" },
                { num: "2024", label: "rok vzniku" },
              ].map(s => (
                <div key={s.label} style={{ background: "var(--surface)", borderRadius: "10px", padding: "18px 16px" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 400, lineHeight: 1.1 }}>{s.num}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px", fontWeight: 400 }}>{s.label}</div>
                </div>
              ))}
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
    </>
  );
}

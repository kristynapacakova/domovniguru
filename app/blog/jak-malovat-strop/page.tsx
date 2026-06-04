import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak malovat strop bez šmouh: Kompletní průvodce 2026",
  description: "Bojujete se šmouhami na stropě? Naučte se správnou techniku malování, výběr válečku a proč je důležité malovat mokrý do mokrého.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-strop" },
  openGraph: {
    title: "Jak malovat strop bez šmouh: Kompletní průvodce 2026",
    description: "Bojujete se šmouhami na stropě? Naučte se správnou techniku malování, výběr válečku a proč je důležité malovat mokrý do mokrého.",
    url: "https://www.domovniguru.cz/blog/jak-malovat-strop",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-strop#article",
      "headline": "Jak malovat strop bez šmouh",
      "description": "Bojujete se šmouhami na stropě? Naučte se správnou techniku malování, výběr válečku a proč je důležité malovat mokrý do mokrého.",
      "datePublished": "2025-01-10T08:00:00Z",
      "dateModified": "2026-06-04T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["jak malovat strop", "malování stropu bez šmouh", "technika mokrý do mokrého", "váleček na strop", "penetrace před malováním stropu"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-strop#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Proč musím malovat strop jako první?", "acceptedAnswer": { "@type": "Answer", "text": "Barva ze stropu nevyhnutelně kape dolů. Pokud by stěny byly hotové, kapičky bílé barvy by je znehodnotily. Strop vždy maluj před stěnami." } },
        { "@type": "Question", "name": "Jak se vyhnout šmouhám na stropě?", "acceptedAnswer": { "@type": "Answer", "text": "Klíč je technika mokrý do mokrého — nikdy nenechej okraj zaschnout dříve, než k němu přimaluješ další pruh. Maluj v pásech o šířce cca 1 m rovnoběžně se světlem z okna." } },
        { "@type": "Question", "name": "Jaký váleček je nejlepší na strop?", "acceptedAnswer": { "@type": "Answer", "text": "Na hladký sádrokarton mikrovlákno (vlas 9–11 mm), na klasickou omítku polyamidový váleček (vlas 12–18 mm). Teleskopická tyč je základ — bez ní budeš mít bolesti zad." } },
        { "@type": "Question", "name": "Musím strop penetrovat před malováním?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud je strop nový, opravovaný, nebo po stržení tapet. Penetrace sjednotí savost a barva pak nestéká a krytí je rovnoměrné." } },
        { "@type": "Question", "name": "Kolik vrstev barvy potřebuji na strop?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně dvě vrstvy. Na tmavý podklad nebo výraznou skvrnu může být potřeba tři. Každou vrstvu nechej schnout minimálně 2–4 hodiny." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-strop#howto",
      "name": "Jak malovat strop bez šmouh",
      "description": "Bojujete se šmouhami na stropě? Naučte se správnou techniku malování, výběr válečku a proč je důležité malovat mokrý do mokrého.",
      "step": [
        { "@type": "HowToStep", "name": "Proč vždy začínat stropem?", "text": "Pokud plánujete malovat i stěny, strop musí jít jako první. Barva ze stropu bude nevyhnutelně stříkat dolů. Pokud byste měli stěny už hotové, drobné kapičky bílé barvy by vám je znehodnotily." },
        { "@type": "HowToStep", "name": "Výběr správného nářadí", "text": "Zvolte správný váleček: na hladký sádrokarton mikrovlákno (vlas 9–11 mm), na klasickou omítku polyamidový váleček (vlas 12–18 mm). Teleskopická tyč je základ — bez ní budeš mít bolesti zad." },
        { "@type": "HowToStep", "name": "Postup, který zajistí výsledek", "text": "Penetrace zpevní podklad a sjednotí savost. Malujte při denním světle v pásech rovnoběžných se světlem z okna. Poslední tahy válečkem by měly směřovat vždy k oknu." }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Jak malovat strop bez šmouh", "item": "https://www.domovniguru.cz/blog/jak-malovat-strop" },
      ],
    },
  ],
};

export default function MalovaniStropuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "40px 0" }}>
      <article className="article-body" style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <header style={{ marginBottom: "40px" }}>
          <span style={{ background: "#3a3a38", color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>🎨 REKONSTRUKCE</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginTop: "20px", fontFamily: "var(--font-serif)", lineHeight: 1.1 }}>Jak malovat strop bez šmouh? Guru návod</h1>
          <p style={{ fontSize: "20px", color: "#666", lineHeight: 1.6, marginTop: "20px" }}>Malování stropu je disciplína, u které se zapotí i zkušení kutilové. Stačí špatný směr světla nebo suchý váleček a výsledek je flekatý. Takhle to uděláte správně.</p>
        </header>

        {/* ILUSTRACE 1: Váleček na stropě */}
        <div style={{ margin: "40px 0", background: "#f9f9f7", borderRadius: "12px", padding: "30px", textAlign: "center", border: "1px solid #eee", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "100%", height: "auto" }}>
            <rect width="160" height="20" fill="#eee" />
            <rect x="60" y="30" width="40" height="15" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="2"/>
            <rect x="62" y="32" width="36" height="11" rx="1" fill="white"/>
            <rect x="78" y="45" width="4" height="70" fill="#6b7280" />
            <rect x="76" y="105" width="8" height="15" rx="1" fill="#4b5563" />
            <path d="M 60 20 L 100 20 L 100 25 L 60 25 Z" fill="#60a5fa" fillOpacity="0.3"/>
          </svg>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "15px", maxWidth: "400px" }}>Teleskopická tyč je základ. Umožňuje plynulý pohyb a rovnoměrný tlak na váleček po celé délce stropu.</p>
        </div>

        <section style={{ lineHeight: 1.8, fontSize: "18px" }}>
          <p>Strop je první věc, kterou v místnosti uvidíte, když se ráno probudíte. Zároveň je to plocha, na které je vidět každá chyba. Pokud podceníte přípravu, světlo z okna vám odhalí každý tah válečkem.</p>
          
          <h2>1. Proč vždy začínat stropem?</h2>
          <p>Pokud plánujete malovat i stěny, strop musí jít jako první. Barva ze stropu bude nevyhnutelně stříkat dolů. Pokud byste měli stěny už hotové, drobné kapičky bílé barvy by vám je znehodnotily.</p>

          <div style={{ background: "#fdfcf0", padding: "25px", borderRadius: "12px", margin: "30px 0", border: "1px solid #e0dcb8" }}>
            <strong>💡 GURU TIP: Technika "Mokrý do mokrého"</strong><br />
            Klíčem k úspěchu je rychlost. Nikdy nenechte okraj barvy zaschnout, než k němu přimalujete další pruh. Pracujte v pásech o šířce cca 1 metr a postupujte systematicky.
          </div>

          <h2>2. Výběr správného nářadí</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", margin: "30px 0" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #3a3a38", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>Typ povrchu</th>
                <th style={{ padding: "12px" }}>Doporučený váleček</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Sádrokarton (hladký)</td><td>Mikrovlákno (vlas 9-11 mm)</td></tr>
              <tr><td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Klasická omítka (štuk)</td><td>Polyamid (vlas 12-18 mm)</td></tr>
            </tbody>
          </table>

          {/* ILUSTRACE 2: Směr malování */}
          <div style={{ margin: "40px 0", background: "#f9f9f7", borderRadius: "12px", padding: "30px", textAlign: "center", border: "1px solid #eee", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "100%", height: "auto" }}>
              <rect x="10" y="10" width="140" height="100" stroke="#9ca3af" strokeWidth="2" rx="2"/>
              <rect x="130" y="30" width="20" height="60" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="2" rx="1"/>
              <path d="M 110 40 L 30 40" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
              <path d="M 110 60 L 30 60" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
              <path d="M 110 80 L 30 80" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p style={{ fontSize: "13px", color: "#888", marginTop: "15px", maxWidth: "400px" }}>Vždy postupujte v pásech rovnoběžně se směrem dopadajícího světla (od okna do místnosti).</p>
          </div>

          <h2>3. Postup, který zajistí výsledek</h2>
          <ol>
            <li><strong>Penetrace:</strong> Zpevní podklad a sjednotí savost.</li>
            <li><strong>Osvětlení:</strong> Malujte při denním světle.</li>
            <li><strong>Směr:</strong> Poslední tahy válečkem by měly směřovat vždy k oknu.</li>
          </ol>
        </section>

        <section id="faq">
          <h2>Časté otázky</h2>
          <div className="faq-list">
            {[
              { q: "Proč musím malovat strop jako první?", a: "Barva ze stropu nevyhnutelně kape dolů. Pokud by stěny byly hotové, kapičky bílé barvy by je znehodnotily. Strop vždy maluj před stěnami." },
              { q: "Jak se vyhnout šmouhám na stropě?", a: "Klíč je technika 'mokrý do mokrého' – nikdy nenechej okraj zaschnout dříve, než k němu přimaluješ další pruh. Maluj v pásech o šířce cca 1 m rovnoběžně se světlem z okna." },
              { q: "Jaký váleček je nejlepší na strop?", a: "Na hladký sádrokarton mikrovlákno (vlas 9–11 mm), na klasickou omítku polyamidový váleček (vlas 12–18 mm). Teleskopická tyč je základ – bez ní budeš mít bolesti zad." },
              { q: "Musím strop penetrovat před malováním?", a: "Ano, pokud je strop nový, opravovaný, nebo po stržení tapet. Penetrace sjednotí savost a barva pak nestéká a krytí je rovnoměrné." },
              { q: "Kolik vrstev barvy potřebuji na strop?", a: "Standardně dvě vrstvy. Na tmavý podklad nebo výraznou skvrnu může být potřeba tři. Každou vrstvu nechej schnout minimálně 2–4 hodiny." },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-q">{q}</summary>
                <p className="faq-a">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
             <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2d4a22", fontWeight: 700, textDecoration: "none", borderBottom: "2px solid #2d4a22" }}>← Spočítat spotřebu barvy</Link>
             {/* Opravený Share odkaz bez "vy" */}
             <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-strop" title="Jak malovat strop bez šmouh" />
          </div>
        </footer>
      </article>
    </div>
    <style>{`
      .faq-list{display:flex;flex-direction:column;gap:8px}
      .faq-item{border:1px solid #e5e5e0;border-radius:10px;overflow:hidden;background:#fff}
      .faq-q{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
      .faq-q:hover{background:#f5f5f2}
      .faq-q::after{content:"+";font-size:18px;font-weight:300;flex-shrink:0;margin-left:12px}
      details[open] .faq-q::after{content:"−"}
      .faq-a{font-size:14px;line-height:1.65;color:#78776e;font-weight:300;padding:0 20px 16px}
    `}</style>
    </>
  );
}
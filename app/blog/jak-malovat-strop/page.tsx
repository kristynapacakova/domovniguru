import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak malovat strop bez šmouh: Kompletní průvodce 2026",
  description: "Bojujete se šmouhami na stropě? Naučte se správnou techniku malování, výběr válečku a proč je důležité malovat mokrý do mokrého.",
};

export default function MalovaniStropuPage() {
  return (
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

        <footer style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
             <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2d4a22", fontWeight: 700, textDecoration: "none", borderBottom: "2px solid #2d4a22" }}>← Spočítat spotřebu barvy</Link>
             {/* Opravený Share odkaz bez "vy" */}
             <ShareButtons url="https://domovniguru.cz/blog/jak-malovat-strop" title="Jak malovat strop bez šmouh" />
          </div>
        </footer>
      </article>
    </div>
  );
}
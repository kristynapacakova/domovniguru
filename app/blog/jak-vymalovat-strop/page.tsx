import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vymalovat strop bez šmouh: Kompletní průvodce 2026",
  description: "Bojujete se šmouhami na stropě? Naučte se správnou techniku malování, výběr válečku a proč je důležité malovat mokrý do mokrého.",
};

export default function MalovaniStropuPage() {
  return (
    <div className="wrap" style={{ padding: "40px 0" }}>
      <article className="article-body" style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <header style={{ marginBottom: "40px" }}>
          <span style={{ background: "#3a3a38", color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>🎨 REKONSTRUKCE</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginTop: "20px", fontFamily: "var(--font-serif)", lineHeight: 1.1 }}>Jak vymalovat strop bez šmouh? Guru návod</h1>
          <p style={{ fontSize: "20px", color: "#666", lineHeight: 1.6, marginTop: "20px" }}>Malování stropu je disciplína, u které se zapotí i zkušení kutilové. Stačí špatný směr světla nebo suchý váleček a výsledek je flekatý. Takhle to uděláte správně.</p>
        </header>

        <div style={{ background: "#f0f0f0", width: "100%", aspectRatio: "16/9", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", color: "#888", textAlign: "center", padding: "20px" }}>
          [FOTKA: Detail válečku na teleskopické tyči nanášející bílou barvu na strop proti oknu]
        </div>

        <section style={{ lineHeight: 1.8, fontSize: "18px" }}>
          <p>Strop je první věc, kterou v místnosti uvidíte, když se ráno probudíte. Zároveň je to plocha, na které je vidět každá chyba. Pokud podceníte přípravu, světlo z okna vám odhalí každý tah válečkem.</p>
          
          <h2>1. Proč vždy začínat stropem?</h2>
          <p>Pokud plánujete malovat i stěny, strop musí jít jako první. Barva ze stropu bude nevyhnutelně stříkat dolů. Pokud byste měli stěny už hotové, drobné kapičky bílé barvy (tzv. mlha) by vám je znehodnotily.</p>

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

          <div style={{ background: "#f0f0f0", width: "100%", aspectRatio: "16/9", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", color: "#888", textAlign: "center", padding: "20px" }}>
            [GRAFIKA: Schéma postupu malování - šipky od okna směrem do hloubky místnosti]
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
             <ShareButtons url="https://domovniguru.cz/blog/jak-vymalovat-strop" title="Jak vymalovat strop bez šmouh" />
          </div>
        </footer>
      </article>
    </div>
  );
}
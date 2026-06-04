import type { Metadata } from "next";
import Link from "next/link";
import CenaMalovaniCalculator from "@/app/components/CenaMalovaniCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka ceny malování 2026 – kolik stojí vymalovat byt?",
  description: "Kolik stojí vymalovat byt nebo dům? Zadej plochu stěn a cenu práce – celkový odhad nákladů na malování okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-malovani" },
  openGraph: { title: "Kalkulačka ceny malování 2026", description: "Kolik stojí vymalovat byt nebo dům? Zadej plochu stěn a cenu práce – celkový odhad nákladů na malování okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/cena-malovani", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20malom%C3%A1n%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny malování 2026" }] },
};

export default function CenaMalovaniPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena malování</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí vymalovat byt nebo dům?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu stěn, cenu práce a materiálu — kalkulačka ti okamžitě odhadne celkové náklady na malování v korunách.</p>

        <CenaMalovaniCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Ceny malování v ČR – orientační přehled 2026</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Ceny malování v České republice se liší podle regionu, složitosti práce a standardu použitých materiálů. V Praze a Brně se cena práce zkušeného malíře pohybuje 200–280 Kč/m² stěn, v krajích mimo velká města 140–200 Kč/m². Tato sazba obvykle zahrnuje přípravu povrchu (lehké broušení, přetmelení menších trhlin), penetraci a dva nátěry latexovou barvou. Přihnojení rohu, malování na výšku přes 3 m (potřeba pojízdného lešení) nebo přechod z tmavé barvy na světlou (3 nátěry místo 2) zdražují práci o 20–40 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Materiálové náklady závisí na kvalitě použitých produktů. Ekonomická varianta (tuzemská barva, penetrace): 40–60 Kč/m². Střední třída (Primalex, Sokrates, Dulux): 70–100 Kč/m². Prémium (Farrow & Ball, Little Greene, speciální fasádní barvy): 150–250 Kč/m². Do kalkulace zahrňte i spotřebu penetrace (30–50 Kč/m²), folii na zakrytí podlah, malířskou pásku a případné tmelení trhlin. Pro typický 3+1 byt s 80 m² stěn vychází materiál na 4 000–8 000 Kč.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Svépomocné malování stojí pouze cenu materiálu — práce je &quot;zdarma&quot;. Ale počítejte s časem: zkušený kutile maluje 10–15 m²/hodinu, začátečník 5–8 m²/hodinu. Byt 60 m² (100 m² stěn) tak kutila zaměstná na víkend. Profesionální malíř totéž zvládne za 1 pracovní den. Čas strávený malováním mimo svůj byt (nájem, hotel) pak snižuje ekonomický přínos svépomocné práce. Pokud chystáte malování při stěhování nebo rekonstrukci, zvažte i náklady na přechodné bydlení.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
              { title: "Kalkulačka penetrace", href: "/kalkulacky/kolik-primeru", icon: "🪣" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none" }}>
                <div style={{ fontSize:"18px", marginBottom:"6px" }}>{r.icon}</div>
                <div style={{ fontSize:"14px", fontWeight:500, color:"#2a2a28", lineHeight:1.4 }}>{r.title}</div>
                <div style={{ fontSize:"12px", color:"#8a8a80", marginTop:"6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

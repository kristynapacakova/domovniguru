// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-tapet/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import TapetyCalculator from "@/app/components/TapetyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka tapet 2026 – kolik rolí tapet potřebuju s raportem vzoru?",
  description: "Spočítej počet rolí tapet včetně odpadu na vzor (raport). Zadej obvod místnosti, výšku a rozměry role – výsledek okamžitě.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/kolik-tapet" },
  openGraph: { title: "Kalkulačka tapet 2026", description: "Počet rolí tapet s raportem vzoru. Výsledek okamžitě.", url: "https://domovniguru.cz/kalkulacky/kolik-tapet", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
};

export default function KolikTapetPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik tapet</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik tapet potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej obvod místnosti, výšku a rozměry role — kalkulačka počítá správně i s opakováním vzoru (raport).</p>

        <TapetyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Raport vzoru a šarže – dvě věci které rozhodují o výsledku</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Raport (anglicky pattern repeat) je vzdálenost po které se vzor na tapetě opakuje. U hladkých tapet je raport 0 — každý pás navazuje přesně na předchozí bez odpadu. U vzorované tapety s raportem 32 cm musíš každý pás začínat na stejném místě vzoru, aby linie navazovaly. To znamená, že z každého pásu vyhodíš průměrně půl raportu na horní části — při raportu 32 cm a výšce místnosti 260 cm potřebuješ pás 292 cm místo 260 cm, a z role 10 m dostaneš 3 pásy místo 3,8. Výsledek: potřebuješ o 20–30 % více rolí než u hladkých tapet.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Šarže (lot number, batch number) je identifikátor výrobní série — tisk tapet je analogový proces a každá nová série má mírně odlišné sytosti barev. Tapety z různých šarží mohou být nerozeznatelné v obchodě, ale po nalepení na zeď vedle sebe budou rozdíly viditelné. Proto: vždy kupuj všechny role najednou a zkontroluj, že mají stejné číslo šarže na etiketě. Zbývající role vždy uschovej — pro případné opravy nebo doslepení poškozených míst.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Lepení začínej od největší okna nebo dveří a pokračuj k rohům — tak budou případné nepřesnosti v rozích méně nápadné. Rohem nikdy neprojede celý pás, vždy se musí stříhat a překrývat nebo nařezat do úhlu. Přebytek lepidla okamžitě otírej mokrým hadříkem — zaschlé lepidlo je na tapetě viditelné jako lesklé skvrny.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Tapety vs. barva – co se vyplatí víc?", href: "/blog/tapety-vs-barva", icon: "🖼️" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", icon: "🎨" },
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

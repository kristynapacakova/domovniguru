// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-sadrokartonu/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import SadrokartonCalculator from "@/app/components/SadrokartonCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka sádrokartonu 2026 – kolik desek SDK potřebuji?",
  description: "Kolik desek sádrokartonu na příčku nebo podhled? Zadej rozměry plochy – výpočet počtu SDK desek ihned. Zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sadrokartonu" },
  openGraph: { title: "Kalkulačka sádrokartonu 2026", description: "Kolik desek sádrokartonu na příčku nebo podhled? Zadej rozměry plochy – výpočet počtu SDK desek ihned.", url: "https://www.domovniguru.cz/kalkulacky/kolik-sadrokartonu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20s%C3%A1drokartonu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka sádrokartonu 2026" }] },
};

export default function KolikSadrokartonuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik sádrokartonu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik desek sádrokartonu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry příčky nebo podhledu — kalkulačka přidá rezervu na řezy a řekne ti přesný počet SDK desek k nákupu.</p>

        <SadrokartonCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jakou tloušťku SDK desky vybrat a jak minimalizovat odpad</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejběžnější sádrokartonová deska pro příčky a podhledové obklady má tloušťku 12,5 mm a rozměr 1,25 × 2,0 m nebo 1,25 × 2,6 m (plocha 2,5 resp. 3,25 m²). Pro koupelny a vlhká prostředí volte zelené desky (RH = resistance humidity) — mají hydrofobizovanou sádru a papír. Požárně odolné (červené) desky RF se používají v technických místnostech a tam, kde to předepisuje projekt. Tloušťka 15 mm se hodí pro podhledové konstrukce se zvýšeným zatížením nebo tam, kde je předepsána lepší vzduchová neprůzvučnost.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčem k minimalizaci odpadu je správné naplánování kladení. Desky pokládejte vždy svisle — výška místnosti 2,5 m odpovídá desce 2,5 m, takže prořez je nulový. Vodorovné řezy jsou nutné jen v místech oken nebo při nestandardní výšce. Využijte zbytky desek pro menší plochy — doměrky nad dveřní otvory, zásuvky a rohové výplně. Odpad 10 % je realistická rezerva pro zkušené kutily, 15 % pro začátečníky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před montáží SDK nechte desky 24 hodin aklimatizovat v místnosti — sádrokarton je hygroskopický a reaguje na vlhkost a teplotu. Šrouby zapouštějte 0,5–1 mm pod povrch desky, nikdy ne hlouběji — jinak průrazem papírového povrchu ztratí šroub pevnost. Spáry mezi deskami přetáhněte sklotextilní síťovinou a tmelem ve dvou vrstvách. Výsledný povrch pak přebruste a nakryje se penetrací — sádrokarton je extrémně savý a bez penetrace pohltí neúměrné množství barvy.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sádrokartonová příčka – postup krok za krokem", href: "/blog/sadrokarton-pricka-postup", icon: "🧱" },
              { title: "Jak plánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
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

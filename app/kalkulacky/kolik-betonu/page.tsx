// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-betonu/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import BetonCalculator from "@/app/components/BetonCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka betonu 2026 – kolik m³ potřebuju na desku nebo patku?",
  description: "Spočítej objem betonu pro základovou desku, patku nebo jinou betonáž. Výsledek v m³ i počet pytlů. Rezerva na sesedání automaticky.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/kolik-betonu" },
  openGraph: { title: "Kalkulačka betonu 2026", description: "Objem betonu v m³ i počet pytlů. S rezervou na sesedání.", url: "https://domovniguru.cz/kalkulacky/kolik-betonu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
};

export default function KolikBetonuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik betonu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik betonu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej délku, šířku a tloušťku — kalkulačka spočítá objem betonu s rezervou na sesedání.</p>

        <BetonCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně počítat beton pro patky a nepravidelné tvary</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Základová deska nebo betonová patka jsou zdaleka nejčastějším použitím domácí betonáže — a kalkulace objemu je přímočará: délka × šířka × tloušťka v metrech dává výsledek v kubicích (m³). U nepravidelných patek (L-profil, T-průřez nebo kombinované základy) postupuj tak, že tvar rozložíš na jednoduché obdélníky nebo kvádry, spočítáš každý zvlášť a výsledky sečteš. Chyba v odhadu i o 0,1 m může při větší desce znamenat rozdíl půl kubíku betonu — a při ceně namíchaného betonu 3 000–4 000 Kč/m³ jde o nezanedbatelnou sumu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Proč kupovat o 5 % více? Čerstvý beton při tuhnutí sesedá — přibližně o 1–3 % objemu v závislosti na vodním součiniteli a použitém kamenivo. Navíc část betonu vždy zůstane ve míchačce, na lopátce nebo misce. U větší betonáže (přes 1 m³) doporučujeme raději objednat beton z betonárny — centrálně míchaný beton má konzistentní složení a přesně deklarovanou pevnostní třídu (C20/25, C25/30).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Při práci s pytlovaným betonem (suchá směs C20) dej pozor na vodní součinitel — přidání příliš mnoho vody zvyšuje zpracovatelnost, ale dramaticky snižuje výslednou pevnost. Na 50 kg pytel přidávej maximálně 5–6 litrů vody a směs dobře prohněť. Betonáž v mrazech (pod 5 °C) zpomaluje tuhnutí a hrozí popraskání — v zimě používej přísady nebo zákrytku.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak sám postavit příčku ze sádrokartonu", href: "/blog/sadrkarton-pricka-postup", icon: "🏗️" },
              { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", icon: "🔧" },
              { title: "Jak pokládat betonové dlaždice na terasu", href: "/blog/pokladat-betonove-dlazdice", icon: "🪨" },
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

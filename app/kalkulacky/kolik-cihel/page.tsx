import type { Metadata } from "next";
import Link from "next/link";
import CihlyCalculator from "@/app/components/CihlyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka cihel 2026 – kolik cihel na zeď potřebuji?",
  description: "Kolik cihel nebo tvárnic na zeď? Zadej plochu a počet cihel na m² – výpočet okamžitě. Standardní cihla: 65 ks/m².",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-cihel" },
  openGraph: { title: "Kalkulačka cihel 2026 – kolik cihel na zeď potřebuji?", description: "Kolik cihel nebo tvárnic na zeď? Zadej plochu a počet cihel na m² – výpočet okamžitě. Standardní cihla: 65 ks/m².", url: "https://www.domovniguru.cz/kalkulacky/kolik-cihel", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20cihel%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka cihel 2026" }] },
};

export default function KolikCihelPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik cihel</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik cihel na zeď potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu zdi a počet cihel na m² — kalkulačka ti okamžitě spočítá přesný počet kusů s rezervou.</p>

        <CihlyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Typy cihel a tvárnic – přehled formátů a použití</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Na českém trhu se nejběžněji setkáme s pálenými cihlami a pórobetonovými (Ytong) tvárnicemi. Plná pálená cihla v formátu DF (240×115×71 mm) je klasikou pro nosné zdi — pro jednovrstvou zeď tloušťky 24 cm potřebujete přibližně 65 kusů na m². Moderní děrované pálenky (např. Porotherm) mají lepší tepelněizolační vlastnosti, ale nižší počet kusů na m² (20–40 ks v závislosti na formátu). Pórobetonové tvárnice (Ytong, Hebel) se řežou pilou, jsou lehčí a mají výbornou tepelnou izolaci, ale vyžadují speciální maltu nebo lepidlo.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Příčky v interiéru se nejčastěji stavějí z příčkovek (115×71×240 mm nebo 65×115×240 mm) nebo SDK na kovových profilech. Cihelná příčka má lepší zvukovou izolaci a pevnost pro závěsy — unese bez problémů i těžší police a skříně. SDK příčka se staví rychleji, ale vyžaduje hmoždinky do desek pro těžší předměty. Pro příčky v koupelně zvolte vlhkostně odolné tvárnice nebo speciální koupelnové SDK desky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Malta pro zdění se míchá v poměru přibližně 1 díl cementu : 4 díly písku nebo se používá pytlová zdící malta. Spotřeba malty závisí na tloušťce spár (10–12 mm) a formátu cihel — orientačně počítejte 25–30 kg pytlové malty na m² jednovrstvé zdi. Cihly před zdením nenamáčejte — moderní pálenky absorbci regulují samy a přemočení naopak komplikuje přilnutí malty. U pórobetonových tvárnic se používá speciální tenkostenné lepidlo v tloušťce 1–3 mm.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sádrokartonová příčka – postup krok za krokem", href: "/blog/sadrokarton-pricka-postup", icon: "🧱" },
              { title: "Kalkulačka betonu", href: "/kalkulacky/kolik-betonu", icon: "🏗️" },
              { title: "Jak plánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
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

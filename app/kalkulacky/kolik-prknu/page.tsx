import type { Metadata } from "next";
import Link from "next/link";
import PrknaCalculator from "@/app/components/PrknaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka prken na terasu 2026 – kolik kusů potřebuji?",
  description: "Kolik kusů dřevěných prken na terasu? Zadej rozměry terasy a prken – výpočet okamžitě. Zdarma, bez registrace.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-prknu" },
  openGraph: { title: "Kalkulačka prken na terasu 2026 – kolik kusů potřebuji?", description: "Kolik kusů dřevěných prken na terasu? Zadej rozměry terasy a prken – výpočet okamžitě. Zdarma, bez registrace.", url: "https://www.domovniguru.cz/kalkulacky/kolik-prknu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20prken%20na%20terasu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka prken na terasu 2026" }] },
};

export default function KolikPrknuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik prken</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik prken na terasu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry terasy i prken — kalkulačka ti okamžitě spočítá přesný počet kusů s ohledem na šířku spár.</p>

        <PrknaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak vybrat dřevo na terasu a správné rozměry prken</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr dřeviny pro venkovní terasu je klíčové rozhodnutí ovlivňující životnost a náklady na údržbu. Nejběžnějším a nejdostupnějším dřevem pro terasové deskování v ČR je smrk nebo borovice — levné, snadno dostupné, ale vyžadují pravidelnou údržbu (nátěr každé 2–3 roky) a při zanedbání podléhají hnilobě. Modřín odolává vlhkosti přirozeně lépe díky vysokému obsahu pryskyřice a vydrží bez nátěru 8–12 let. Exotická dřeva (bangkirai, teak, ipe) jsou maximálně trvanlivá, ale nákladná a ekologicky sporná — vybírejte certifikát FSC.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Standardní šířka terasových prken je 90–145 mm, tloušťka 26–28 mm. Širší prkna (145 mm) vypadají moderněji, ale na slunci se snáze kroutí — pro venkovní použití je optimum kolem 90–120 mm. Délky prken bývají 2,0–4,0 m; při objednávce zvolte délku blízkou délce terasy, abyste minimalizovali prořezy. Šířka spáry 4–6 mm zajišťuje odvodnění a zároveň kompenzuje teplotní roztažnost dřeva (borovice se mění o 3–5 mm na metr délky mezi létem a zimou).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před pokládkou nechte dřevo 48 hodin aklimatizovat na místě použití — vyrovnání vlhkosti dřeva s okolním prostředím předchází pozdějšímu kroucení a praskání. Prkna montujte na rošt z impregnovaných hranolů (min. 60 × 40 mm) s osovou vzdáleností 40–60 cm. Šrouby musí být nerezové nebo pozinkované — klasická ocel rezaví a stéká hnědými skvrnami. Před prvním nátěrem nechte nové dřevo 2–3 měsíce „zvětrat" — barva pak lépe přilne.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak ošetřit dřevěnou terasu na zimu", href: "/blog/drevo-terasa-zima", icon: "🪵" },
              { title: "Jak natřít venkovní dřevo – průvodce", href: "/blog/natrit-venkovni-drevo", icon: "🖌️" },
              { title: "Jak zařídit terasu na balkoně", href: "/blog/terasa-na-balkone", icon: "🌿" },
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

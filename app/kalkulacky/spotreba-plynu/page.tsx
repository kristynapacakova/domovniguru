import type { Metadata } from "next";
import Link from "next/link";
import SpotrebaPlynuCalculator from "@/app/components/SpotrebaPlynuCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spotřeby plynu 2026 – kolik m³ a Kč ročně?",
  description: "Odhadněte roční spotřebu plynu na vytápění domu nebo bytu. Zadej plochu a třídu izolace – výsledek v m³ a Kč okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/spotreba-plynu" },
  openGraph: { title: "Kalkulačka spotřeby plynu 2026", description: "Odhadněte roční spotřebu plynu na vytápění domu nebo bytu. Zadej plochu a třídu izolace – výsledek v m³ a Kč okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/spotreba-plynu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20spot%C5%99eby%20plynu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka spotřeby plynu 2026" }] },
};

export default function SpotrebaPlynuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Spotřeba plynu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik plynu spotřebuje můj dům?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej vytápěnou plochu a tepelnou náročnost budovy — kalkulačka ti okamžitě odhadne roční spotřebu plynu v m³ a náklady v Kč.</p>

        <SpotrebaPlynuCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Co ovlivňuje spotřebu plynu a jak ji snížit</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tepelná náročnost budovy je klíčovým parametrem pro výpočet spotřeby plynu. Stará cihlová zástavba bez zateplení z 60.–80. let spotřebuje 180–250 kWh tepelné energie na m² ročně. Průměrná sídlištní budova (panel 80. let, mírně rekonstruovaná) se pohybuje na 130–170 kWh/m²/rok. Novostavby splňující normu z roku 2012 dosahují 70–100 kWh/m²/rok a nízkoenergetické domy pod 50 kWh/m²/rok. Pasivní domy mají spotřebu pod 15 kWh/m²/rok — plyn na vytápění téměř nepotřebují. Hodnota spotreba_m2 v kalkulačce odpovídá celkové tepelné potřebě — plynový kotel ji pokryje s účinností 90–95 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Největší vliv na spotřebu plynu mají: kvalita zateplení obálky budovy (stěny, střecha, okna, podlaha), typ řízeného větrání (rekuperace vs. přirozené větrání), teplota v místnostech a délka topné sezóny. Snížení teploty o 1 °C šetří 6–8 % energie. Programovatelný termostat snižuje teplotu v noci a při nepřítomnosti — úspora 15–25 %. Výměna starého kotlového hořáku za kondenzační kotel zvyšuje účinnost z 85 % na 95–98 % a šetří 10–15 % plynu při stejné provozní teplotě.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Alternativy k plynovému vytápění nabývají na relevanci s rostoucími cenami plynu. Tepelné čerpadlo vzduch/voda přečerpá 1 kWh elektrické energie na 3–4 kWh tepla — při ceně elektřiny 5 Kč/kWh a COP 3,5 vychází teplo na 1,43 Kč/kWh, oproti plynu za 2,8 Kč/kWh. Solární termické kolektory pokryjí 40–70 % potřeby teplé vody a výrazně snižují spotřebu plynu v jarním a letním období. Kotel na biomasu (pelety, kusové dřevo) je ekonomicky výhodný tam, kde je dřevo dostupné — pelety mají výhřevnost 4,5–5 kWh/kg při ceně cca 8–10 Kč/kg, tedy 1,7–2,2 Kč/kWh.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak ušetřit na vytápění – průvodce", href: "/blog/usetrit-na-vytapeni", icon: "🔥" },
              { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♻️" },
              { title: "Kalkulačka návratnosti tepelného čerpadla", href: "/kalkulacky/tepelne-cerpadlo", icon: "♨️" },
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

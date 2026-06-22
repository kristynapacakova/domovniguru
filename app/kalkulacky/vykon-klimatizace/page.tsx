import type { Metadata } from "next";
import Link from "next/link";
import VykonKlimatizaceCalculator from "@/app/components/VykonKlimatizaceCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka výkonu klimatizace 2026 – kolik kW/BTU pro mou místnost?",
  description: "Vypočítejte potřebný výkon klimatizace podle plochy, výšky stropu a orientace místnosti. Okamžitý výsledek v kW i BTU.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/vykon-klimatizace" },
  openGraph: { title: "Kalkulačka výkonu klimatizace 2026 – kolik kW/BTU pro mou místnost?", description: "Vypočítejte potřebný výkon klimatizace podle plochy, výšky stropu a orientace místnosti. Okamžitý výsledek v kW i BTU.", url: "https://www.domovniguru.cz/kalkulacky/vykon-klimatizace", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20v%C3%BDkonu%20klimatizace%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka výkonu klimatizace 2026" }] },
};

export default function VykonKlimatizacePage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Výkon klimatizace</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik kW klimatizace potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Správně dimenzovaná klimatizace chladí efektivně a nepředimenzovaná ani poddimenzovaná jednotka plýtvá energií. Zadejte plochu místnosti, výšku stropu a orientaci — kalkulačka okamžitě vypočítá potřebný výkon v kW i BTU a doporučí nejbližší standardní velikost dostupnou na trhu.</p>

        <VykonKlimatizaceCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně vybrat výkon klimatizace</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Základem výpočtu je objem místnosti (plocha × výška stropu) vynásobený specifickým tepelným ziskem. Pro české klima se běžně používá hodnota 30–35 W/m³ — kalkulačka počítá se 30 W/m³ jako výchozím bodem. Výsledný výkon se pak koriguje podle toho, kolik tepla do místnosti přichází zvenku: jižní a západní fasády jsou sluncem zasaženy nejdéle, a proto potřebují silnější jednotku než místnosti orientované na sever.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výška stropu hraje zásadní roli, která se v jednoduchých „pravidlech palce" (W/m²) často přehlíží. Místnost s výškou stropu 3 m má o 20 % větší objem než stejně velká místnost s výškou 2,5 m — a potřebuje odpovídajícíobjemový výkon. Proto kalkulačka pracuje s W/m³ místo W/m². Pokud máte podkrovní místnost se šikmými stropy, zadejte průměrnou výšku.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Výsledek kalkulačky je orientační základ — v praxi je třeba zohlednit také počet a velikost oken (prosklená fasáda může zdvojnásobit tepelný zisk), tepelné mosty ve zdi, přítomnost výpočetní techniky nebo spotřebičů a počet osob. Klimatizace se standardně vyrábí ve velikostech 2,0 / 2,5 / 3,2 / 3,5 / 4,5 / 5,5 a 7,0 kW — kalkulačka zaokrouhlí výsledek nahoru na nejbližší dostupnou velikost, aby výkon nestačil nestačil.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat klimatizaci – kompletní průvodce", href: "/blog/jak-vybrat-klimatizaci", icon: "❄️" },
              { title: "Spotřeba elektřiny domácnosti", href: "/kalkulacky/spotreba-elektriciny", icon: "⚡" },
              { title: "Chytrý termostat – jak funguje a kolik ušetří", href: "/blog/chytry-termostat-uspora-vytapeni", icon: "🌡️" },
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

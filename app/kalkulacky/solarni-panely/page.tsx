import type { Metadata } from "next";
import Link from "next/link";
import SolarniPanelyCalculator from "@/app/components/SolarniPanelyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka solárních panelů 2026 – kolik panelů potřebuji?",
  description: "Kolik solárních panelů potřebuje vaše domácnost? Zadej spotřebu a cenu elektřiny – výpočet počtu panelů, úspory a návratnosti.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/solarni-panely" },
  openGraph: { title: "Kalkulačka solárních panelů 2026", description: "Kolik solárních panelů potřebuje vaše domácnost? Zadej spotřebu a cenu elektřiny – výpočet počtu panelů, úspory a návratnosti.", url: "https://www.domovniguru.cz/kalkulacky/solarni-panely", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20sol%C3%A1rn%C3%ADch%20panel%C5%AF%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka solárních panelů 2026" }] },
};

export default function SolarniPanelyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Solární panely</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik solárních panelů potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej roční spotřebu elektřiny a výrobnost panelů — kalkulačka ti spočítá počet panelů, pokrytí spotřeby, roční úsporu a dobu návratnosti investice.</p>

        <SolarniPanelyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Fotovoltaika v ČR – co čekat od solárních panelů</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Fotovoltaické (FV) solární panely přeměňují sluneční záření na elektrickou energii. Průměrná česká domácnost spotřebovává 3 000–5 000 kWh elektřiny ročně, přičemž moderní 400 Wp panel na jižně orientované střeše v ČR vyrobí 380–450 kWh/rok. Pro pokrytí celé roční spotřeby 4 000 kWh tedy potřebujete přibližně 9–11 panelů (3,6–4,4 kWp). Orientace střechy výrazně ovlivňuje výrobu — jižní sklon 30–40° je optimum, jihovýchod/jihozápad ztrácí 10–15 %, západ/východ 25–30 % oproti jihu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Investiční náklady na FV systém v ČR se v roce 2026 pohybují kolem 40 000–55 000 Kč/kWp včetně instalace, měniče a dokumentace. Rodinný dům s 5 kWp tedy investuje 200 000–275 000 Kč. Bez baterie (jen dodávka do sítě nebo přímá spotřeba) je návratnost 8–12 let při ceně elektřiny 5 Kč/kWh. Dotace NZÚ (Nová zelená úsporám) mohou pokrýt 30–50 % investice u rodinných domů, výrazně zkracují dobu návratnosti. Bateriové úložiště zvyšuje vlastní spotřebu ze 30–40 % na 70–90 %, ale prodlužuje celkovou návratnost o 3–5 let kvůli vyšší pořizovací ceně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před instalací FV systému ověřte: (1) statiku střechy — 1 panel váží 18–25 kg, (2) elektrické jištění — domácí rozvaděč musí zvládnout zpětný tok energie, (3) souhlas s instalací u bytových domů (SVJ, stavební povolení nad 50 kWp), (4) smlouvu s distribučním operátorem o přetoky do sítě. Licencovaný instalatér musí být přítomen při uvádění do provozu a podat zprávu operátorovi distribuční soustavy (ČEZ Distribuce, E.ON, PREdistribuce). Záruka na výkon panelů bývá 25–30 let, na produkt 10–15 let.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kalkulačka LED žárovek – kolik ušetřím?", href: "/kalkulacky/led-uspora", icon: "💡" },
              { title: "Kalkulačka spotřeby elektřiny", href: "/kalkulacky/spotreba-elektriciny", icon: "⚡" },
              { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♻️" },
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

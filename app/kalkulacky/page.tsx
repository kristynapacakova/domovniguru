"use client";
import React from "react";
import Link from "next/link";

export default function KalkulackyHub() {
  const kalkulacky = [
    // Materiály – malování & stěny
    { icon: "🪣", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "🪣", title: "Kolik penetrace (primeru)?", desc: "Plocha, vydatnost, počet vrstev – litry ihned.", href: "/kalkulacky/kolik-primeru" },
    { icon: "🪚", title: "Kolik stěrky a tmelu?", desc: "Plocha, tloušťka vrstvy – kg a pytlů.", href: "/kalkulacky/kolik-sterky" },
    { icon: "🖼️", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "🖌️", title: "Kolik stojí malování?", desc: "Plocha, sazba a materiál – celkový odhad.", href: "/kalkulacky/cena-malovani" },
    // Materiály – podlahy & konstrukce
    { icon: "📐", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🪵", title: "Kolik prken na terasu?", desc: "Rozměry terasy a prken – počet kusů ihned.", href: "/kalkulacky/kolik-prknu" },
    { icon: "🪵", title: "Kolik stojí nová podlaha?", desc: "Materiál, podložka, pokládka – celkem.", href: "/kalkulacky/cena-podlahy" },
    { icon: "🧱", title: "Kolik sádrokartonu?", desc: "Plocha příčky nebo podhledu – počet desek.", href: "/kalkulacky/kolik-sadrokartonu" },
    { icon: "🧱", title: "Kolik cihel na zeď?", desc: "Plocha zdi, formát – přesný počet kusů.", href: "/kalkulacky/kolik-cihel" },
    { icon: "🏗️", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "💨", title: "Kolik montážní pěny?", desc: "Počet oken a dveří – počet plechovek.", href: "/kalkulacky/kolik-montazni-peny" },
    { icon: "🏠", title: "Kolik střešních tašek?", desc: "Plocha, sklon střechy – počet tašek s rezervou.", href: "/kalkulacky/kolik-stresni-tasek" },
    // Rekonstrukce & náklady
    { icon: "🚿", title: "Cena rekonstrukce koupelny", desc: "Plocha a standard – orientační odhad nákladů.", href: "/kalkulacky/cena-rekonstrukce-koupelny-odhad" },
    // Energie & provoz
    { icon: "💧", title: "Kolik tepelné izolace?", desc: "Plocha stěny, tloušťka, počet desek.", href: "/kalkulacky/tepelna-izolace" },
    { icon: "🌡️", title: "Podlahové topení – délka trubky", desc: "Plocha a rozteč – délka potrubí a výkon.", href: "/kalkulacky/podlahove-topeni" },
    { icon: "🚿", title: "Jaký bojler potřebuji?", desc: "Počet osob a sprchování – doporučený objem.", href: "/kalkulacky/velikost-bojleru" },
    { icon: "⚡", title: "Spotřeba elektřiny domácnosti", desc: "Spotřebiče, hodiny provozu – Kč/rok.", href: "/kalkulacky/spotreba-elektriciny" },
    { icon: "🔥", title: "Spotřeba plynu na vytápění", desc: "Plocha domu, třída izolace – m³ a Kč/rok.", href: "/kalkulacky/spotreba-plynu" },
    { icon: "♨️", title: "Návratnost tepelného čerpadla", desc: "Investice, dotace NZÚ, roky návratnosti.", href: "/kalkulacky/tepelne-cerpadlo" },
    { icon: "☀️", title: "Kolik solárních panelů?", desc: "Spotřeba – počet panelů, úspora, návratnost.", href: "/kalkulacky/solarni-panely" },
    { icon: "💡", title: "Kolik ušetřím LED žárovkami?", desc: "Příkon, počet žárovek, roční úspora v Kč.", href: "/kalkulacky/led-uspora" },
    { icon: "❄️", title: "Výkon klimatizace – kolik kW?", desc: "Plocha, výška, orientace – kW a BTU ihned.", href: "/kalkulacky/vykon-klimatizace" },
    { icon: "💧", title: "Spotřeba vody domácnosti", desc: "Sprcha, vana, WC, pračka – m³ a Kč/rok.", href: "/kalkulacky/spotreba-vody" },
    { icon: "🏦", title: "Kalkulačka hypotéky", desc: "Výše úvěru, sazba, splatnost – měsíční splátka a přeplacení.", href: "/kalkulacky/splaceni-hypoteky" },
    { icon: "🏠", title: "Kolik ušetřím po zateplení?", desc: "Rozsah zateplení, náklady – roční úspora a návratnost.", href: "/kalkulacky/uspora-zatepleni" },
    { icon: "🍳", title: "Kolik stojí nová kuchyně?", desc: "Délka linky, standard, spotřebiče – celková cena.", href: "/kalkulacky/cena-kuchyne" },
    // Zahrada
    { icon: "🌱", title: "Kolik osiva na trávník?", desc: "Plocha a dávka – kg a počet pytlíků.", href: "/kalkulacky/kolik-osiva" },
    { icon: "🌱", title: "Kolik hnojiva potřebuji?", desc: "Plocha, dávka g/m² – kg a počet pytlíků.", href: "/kalkulacky/kolik-hnojiva" },
    { icon: "🌿", title: "Kolik mulče na záhony?", desc: "Plocha, tloušťka vrstvy – litry a pytlů.", href: "/kalkulacky/kolik-mulce" },
    { icon: "♻️", title: "Kolik kompostu na záhony?", desc: "Plocha, tloušťka vrstvy – litry a pytlů.", href: "/kalkulacky/kolik-kompostu" },
    { icon: "💧", title: "Kolik vody na zavlažování?", desc: "Plocha, typ rostlin – litry/zavlažování.", href: "/kalkulacky/kolik-zavlahy" },
    { icon: "🪴", title: "Kolik hlíny potřebuji?", desc: "Objem květináčů, truhlíků a litry substrátu.", href: "/kalkulacky/kolik-hliny" },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>
            Materiály a výpočty
          </div>
          <h1 style={{ fontFamily: "var(--font-serif, serif)", fontSize: "56px", margin: 0, fontWeight: 400 }}>
            Kalkulačky
          </h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300, lineHeight: 1.6 }}>
            Přesné výpočty pro vaši rekonstrukci a zahradu. Vyberte si, co právě řešíte, a my vám spočítáme přesné množství materiálu.
          </p>
        </header>

        <div className="kalk-grid">
          {kalkulacky.map((k, i) => (
            <Link key={i} href={k.href} className="kalk-card">
              <span style={{ fontSize: "32px" }}>{k.icon}</span>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#888", marginTop: "20px", textTransform: "uppercase" }}>Kalkulačka</div>
              <div className="kalk-title">{k.title}</div>
              <p style={{ fontSize: "14px", color: "#666", margin: 0, fontWeight: 300, lineHeight: 1.5 }}>{k.desc}</p>
              <div style={{ marginTop: "auto", fontWeight: 600, fontSize: "13px", paddingTop: "20px", borderTop: "1px solid #f5f5f0" }}>
                Spustit výpočet →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .kalk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding-bottom: 80px;
        }
        .kalk-card { 
          background: #fff; 
          border: 1px solid #e5e5e0; 
          border-radius: 12px; 
          padding: 30px; 
          text-decoration: none; 
          color: inherit; 
          transition: 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .kalk-card:hover { 
          border-color: #111; 
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06); 
        }
        .kalk-title {
          font-family: var(--font-serif, serif);
          font-size: 22px;
          margin: 10px 0;
          line-height: 1.2;
        }
        @media (max-width: 900px) {
          .kalk-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .kalk-grid { grid-template-columns: 1fr; }
          .kalk-title { font-size: 20px; }
        }
      `}</style>
    </div>
  );
}

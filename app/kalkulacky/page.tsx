"use client";
import React from "react";
import Link from "next/link";

export default function KalkulackyHub() {
  const kalkulacky = [
    { icon: "🪣", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", title: "Kolik tepelné izolace?", desc: "Plocha stěny, tloušťka, počet desek.", href: "/kalkulacky/tepelna-izolace" },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* HLAVIČKA STRÁNKY */}
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>
            Materiály a výpočty
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>
            Kalkulačky
          </h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300, lineHeight: 1.6 }}>
            Přesné výpočty pro vaši rekonstrukci. Vyberte si, co právě řešíte, a my vám spočítáme přesné množství materiálu.
          </p>
        </header>

        {/* MŘÍŽKA S KALKULAČKAMI */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", paddingBottom: "80px" }}>
          {kalkulacky.map((k, i) => (
            <Link key={i} href={k.href} className="kalk-card">
              <span style={{ fontSize: "32px" }}>{k.icon}</span>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#888", marginTop: "20px", textTransform: "uppercase" }}>Kalkulačka</div>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", margin: "10px 0", lineHeight: 1.2 }}>{k.title}</div>
              <p style={{ fontSize: "14px", color: "#666", margin: 0, fontWeight: 300, lineHeight: 1.5 }}>{k.desc}</p>
              <div style={{ marginTop: "25px", fontWeight: 600, fontSize: "13px", paddingTop: "20px", borderTop: "1px solid #f5f5f0" }}>
                Spustit výpočet →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
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
        }
        .kalk-card:hover { 
          border-color: #111; 
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06); 
        }
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

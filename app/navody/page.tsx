"use client";
import React from "react";
import Link from "next/link";

export default function RozcestnikNavody() {
  const clanky = [
    {
      id: "jak-vycistit-sifon",
      title: "Jak vyčistit ucpaný sifon",
      desc: "Voda neodtéká? Ukážeme vám, jak vyčistit sifon bez agresivní chemie.",
      icon: "🪠",
      time: "10 MIN"
    },
    {
      id: "jak-utesnit-vanu-silikonem",
      title: "Jak utěsnit vanu silikonem?",
      desc: "Plesnivé spáry nebo zatékání za vanu? Naučte se trik s mýdlovou vodou.",
      icon: "🚿",
      time: "30 MIN"
    },
    {
      id: "jak-nastavit-okna-na-zimu",
      title: "Jak nastavit okna na zimu?",
      desc: "Přetočení kování = teplejší byt a nižší účty. Za 15 minut.",
      icon: "🪟",
      time: "15 MIN"
    },
    {
      id: "jak-vycistit-spary-v-dlazbe",
      title: "Jak vyčistit spáry v dlažbě?",
      desc: "Zčernalé spáry bez drhnutí. Soda, ocet nebo kyslíkové bělení – funguje.",
      icon: "🧹",
      time: "20 MIN"
    },
    {
      id: "jak-vymenit-zasuvku",
      title: "Jak vyměnit zásuvku?",
      desc: "Bezpečně, levně, bez elektrikáře. Šroubovák a 25 minut stačí.",
      icon: "💡",
      time: "25 MIN"
    },
    {
      id: "jak-odvzdusit-radiator",
      title: "Jak odvzdušnit radiátor?",
      desc: "Studený radiátor nahoře? Takhle to napravíš za 10 minut.",
      icon: "🌡️",
      time: "10 MIN"
    },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        <header style={{ marginBottom: "60px" }}>
          <Link href="/" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600, textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
            ← Zpět na úvod
          </Link>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0 }}>Návody</h1>
          <p style={{ color: "#888", fontSize: "18px", marginTop: "10px" }}>Praktické rady pro údržbu vašeho domova.</p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {clanky.map((c) => (
            <Link key={c.id} href={`/navody/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-hover" style={{
                background: "#fff",
                padding: "36px",
                borderRadius: "16px",
                border: "1px solid #e5e5e0",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s ease",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "11px", fontWeight: 700, color: "#aaa", letterSpacing: "0.08em" }}>
                  <span>NÁVOD</span>
                  <span>⏱ {c.time}</span>
                </div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{c.icon}</div>
                <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "24px", marginBottom: "12px", lineHeight: 1.2, fontWeight: 400 }}>
                  {c.title}
                </h2>
                <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "24px", flexGrow: 1, fontSize: "15px", fontWeight: 300 }}>
                  {c.desc}
                </p>
                <div style={{ borderTop: "1px solid #eee", paddingTop: "18px", fontWeight: 700, fontSize: "13px" }}>
                  Číst →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          border-color: #111 !important;
        }
        @media (max-width: 700px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

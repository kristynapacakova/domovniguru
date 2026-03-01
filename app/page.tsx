"use client";
import React from "react";
import Link from "next/link";

export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", title: "Kolik tepelné izolace?", desc: "Plocha stěny, tloušťka, počet desek.", href: "/kalkulacky/tepelna-izolace" },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');
        .dg-page { font-family: 'DM Sans', sans-serif; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        .hero { padding: 80px 0 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; border-bottom: 1px solid #e5e5e0; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: 64px; line-height: 1.1; margin: 0; }
        .h1 em { font-style: italic; color: #888; font-weight: 400; }
        .hero-right { display: flex; flex-direction: column; gap: 25px; font-size: 17px; color: #666; line-height: 1.6; }
        .btn-row { display: flex; gap: 12px; }
        .btn { padding: 0 25px; height: 48px; display: flex; align-items: center; border-radius: 4px; font-size: 13px; font-weight: 600; text-decoration: none; text-transform: uppercase; }
        .btn-black { background: #000; color: #fff; }
        .btn-white { background: #fff; color: #000; border: 1px solid #ddd; }
        .section-head { display: flex; justify-content: space-between; margin: 60px 0 30px; border-bottom: 1px solid #e5e5e0; padding-bottom: 15px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #888; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 30px; text-decoration: none; color: inherit; transition: 0.2s; }
        .card:hover { border-color: #000; }
        .card-h { font-family: 'DM Serif Display', serif; font-size: 19px; margin: 10px 0; }
        @media (max-width: 900px) { .hero, .grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="dg-page wrap">
        <header className="hero">
          <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
          <div className="hero-right">
            <p>Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu. Rychle zjistíš, co koupit a jak to vyřešit bez stresu.</p>
            <div className="btn-row">
              <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
              <Link href="/navody" className="btn btn-white">Návody</Link>
              <Link href="/blog" className="btn btn-white">Blog</Link>
            </div>
          </div>
        </header>

        <div className="section-head">
          <span>Kalkulačky materiálu</span>
          <Link href="/kalkulacky" style={{ textDecoration: 'none', color: 'inherit' }}>Všechny kalkulačky →</Link>
        </div>

        <div className="grid">
          {kalkulacky.map((k, i) => (
            <Link key={i} href={k.href} className="card">
              <span style={{ fontSize: '32px' }}>{k.icon}</span>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#888', marginTop: '15px' }}>KALKULAČKA</div>
              <div className="card-h">{k.title}</div>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{k.desc}</p>
              <div style={{ marginTop: '20px', fontWeight: 600, fontSize: '13px' }}>Spustit →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";

export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", tag: "Kalkulačka", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", tag: "Kalkulačka", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", tag: "Kalkulačka", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", tag: "Kalkulačka", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", tag: "Kalkulačka", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", tag: "Kalkulačka", title: "Kolik tepelné izolace?", desc: "Plocha stěny, tloušťka, počet desek.", href: "/kalkulacky/tepelna-izolace" },
  ];

  const navody = [
    { icon: "🔧", tag: "Návod", title: "Jak vyčistit sifon?", desc: "Smradí odpad nebo pomalu odtéká? Vyřeš to za 10 minut.", href: "/navody/vycistit-sifon", time: "10 min" },
    { icon: "🚿", tag: "Návod", title: "Jak utěsnit vanu silikonem?", desc: "Plíseň ve spáře nebo zatékání? Krok za krokem.", href: "/navody/utesnit-vanu", time: "30 min" },
    { icon: "🪟", tag: "Návod", title: "Jak nastavit okna na zimu?", desc: "Přetočení kování = teplejší byt a nižší účty.", href: "/navody/okna-na-zimu", time: "15 min" },
  ];

  return (
    <div className="dg-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        .dg-container { font-family: 'DM Sans', sans-serif; background: #fafaf8; color: #1a1a1a; padding-bottom: 80px; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        
        /* Hero Section */
        .hero { padding: 80px 0 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; border-bottom: 1px solid #e5e5e0; }
        .eyebrow { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #888; margin-bottom: 15px; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: 64px; line-height: 1.1; margin: 0; }
        .h1 em { font-style: italic; color: #888; font-weight: 400; }
        .hero-right { display: flex; flex-direction: column; gap: 25px; }
        .hero-text { font-size: 17px; line-height: 1.6; color: #666; max-width: 450px; margin: 0; }
        
        /* Buttons */
        .btn-row { display: flex; gap: 12px; }
        .btn { padding: 0 25px; height: 48px; display: inline-flex; align-items: center; border-radius: 4px; font-size: 13px; font-weight: 600; text-decoration: none; text-transform: uppercase; transition: 0.2s; }
        .btn-black { background: #000; color: #fff; }
        .btn-white { background: #fff; color: #000; border: 1px solid #ddd; }
        .btn:hover { opacity: 0.8; transform: translateY(-1px); }

        /* Sections */
        .section-head { display: flex; justify-content: space-between; align-items: baseline; margin: 60px 0 30px; border-bottom: 1px solid #e5e5e0; padding-bottom: 15px; }
        .section-title { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #888; }
        .section-all { font-size: 12px; font-weight: 600; color: #888; text-decoration: none; }

        /* Grids */
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 30px; text-decoration: none; color: inherit; transition: 0.3s; }
        .card:hover { border-color: #000; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .card-icon { font-size: 32px; display: block; margin-bottom: 20px; }
        .card-tag { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 8px; }
        .card-h { font-family: 'DM Serif Display', serif; font-size: 19px; margin-bottom: 10px; }
        .card-p { font-size: 14px; color: #666; line-height: 1.5; }
        .card-more { margin-top: 25px; font-size: 13px; font-weight: 600; display: block; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; gap: 30px; }
          .grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="wrap">
        <header className="hero">
          <div>
            <div className="eyebrow">Praktický průvodce domácností</div>
            <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
          </div>
          <div className="hero-right">
            <p className="hero-text">Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu. Rychle zjistíš, co koupit, kolik toho potřebuješ a jak to vyřešit bez stresu.</p>
            <div className="btn-row">
              <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
              <Link href="/navody" className="btn btn-white">Návody</Link>
              <Link href="/blog" className="btn btn-white">Blog</Link>
            </div>
          </div>
        </header>

        {/* Kalkulačky */}
        <section>
          <div className="section-head">
            <span className="section-title">Kalkulačky materiálu</span>
            <Link href="/kalkulacky" className="section-all">Všechny kalkulačky →</Link>
          </div>
          <div className="grid">
            {kalkulacky.map((k, i) => (
              <Link key={i} href={k.href} className="card">
                <span className="card-icon">{k.icon}</span>
                <div className="card-tag">Kalkulačka</div>
                <div className="card-h">{k.title}</div>
                <div className="card-p">{k.desc}</div>
                <span className="card-more">Spustit →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Návody */}
        <section>
          <div className="section-head">
            <span className="section-title">Návody krok za krokem</span>
            <Link href="/navody" className="section-all">Všechny návody →</Link>
          </div>
          <div className="grid">
            {navody.map((n, i) => (
              <Link key={i} href={n.href} className="card">
                <span className="card-icon">{n.icon}</span>
                <div className="card-tag">Návod — ⏱ {n.time}</div>
                <div className="card-h">{n.title}</div>
                <div className="card-p">{n.desc}</div>
                <span className="card-more">Číst návod →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

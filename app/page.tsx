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
    <div style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        
        .dg-page { font-family: 'DM Sans', sans-serif; color: #0f0f0e; padding-bottom: 100px; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        
        /* Hero Section */
        .hero { padding: 80px 0 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: end; border-bottom: 1px solid rgba(15,15,14,0.1); }
        .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #78776e; margin-bottom: 20px; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: clamp(40px, 6vw, 64px); line-height: 1.05; margin: 0; }
        .h1 em { font-style: italic; color: #78776e; }
        .hero-right { display: flex; flex-direction: column; gap: 30px; }
        .hero-desc { font-size: 18px; line-height: 1.6; color: #78776e; margin: 0; }
        
        /* Buttons */
        .btn-group { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; padding: 0 24px; height: 48px; border-radius: 6px; font-size: 13px; font-weight: 600; text-transform: uppercase; text-decoration: none; transition: all 0.2s; letter-spacing: 0.05em; }
        .btn-black { background: #0f0f0e; color: #fff; }
        .btn-outline { background: #fff; color: #0f0f0e; border: 1px solid rgba(15,15,14,0.1); }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.08); }

        /* Sections */
        .section { padding: 60px 0 0; }
        .section-header { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(15,15,14,0.1); padding-bottom: 15px; margin-bottom: 30px; }
        .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78776e; }
        .section-link { font-size: 12px; font-weight: 600; color: #78776e; text-decoration: none; }

        /* Grid & Cards */
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card { background: #fff; border: 1px solid rgba(15,15,14,0.1); border-radius: 16px; padding: 28px; text-decoration: none; color: inherit; transition: all 0.3s; display: flex; flex-direction: column; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }
        
        .card-icon { font-size: 32px; margin-bottom: 20px; display: block; }
        .card-tag { font-size: 10px; font-weight: 600; text-transform: uppercase; color: #78776e; margin-bottom: 8px; letter-spacing: 0.05em; }
        .card-title { font-family: 'DM Serif Display', serif; font-size: 20px; margin-bottom: 10px; line-height: 1.3; }
        .card-desc { font-size: 14px; line-height: 1.5; color: #78776e; flex-grow: 1; }
        .card-footer { margin-top: 20px; font-size: 13px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; gap: 40px; padding: 60px 0; }
          .grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="dg-page">
        <div className="wrap">
          {/* HERO */}
          <header className="hero">
            <div>
              <div className="eyebrow">Praktický průvodce domácností</div>
              <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
            </div>
            <div className="hero-right">
              <p className="hero-desc">Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu. Rychle zjistíš, co koupit a jak to vyřešit.</p>
              <div className="btn-group">
                <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
                <Link href="/navody" className="btn btn-outline">Návody</Link>
                <Link href="/blog" className="btn btn-outline">Blog</Link>
              </div>
            </div>
          </header>

          {/* KALKULAČKY */}
          <section className="section">
            <div className="section-header">
              <span className="section-label">Kalkulačky materiálu</span>
              <Link href="/kalkulacky" className="section-link">Všechny kalkulačky →</Link>
            </div>
            <div className="grid">
              {kalkulacky.map((k, i) => (
                <Link key={i} className="card" href={k.href}>
                  <span className="card-icon">{k.icon}</span>
                  <div className="card-tag">{k.tag}</div>
                  <div className="card-title">{k.title}</div>
                  <div className="card-desc">{k.desc}</div>
                  <div className="card-footer">Spustit →</div>
                </Link>
              ))}
            </div>
          </section>

          {/* NÁVODY */}
          <section className="section">
            <div className="section-header">
              <span className="section-label">Návody krok za krokem</span>
              <Link href="/navody" className="section-link">Všechny návody →</Link>
            </div>
            <div className="grid">
              {navody.map((n, i) => (
                <Link key={i} className="card" href={n.href}>
                  <span className="card-icon">{n.icon}</span>
                  <div className="card-tag">{n.tag} — ⏱ {n.time}</div>
                  <div className="card-title">{n.title}</div>
                  <div className="card-desc">{n.desc}</div>
                  <div className="card-footer">Číst →</div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

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
    <div className="dg">
      {/* 1. HERO SEKCE */}
      <div className="wrap">
        <header className="hero">
          <div>
            <div className="eyebrow">Praktický průvodce domácností</div>
            <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
          </div>
          <div>
            <p className="hero-desc">Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu.</p>
            <div className="btn-row">
              <Link className="btn-primary" href="/kalkulacky">Kalkulačky →</Link>
              <Link className="btn-ghost" href="/navody">Návody</Link>
            </div>
          </div>
        </header>
      </div>

      {/* 2. SEKCE KALKULAČKY */}
      <div className="wrap">
        <div className="section">
          <div className="section-header">
            <span className="section-label">Kalkulačky materiálu</span>
            <Link className="section-link" href="/kalkulacky">Všechny kalkulačky →</Link>
          </div>
          <div className="kalk-grid">
            {kalkulacky.map((k, i) => (
              <Link key={i} className="kalk-card" href={k.href}>
                <span className="kalk-icon">{k.icon}</span>
                <div className="kalk-tag">{k.tag}</div>
                <div className="kalk-title">{k.title}</div>
                <div className="kalk-desc">{k.desc}</div>
                <div className="kalk-arrow">Spustit →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SEKCE NÁVODY */}
      <div className="wrap">
        <div className="section">
          <div className="section-header">
            <span className="section-label">Návody krok za krokem</span>
            <Link className="section-link" href="/navody">Všechny návody →</Link>
          </div>
          <div className="nav-grid">
            {navody.map((n, i) => (
              <Link key={i} className="nav-card" href={n.href}>
                <div className="nav-top">
                  <span className="kalk-tag">{n.tag}</span>
                  <span className="nav-time">⏱ {n.time}</span>
                </div>
                <div className="nav-title">{n.title}</div>
                <div className="nav-desc">{n.desc}</div>
                <div className="nav-arrow">Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS STYLY KONKRÉTNÍ PRO HOMEPAGE */}
      <style jsx>{`
        .hero { padding: 72px 0 52px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; border-bottom: 1px solid var(--border); }
        .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 18px; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: clamp(38px, 5vw, 60px); line-height: 1.06; letter-spacing: -0.01em; }
        .h1 em { font-style: italic; color: var(--muted); }
        .hero-desc { font-size: 17px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 28px; }
        .btn-row { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn-primary { display: inline-flex; align-items: center; height: 42px; padding: 0 20px; border-radius: 4px; background: var(--text); color: #fff; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; }
        .btn-ghost { display: inline-flex; align-items: center; height: 42px; padding: 0 20px; border-radius: 4px; border: 1px solid var(--border); color: var(--text); font-size: 12px; font-weight: 600; text-transform: uppercase; text-decoration: none; }
        .section { padding: 52px 0; }
        .section-header { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 24px; }
        .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .section-link { font-size: 12px; font-weight: 500; color: var(--muted); text-decoration: none; }
        .kalk-grid, .nav-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .kalk-card, .nav-card { border: 1px solid var(--border); border-radius: 12px; padding: 22px; background: #fff; text-decoration: none; color: inherit; transition: all 150ms; }
        .kalk-card:hover, .nav-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .kalk-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .kalk-tag { font-size: 10px; font-weight: 600; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
        .kalk-title, .nav-title { font-family: 'DM Serif Display', serif; font-size: 18px; margin-bottom: 6px; }
        .kalk-desc, .nav-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5; }
        .nav-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .nav-time { font-size: 10px; color: var(--muted); }
        .kalk-arrow, .nav-arrow { margin-top: 14px; font-size: 12px; font-weight: 600; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; gap: 24px; }
          .kalk-grid, .nav-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .kalk-grid, .nav-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

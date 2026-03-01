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

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingBottom: "100px" }}>
      <style>{`
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        .hero { padding: 72px 0 52px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; border-bottom: 1px solid rgba(15,15,14,0.1); }
        .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #78776e; margin-bottom: 18px; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: clamp(38px, 5vw, 60px); line-height: 1.06; color: #0f0f0e; }
        .h1 em { font-style: italic; color: #78776e; }
        .hero-desc { font-size: 17px; line-height: 1.65; color: #78776e; font-weight: 300; margin-bottom: 28px; }
        .section { padding: 52px 0 0; }
        .section-header { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid rgba(15,15,14,0.1); padding-bottom: 12px; margin-bottom: 24px; }
        .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #78776e; }
        .kalk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .kalk-card { border: 1px solid rgba(15,15,14,0.1); border-radius: 12px; padding: 20px 22px; background: #fff; text-decoration: none; color: inherit; transition: all 150ms; display: block; }
        .kalk-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .kalk-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .kalk-tag { font-size: 10px; font-weight: 600; text-transform: uppercase; color: #78776e; margin-bottom: 6px; }
        .kalk-title { font-family: 'DM Serif Display', serif; font-size: 16px; line-height: 1.25; margin-bottom: 5px; color: #0f0f0e; }
        .kalk-desc { font-size: 13px; line-height: 1.5; color: #78776e; font-weight: 300; }
        .kalk-arrow { margin-top: 14px; font-size: 12px; font-weight: 600; color: #0f0f0e; }
        @media (max-width: 900px) { .hero { grid-template-columns: 1fr; padding: 40px 0; } .kalk-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .kalk-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="wrap">
        <header className="hero">
          <div>
            <div className="eyebrow">Praktický průvodce domácností</div>
            <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
          </div>
          <div>
            <p className="hero-desc">Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu.</p>
          </div>
        </header>

        <section className="section">
          <div className="section-header">
            <span className="section-label">Kalkulačky materiálu</span>
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
        </section>
      </div>
    </div>
  );
}

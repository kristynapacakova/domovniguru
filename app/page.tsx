"use client";
import React from "react";
import Link from "next/link";

export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", tag: "Kalkulačka", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", tag: "Kalkulačka", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", tag: "Kalkulačka", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" }
  ];

  return (
    <div className="dg">
      <div className="wrap">
        <header className="hero">
          <div>
            <div className="eyebrow">Praktický průvodce domácností</div>
            <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
          </div>
          <div>
            <p className="hero-desc">Kalkulačky na materiál a návody krok za krokem.</p>
          </div>
        </header>

        <section className="section">
          <div className="section-header">
            <span className="section-label">Oblíbené kalkulačky</span>
          </div>
          <div className="kalk-grid">
            {kalkulacky.map((k, i) => (
              <Link key={i} className="kalk-card" href={k.href}>
                <span className="kalk-icon">{k.icon}</span>
                <div className="kalk-title">{k.title}</div>
                <div className="kalk-desc">{k.desc}</div>
                <div className="kalk-arrow">Spustit →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .hero { padding: 80px 0 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; border-bottom: 1px solid var(--border); }
        .eyebrow { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; letter-spacing: 0.1em; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: 56px; line-height: 1.1; }
        .h1 em { color: var(--muted); }
        .hero-desc { font-size: 18px; color: var(--muted); max-width: 400px; }
        .section { padding: 60px 0; }
        .section-header { margin-bottom: 30px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
        .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--muted); }
        .kalk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .kalk-card { background: white; border: 1px solid var(--border); padding: 24px; border-radius: 12px; text-decoration: none; color: inherit; transition: 0.2s; }
        .kalk-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .kalk-icon { font-size: 32px; display: block; margin-bottom: 15px; }
        .kalk-title { font-family: 'DM Serif Display', serif; font-size: 20px; margin-bottom: 8px; }
        .kalk-desc { font-size: 14px; color: var(--muted); line-height: 1.5; }
        .kalk-arrow { margin-top: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
        @media (max-width: 800px) { .hero, .kalk-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

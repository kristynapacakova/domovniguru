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
    <div className="main-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        
        .main-wrapper { 
          font-family: 'DM Sans', sans-serif; 
          background: #fafaf8; 
          color: #0f0f0e; 
          min-height: 100vh;
        }

        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        
        .hero { 
          padding: 80px 0 60px; 
          display: grid; 
          grid-template-columns: 1.2fr 0.8fr; 
          gap: 60px; 
          align-items: end; 
          border-bottom: 1px solid rgba(15,15,14,0.1); 
        }

        .eyebrow { 
          font-size: 11px; 
          font-weight: 600; 
          letter-spacing: 0.12em; 
          text-transform: uppercase; 
          color: #78776e; 
          margin-bottom: 20px; 
        }

        .h1 { 
          font-family: 'DM Serif Display', serif; 
          font-size: clamp(40px, 6vw, 64px); 
          line-height: 1.05; 
          margin: 0;
        }

        .h1 em { font-style: italic; color: #78776e; }

        .hero-desc { 
          font-size: 18px; 
          line-height: 1.6; 
          color: #78776e; 
          margin-bottom: 30px; 
        }

        .section { padding: 60px 0; }
        
        .section-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: baseline; 
          border-bottom: 1px solid rgba(15,15,14,0.1); 
          padding-bottom: 15px; 
          margin-bottom: 30px; 
        }

        .section-label { 
          font-size: 11px; 
          font-weight: 600; 
          text-transform: uppercase; 
          letter-spacing: 0.1em; 
          color: #78776e; 
        }

        .kalk-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 20px; 
        }

        .kalk-card { 
          background: #ffffff; 
          border: 1px solid rgba(15,15,14,0.1); 
          border-radius: 16px; 
          padding: 28px; 
          text-decoration: none; 
          color: inherit; 
          transition: all 0.3s ease;
        }

        .kalk-card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 12px 30px rgba(0,0,0,0.06); 
          border-color: rgba(15,15,14,0.2);
        }

        .kalk-icon { font-size: 32px; display: block; margin-bottom: 20px; }
        .kalk-tag { font-size: 10px; font-weight: 600; text-transform: uppercase; color: #78776e; margin-bottom: 8px; }
        .kalk-title { font-family: 'DM Serif Display', serif; font-size: 19px; margin-bottom: 10px; }
        .kalk-desc { font-size: 14px; line-height: 1.5; color: #78776e; }
        .kalk-arrow { margin-top: 20px; font-size: 13px; font-weight: 600; border-top: 1px solid rgba(15,15,14,0.05); padding-top: 15px; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding: 60px 0 40px; }
          .kalk-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .kalk-grid { grid-template-columns: 1fr; }
        }
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
                <div className="kalk-arrow">Spustit výpočet →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

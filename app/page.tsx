"use client";
import React from "react";
import Link from "next/link";

export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad.", href: "/kalkulacky/kolik-dlazby" }
  ];

  return (
    <div className="wrap">
      <header style={{ padding: '80px 0 40px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>
          Praktický průvodce domácností
        </div>
        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '56px', lineHeight: '1.1' }}>
          Méně přemýšlení,<br /><span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>více hotovo.</span>
        </h1>
      </header>

      <section style={{ padding: '60px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {kalkulacky.map((k, i) => (
            <Link key={i} href={k.href} style={{ background: 'white', border: '1px solid var(--border)', padding: '24px', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '15px' }}>{k.icon}</span>
              <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '20px', marginBottom: '8px' }}>{k.title}</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>{k.desc}</div>
              <div style={{ marginTop: '20px', fontSize: '12px', fontWeight: 600 }}>Spustit →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

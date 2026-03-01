"use client";
import React from "react";

// Definice barev a ikon
const CAT_DATA = {
  malovani: { n: "Malování", i: "🎨", c: "#f5f0e8" },
  elektrika: { n: "Elektrika", i: "⚡", c: "#eef2f8" },
  zahrada: { n: "Zahrada", i: "🌿", c: "#edf5ee" },
  stehovani: { n: "Stěhování", i: "🏠", c: "#f5f0f5" },
  "sezonni-udrzba": { n: "Údržba", i: "❄️", c: "#f5f5f4" }
};

export default function CategoryPage({ params }) {
  // Tady je ten trik: Next.js 15 vyžaduje React.use(), 
  // ale my to obalíme tak, aby to nespadlo, i kdyby to bylo prázdné.
  const p = React.use(params);
  const s = p?.slug || "malovani";
  const d = CAT_DATA[s] || CAT_DATA.malovani;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fafaf9', minHeight: '100vh' }}>
      {/* HLAVIČKA KATEGORIE */}
      <div style={{ 
        backgroundColor: d.c, 
        padding: '60px', 
        borderRadius: '32px', 
        border: '1px solid #e7e5e4',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '10px' }}>{d.i}</div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '0' }}>{d.n}</h1>
        <p style={{ color: '#78716c', marginTop: '12px' }}>Průvodce pro váš domov</p>
      </div>

      {/* SEZNAM ČLÁNKŮ */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e7e5e4' }}>
          <h2 style={{ marginTop: 0 }}>Články pro sekci {d.n}</h2>
          <p>Tady se brzy objeví vaše první návody.</p>
          <hr style={{ margin: '30px 0', border: 0, borderTop: '1px solid #eee' }} />
          <a href="/blog" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>
            ← Zpět na všechny články
          </a>
        </div>
      </div>
    </div>
  );
}

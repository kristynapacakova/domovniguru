"use client";
import React from "react";

// 1. Definice typů pro TypeScript (tohle mu chybělo)
type Props = {
  params: Promise<{ slug: string }>;
};

const CAT_DATA: Record<string, { n: string; i: string; c: string }> = {
  malovani: { n: "Malování", i: "🎨", c: "#f5f0e8" },
  elektrika: { n: "Elektrika", i: "⚡", c: "#eef2f8" },
  zahrada: { n: "Zahrada", i: "🌿", c: "#edf5ee" },
  stehovani: { n: "Stěhování", i: "🏠", c: "#f5f0f5" },
  "sezonni-udrzba": { n: "Údržba", i: "❄️", c: "#f5f5f4" }
};

export default function CategoryPage({ params }: Props) {
  // 2. Rozbalení parametrů pomocí React.use
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const d = CAT_DATA[slug] || CAT_DATA.malovani;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fafaf9', minHeight: '100vh' }}>
      <div style={{ 
        backgroundColor: d.c, 
        padding: '60px', 
        borderRadius: '32px', 
        border: '1px solid #e7e5e4',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '10px' }}>{d.i}</div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '0', color: '#1c1917' }}>{d.n}</h1>
        <p style={{ color: '#78716c', marginTop: '12px', fontSize: '18px' }}>Průvodce a tipy pro váš domov.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '24px', 
          border: '1px solid #e7e5e4'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', marginTop: 0 }}>Články v této kategorii</h2>
          <p>Aktuálně připravujeme návody pro sekci <strong>{d.n}</strong>.</p>
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
             <a href="/blog" style={{ color: '#1c1917', fontWeight: '700', textDecoration: 'none' }}>
               ← Zpět na přehled blogu
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { use as useReact } from "react";

const CATEGORIES = {
  malovani: { title: "Malování", icon: "🎨", color: "#f5f0e8" },
  elektrika: { title: "Elektrika", icon: "⚡", color: "#eef2f8" },
  zahrada: { title: "Zahrada", icon: "🌿", color: "#edf5ee" },
  stehovani: { title: "Stěhování", icon: "🏠", color: "#f5f0f5" },
  "sezonni-udrzba": { title: "Údržba", icon: "❄️", color: "#f5f5f4" }
};

export default function CategoryPage({ params }) {
  // Bezpečné rozbalení parametrů pro Next.js 15
  const resolvedParams = useReact(params);
  const slug = resolvedParams?.slug || "malovani";
  const cat = CATEGORIES[slug] || CATEGORIES.malovani;

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fafaf9', minHeight: '100vh' }}>
      <div style={{ 
        backgroundColor: cat.color, 
        padding: '60px', 
        borderRadius: '32px', 
        border: '1px solid #e7e5e4',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>{cat.icon}</div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '0', color: '#1c1917' }}>{cat.title}</h1>
        <p style={{ color: '#78716c', marginTop: '12px', fontSize: '18px' }}>Průvodce a tipy pro váš domov.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Články v této kategorii</h2>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '24px', 
          border: '1px solid #e7e5e4',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
        }}>
          <p style={{ fontSize: '16px', color: '#444' }}>Aktuálně pro vás připravujeme ty nejlepší návody pro sekci <strong>{cat.title}</strong>.</p>
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
             <a href="/blog" style={{ 
               color: '#1c1917', 
               fontWeight: '700', 
               textDecoration: 'none',
               display: 'inline-flex',
               alignItems: 'center',
               gap: '8px'
             }}>
               ← Zpět na všechny články
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}

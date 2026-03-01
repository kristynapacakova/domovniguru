"use client";
import React, { use } from "react";

const CATEGORIES = {
  malovani: { title: "Malování", icon: "🎨", color: "#f5f0e8" },
  elektrika: { title: "Elektrika", icon: "⚡", color: "#eef2f8" },
  zahrada: { title: "Zahrada", icon: "🌿", color: "#edf5ee" },
  stehovani: { title: "Stěhování", icon: "🏠", color: "#f5f0f5" },
  "sezonni-udrzba": { title: "Údržba", icon: "❄️", color: "#f5f5f4" }
};

export default function CategoryPage({ params }) {
  // 1. Rozbalíme parametry pomocí use() - nutné pro Next.js 15
  const resolvedParams = use(params);
  
  // 2. Ošetření chyby: Pokud params ještě nejsou, nebo slug chybí
  if (!resolvedParams || !resolvedParams.slug) {
    return <div style={{ padding: '20px' }}>Načítám kategorii...</div>;
  }

  const slug = resolvedParams.slug;
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
        <h1 style={{ fontSize: '40px', fontWeight: '800', margin: '0' }}>{cat.title}</h1>
        <p style={{ color: '#78716c', marginTop: '10px' }}>Všechny články pro kategorii {cat.title}</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #e7e5e4' }}>
          <p>Zde se brzy objeví návody pro <strong>{cat.title}</strong>.</p>
          <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />
          <a href="/blog" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
            ← Zpět na přehled blogu
          </a>
        </div>
      </div>
    </div>
  );
}

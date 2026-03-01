"use client";
import React, { use } from "react";

// 1. Jednoduchá konfigurace kategorií
const CATEGORIES = {
  malovani: { title: "Malování", icon: "🎨", color: "#f5f0e8" },
  elektrika: { title: "Elektrika", icon: "⚡", color: "#eef2f8" },
  zahrada: { title: "Zahrada", icon: "🌿", color: "#edf5ee" },
  stehovani: { title: "Stěhování", icon: "🏠", color: "#f5f0f5" },
  "sezonni-udrzba": { title: "Údržba", icon: "❄️", color: "#f5f5f4" }
};

export default function CategoryPage({ params }) {
  // 2. Bezpečné získání slugu pro Next.js 15
  const resolvedParams = use(params);
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
        <h1 style={{ fontSize: '40px', fontWeight: '800', margin: '0' }}>{cat.title}</h1>
        <p style={{ color: '#78716c', marginTop: '10px' }}>Všechny články a návody pro tuto kategorii.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Články v této kategorii</h2>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '30px', 
          borderRadius: '24px', 
          border: '1px solid #e7e5e4' 
        }}>
          <p>Tady se brzy objeví seznam článků pro kategorii <strong>{cat.title}</strong>.</p>
          <a href="/blog" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>← Zpět na blog</a>
        </div>
      </div>
    </div>
  );
}

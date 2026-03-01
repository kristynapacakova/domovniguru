"use client";
import React from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORIES: Record<string, { n: string; i: string; c: string; d: string }> = {
  malovani: { n: "Malování & barvy", i: "🎨", c: "#fdf8f3", d: "Kalkulačky na materiál, návody krok za krokem a checklisty pro každou stěnu." },
  elektrika: { n: "Elektrika & osvětlení", i: "⚡", c: "#f3f7fd", d: "Bezpečné postupy pro domácí opravy a vylepšení elektroinstalace." },
  zahrada: { n: "Zahrada & venkov", i: "🌿", c: "#f3fdf4", d: "Vše pro váš zelený kout, od trávníku po zahradní stavby." },
  stehovani: { n: "Stěhování", i: "🏠", c: "#fbf3fd", d: "Plánování bez stresu a efektivní proměna vašeho bydlení." }
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CATEGORIES[slug] || CATEGORIES.malovani;

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '100px 20px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Navigace */}
        <nav style={{ display: 'flex', gap: '10px', fontSize: '11px', fontWeight: 'bold', color: '#ccc', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '50px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Domů</Link> / 
          <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link> / 
          <span style={{ color: '#000' }}>{cfg.n}</span>
        </nav>

        {/* Hero Karta - PŘESNĚ CLAUDE DESIGN */}
        <header style={{ 
          backgroundColor: cfg.c, 
          borderRadius: '50px', 
          padding: '80px 60px', 
          marginBottom: '60px', 
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.02)'
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '20px' }}>Kategorie</span>
            <h1 style={{ fontSize: '70px', fontWeight: '900', margin: '0 0 30px 0', letterSpacing: '-4px', lineHeight: '0.9', color: '#1c1917' }}>
              {cfg.i} <br /> {cfg.n}
            </h1>
            <p style={{ fontSize: '22px', color: 'rgba(0,0,0,0.5)', maxWidth: '550px', lineHeight: '1.4', fontWeight: '500' }}>
              {cfg.d}
            </p>
          </div>
          <div style={{ position: 'absolute', right: '-50px', bottom: '-50px', fontSize: '300px', opacity: '0.04', transform: 'rotate(15deg)', pointerEvents: 'none' }}>
            {cfg.i}
          </div>
        </header>

        {/* Články - Čisté bílé karty */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ 
              backgroundColor: '#fff', 
              border: '1px solid #f0f0f0', 
              borderRadius: '40px', 
              padding: '40px',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '15px', backgroundColor: '#f8f8f8', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '20px' }}>{cfg.i}</div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#ccc', textTransform: 'uppercase', letterSpacing: '1px' }}>Návod • 10 min</span>
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 15px 0', color: '#1c1917' }}>Jak připravit podklad</h3>
              <p style={{ color: '#aaa', fontSize: '17px', lineHeight: '1.5', margin: '0 0 30px 0' }}>Vše, co potřebujete vědět, než se do toho pustíte po hlavě.</p>
              <div style={{ fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Přečíst návod →</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

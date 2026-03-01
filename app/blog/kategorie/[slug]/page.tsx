"use client";
import React, { use } from "react";

// Konfigurace kategorií
const CAT_CONFIG = {
  malovani:     { label:"Malování & barvy",         icon:"🎨", desc:"Vše o barvách a technikách.", color:"#f5f0e8" },
  elektrika:    { label:"Elektrika & osvětlení",     icon:"⚡", desc:"Bezpečná práce s elektřinou.", color:"#eef2f8" },
  zahrada:      { label:"Zahrada & terasa",           icon:"🌿", desc:"Péče o váš venkovní prostor.", color:"#edf5ee" },
  stehovani:    { label:"Stěhování & rekonstrukce",  icon:"🏠", desc:"Jak zvládnout změny v bydlení.", color:"#f5f0f5" },
  "sezonni-udrzba": { label:"Sezónní údržba",        icon:"❄️", desc:"Příprava domova na roční období.", color:"#f5f5f4" }
};

// Ukázkové články
const SEZNAM_CLANKU = [
  { id: 1, title: "Jak vybrat správný odstín", desc: "Barvy ovlivňují spánek i náladu.", read: "4 min", slug: "barvy-odstiny" },
  { id: 2, title: "Penetrace: Proč ji nevynechat?", desc: "Nejčastější chyba při malování.", read: "3 min", slug: "penetrace" }
];

export default function CategoryPage({ params }) {
  // Rozbalení parametrů (slug) z adresy
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug || "malovani";
  
  // Výběr správné konfigurace podle slugu
  const cfg = CAT_CONFIG[slug] || CAT_CONFIG.malovani;

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-[#1c1917] p-8">
      <style jsx>{`
        .cat-header { background: ${cfg.color}; border: 1px solid #e7e5e4; border-radius: 32px; padding: 40px; margin-bottom: 40px; }
        .articles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .article-card { background: white; border: 1px solid #e7e5e4; border-radius: 20px; padding: 24px; text-decoration: none; color: inherit; }
        @media (max-width: 768px) { .articles-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <header className="cat-header">
          <div className="text-xs font-bold uppercase opacity-50 mb-2">Kategorie</div>
          <h1 className="text-4xl font-extrabold mb-4">{cfg.icon} {cfg.label}</h1>
          <p className="text-gray-600">{cfg.desc}</p>
        </header>

        <h2 className="text-xl font-bold mb-6">Články v kategorii</h2>
        
        <div className="articles-grid">
          {SEZNAM_CLANKU.map((clanek) => (
            <a key={clanek.id} className="article-card" href={`/blog/${clanek.slug}`}>
              <h3 className="text-xl font-bold mb-2">{clanek.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{clanek.desc}</p>
              <div className="font-bold text-sm">Číst návod →</div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/blog" className="text-sm font-bold text-gray-400 no-underline hover:text-black">
            ← Zpět na přehled blogu
          </a>
        </div>
      </div>
    </div>
  );
}

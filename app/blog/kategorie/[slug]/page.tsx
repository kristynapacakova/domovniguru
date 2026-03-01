"use client";
import React from "react";

// app/blog/kategorie/[slug]/page.tsx

const CAT_CONFIG = {
  malovani:     { label:"Malování & barvy",         icon:"🎨", desc:"Jak malovat, jakou barvu vybrat a jak opravit chyby. Průvodce pro každý povrch i každého kutila.", color:"#f5f0e8" },
  elektrika:    { label:"Elektrika & osvětlení",     icon:"⚡", desc:"Zásuvky, jističe, LED žárovky a chytrá domácnost. Bezpečné postupy i pro laiky.", color:"#eef2f8" },
  zahrada:      { label:"Zahrada & terasa",           icon:"🌿", desc:"Trávník, záhony, pergola, závlaha. Jak mít zahradu v pořádku celý rok.", color:"#edf5ee" },
  stehovani:    { label:"Stěhování & rekonstrukce",  icon:"🏠", desc:"Od výběru firmy po rekonstrukci koupelny. Vše, co potřebuješ vědět před i po stěhování.", color:"#f5f0f5" },
  "sezonni-udrzba": { label:"Sezónní údržba",        icon:"❄️", desc:"Příprava na zimu i na léto. Checklisty, návody a tipy pro každé roční období.", color:"#f5f5f4" }
};

const ARTICLES = [
  { id:1, title: "Jak vybrat správný odstín do ložnice", desc: "Barvy ovlivňují spánek i náladu. Prozradíme, které tlumí a které budí.", read: "4 min", slug: "barvy-do-loznice" },
  { id:2, title: "Penetrace: Proč ji nikdy nevynechat?", desc: "Nejčastější chyba při malování. Jak ušetřit za barvu a zajistit, aby držela.", read: "3 min", slug: "penetrace-navod" },
  { id:3, title: "Jak vymalovat strop bez šmouh", desc: "Technika, kterou používají profíci. Správný směr i váleček.", read: "6 min", slug: "jak-malovat-strop" },
  { id:4, title: "Oprava děr v sádrokartonu", desc: "Rychlý návod na tmelení a broušení. Za hodinu nebude nic poznat.", read: "5 min", slug: "oprava-sadrokartonu" },
];

export default function CategoryPage({ params }) {
  // Rozbalení parametrů z URL
  const slug = params?.slug || "malovani";
  const cfg = CAT_CONFIG[slug] || CAT_CONFIG.malovani;
  const OTHER_CATS = Object.entries(CAT_CONFIG).filter(([k]) => k !== slug);

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-[#1c1917]">
      <style jsx>{`
        .cat-container { max-width: 1000px; margin: 0 auto; padding: 60px 24px; }
        .cat-header { background: ${cfg.color}; border: 1px solid #e7e5e4; border-radius: 40px; padding: 60px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 64px; }
        .cat-title { font-size: 48px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 20px; }
        .cat-desc { font-size: 18px; color: #57534e; max-width: 500px; line-height: 1.6; }
        .articles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .article-card { background: white; border: 1px solid #e7e5e4; border-radius: 24px; padding: 40px; text-decoration: none; color: inherit; transition: all 0.2s; }
        .article-card:hover { border-color: #1c1917; transform: translateY(-2px); }
        .other-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; margin-top: 40px; }
        .other-card { background: white; border: 1px solid #e7e5e4; padding: 20px; border-radius: 20px; text-decoration: none; color: inherit; text-align: center; font-size: 13px; font-weight: 700; }
        @media (max-width: 768px) {
          .cat-header { flex-direction: column; text-align: center; padding: 40px 24px; }
          .articles-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cat-container">
        <header className="cat-header">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#78716c] mb-2">Kategorie</div>
            <h1 className="cat-title">{cfg.icon} {cfg.label}</h1>
            <p className="cat-desc">{cfg.desc}</p>
          </div>
          <div className="hidden md:block text-7xl opacity-20">{cfg.icon}</div>
        </header>

        <h2 className="text-xl font-bold mb-8 pb-4 border-b">Články v této kategorii</h2>
        <div className="articles-grid">
          {ARTICLES.map((a) => (
            <a key={a.id} className="article-card" href={`/blog/${a.slug}`}>
              <div className="text-sm font-bold text-[#a8a29e] mb-4">NÁVOD</div>
              <div className="text-2xl font-bold mb-3">{a.title}</div>
              <div className="text-gray-600 mb-6">{a.desc}</div>
              <div className="flex justify-between items-center text-sm font-bold">
                <span>⏱ {a.read}</span>
                <span>Číst článek →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 p-12 bg-white border border-[#e7e5e4] rounded-[32px]">
          <h3 className="text-center font-bold text-[#a8a29e] uppercase tracking-widest text-xs mb-8">Kam dál?</h3>
          <div className="other-grid">
            {OTHER_CATS.map(([key, c]) => (
              <a key={key} className="other-card hover:border-[#1c1917]" href={`/blog/kategorie/${key}`}>
                <span className="block text-xl mb-2">{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
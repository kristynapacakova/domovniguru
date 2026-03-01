"use client";
import React from "react";
import Link from "next/link";

export default function BlogHub() {
  const clanky = [
    { 
      icon: "🎨", 
      cat: "MALOVÁNÍ", 
      title: "Jak malovat zeď – kompletní průvodce pro začátečníky", 
      desc: "Krok za krokem: příprava podkladu, nátěr, výběr barvy a nářadí.", 
      time: "5 min čtení" 
    },
    { 
      icon: "💡", 
      cat: "ELEKTRIKA", 
      title: "LED vs. žárovky – co se skutečně vyplatí?", 
      desc: "Srovnání spotřeby, životnosti a ceny. Kdy se vyplatí vyměnit celou domácnost?", 
      time: "4 min čtení" 
    },
    { 
      icon: "🌳", 
      cat: "ZAHRADA", 
      title: "Jak připravit zahradu na jaro – kompletní checklist", 
      desc: "Co udělat v březnu a dubnu, aby vaše zahrada v létě vypadala skvěle.", 
      time: "6 min čtení" 
    },
    { 
      icon: "📦", 
      cat: "STĚHOVÁNÍ", 
      title: "10 tipů pro bezstresové stěhování", 
      desc: "Jak zabalit, co zařídit dopředu a jak neztratit nervy při přesunu do nového.", 
      time: "7 min čtení" 
    },
    { 
      icon: "🛠️", 
      cat: "REKONSTRUKCE", 
      title: "Jak na rekonstrukci koupelny a nezbláznit se", 
      desc: "Plánování, rozpočet a nejčastější chyby, kterým se vyhnout.", 
      time: "8 min čtení" 
    },
    { 
      icon: "☀️", 
      cat: "ÚDRŽBA", 
      title: "Letní údržba klimatizace a větrání", 
      desc: "Jak zajistit zdravý vzduch a nízké náklady na chlazení během horkých dnů.", 
      time: "5 min čtení" 
    },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>
            Čtení pro majitele domů
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>
            Blog
          </h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300, lineHeight: 1.6 }}>
            Zajímavosti, srovnání a rady, které vám pomohou lépe rozumět vaší domácnosti a ušetřit čas i peníze.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", paddingBottom: "80px" }}>
          {clanky.map((b, i) => (
            <Link key={i} href="#" className="blog-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "32px" }}>{b.icon}</span>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>{b.cat}</span>
              </div>
              
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", margin: "0 0 12px 0", lineHeight: 1.25 }}>
                {b.title}
              </div>
              
              <p style={{ fontSize: "14px", color: "#666", margin: "0 0 20px 0", fontWeight: 300, lineHeight: 1.5, flexGrow: 1 }}>
                {b.desc}
              </p>
              
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: "12px", paddingTop: "20px", borderTop: "1px solid #f5f5f0" }}>
                <span style={{ color: "#888" }}>⏱ {b.time}</span>
                <span style={{ color: "#111" }}>Číst článek →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .blog-card { 
          background: #fff; 
          border: 1px solid #e5e5e0; 
          border-radius: 12px; 
          padding: 30px; 
          text-decoration: none; 
          color: inherit; 
          transition: 0.3s ease; 
          display: flex; 
          flex-direction: column; 
        }
        .blog-card:hover { 
          border-color: #111; 
          transform: translateY(-4px); 
          box-shadow: 0 12px 30px rgba(0,0,0,0.06); 
        }
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function JarniChecklistObsahly() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  
  const sekce = [
    {
      titul: "Exteriér a plášť domu",
      ukoly: [
        "Vyčistit okapy a dešťové svody (kontrola průchodnosti kolen)",
        "Vizuální kontrola střešní krytiny a oplechování komína",
        "Kontrola fasády (hledání prasklin po mrazech a výskytu řas)",
        "Kontrola a vyčištění venkovních parapetů",
        "Prohlídka soklu domu a kontrola případné vzlínající vlhkosti",
        "Kontrola stavu nátěru dřevěných prvků (podbití, štíty)"
      ]
    },
    {
      titul: "Okna a dveře",
      ukoly: [
        "Umytí skel, rámů a pročištění odtokových drážek v rámu",
        "Přepnutí kování na letní režim (snížení přítlaku)",
        "Promazání pantů a kování silikonovým olejem",
        "Kontrola stavu těsnění (případné ošetření glycerinem)",
        "Instalace nebo oprava sítí proti hmyzu"
      ]
    },
    {
      titul: "Zahrada a okolí",
      ukoly: [
        "Vymést pavučiny z venkovního osvětlení a čidel",
        "Odkonzervování a test venkovního nezámrzného ventilu",
        "Revize zahradní techniky (výměna oleje v sekačce, nabití aku)",
        "Kontrola a promazání pojezdů vjezdové brány a garážových vrat",
        "Vysokotlaké čištění terasy a příjezdové cesty",
        "Kontrola stavu zahradního nábytku po zimě"
      ]
    },
    {
      titul: "Technické zázemí",
      ukoly: [
        "Výměna nebo vyčištění filtrů v rekuperaci / klimatizaci",
        "Kontrola tlaku v expanzní nádobě a topném systému",
        "Pořádné vyvětrání sklepa a kontrola plísní v rozích",
        "Vizuální kontrola rozvodů vody a odpadů (hledání průsaků)",
        "Test funkčnosti jističů a proudového chrániče (test tlačítko)"
      ]
    }
  ];

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "850px", margin: "0 auto", padding: "0 32px" }}>
        
        <div className="no-print" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <Link href="/checklisty" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600 }}>← ZPĚT NA SEZNAM</Link>
          <button 
            onClick={() => window.print()}
            style={{ background: "#111", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, fontSize: "13px" }}
          >
            🖨️ Vytisknout / PDF
          </button>
        </div>

        <article style={{ background: "#fff", padding: "60px", borderRadius: "8px", border: "1px solid #e5e5e0", boxShadow: "0 10px 40px rgba(0,0,0,0.02)" }}>
          <header style={{ marginBottom: "50px", textAlign: "center", borderBottom: "2px solid #111", paddingBottom: "30px" }}>
            <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "48px", margin: "0 0 10px 0" }}>Velká jarní údržba</h1>
            <p style={{ color: "#888", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px", margin: 0 }}>
              DomovníGuru.cz — Kompletní technický audit domu
            </p>
          </header>

          {sekce.map((s, sIdx) => (
            <div key={sIdx} style={{ marginBottom: "40px" }}>
              <h3 style={{ fontFamily: "DM Serif Display, serif", fontSize: "24px", color: "#111", borderBottom: "1px solid #eee", paddingBottom: "10px", marginBottom: "20px" }}>
                {s.titul}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {s.ukoly.map((u, uIdx) => {
                  const id = `${sIdx}-${uIdx}`;
                  return (
                    <div 
                      key={id} 
                      onClick={() => toggle(id)}
                      style={{ display: "flex", alignItems: "flex-start", gap: "15px", cursor: "pointer" }}
                    >
                      <div style={{ 
                        minWidth: "20px", height: "20px", border: "1.5px solid #111", marginTop: "3px",
                        background: checked[id] ? "#111" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px"
                      }}>
                        {checked[id] && "✓"}
                      </div>
                      <span style={{ 
                        fontSize: "16px", 
                        color: checked[id] ? "#aaa" : "#333", 
                        textDecoration: checked[id] ? "line-through" : "none",
                        lineHeight: "1.4"
                      }}>
                        {u}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <footer style={{ marginTop: "60px", paddingTop: "30px", borderTop: "1px solid #eee", fontSize: "12px", color: "#aaa", textAlign: "center" }}>
            Poznámky: ..........................................................................................................................................................
          </footer>
        </article>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          article { border: none !important; padding: 0 !important; box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
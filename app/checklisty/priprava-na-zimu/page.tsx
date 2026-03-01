"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ZimniChecklistVylepseny() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  
  const sekce = [
    {
      titul: "Voda a instalace (Kritické)",
      ukoly: [
        "Vypustit vodu z venkovních kohoutů a nechat je otevřené",
        "Uklidit zahradní hadice do nemrznoucího prostoru",
        "Izolovat trubky v nevytápěných částech domu (sklep, půda)",
        "Kontrola a vyčištění filtrů u hlavního uzávěru vody",
        "Zkontrolovat, zda nezamrzá odtok kondenzátu u kotle"
      ]
    },
    {
      titul: "Topení a teplo",
      ukoly: [
        "Odvzdušnit všechny radiátory v celém domě",
        "Kontrola tlaku v expanzní nádobě (měl by být v zeleném poli)",
        "Profesionální revize / servis kotle nebo tepelného čerpadla",
        "Výměna baterií v pokojovém termostatu",
        "Vyčištění komína a revize spalinových cest před sezónou"
      ]
    },
    {
      titul: "Izolace a průvany",
      ukoly: [
        "Přepnutí kování oken na zimní režim (zvýšení přítlaku)",
        "Kontrola těsnění u vchodových a balkonových dveří",
        "Instalace kartáčů nebo lišt pod dveře, kudy táhne",
        "Zakrytí / zaizolování sklepních okének",
        "Kontrola izolace podkroví (hledání míst, kudy uniká teplo)"
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
            <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "48px", margin: "0 0 10px 0" }}>Příprava na zimu ❄️</h1>
            <p style={{ color: "#888", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px", margin: 0 }}>
              DomovníGuru.cz — Aby vás mráz nepřekvapil
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

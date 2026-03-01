"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function StehovaniVylepsene() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  
  const sekce = [
    {
      titul: "1. Měsíc předem (Velké plánování)",
      ukoly: [
        "Potvrdit termín se stěhovací firmou (nebo zajistit auto a partu)",
        "Třídění věcí: Vyhazování, prodej nebo darování (méně věcí = levnější stěhování)",
        "Nahlásit výpověď u poskytovatelů internetu, TV a pevných linek",
        "Zajistit dostatek krabic (cca 20-30 na dospělou osobu), lepicích pásek a bublinek",
        "Změřit dveře, chodby a výtah v obou bytech pro velké kusy nábytku",
        "Začít jíst zásoby z mrazáku (nechcete stěhovat 10 kg mraženého špenátu)"
      ]
    },
    {
      titul: "2. Administrativa a papírování",
      ukoly: [
        "Změna doručovací adresy v bance, pojišťovně a u lékaře",
        "Zřízení dosílky na České poště (pro jistotu na 3 měsíce)",
        "Příprava předávacího protokolu (stavy vody, tepla, elektřiny a plynu)",
        "Nahlášení změny trvalého bydliště na úřadě (pokud je to finální)",
        "Informování zaměstnavatele, školy nebo školky o změně adresy"
      ]
    },
    {
      titul: "3. Týden před stěhováním",
      ukoly: [
        "Sbalit 'Krabici první noci' (hygiena, pyžamo, ložní prádlo, základní nádobí)",
        "Sbalit samostatnou složku se všemi smlouvami, pasy a cennostmi",
        "Rozmrazit a vyčistit lednici a mrazák (aspoň 24h předem)",
        "Zajistit parkovací místo před domem pro stěhovací vůz",
        "Demontovat nábytek, který se nevejde do dveří nebo výtahu"
      ]
    },
    {
      titul: "4. Den D (V akci)",
      ukoly: [
        "Poslední vizuální kontrola: Skříně, šuplíky, sklep, půda",
        "Pořádně nafotit prázdný byt (pro případné spory o kauci)",
        "Vypnout hlavní uzávěry (pokud byt zůstane prázdný)",
        "V novém bytě: Výměna zámků u vchodových dveří (priorita č. 1)",
        "Polepit krabice názvy místností, do kterých patří (ušetříte si nošení)"
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
            <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "48px", margin: "0 0 10px 0" }}>Průvodce stěhováním 🏠</h1>
            <p style={{ color: "#888", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px", margin: 0 }}>
              DomovníGuru.cz — Bez stresu a zapomenutých krabic
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
            Vlastní poznámky: ..................................................................................................................................................
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